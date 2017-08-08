<template>
  <div>
    Template
    <div class="small">
      <line-chart :chart-data="datacollection"></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>
<script>
  import chart from 'chart.js'
  import vueChart from 'vue-chartjs'

  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins
  let LineChart = Line.extend({
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.chartData, this.options)
    }
  });
  export default {
    components: {
      LineChart
    },
    data(){
      return {
        datacollection: null
      };
    },
    created(){
      console.log('created!!!');

    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
    mounted(){
      this.fillData()
    }
  }
</script>
<style scoped>

</style>
