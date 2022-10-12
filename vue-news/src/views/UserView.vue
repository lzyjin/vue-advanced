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
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;

    // fetchUserList(this.$route.params.id);
    this.$store.dispatch('FETCH_USER', { userName: userName });
  },
}
</script>

<style scoped>

</style>
