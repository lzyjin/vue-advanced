<template>
  <div id="app">
    <ul>
      <!-- props 사용 -->
      <!--<item v-for="(item, index) in items" :key="index" v-bind:propsdata="item"></item>-->

      <!-- slot 사용 -->
      <!--<item v-for="(item, index) in items" :key="index">{{ item }}</item>-->

      <!--
        slot을 사용하는 이유:
        item 컴포넌트 하나만 다르게 표현하고 싶은 상황에서는 item 컴포넌트를 못쓰게 된다. item 컴포넌트는 굳어있기 때문이다.
        그럴 때 slot을 사용하면 유연하게 화면을 확장할 수 있다.
        dom 정의는 물론 style도 정의할 수 있다.

        ex)쇼핑몰의 상품, 모달, 카드 ...
      -->
      <item>아이템1</item>
      <item>아이템2 <button>click me</button></item>
      <item>
        <div>아이템3</div>
        <img src="https://picsum.photos/seed/picsum/400/300" alt="">
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템4</div>
      </item>
    </ul>
  </div>
</template>

<script>

import Item from "@/Item";

export default {
  name: 'App',
  components: {
    Item
  },
  data() {
    return {
      items: ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5']
    }
  },
}
</script>

<style>

</style>
