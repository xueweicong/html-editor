<template>
  <div class="v-input">
    <template v-if="option.type == 'input'">
      <el-input
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
      console.log(value);
      this.option.value = value;
      this.$emit("update-template");
    },
    onChange(value) {
      console.log(value);
      this.$emit("update-template");
    }
  }
};
</script>
<style scoped></style>
