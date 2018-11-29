/*
* @Author: aFei
* @Date: 2018-11-28 16:13:11
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-29 14:38:01
*/
<template>
  <div :id="id" style="height: 800px;"></div>
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
      type: {
        type: String,
        required: true
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
          data: this.optionData.legend
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
