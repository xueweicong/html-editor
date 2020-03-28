<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <el-row :gutter="16">
          <el-col :span="12">
            <div class="iframe-container">
              <iframe
                class="iframe"
                frameborder="no"
                src="./iframe/iframe.html"
                ref="iframe"
              ></iframe>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="editor-container">
              <v-editor
                ref="vEditor"
                @update-module="updateModule"
                @switch-module="switchModule"
                :template="template"
              ></v-editor>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vEditor from "@/components/vEditor.vue";
import { getTemplate } from "@/api/template";
export default {
  name: "Home",
  components: {
    vEditor
  },
  data() {
    return {
      template: {},
      timer: null
    };
  },
  created() {},
  mounted() {
    window.addEventListener("message", this.handleIframeMessage); // 监听iframe消息
  },
  methods: {
    fetchData() {
      // 请求模板数据
      getTemplate()
        .then(res => {
          this.template = res.data || {};
          this.updateModule(this.template, "root");
        })
        .catch(err => {
          console.log(err);
        });
    },
    postIframeMessage(data) {
      // 向iframe发送消息
      let iframeWin = this.$refs.iframe.contentWindow;
      iframeWin.postMessage(data, "*");
    },
    handleIframeMessage(event) {
      // 处理iframe消息
      console.log(event);
      let data = event.data || {};
      // 等iframe init 完成后再请求数据并传递tempalte
      if (data.cmd == "init") {
        this.fetchData();
      } else if (data.cmd == "switchModule") {
        // 接送iframe焦点切换消息，并向vEditor发送事件
        this.$refs.vEditor.$emit("switch-module", data.data);
        // this.$refs.vEditor.switchModule(data.data);
      }
    },
    updateModule(template, current_module) {
      // 更新模板，发送消息，简单防抖
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let _template = this.filterData(template);
        this.postIframeMessage({
          cmd: "update",
          data: { template: _template, current_module }
        });
      }, 500);
    },
    switchModule(value) {
      // vEditor 切换模板事件
      this.postIframeMessage({
        cmd: "switch",
        data: value
      });
    },
    filterData(template) {
      // 去除模板与页面渲染的无关字段（如label、placeholder等）
      try {
        let result = {};
        let _module = template.module;
        for (let i in _module) {
          result[i] = {
            uid: _module[i].uid,
            parent_uid: _module[i].parent_uid,
            children: _module[i].children.map(item => item.value),
            options: (() => {
              let temp = {};
              for (let k in _module[i].options) {
                temp[k] =
                  _module[i].options[k].value ||
                  _module[i].options[k].default ||
                  "";
              }
              return temp;
            })()
          };
        }
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.container {
  padding: 16px;
  background-color: #eee;
}
.iframe-container {
  min-height: calc(100vh - 32px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  font-size: 0;
}
.iframe-container .iframe {
  width: 100%;
  height: calc(100vh - 48px);
}
.editor-container {
  min-height: calc(100vh - 32px);
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
}
</style>
