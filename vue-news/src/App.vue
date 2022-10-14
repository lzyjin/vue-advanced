<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- RouterView는 -->
    <!-- url이 만약 /news 이면 NewsView로 -->
    <!-- url이 만약 /jobs 이면 JobsView로 랜더링된다. -->

    <!--https://vuejs.org/guide/built-ins/transition.html-->
    <transition name="fade">
      <!--<transition name="slide">-->
      <router-view></router-view>
    </transition>
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

.post { padding: 10px; border-bottom: 1px solid #ddd; margin: 10px; }
.post .title { display: block; font-size: 18px; color: #222; font-weight: 600; }
.post a { display: inline-block; color: #555; text-decoration: none; font-size: 15px; margin-bottom: 5px; }
.post a:hover { text-decoration: underline; color: #ff4769; }
.post span { font-size: 15px; color: #555; display: inline-block; padding-right: 10px; margin-right: 10px; position: relative; }
.post span a { color: #555; }
//.post span a:hover { color: #555; }
.post span::after { content: ''; position: absolute; right: 0; top: 7px; width: 2px; height: 2px; border-radius: 50%; background: #555; }
.post span:last-of-type::after { display: none; }
/* https://vuejs.org/guide/built-ins/transition.html */
/* router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s linear;
}
.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* https://dev.to/arielmejiadev/slide-effect-on-vuejs-3247 */
/* style 태그 안에서 // 로 주석처리하면 에러남 !!! */
.slide-enter-active,
.slide-leave-enter {
  transform: translateX(0);
  transition: all .3s linear;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

/* https://learnvue.co/tutorials/vue-router-transitions */
/* 더 복잡한 코드 */

</style>
