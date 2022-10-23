import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    install(Vue) {
        // console.log('chart plugin loaded');

        Vue.prototype.$_Chart = Chart;

        // BarChart.vue 에서
        // this.$_Chart로 불러올 수 있음

        // LineChart.vue 에서
        // this.$_Chart로 불러올 수 있음

        // -> 더이상 컴포넌트마다 라이브러리를 로딩하지 않아도 된다
    }
}