<template>
  <div>
    <!--<div v-for="ask in asks" v-bind:key="ask.id">{{ask.title}}</div>-->

    <!-- vuex 사용 -->
    <!--<div v-for="ask in this.$store.state.asks" v-bind:key="ask.id">{{ask.title}}</div>-->

    <!-- computed 사용 (this.$store.state.asks 대신 변수 사용하려고) -->
    <!-- 1 -->
    <!--<div v-for="ask in asks" v-bind:key="ask.id">{{ask.title}}</div>-->
    <!-- 2 -->
    <!--<div v-for="ask in asks" v-bind:key="ask.id">{{ask.title}}</div>-->
    <!-- 3 -->
    <!--<div v-for="ask in askItems" v-bind:key="ask.id">{{ask.title}}</div>-->

    <p class="item" v-for="ask in getAsks" :key="ask.id">
      <!--<a :href="`/item/${ask.id}`">{{ ask.title }}</a>-->
      <!-- a 태그 사용하지 말고 router-link를 사용하자. 히스토리 스택이 망가진다 -->
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>

      <span>{{ ask.user }}</span>
    </p>

  </div>
</template>

<script>
// import {fetchAskList} from "@/api";
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: "AskView",
  data() {
    return {
      // asks: []
    }
  },
  computed: {
    // 1
    // asks() {
    //   return this.$store.state.asks;
    // }

    // 2
    // mapState 헬퍼 사용
    // mapState는 객체를 반환한다.
    // ...은 객체 전대 연산자(Object Spread Operator)
    // https://v3.vuex.vuejs.org/kr/guide/state.html
    // ...mapState({
    //   asks: state => state.asks,
    // }),

    // 3
    // mapGetters 헬퍼 사용
    // ...mapGetters({
    //   askItems: 'getAsks',
    // })
    // 또는
    ...mapGetters([
      'getAsks',
    ])
  },
  created() {
    // fetchAskList()
    //     .then(response => {
    //       console.log(response);
    //       this.asks = response.data;
    //     })
    //     .catch(err => console.error(err));

    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>
