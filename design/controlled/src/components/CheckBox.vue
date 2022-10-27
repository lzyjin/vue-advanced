<template>
<!--  <input type="checkbox" v-model="checked">-->
  <!-- 화면에서 체크박스를 클릭하면 콘솔에 에러가 뜬다 -->
  <!--
    [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    Instead, use a data or computed property based on the prop's value. Prop being mutated: "checked"
  -->

  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  name: "CheckBox",
  // props: ['checked'],

  // input은
  // @input 이벤트
  // :value 값

  prop: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    }
  }
}
</script>

<style scoped>

</style>
