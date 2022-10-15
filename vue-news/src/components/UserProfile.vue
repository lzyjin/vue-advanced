<template>
  <div>
    <slot name="username"></slot>
    <slot name="karma"></slot>
    <slot name="about"></slot>
    <slot name="created"></slot>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    info: Object,
  },
}
</script>

<style scoped>

</style>
