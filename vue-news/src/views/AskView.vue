<template>
  <div>
    <div v-for="ask in asks" v-bind:key="ask.id">{{ask.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from "@/api";

export default {
  name: "AskView",
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList()
        .then(response => {
          console.log(response);
          this.asks = response.data;
        })
        .catch(err => console.error(err));
  }
}
</script>

<style scoped>

</style>
