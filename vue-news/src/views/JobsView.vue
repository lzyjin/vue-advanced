<template>
  <div>
    <!--<div v-for="job in jobs" v-bind:key="job.id">{{job.title}}</div>-->

    <!--<div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{job.title}}</div>-->

    <ul>
      <li class="post" v-for="job in this.$store.state.jobs" v-bind:key="job.id">
        <router-link :to="job.url" class="title">{{ job.title }}</router-link>
<!--        <span v-if="job.domain"><a :href="job.domain" target="_blank">{{ job.domain }}</a></span>-->
<!--        <span v-if="job.domain"><a :href="'https://'+job.domain" target="_blank">{{ job.domain }}</a></span>-->
        <span v-if="job.domain"><a :href="job.url" target="_blank">{{ job.domain }}</a></span>
        <span>{{ job.time_ago }}</span>
      </li>
    </ul>
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
