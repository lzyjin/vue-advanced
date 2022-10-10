<template>
  <div>
    <!--<div v-for="job in jobs" v-bind:key="job.id">{{job.title}}</div>-->

    <!--<div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{job.title}}</div>-->

    <p class="item" v-for="item in this.$store.state.jobs" v-bind:key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <span>{{ item.domain }}</span>
      <span>{{ item.time_ago }}</span>
    </p>
  </div>
</template>

<script>
// import {fetchJobList} from "@/api";

export default {
  name: "JobsView",
  data() {
    return {

    }
  },
  created() {
    // fetchJobList()
    //     .then(response => {
    //   console.log(response);
    //   this.jobs = response.data;
    // })
    //     .catch(error => console.error(error));

    this.$store.dispatch('FETCH_JOB');
  }
}
</script>

<style scoped>

</style>
