<template>
    <div class="container">
        <div class="tit-box">
            <div class="ruler" ref="rule"></div>
            Percentage
        </div>
        <div ref='pie' class="echarts"></div>
        <div class="graph-box">
            <div class="ellip"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>
<script>
/**
     * 使用解构函数，实现基本的按需打包，减少体积
     */
import {pie, arc, select} from 'd3'
//import * as d3 from 'd3'
export default {
    data () {
        return {}
    },
    mounted () {
//                    require(['d3'],({pie, arc, select})=>{
        this.createAsterPie2(pie, arc, select)
//                    })
//                    import('d3').then(({pie,arc,select})=>{
//        this.createAsterPie2(pie, arc, select)
//                    })
//                    import('d3').then((d3)=>{
//                        this.createAsterPie(d3);
//                    })
    },
    methods: {
        createAsterPie (d3) {
            var viewport = this.getViewPort()
            var width = viewport.width,
                height = this.$refs.pie.offsetHeight,
                radius = Math.min(width, height) / 2,
                innerRadius = 0

            var pie = d3.pie()
                .sort(null)
                .value(function (d) {
                    return d.width
                })

            var arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(function (d) {
                    return (radius - innerRadius) * 2 / 3 + ((radius - innerRadius) / 3) * (d.data.width / radius) + innerRadius
                })

            d3.arc().innerRadius(innerRadius).outerRadius(radius)

            var svg = d3.select('body').select('.echarts').append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

            require(['./aster_data.csv'], (data)=> {
                data.forEach(function (d) {
                    d.id = d.id
                    d.order = +d.order
                    d.color = d.color
                    d.weight = +d.weight
                    d.score = +d.score
                    d.width = +d.weight
                    d.label = d.label
                })
                data.length = 6

                var newPieData = pie(data).map((item, i) => {
                    //                        item.startAngle += item.value / 200
                    item.startAngle += 0.05
                    return item
                })
                svg.selectAll('.solidArc')
                    .data(newPieData)
                    .enter().append('path')
                    .attr('fill', function (d) {
                        return d.data.color
                    })
                    .attr('class', 'solidArc')
                    .attr('d', arc)

                var text = svg.selectAll('text').data(newPieData)
                    .enter()
                    .append('text')
                    .attr('text-anchor', 'end')
                    .attr('style', 'font-size:0.55rem;')
                    .attr('fill', '#828589')
                    .each((d) => {
                        var angle = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.ox = Math.cos(angle) * (radius - this.getPixelFromRem(1))
                        d.oy = Math.sin(angle) * (radius - this.getPixelFromRem(1))
                    })
                    .attr('x', (d) => {
                        var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.cx = Math.cos(a) * (radius - this.getPixelFromRem(2))
                        d.x = Math.cos(a) * (radius - this.getPixelFromRem(0.8))
                        return d.x
                    })
                    .attr('y',  (d)=> {
                        var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.cy = Math.sin(a) * (radius - this.getPixelFromRem(2))
                        d.y = Math.sin(a) * (radius - this.getPixelFromRem(0.8))
                        return d.y
                    })
                    .text(function (d) {
                        if (Math.abs(d.x - d.ox) < 3) {
                            d3.select(this).attr('text-anchor', 'middle')
                        } else if (d.x - d.ox > 0) {
                            d3.select(this).attr('text-anchor', 'start')
                        } else {
                            d3.select(this).attr('text-anchor', 'end')
                        }
                    })
                //
                text.append('tspan')
                    .attr('x', function (d) { return d.x })
                    .attr('y', function (d) { return d.y })
                    .text(function (d) {
                        return d.data.label
                    })
                text.append('tspan')
                    .attr('x', function (d) {
                        if (Math.abs(d.x - d.ox) < 3) {
                            d3.select(this).attr('text-anchor', 'middle')
                        } else if (d.x - d.ox > 0) {
                            d3.select(this).attr('text-anchor', 'start')
                        } else {
                            d3.select(this).attr('text-anchor', 'end')
                        }
                        return d.x
                    })
                    .attr('y',  (d)=>{ return d.y + this.getPixelFromRem(0.8) })
                    .attr('width', this.getPixelFromRem(1))
                    .text(function (d) {
                        //                            var a = d3.select(this);
                        //                            console.log(a.node().parentNode.firstChild);
                        //                                d3.select(this).attr('text-anchor', 'middle')
                        return d.value + '%'
                    })

                //                    var fobj =
                // //                        text.selectAll("foreignObject").data(newPieData)
                // //                        .enter()
                //                    texts
                //                        .append("foreignObject")
                // //                        .attr('style', 'font-size:0.5rem;')
                // //                        .attr('fill', '#828589')
                //                        .each(function(d) {
                //                            var angle = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.ox = Math.cos(angle) * (radius - 25);
                //                            d.oy = Math.sin(angle) * (radius - 25);
                //                        })
                //                        .attr("x", function(d) {
                //                            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.cx = Math.cos(a) * (radius - 75);
                //                            return d.x = Math.cos(a) * (radius - 20);
                //                        })
                //                        .attr("y", function(d) {
                //                            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.cy = Math.sin(a) * (radius - 75);
                //                            return d.y = Math.sin(a) * (radius - 20);
                //                        });
                //
                //                    fobj.append('xhtml:p')
                //                        .attr('style', "font-size:12px;width: 100px;margin:0;color: #888;")
                //                        .text(function(d) {
                //                            if(Math.abs(d.x - d.ox)<3){
                //                                d3.select(this).attr('text-anchor', 'middle')
                //                            }else if(d.x - d.ox >0) {
                //                                d3.select(this).attr('text-anchor', 'start')
                //                            }else{
                //                                d3.select(this).attr('text-anchor', 'end')
                //                            }
                //                            return d.data.label +  ' | ' + d.value+'%';
                //                        })

                svg.append('defs').append('marker')
                    .attr('id', 'circ')
                    .attr('markerWidth', 6)
                    .attr('markerHeight', 6)
                    .attr('refX', 3)
                    .attr('refY', 3)
                    .append('circle')
                    .attr('cx', 3)
                    .attr('cy', 3)
                    .attr('r', 3)

                svg.selectAll('path.pointer').data(newPieData).enter()
                    .append('path')
                //                        .attr("class", "pointer")
                    .style('fill', 'none')
                    .style('stroke', '#999')
                //                        .attr("marker-end", "url(#circ)")
                    .attr('d', function (d) {
                        return 'M' + d.cx + ',' + d.cy + 'L' + d.ox + ',' + d.oy
                    })
            })
        },
        createAsterPie2 (pie, arc, select) {
            var viewport = this.getViewPort()
            var width = viewport.width,
                height = this.$refs.pie.offsetHeight,
                radius = Math.min(width, height) / 2,
                innerRadius = 0

            var pieInstance = pie()
                .sort(null)
                .value(function (d) {
                    return d.width
                })

            var arcInstalce = arc()
                .innerRadius(innerRadius)
                .outerRadius(function (d) {
                    return (radius - innerRadius) * 2 / 3 + ((radius - innerRadius) / 3) * (d.data.width / 100) + innerRadius
                })

            arc().innerRadius(innerRadius).outerRadius(radius)

            var svg = select('body').select('.echarts').append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
            require(['./aster_data.csv'], (data) => {
                data.forEach(function (d) {
                    d.id = d.id
                    d.order = +d.order
                    d.color = d.color
                    d.weight = +d.weight
                    d.score = +d.score
                    d.width = +d.weight
                    d.label = d.label
                })
                data.length = 6

                var newPieData = pieInstance(data).map((item, i) => {
                    //                        item.startAngle += item.value / 200
                    item.startAngle += 0.05
                    return item
                })

                svg.selectAll('.solidArc')
                    .data(newPieData)
                    .enter().append('path')
                    .attr('fill', function (d) {
                        return d.data.color
                    })
                    .attr('class', 'solidArc')
                    .attr('d', arcInstalce)
                console.log(newPieData);

                var critical = this.getPixelFromRem(0.08)
                var text = svg.selectAll('text').data(newPieData)
                    .enter()
                    .append('text')
                    .attr('text-anchor', 'end')
                    .attr('style', 'font-size:0.55rem;')
                    .attr('fill', '#828589')
                    .each((d) => {
                        var angle = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.ox = Math.cos(angle) * (radius - this.getPixelFromRem(1))
                        d.oy = Math.sin(angle) * (radius - this.getPixelFromRem(1))
                    })
                    .attr('x', (d) => {
                        var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.cx = Math.cos(a) * (radius - this.getPixelFromRem(2))
                        d.x = Math.cos(a) * (radius - this.getPixelFromRem(0.8))
                        return d.x
                    })
                    .attr('y', (d) => {
                        var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2
                        d.cy = Math.sin(a) * (radius - this.getPixelFromRem(2))
                        d.y = Math.sin(a) * (radius - this.getPixelFromRem(0.8))
                        return d.y
                    })
                    .text(function (d) {
                        if (Math.abs(d.x - d.ox) < critical) {
                            select(this).attr('text-anchor', 'middle')
                        } else if (d.x - d.ox > 0) {
                            select(this).attr('text-anchor', 'start')
                        } else {
                            select(this).attr('text-anchor', 'end')
                        }
                    })
                text.append('tspan')
                    .attr('x', function (d) { return d.x })
                    .attr('y', function (d) { return d.y })
                    .text(function (d) {
                        return d.data.label
                    })

                text.append('tspan')
                    .attr('x', function (d) {
                        if (Math.abs(d.x - d.ox) < critical) {
                            select(this).attr('text-anchor', 'middle')
                        } else if (d.x - d.ox > 0) {
                            select(this).attr('text-anchor', 'start')
                        } else {
                            select(this).attr('text-anchor', 'end')
                        }
                        return d.x
                    })
                    .attr('y', (d) => { return d.y + this.getPixelFromRem(0.72) })
                    .attr('width', this.getPixelFromRem(1))
                    .text(function (d) {
                        return d.value + '%'
                    })

                //                    var fobj =
                // //                        text.selectAll("foreignObject").data(newPieData)
                // //                        .enter()
                //                    texts
                //                        .append("foreignObject")
                // //                        .attr('style', 'font-size:0.5rem;')
                // //                        .attr('fill', '#828589')
                //                        .each(function(d) {
                //                            var angle = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.ox = Math.cos(angle) * (radius - 25);
                //                            d.oy = Math.sin(angle) * (radius - 25);
                //                        })
                //                        .attr("x", function(d) {
                //                            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.cx = Math.cos(a) * (radius - 75);
                //                            return d.x = Math.cos(a) * (radius - 20);
                //                        })
                //                        .attr("y", function(d) {
                //                            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                //                            d.cy = Math.sin(a) * (radius - 75);
                //                            return d.y = Math.sin(a) * (radius - 20);
                //                        });
                //
                //                    fobj.append('xhtml:p')
                //                        .attr('style', "font-size:12px;width: 100px;margin:0;color: #888;")
                //                        .text(function(d) {
                //                            if(Math.abs(d.x - d.ox)<3){
                //                                d3.select(this).attr('text-anchor', 'middle')
                //                            }else if(d.x - d.ox >0) {
                //                                d3.select(this).attr('text-anchor', 'start')
                //                            }else{
                //                                d3.select(this).attr('text-anchor', 'end')
                //                            }
                //                            return d.data.label +  ' | ' + d.value+'%';
                //                        })

                svg.append('defs').append('marker')
                    .attr('id', 'circ')
                    .attr('markerWidth', 6)
                    .attr('markerHeight', 6)
                    .attr('refX', 3)
                    .attr('refY', 3)
                    .append('circle')
                    .attr('cx', 3)
                    .attr('cy', 3)
                    .attr('r', 3)

                svg.selectAll('path.pointer').data(newPieData).enter()
                    .append('path')
                    .style('fill', 'none')
                    .style('stroke', '#999')
                    .attr('d', function (d) {
                        return 'M' + d.cx + ',' + d.cy + 'L' + d.ox + ',' + d.oy
                    })
            })
        },
        getViewPort () {
            return {
                width: window.innerWidth || document.documentElement.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight
            }
        },
        getPixelFromRem (rem) {
            return Math.round(rem * this.getRemPixelRule())
        },
        getRemPixelRule () {
            return this.$refs.rule.offsetWidth
        }
    }
}
</script>
<style scoped>
    *{
        margin:0px;
        padding:0px;
    }
    .container {
        font: 10px sans-serif;
        background: #07263b;
        height: 13rem;
        overflow: hidden;
    }

    .container .ruler{
        width:1rem;
        height:0rem;
        display: inline-block;
    }

    .container .tit-box{
        margin: 0.4rem auto 0.2rem auto;
        font-size: 0.8rem;
        color:#e66760;
    }

    .container .graph-box{
        margin: auto;
        line-height: 1rem;
        margin-top:0.4rem;
    }

    .graph-box .ellip{
        display: inline-block;
        width:0.4rem;
        height:0.16rem;
        background: #fff;
        border: 0.04rem solid #fff;
        border-radius: 0.16rem;
        vertical-align: top;
    }

    .graph-box .circle{
        margin-left:0.2rem;
        display: inline-block;
        width:0.16rem;
        height:0.16rem;
        border: 0.04rem solid #164260;
        border-radius: 0.16rem;
        vertical-align: top;
    }

    .echarts {
        width: 100%;
        height: 10rem;
    }

    .axis path,
    .axis line {
        fill: none;
        stroke: #000;
        shape-rendering: crispEdges;
    }

    .bar {
        fill: orange;
    }

    .solidArc:hover {
        fill: orangered;
    }

    .solidArc {
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    .x.axis path {
        display: none;
    }

    .aster-score {
        line-height: 1;
        font-weight: bold;
        font-size: 500%;
    }

    .d3-tip {
        line-height: 1;
        font-weight: bold;
        padding: 12px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 2px;
    }

    /* Creates a small triangle extender for the tooltip */
    .d3-tip:after {
        box-sizing: border-box;
        display: inline;
        font-size: 10px;
        width: 100%;
        line-height: 1;
        color: rgba(0, 0, 0, 0.8);
        content: "\25BC";
        position: absolute;
        text-align: center;
    }

    /* Style northward tooltips differently */
    .d3-tip.n:after {
        margin: -1px 0 0 0;
        top: 100%;
        left: 0;
    }

</style>
<style>
    #app{
        height:auto!important;
    }
</style>
