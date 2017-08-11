<template>
  <div>
    <div id="main" style="width: 100%;height:500px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data(){
      return {};
    },
    mounted(){
      var myChart = echarts.init(document.getElementById('main'));

      var base = +new Date(1968, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var data = [40];
      for (var i =0; i < 6; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      }
      data.push(105);
      data.push(108);
      data.push(123);
      data.push(92);
      data.push(118);

      var option = {
//        tooltip: {
//          trigger: 'axis',
//          position: function (pt) {
//            return [pt[0], '10%'];
//          }
//        },
        title: {
          left: 'center',
          text: '大数据量面积图',
          show: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
//        toolbox: {
//          feature: {
//            dataZoom: {
//              yAxisIndex: 'none'
//            },
//            restore: {},
//            saveAsImage: {}
//          }
//        },
        xAxis: {
          show: true,
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          show: true,
          type: 'value',
          boundaryGap: [0.2, 0.3]
        },

        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            sampling: 'average',
            itemStyle: {
              normal: {
                borderWidth: 0,
                opacity: 0
              }
            },
            lineStyle: {
              normal: {
                width: 0
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#fff'
                },{
                    offset: 0.2,
                    color: '#fde3e2'
                },{
                    offset: 0.4,
                    color: '#f9afab'
                }, {
                    offset: 0.6,
                    color: '#f5746e'
                }, {
                    offset: 0.8,
                    color: '#f1453d'
                }, {
                    offset: 1,
                    color: '#f1453d'
                  }
                ])
              }
            },
            data: data
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      debugger;
      this.chart = myChart;
    }
  }
</script>
<style scoped>

</style>
