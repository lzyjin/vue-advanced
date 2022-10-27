<template>
<!--  <check-box :checked="checked"></check-box>-->

  <!-- 에러 해결방법: props 대신 v-model을 사용해 데이터를 내려보자 -->
  <!-- slot과 마찬가지로 하위컴포넌트의 input의 데이터가 상위컴포넌트에서 관리된다 (장점) -->
  <!-- 작은 단위로 쪼개는 컴포넌트까지 관리할 수 있다. -->
  <check-box v-model="checked"></check-box>
</template>

<script>

import CheckBox from "./components/CheckBox";

export default {
  name: 'App',
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style>

</style>
