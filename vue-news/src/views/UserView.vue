<template>
  <div>
<!--    <p>{{ this.$store.state.user.id }}</p>-->
<!--    <p>{{ this.$store.state.user.about }}</p>-->
<!--    <p>{{ this.$store.state.user.created }}</p>-->

<!--    <p>{{ userInfo.id }}</p>-->
<!--    <p>{{ userInfo.about }}</p>-->
<!--    <p>{{ userInfo.created }}</p>-->

    <!-- 공통 컴포넌트로 분리 -->
    <!-- 방법 1 -->
    <!--<user-profile></user-profile>-->

    <!-- 방법 2 -->
    <user-profile :info="userInfo">
      <p slot="username">id: {{ userInfo.id }}</p>
      <p slot="karma">karma: {{ userInfo.karma }}</p>
      <div slot="about">about: <div v-html="userInfo.about"></div></div>
      <p slot="created">created: {{ userInfo.created }}</p>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";

export default {
  name: "UserView",
  data() {
    return {
    }
  },
  components: {
    UserProfile
  },
  computed: {
    // computed를 사용한 이유:
    // 템플릿 내에 표현식을 넣으면 편리하나 연산이 길어지면 유지보수가 어렵기 때문에
    // computed 에서 계산해서 결과만 사용한다.
    // computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행한다.
    // 즉, 대상이 변경되지 않는 한 userInfo를 여러 번 요청해도 계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환한다.
    // (= computed 속성은 종속 대상을 따라 저장(캐싱)된다)


    // 공통컴포넌트로 분리
    // 방법 1
    // userInfo() {
    //   return this.$store.state.user;
    // }

    // 방법 2
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;

    // fetchUserList(this.$route.params.id);
    this.$store.dispatch('FETCH_USER', { userName });
  },
}
</script>

<style scoped>

</style>
