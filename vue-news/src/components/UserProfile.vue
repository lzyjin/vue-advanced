<template>
  <div>
    <!-- 방법 1 -->
<!--    <p>user: {{ userInfo.id }}</p>-->
<!--    <p>karma: {{ userInfo.karma }}</p>-->
<!--    <div>about: <div v-html="userInfo.about"></div></div>-->
<!--    <p>created: {{ userInfo.created }}</p>-->


    <!-- 방법 2 -->
<!--    <p>user: {{ info.id }}</p>-->
<!--    <p>karma: {{ info.karma }}</p>-->
<!--    <div>about: <div v-html="info.about"></div></div>-->
<!--    <p>created: {{ info.created }}</p>-->

    <!-- slot을 사용해 UserView 페이지에서의 사용자 정보와 ItemView 에서의 사용자 정보를 다르게 표현하기 -->
    <slot name="username">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
    <slot name="karma">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
    <slot name="about">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
    <slot name="created">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
  </div>
</template>

<script>
export default {
  name: "UserProfile",

  // 방법 1
  // UserProfile에서 computed로 데이터에 접근하면 UserView에서 UserProfile로 데이터를 내릴 필요가 없음
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   },
  // },

  // 방법 2
  // UserView에서 UserProfile로 데이터를 내려줌(넘겨줌)
  props: {
    info: Object,
  },

  // 결론:
  // vuex 사용에 조금 더 적합한 방법은 방법 1
  // state는 표현하는 컴포넌트에서 갖다 쓰면 된다.
  // 두 방법 모두 틀린 방법은 아니므로 상황에 맞는 방법을 사용하면 된다.
}
</script>

<style scoped>

</style>
