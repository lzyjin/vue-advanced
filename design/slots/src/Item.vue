<template>
  <li>
    <!-- props 사용 -->
    <!--{{ propsdata }}-->

    <!-- slot 사용 -->
    <slot>
      <!--NOTE: 등록하는 곳에서 정의할 영역-->
      <!-- slot 태그가 사라지면서 {{ item }}만 들어감 -->
    </slot>
  </li>
</template>

<script>
export default {
  name: "Item",
  // props 사용
  // props: ['propsdata'],
}
</script>

<style scoped>

</style>
