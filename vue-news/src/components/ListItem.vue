<template>
  <div>

    <ul>
      <li class="post" v-for="item in listItems" :key="item.id">

        <template v-if="item.domain">
          <a :href="item.url" target="_blank" class="title">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/item/${item.id}`" class="title">{{ item.title }}</router-link>
        </template>

        <span class="point" v-if="item.points">{{ item.points }} point</span>

        <template v-if="item.user">
          <span>by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span>
        </template>
        <template v-else>
          <span v-if="item.domain"><a :href="item.url" target="_blank">{{ item.domain }}</a></span>
        </template>

        <span>{{ item.time_ago }}</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "ListItem",
  computed: {
    listItems() {
      return this.$store.state.list;
    },
  },
}
</script>

<style scoped>
.post { padding: 10px; border-bottom: 1px solid #ddd; margin-bottom: 10px; }
.post .title { display: block; font-size: 18px; color: #222; font-weight: 600; }
.post a { display: inline-block; color: #555; text-decoration: none; font-size: 15px; margin-bottom: 5px; }
.post a:hover { text-decoration: underline; color: #ff4769; }
.post span { font-size: 15px; color: #555; display: inline-block; padding-right: 10px; margin-right: 10px; position: relative; }
.post span a { color: #555; }
.post span::after { content: ''; position: absolute; right: 0; top: 7px; width: 2px; height: 2px; border-radius: 50%; background: #555; }
.post span:last-of-type::after { display: none; }

</style>
