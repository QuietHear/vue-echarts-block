/*
* @Author: aFei
* @Date: 2018-11-28 16:13:11
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-29 15:48:25
*/
<template>
  <div :id="id" class="vueChartsBlock extra"></div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/line');
  require("echarts/lib/chart/pie");
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/legend');

  export default {
    name: "VueChartsBlock",
    props: {
      id: {
        required: true
      },
      legend: {
        type: Object
      },
      optionData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        charts: ''
      }
    },
    methods: {
      change() {
        this.charts.resize();//Echarts重绘方法
      }
    },
    created() {
    },
    mounted() {
      let vue = this; // 定义闭包变量
      this.charts = echarts.init(document.getElementById(this.id));
      this.charts.setOption({
        legend: {
          show: this.legend.data === undefined || this.legend.data.length === 0 ? false : true,
          data: this.legend.data,
          x: this.legend.x === undefined ? 'center' : this.legend.x,
          itemWidth: this.legend.itemWidth === undefined ? 12 : this.legend.itemWidth,
          itemHeight: this.legend.itemHeight === undefined ? 12 : this.legend.itemHeight,
          textStyle: {
            color: this.legend.color === undefined ? '#000' : this.legend.color,
            fontSize: this.legend.fontSize === undefined ? 12 : this.legend.fontSize
          }
        },
        xAxis: {
          type: 'category',
          data: this.optionData.xAxis
        },
        yAxis: {
          type: 'value'
        },
        color: ['#fea20f', '#4cc57f', '#3da9f7', '#7ac200', '#fc595d', '#b959ff'],
        series: this.optionData.series
      }, true);
      window.addEventListener('resize', vue.change);
    },
    beforeDestroy() {
      let vue = this;
      window.removeEventListener('resize', vue.change);
    }
  }
</script>

<!--基础样式-->
<style scoped>
  @import "VueChartsBlock.css";
</style>

<!--样式扩展-->
<style scoped>
  /*必需的扩展*/
  @import "chartExtra.css";
</style>
