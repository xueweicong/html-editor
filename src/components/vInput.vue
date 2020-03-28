<template>
  <div class="v-input">
    <template v-if="option.type == 'input'">
      <!-- input 类型 -->
      <el-input
        autosize
        type="textarea"
        @input="onInput"
        :disabled="option.disabled"
        :value="option.value"
        :placeholder="option.placeholder || ''"
        :prefix-icon="option.prefixIcon"
        :suffix-icon="option.suffixIcon"
      >
        <template slot="prepend" v-if="option.prepend">{{
          option.prepend
        }}</template>
        <template slot="append" v-if="option.append">{{
          option.append
        }}</template>
      </el-input>
    </template>
    <!-- 单选 类型 -->
    <template v-else-if="option.type == 'radio'">
      <el-radio-group v-model="option.value" @change="onChange">
        <el-radio
          v-for="item in option.options"
          :key="item.value"
          :label="item.value"
          >{{ item.label }}</el-radio
        >
      </el-radio-group>
    </template>
    <!-- 颜色 类型 -->
    <template v-else-if="option.type == 'color'">
      <el-color-picker
        v-model="option.value"
        @change="onChange"
      ></el-color-picker>
    </template>
  </div>
</template>
<script>
export default {
  name: "vInput",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {},
  mounted() {},
  methods: {
    onInput(value) {
      // input输入框的回调
      this.option.value = value;
      this.$emit("update-template");
    },
    onChange() {
      // radio、color类型值改变的回调
      this.$emit("update-template");
    }
  }
};
</script>
<style scoped></style>
