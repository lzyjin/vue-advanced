<template>
  <div>
    <canvas id="lineChart" ref="lineChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

export default {
  name: "LineChart",
  mounted() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    // const myChart = new Chart(
    const myChart = new this.$_Chart(
        // document.getElementById('lineChart'),
        this.$refs.lineChart,
        config
    );

    console.log(myChart);
  },
}
</script>

<style scoped>

</style>