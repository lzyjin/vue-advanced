<template>
  <div>
<!--    <p>{{ itemInfo.title }}</p>-->
<!--    <p>{{ itemInfo.content }}</p>-->
<!--    <p>{{ itemInfo.user }}</p>-->

    <div>
      <!-- 질문 상세 정보 -->
      <section class="detail">
        <p class="title">{{ fetchedItem.title }}</p>
        <div v-html="fetchedItem.content" class="content"></div>
      </section>
      <!-- // 질문 상세 정보 -->

      <!-- 사용자 정보 -->
      <section class="user-info">
<!--        <router-link :to="`/user/${ fetchedItem.user }`">-->
<!--          <i class="fa fa-user-circle-o" aria-hidden="true"></i>-->
<!--          {{ fetchedItem.user }}-->
<!--        </router-link>-->
        <user-profile :info="fetchedItem">
<!--          <div slot="username">by {{ fetchedItem.user }}</div>-->
          <p slot="username">
            by <router-link :to="`/user/${ fetchedItem.user }`">{{ fetchedItem.user }}</router-link>
          </p>
          <!--<p slot="created">{{ fetchedItem.points }}points, posted {{ fetchedItem.time_ago }}</p>-->
          <!-- 상현이는 이 방법을 추천, template으로 감싸고 template은 없어지니까 그 안에 필요한 태그를 씀 -->
          <template #created>
            <p>{{ fetchedItem.points }}points, posted {{ fetchedItem.time_ago }}</p>
          </template>
        </user-profile>
      </section>
      <!-- // 사용자 정보 -->


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
      <!-- // 질문에 달린 댓글 -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  name: "ItemView",
  components: {
    UserProfile
  },
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
section { border-bottom: 1px solid #ddd; padding: 40px 0; }

.detail .title { font-size: 25px; font-weight: 600; }
.comment { margin-bottom: 20px; }
</style>
