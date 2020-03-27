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
                src="/iframe/iframe.html"
                ref="iframe"
              ></iframe>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="editor-container">
              <v-editor @update-dom="updateDom" :template="template"></v-editor>
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
      current_module: "root",
      timer: null
    };
  },
  created() {},
  mounted() {
    window.addEventListener("message", this.handleIframeMessage);
  },
  methods: {
    fetchData() {
      getTemplate()
        .then(res => {
          this.template = res.data || {};
          this.updateDom(this.template, "root");
        })
        .catch(err => {
          console.log(err);
        });
    },
    postIframeMessage(data) {
      let iframeWin = this.$refs.iframe.contentWindow;
      iframeWin.postMessage(
        {
          cmd: "update",
          data: data
        },
        "*"
      );
    },
    handleIframeMessage(event) {
      console.log(event);
      let data = event.data || {};
      // 等iframe init 完成后再请求数据并传递tempalte
      if (data.cmd == "init") {
        this.fetchData();
      }
    },
    updateDom(template, current_module) {
      // 简单防抖
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let _template = this.filterData(template);
        this.postIframeMessage({ template: _template, current_module });
      }, 500);
    },
    filterData(template) {
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
