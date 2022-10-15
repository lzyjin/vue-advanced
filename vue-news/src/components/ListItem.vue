<template>
  <div>

    <!-- NewsView의 코드를 빼옴 -->
    <ul>
      <li class="post" v-for="item in listItems" :key="item.id">

        <!-- title 영역은 페이지별로 조금씩 다르기 때문에 분기처리 필요 -->
        <!-- a태그에 직접 v-if를 사용할 수도 있지만 다른 방법으로 해보겠다 -->
        <!-- news, jobs에만 domain 프로퍼티가 있기 때문에 분기처리 기준으로 잡음  -->
        <template v-if="item.domain">
          <a :href="item.url" target="_blank" class="title">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/item/${item.id}`" class="title">{{ item.title }}</router-link>
        </template>


        <!--<span class="point">{{ item.points || 0 }} point</span>-->
        <span class="point" v-if="item.points">{{ item.points }} point</span>


        <!--jobs에는 user가 없고 domain만 있으므로 분기처리 필요 -->
        <template v-if="item.user">
          <span>by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span>
        </template>
        <template v-else>
          <span v-if="item.domain"><a :href="item.url" target="_blank">{{ item.domain }}</a></span>
        </template>


        <span>{{ item.time_ago }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import {mapGetters} from "vuex";

export default {
  name: "ListItem",
  computed: {
    // 내가 푼 방법
    // fetchedData() {
    //   if (this.$route.path === '/ask') {
    //     return this.$store.state.asks;
    //   } else if (this.$route.path === '/news') {
    //     return this.$store.state.news;
    //   } else if (this.$route.path === '/jobs') {
    //     return this.$store.state.jobs;
    //   }else {
    //     return null;
    //   }
    // },

    // 캔틴판교의 방법
    listItems() {
      const routeName = this.$route.name;
      if (routeName === 'news') {
        return this.$store.state.news;
      } else if (routeName === 'ask') {
        return this.$store.state.asks;
      } else if (routeName === 'jobs') {
        return this.$store.state.jobs; // 이대로 하면 나는 에러남;; if문 밖에서 return 해줘야함
      } else {
        return null;
      }
    },
  },
  created() {
    // 내가 푼 방법 ($route.path 이용하기, 캡틴판교의 방법 1)
    // switch (this.$route.path) {
    //   case '/ask':
    //     this.$store.dispatch('FETCH_ASK');
    //     break;
    //   case '/news':
    //     this.$store.dispatch('FETCH_NEWS');
    //     break;
    //   case '/jobs':
    //     this.$store.dispatch('FETCH_JOB');
    //     break;
    // }

    // 캡틴판교의 또 다른 방법은 $route.name 이용하기
    const routeName = this.$route.name;
    let mutationName = '';
    if (routeName === 'news') {
      mutationName = 'FETCH_NEWS';
    } else if (routeName === 'ask') {
      mutationName = 'FETCH_ASK';
    } else if (routeName === 'jobs') {
      mutationName = 'FETCH_JOB';
    }
    this.$store.dispatch(mutationName);
  },
}
</script>

<style scoped>
.post { padding: 10px; border-bottom: 1px solid #ddd; margin-bottom: 10px; }
.post .title { display: block; font-size: 18px; color: #222; font-weight: 600; }
.post a { display: inline-block; color: #555; text-decoration: none; font-size: 15px; margin-bottom: 5px; }
.post a:hover { text-decoration: underline; color: #ff4769; }
.post span { font-size: 15px; color: #555; display: inline-block; padding-right: 10px; margin-right: 10px; position: relative; }
.post span a { color: #555; }
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
