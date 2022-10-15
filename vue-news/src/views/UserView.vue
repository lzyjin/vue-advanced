<template>
  <div>
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
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', { userName });
  },
}
</script>

<style scoped>

</style>
