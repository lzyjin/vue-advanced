<template>
  <div>
    <!--    <button @click="loginUser">login</button>-->
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="(v, i) in items" :key="i">{{ v }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {handleException} from "@/utils/handler";

export default {
  name: 'App',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
            if (response.data.id === 1) {
              console.log('사용자가 인증되었습니다.');
              axios.get('https://jsonplaceholder.typicode.com/todos')
                  .then(response => {
                    this.items = response.data;
                  })
                  .catch();
            }
          })
          .catch(error =>console.log(error));
    },
    async loginUser1() {
      // async, await의 장점
      // 변수에 저장하기 때문에 훨씬 직관적

      // 에러처리는 try...catch문을 사용
      // .then().catch()보다 넓은 범위로 에러를 캐치 가능
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          const list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        // 에러에 대해 공통으로 처리할 공통함수
        handleException(error);

        console.log(error);
      }

    }
  },
}
</script>

<style>

</style>


