<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job.id">{{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobList} from "@/api";

export default {
  name: "JobsView",
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobList()
        .then(response => {
      console.log(response);
      this.jobs = response.data;
    })
        .catch(error => console.error(error));
  }
}
</script>

<style scoped>

</style>
