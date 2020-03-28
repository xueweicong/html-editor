<template>
  <div class="v-form">
    <h3>{{ template && currentModule && template[currentModule].label }}</h3>
    <el-form label-width="120px" label-position="left" class="clearfix">
      <template v-if="template">
        <template v-if="template[currentModule]">
          <template v-for="(item, index) in template[currentModule].options">
            <el-col :span="24" :key="index">
              <el-form-item
                :label="item.label"
                :required="item.required || false"
              >
                <v-input
                  :option.sync="item"
                  v-on="$listeners"
                  v-bind="$attrs"
                ></v-input>
              </el-form-item>
            </el-col>
          </template>
          <template
            v-if="
              template[currentModule].children &&
                template[currentModule].children.length
            "
          >
            <el-col :span="24">
              <el-form-item label="子模块">
                <div
                  class="link-box"
                  v-for="(item, index) in template[currentModule].children"
                  :key="index"
                >
                  <el-link
                    type="primary"
                    @click.native="chooseChildren(item)"
                    >{{ item.label }}</el-link
                  >
                </div>
              </el-form-item>
            </el-col>
          </template>
        </template>
      </template>
    </el-form>
  </div>
</template>
<script>
import vInput from "@/components/vInput";
export default {
  name: "vForm",
  components: {
    vInput
  },
  inheritAttrs: false,
  props: {
    template: {
      type: Object,
      default: () => {}
    },
    currentModule: {
      type: String,
      default: "root"
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    chooseChildren(item) {
      // 选中子模块，发送模板切换事件
      this.$emit("switch-module", item.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.link-box {
  margin: 0 20px 10px 0;
}
</style>
