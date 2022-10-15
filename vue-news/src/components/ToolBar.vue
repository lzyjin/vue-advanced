<template>
  <div class="header">
    <div class="nav">
      <router-link to="/news">news</router-link> |
      <router-link to="/ask">ask</router-link> |
      <router-link to="/jobs">jobs</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
  .header { background: pink; }
  .nav { display: flex; justify-content: center; align-items: center; color: #fff; }
  .nav a { display: inline-block; padding: 20px 30px; margin: 0 5px; color: #fff; text-decoration: none; }
  .nav a:hover,
  .nav a.router-link-active { color: #ff4769; text-decoration: underline; }
</style>
