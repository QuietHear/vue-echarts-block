/*
* @Author: aFei
* @Date: 2018-11-28 16:13:11
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2019-08-16 10:05:45
*/
<template>
  <div :id="id" class="vue-charts-block" :class=cname></div>
</template>

<script>
  export default {
    name: "VueChartsBlock",
    props: {
      id: { // 图表ID
        required: true
      },
      cname: { // 额外class
        type: String,
        default: 'charts-extra'
      },
      option: { // 图里全部设置
        type: Object,
        required: true
      },
      seriesClick:{ // 曲线上点击事件
        type:Function,
        default: ()=>{}
      }
      // legend: { // 图例设置
      //   type: Object,
      //   default: () => {
      //     return {show: false};
      //   }
      // },
      // tooltip: { // 数据提示框设置
      //   type: Object,
      //   default: () => {
      //     return {show: false};
      //   }
      // },
      // toolbox: { // 工具箱设置
      //   type: Object,
      //   default: () => {
      //     return {show: false};
      //   }
      // },
      // calculable: { // 拖拽重计算设置
      //   type: Boolean,
      //   default: false
      // },
      // color: { // 坐标轴色盘值设置
      //   type: Array,
      //   default: () => {
      //     return [
      //       '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      //       '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      //       '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
      //       '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
      //     ];
      //   }
      // },
      // xAxis: { // 横坐标设置
      //   type: Object,
      //   default: () => {
      //     return {};
      //   }
      // },
      // yAxis: { // 纵坐标设置
      //   type: Object,
      //   default: () => {
      //     return {type: 'value'};
      //   }
      // },
      // series: { // 图表对应数据
      //   type: Array,
      //   default: () => {
      //     return [];
      //   },
      //   required: true
      // }
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
    mounted() {
      let it = this; // 定义闭包变量
      this.charts = this.$echarts.init(document.getElementById(this.id));

      // let config = {
      //   // 图例
      //   legend: {
      //     show: this.legend.data === undefined || this.legend.data.length === 0 ? false : true,
      //     data: this.legend.data,
      //     x: this.legend.x === undefined ? 'center' : this.legend.x,
      //     itemWidth: this.legend.itemWidth === undefined ? 12 : this.legend.itemWidth,
      //     itemHeight: this.legend.itemHeight === undefined ? 12 : this.legend.itemHeight,
      //     textStyle: {
      //       color: this.legend.color === undefined ? '#000' : this.legend.color,
      //       fontSize: this.legend.fontSize === undefined ? 12 : this.legend.fontSize
      //     }
      //   },
      //   // 数据提示框
      //   tooltip: {
      //     show: this.tooltip.show === undefined ? true : this.tooltip.show,
      //     trigger: this.tooltip.trigger === undefined ? 'item' : this.tooltip.trigger,
      //     formatter: this.tooltip.formatter === undefined ? null : this.tooltip.formatter,
      //     axisPointer: {
      //       type: this.tooltip.axisPointer === undefined ? 'line' : this.tooltip.axisPointer.type === undefined ? 'line' : this.tooltip.axisPointer.type,
      //       lineStyle: {
      //         color: this.tooltip.axisPointer === undefined ? '#48b' : this.tooltip.axisPointer.lineColor === undefined ? '#48b' : this.tooltip.axisPointer.lineColor,
      //         width: this.tooltip.axisPointer === undefined ? 2 : this.tooltip.axisPointer.lineWidth === undefined ? 2 : this.tooltip.axisPointer.lineWidth,
      //         type: this.tooltip.axisPointer === undefined ? 'solid' : this.tooltip.axisPointer.lineStyle === undefined ? 'solid' : this.tooltip.axisPointer.lineStyle
      //       },
      //       crossStyle: {
      //         color: this.tooltip.axisPointer === undefined ? '#1e90ff' : this.tooltip.axisPointer.crossColor === undefined ? '#1e90ff' : this.tooltip.axisPointer.crossColor,
      //         width: this.tooltip.axisPointer === undefined ? 1 : this.tooltip.axisPointer.crossWidth === undefined ? 1 : this.tooltip.axisPointer.crossWidth,
      //         type: this.tooltip.axisPointer === undefined ? 'dashed' : this.tooltip.axisPointer.crossStyle === undefined ? 'dashed' : this.tooltip.axisPointer.crossStyle
      //       },
      //       shadowStyle: {
      //         color: this.tooltip.axisPointer === undefined ? 'rgba(150,150,150,0.3)' : this.tooltip.axisPointer.shadowColor === undefined ? 'rgba(150,150,150,0.3)' : this.tooltip.axisPointer.shadowColor,
      //         width: this.tooltip.axisPointer === undefined ? 'auto' : this.tooltip.axisPointer.shadowWidth === undefined ? 'auto' : this.tooltip.axisPointer.shadowWidth,
      //         type: this.tooltip.axisPointer === undefined ? 'default' : this.tooltip.axisPointer.shadowStyle === undefined ? 'default' : this.tooltip.axisPointer.shadowStyle
      //       }
      //     }
      //   },
      //   // 工具箱
      //   toolbox: {
      //     show: this.toolbox.show === undefined ? false : this.toolbox.show,
      //     feature: {
      //       mark: {
      //         show: this.toolbox.mark === undefined ? false : this.toolbox.mark
      //       },
      //       dataZoom: {
      //         show: this.toolbox.dataZoom === undefined ? false : this.toolbox.dataZoom
      //       },
      //       dataView: {
      //         show: this.toolbox.dataView === undefined ? false : this.toolbox.dataView
      //       },
      //       magicType: {
      //         show: this.toolbox.magicType === undefined ? false : this.toolbox.magicType,
      //         type: this.toolbox.magicTypeAll === undefined ? [] : this.toolbox.magicTypeAll
      //       },
      //       restore: {
      //         show: this.toolbox.restore === undefined ? false : this.toolbox.restore
      //       },
      //       saveAsImage: {
      //         show: this.toolbox.saveAsImage === undefined ? false : this.toolbox.saveAsImage,
      //         type: this.toolbox.saveAsImageType === 'png' ? false : this.toolbox.saveAsImageType,
      //       }
      //     }
      //   },
      //   // 拖拽重计算
      //   calculable: this.calculable,
      //   // 坐标轴色盘值
      //   color: this.color,
      //   // 纵坐标
      //   yAxis: this.yAxis,
      //   // 数据
      //   series: this.series
      // };
      // if (this.xAxis.data !== undefined) {
      //   config.xAxis = {// 横坐标
      //     type: 'category',
      //     data: this.xAxis.data
      //   }
      // } else {
      //   config.xAxis = {scale: false, show: false};
      //   config.yAxis.show = false;
      // }
      this.charts.setOption(this.option, true);
      this.charts.on('click','series',this.seriesClick);
      window.addEventListener('resize', it.change);
    },
    beforeDestroy() {
      let it = this;
      window.removeEventListener('resize', it.change);
    }
  }
</script>

<!--基础样式-->
<style scoped>
  @import "style/vueChartsBlock.css";
</style>

<!--样式扩展-->
<style scoped>
  /*必需的扩展*/
  @import "style/chartExtra.css";
</style>
