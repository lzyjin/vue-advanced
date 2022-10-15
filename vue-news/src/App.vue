<template>
  <div id="app">
    <tool-bar></tool-bar>
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <spinner :loading="true"></spinner>
    </div>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";

export default {
  components: {
    Spinner,
    ToolBar
  },
}
</script>

<style>
/*reset css*/
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, li {
  list-style: none;
}

.content { padding: 10px; }
</style>
