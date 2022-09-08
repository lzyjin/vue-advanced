<template>
  <div id="app">
    hello
  </div>
</template>

<script>

export default {
  // eslint 끄는 방법 1
  /* eslint-disable */

  // eslint 끄는 방법 2
  // package.json 과 동일한 경로에 vue.config.js 파일을 만들고 lint를 끄는 코드를 추가해준다.
  // https://cli.vuejs.org/config/#lintonsave
  methods: {
    fetchData() {
      console.log('hello')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
