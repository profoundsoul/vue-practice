<template>
  <div>
    <div id="main" style="width: 100%;height:220px;"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return {};
    },
    methods:{
      loadECharts(echarts){
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: 0,
            right: '0',
            bottom: '3%',
            containLabel: true
          },
          label:{
            normal:{
              show:true,
              textStyle:{
                color: '#999',
                fontSize:12
              }
            }
          },
          xAxis : [
            {
              type : 'category',
              data : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              axisTick: {
                show:false,
              },
              axisLabel:{
                textStyle:{
                  color:'#999'
                }
              },
              show:true,
              axisLine:{
                show:false
              },
              splitLine:{
                show:false
              }
            }
          ],
          yAxis : [
            {
              show:false,
              type : 'value'
            }
          ],
          areaStyle:{
            normal:{
              color: '#f1453d'
            }
          },
          itemStyle:{
            normal:{
              borderColor:'#f1453d'
            }
          },
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '5',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data:[{value:10
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 52
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }, {value: 200
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }, {value: 334
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }, {value: 390
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }, {value: 330
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }, {value: 220
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 0
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 0
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 0
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 0
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              },{value: 0
                ,itemStyle:{
                  normal:{
                    color:'#f1453d'
                  }
                }
              }]
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    mounted(){
      import('echarts').then(r=>{
        this.loadECharts(r);
      });
    }
  }
</script>
<style scoped>

</style>
