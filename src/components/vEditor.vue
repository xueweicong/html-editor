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
              v-model="current_module"
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
      @switch-module="switchModule"
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
    vForm
  },
  props: {
    template: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      current_module: "root"
    };
  },
  computed: {
    module_options: function() {
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
  mounted() {},
  methods: {
    updateTemplate() {
      this.$emit("update-dom", this.template, this.current_module);
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
