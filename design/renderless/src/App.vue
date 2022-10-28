<template>
  <div>
<!--    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">-->
<!--      -->
<!--    </fetch-data>-->

<!--    &lt;!&ndash; 안됌 &ndash;&gt;-->
<!--&lt;!&ndash;    <div slot-scope="{ response, loading }">&ndash;&gt;-->
<!--&lt;!&ndash;      <div v-if="!loading">{{ response }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div v-if="loading">Loading...</div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--    <template v-slot="{ response, loading }">-->
<!--      <div v-if="!loading">{{ response }}</div>-->
<!--      <div v-if="loading">Loading...</div>-->
<!--    </template>-->
    <!-- 위 처럼 했을 때 에러 코드:  <template v-slot> can only appear at the root level inside the receiving component -->

    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">

      <div slot-scope="{ response, loading }">
        <div v-if="!loading">{{ response }}</div>
        <div v-if="loading">Loading...</div>
      </div>

      <!--      <template v-slot="{ response, loading }">-->
      <!--        <div v-if="!loading">{{ response }}</div>-->
      <!--        <div v-if="loading">Loading...</div>-->
      <!--      </template>-->
    </fetch-data>

  </div>
</template>

<script>
import FetchData from "@/components/FetchData";

export default {
  name: 'App',
  components: {
    FetchData,
  }
}
</script>

<style>

</style>
