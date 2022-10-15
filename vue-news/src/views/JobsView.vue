<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  name: "JobsView",
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_JOB');
  },
}
</script>

<style scoped>

</style>
