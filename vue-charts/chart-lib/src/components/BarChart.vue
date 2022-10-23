<template>
  <div>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

export default {
  name: "BarChart",
  props: ['propsdata'],
  mounted() {
    // const ctx = document.getElementById('barChart');

    // ref값은 각각의 컴포넌트에서만 접근할 수 있는 접근자.
    // 충돌날 일이 없다.
    // https://vuejs.org/guide/essentials/template-refs.html
    const ctx = this.$refs.barChart;

    // const myChart = new Chart(ctx, {
    const myChart = new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

        // 상위컴포넌트에서 받은 데이터로 설정
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }

      // 예시
      // onClick: function () {
      //   this.$emit('refresh:chart');
      // }
    });
    console.log(myChart);
  },
}
</script>

<style scoped>

</style>