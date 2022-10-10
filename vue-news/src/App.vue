<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- RouterView는 -->
    <!-- url이 만약 /news 이면 NewsView로 -->
    <!-- url이 만약 /jobs 이면 JobsView로 랜더링된다. -->
    <router-view></router-view>
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

p.item { padding: 30px; border: 1px solid #ddd; border-radius: 10px; margin: 20px; }
p.item a { display: block; color: #333; text-decoration: none; font-size: 18px; margin-bottom: 10px; }
p.item a:hover { text-decoration: underline; }
p.item span { font-size: 16px; color: #555; display: inline-block; margin-right: 15px; }
</style>
