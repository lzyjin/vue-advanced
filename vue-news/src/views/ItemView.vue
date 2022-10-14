<template>
  <div>
<!--    <p>{{ itemInfo.title }}</p>-->
<!--    <p>{{ itemInfo.content }}</p>-->
<!--    <p>{{ itemInfo.user }}</p>-->

    <div>
      <!-- 질문 상세 정보 -->
      <section class="item">
        <p class="title">{{ fetchedItem.title }}</p>
        <div v-html="fetchedItem.content" class="content"></div>
        <router-link :to="`/user/${ fetchedItem.user }`">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          {{ fetchedItem.user }}
        </router-link>
      </section>

      <!-- 질문에 달린 댓글 -->
      <section>
        <div v-for="comment in fetchedItem.comments" :key="comment.id" class="comment">
          <div v-html="comment.content"></div>
          <p>{{ comment.time_ago }}</p>
          <router-link :to="`/user/${ comment.user }`">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            {{ comment.user }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ItemView",
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }

    // mapGetters 헬퍼 사용
    // The mapGetters helper simply maps store getters to local computed properties:
    ...mapGetters([
      'fetchedItem'
    ]),
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', { itemId });
  },
}
</script>

<style scoped>
/*
.item { margin-bottom: 100px; }
.item .title { font-size: 30px; }
.item .content { font-size: 20px; }
.comment { padding: 30px; border: 1px solid #ddd; border-radius: 10px; margin: 20px; }
 */
</style>
