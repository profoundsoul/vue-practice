<template>
    <div ref="container">
        Template
    </div>
</template>
<script>
    import * as d3 from 'd3'

    console.log(d3);
    export default {
        data() {
            return {};
        },
        mounted() {
            this.createCircle();
        },
        methods: {
            createCircle() {
                var w = 500;
                var h = 500;
                var g = d3.select(this.$refs.container).append('svg')
                    .attr('width', w)
                    .attr('height', h)
                    .append('g')
                    .attr('transform', function () {
                        return 'translate(' + w / 2 + ',' + h / 2 + ')';
                    });
                var circle = g.append('circle')
                    .attr('r', 50)
                    .attr('fill', 'none')
                    .attr('stroke', '#999')
                    .transition()
                    .delay(1000)
                    .attr('r', 20)
                    .delay(1000)


                function aa() {
                    circle.transition()
                        .duration(2000)
                        .ease(d => d)
                        .attrTween('r', function () {
                            return d3.interpolate(20, 100)
                        })
                }
                aa();
            }
        }
    }
</script>
<style scoped>

</style>