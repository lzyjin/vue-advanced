<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart :propsdata="chartDataSet" @refresh:chart="refreshChart"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

export default {
  // 이 안은 컴포넌트 속성 && 인스턴스 옵션
  name: 'App',
  data() {
    return {
      chartDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
    }
  },
  components: {
    BarChart,
    LineChart,
  },
  methods: {
    refreshChart() {
      // 예시
      this.chartDataSet = [10, 20];
    }
  },
  created() {
    // 보통 차트를 등록하는 컴포넌트에서 데이터를 받아올 가능성이 크다.
    // 하위컴포넌트를 멍청하게 만들자 = 비지니스로직은 상위컴포넌트에서 작성하고, 공통으로 사용할 컴포넌트는 재활용할 수 있게 기능만 담게

    // 예시
    // getChartData('/charts/line/1')
    //   .then(response => {
    //     this.chartDataSet = response.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}
</script>

<style>

</style>
