<template>
  <div class="v-editor">
    <el-row>
      <el-col :span="24">
        <el-form
          class="form"
          ref="form"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="当前编辑模块">
            <el-select
              :value="current_module"
              @change="onModuleChange"
              placeholder="请选择当前编辑模块"
            >
              <el-option
                v-for="item in module_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <v-form
      ref="vForm"
      @update-template="updateTemplate"
      @switch-module="onModuleChange"
      :template="template.module"
      :current-module="current_module"
    ></v-form>
  </div>
</template>
<script>
import vForm from "@/components/vForm.vue";
export default {
  name: "vEditor",
  components: {
    vForm // 模块的form表单
  },
  props: {
    template: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      current_module: "root" // 选中模块
    };
  },
  computed: {
    module_options: function() {
      // 选中模块select的选项数组
      let options = [];
      let template_module = this.template.module || {};
      for (let key in template_module) {
        options.push({
          label: template_module[key].label,
          value: template_module[key].uid
        });
      }
      return options;
    }
  },
  created() {},
  mounted() {
    this.$on("switch-module", res => {
      // 监听父组件传过来更改当前模块的事件
      this.current_module = res;
    });
  },
  methods: {
    updateTemplate() {
      // 发送模板更新事件
      this.$emit("update-module", this.template, this.current_module);
    },
    onModuleChange(value) {
      // select 值变化回调
      this.current_module = value;
      this.$emit("switch-module", value);
    },
    switchModule(value) {
      this.current_module = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.v-editor {
  background-color: #fff;
  text-align: left;
}
</style>
