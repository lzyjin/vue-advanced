<template>
  <div id="app">
    <tool-bar></tool-bar>
    <div class="content">
<!--      <transition name="fade">-->
        <router-view></router-view>
<!--      </transition>-->
      <spinner :loading="loadingState"></spinner>
    </div>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";
import bus from "@/utils/bus";

export default {
  components: {
    Spinner,
    ToolBar
  },
  data() {
    return {
      loadingState: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingState = true;
    },
    endSpinner() {
      this.loadingState = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  // 이벤트 버스는 beforeDestroy(이 컴포넌트의 역할이 끝나기 전에)에서 off를 꼭 해야 이벤트 객체가 쌓이지 않는다.
  beforeDestroy() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  }
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
