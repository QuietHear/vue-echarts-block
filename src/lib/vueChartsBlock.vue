/*
* @Author: aFei
* @Date: 2018-11-28 16:13:11
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-12-03 14:31:34
*/
<template>
  <div :id="id" class="vueChartsBlock extra"></div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  require("echarts/lib/component/dataset");
  require("echarts/lib/chart/line");
  require("echarts/lib/chart/bar");
  require("echarts/lib/chart/pie");
  require("echarts/lib/chart/scatter");
  require("echarts/lib/chart/radar");
  require("echarts/lib/chart/map");
  require("echarts/lib/chart/tree");
  require("echarts/lib/chart/treemap");
  require("echarts/lib/chart/graph");
  require("echarts/lib/chart/gauge");
  require("echarts/lib/chart/funnel");
  require("echarts/lib/chart/parallel");
  require("echarts/lib/chart/sankey");
  require("echarts/lib/chart/boxplot");
  require("echarts/lib/chart/candlestick");
  require("echarts/lib/chart/effectScatter");
  require("echarts/lib/chart/lines");
  require("echarts/lib/chart/heatmap");
  require("echarts/lib/chart/pictorialBar");
  require("echarts/lib/chart/themeRiver");
  require("echarts/lib/chart/sunburst");
  require("echarts/lib/chart/custom");
  require("echarts/lib/component/graphic");
  require("echarts/lib/component/grid");
  require("echarts/lib/component/legendScroll");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/axisPointer");
  require("echarts/lib/component/polar");
  require("echarts/lib/component/geo");
  require("echarts/lib/component/parallel");
  require("echarts/lib/component/singleAxis");
  require("echarts/lib/component/brush");
  require("echarts/lib/component/calendar");
  require("echarts/lib/component/title");
  require("echarts/lib/component/dataZoom");
  require("echarts/lib/component/visualMap");
  require("echarts/lib/component/markPoint");
  require("echarts/lib/component/markLine");
  require("echarts/lib/component/markArea");
  require("echarts/lib/component/timeline");
  require("echarts/lib/component/toolbox");
  require("zrender/lib/vml/vml");
  require("zrender/lib/svg/svg");

  export default {
    name: "VueChartsBlock",
    props: {
      id: {
        required: true
      },
      legend: {
        type: Object,
        default: () => {
          return {show: false};
        }
      },
      tooltip: {
        type: Object,
        default: () => {
          return {show: false};
        }
      },
      toolbox: {
        type: Object,
        default: () => {
          return {show: false};
        }
      },
      calculable: {
        type: Boolean
      },
      color: {
        type: Array
      },
      xAxis: {
        type: Object,
        default: () => {
          return {};
        }
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
        // 图例
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
        // 数据提示框
        tooltip: {
          show: this.tooltip.show === undefined ? true : this.tooltip.show,
          trigger: this.tooltip.trigger === undefined ? 'item' : this.tooltip.trigger,
          formatter: this.tooltip.formatter === undefined ? null : this.tooltip.formatter,
          axisPointer: {
            type: this.tooltip.axisPointer === undefined ? 'line' : this.tooltip.axisPointer.type === undefined ? 'line' : this.tooltip.axisPointer.type,
            lineStyle: {
              color: this.tooltip.axisPointer === undefined ? '#48b' : this.tooltip.axisPointer.lineColor === undefined ? '#48b' : this.tooltip.axisPointer.lineColor,
              width: this.tooltip.axisPointer === undefined ? 2 : this.tooltip.axisPointer.lineWidth === undefined ? 2 : this.tooltip.axisPointer.lineWidth,
              type: this.tooltip.axisPointer === undefined ? 'solid' : this.tooltip.axisPointer.lineStyle === undefined ? 'solid' : this.tooltip.axisPointer.lineStyle
            },
            crossStyle: {
              color: this.tooltip.axisPointer === undefined ? '#1e90ff' : this.tooltip.axisPointer.crossColor === undefined ? '#1e90ff' : this.tooltip.axisPointer.crossColor,
              width: this.tooltip.axisPointer === undefined ? 1 : this.tooltip.axisPointer.crossWidth === undefined ? 1 : this.tooltip.axisPointer.crossWidth,
              type: this.tooltip.axisPointer === undefined ? 'dashed' : this.tooltip.axisPointer.crossStyle === undefined ? 'dashed' : this.tooltip.axisPointer.crossStyle
            },
            shadowStyle: {
              color: this.tooltip.axisPointer === undefined ? 'rgba(150,150,150,0.3)' : this.tooltip.axisPointer.shadowColor === undefined ? 'rgba(150,150,150,0.3)' : this.tooltip.axisPointer.shadowColor,
              width: this.tooltip.axisPointer === undefined ? 'auto' : this.tooltip.axisPointer.shadowWidth === undefined ? 'auto' : this.tooltip.axisPointer.shadowWidth,
              type: this.tooltip.axisPointer === undefined ? 'default' : this.tooltip.axisPointer.shadowStyle === undefined ? 'default' : this.tooltip.axisPointer.shadowStyle
            }
          }
        },
        // 工具箱
        toolbox: {
          show: this.toolbox.show === undefined ? false : this.toolbox.show,
          feature: {
            mark: {
              show: this.toolbox.mark === undefined ? false : this.toolbox.mark
            },
            dataZoom: {
              show: this.toolbox.dataZoom === undefined ? false : this.toolbox.dataZoom
            },
            dataView: {
              show: this.toolbox.dataView === undefined ? false : this.toolbox.dataView
            },
            magicType: {
              show: this.toolbox.magicType === undefined ? false : this.toolbox.magicType,
              type: this.toolbox.magicTypeAll === undefined ? [] : this.toolbox.magicTypeAll
            },
            restore: {
              show: this.toolbox.restore === undefined ? false : this.toolbox.restore
            },
            saveAsImage: {
              show: this.toolbox.saveAsImage === undefined ? false : this.toolbox.saveAsImage,
              type: this.toolbox.saveAsImageType === 'png' ? false : this.toolbox.saveAsImageType,
            }
          }
        },
        // 拖拽重计算
        calculable: this.calculable === undefined ? false : this.calculable,
        // 坐标轴色盘值
        color: this.color === undefined ? [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ] : this.color,
        // 横坐标
        xAxis: {
          type: 'category',
          data: this.xAxis.data === undefined ? [] : this.xAxis.data
        },
        yAxis: {
          type: 'value'
        },
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
