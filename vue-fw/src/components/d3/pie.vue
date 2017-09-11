<template>
  <div>This is my D3 pie</div>
</template>
<script>
  import * as d3 from 'd3'

  window.d3 = d3;
  export default {
    data(){
      return {}
    },
    mounted(){
      this.createPie();
    },
    methods:{
      createPie(){
        var width = 400;
        var height = 400;
        var dataset = [ 30 , 10 , 43 , 55 , 13 ];

        var svg = d3.select("body")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        var pie = d3.pie();

        var piedata = pie(dataset);
        console.log(piedata);

        var outerRadius = 150;	//外半径
        var innerRadius = 0;	//内半径，为0则中间没有空白
        var orArr = [130,140,150,160,170];

        var arc = d3.arc()	//弧生成器
          .innerRadius(innerRadius)	//设置内半径
          .outerRadius(function(d){
//            return orArr[(Math.random() * 10)%orArr.length]
            return outerRadius
          });	//设置外半径

        var color = d3.schemeCategory10;

        var arcs = svg.selectAll("g")
          .data(piedata)
          .enter()
          .append("g")
          .attr("transform","translate("+ (width/2) +","+ (width/2) +")");

        arcs.append("path")
          .attr("fill",function(d,i){
            return color[i];
          })
          .attr("d",function(d){
            return arc(d);
          });

        arcs.append("text")
          .attr("transform",function(d){
            return "translate(" + arc.centroid(d) + ")";
          })
          .attr("text-anchor","middle")
          .text(function(d){
            return d.data;
          });

        console.log(dataset);
        console.log(piedata);
      }
    }
  }
</script>
<style>

</style>
