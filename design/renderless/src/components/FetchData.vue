<script>

import axios from "axios";

export default {
  name: "FetchData",
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
        .then(response => {
          this.response = response.data;
          this.loading = false;
        })
        .catch(error => {
          alert('[ERROR] fetching the data', error);
          console.log(error);
        });
  },

  // 중요!
  // 하위컴포넌트에서 바뀐 데이터와 값이 상위컴포넌트로 전달됌

  // 안됌
  // render() {
  //   return this.$scopedSlots.default({
  //     response: this.response,
  //     loading: this.loading,
  //   });
  // },

  // https://v2.vuejs.org/v2/guide/render-function.html#Slots
  render(createdElement) {
    return createdElement('div', [
      this.$scopedSlots.default({
        response: this.response,
        loading: this.loading,
      })
    ]);
  },
}
</script>
