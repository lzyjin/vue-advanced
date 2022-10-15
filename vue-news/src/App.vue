<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- RouterView는 -->
    <!-- url이 만약 /news 이면 NewsView로 -->
    <!-- url이 만약 /jobs 이면 JobsView로 랜더링된다. -->

    <!--https://vuejs.org/guide/built-ins/transition.html-->
    <div class="content">
      <transition name="fade">
        <!--<transition name="slide">-->
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";

export default {
  // eslint 끄는 방법 1
  /* eslint-disable */

  // eslint 끄는 방법 2
  // package.json 과 동일한 경로에 vue.config.js 파일을 만들고 lint를 끄는 코드를 추가해준다.
  // https://cli.vuejs.org/config/#lintonsave

  // methods: {
  //   fetchData() {
  //     console.log('hello')
  //   }
  // }
  components: {
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
