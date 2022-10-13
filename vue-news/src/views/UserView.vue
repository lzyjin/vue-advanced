<template>
  <div>
<!--    <p>{{ this.$store.state.user.id }}</p>-->
<!--    <p>{{ this.$store.state.user.about }}</p>-->
<!--    <p>{{ this.$store.state.user.created }}</p>-->
    <p>{{ userInfo.id }}</p>
    <p>{{ userInfo.about }}</p>
    <p>{{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
    }
  },
  computed: {
    // computed를 사용한 이유:
    // 템플릿 내에 표현식을 넣으면 편리하나 연산이 길어지면 유지보수가 어렵기 때문에
    // computed 에서 계산해서 결과만 사용한다.
    // computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행한다.
    // 즉, 대상이 변경되지 않는 한 userInfo를 여러 번 요청해도 계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환한다.
    // (= computed 속성은 종속 대상을 따라 저장(캐싱)된다)
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;

    // fetchUserList(this.$route.params.id);
    this.$store.dispatch('FETCH_USER', { userName });
  },
}
</script>

<style scoped>

</style>
