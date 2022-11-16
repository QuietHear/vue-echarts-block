# echarts组件（vue2版）
[**vue3版本**](https://github.com/QuietHear/vue-echarts-block-plus '浏览') | ***vue2版本*** 


## 安装
	npm i vue-echarts-block

## 使用
	import vueEchartsBlock from 'vue-echarts-block';
	
	Vue.use(vueEchartsBlock);


## 0. 依赖组件
* 安装依赖 `npm install echarts`
> 
	import echarts from 'echarts'
	Vue.prototype.$echarts = echarts;


## 1. 参数
* `id`：图表ID-->任意类型;必传
* `cname`：自定义class-->String;非必传
* `option`：图表配置数据-->Object;必传
* `series-click`：曲线上点击事件-->Function;非必传


## 2. 示例数据
	option: {
	  tooltip: {
	    trigger: 'axis'
	  },
	  legend: {
	    data: ['最高气温', '最低气温']
	  },
	  xAxis: {
	    type: 'category',
	    boundaryGap: false,
	    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
	  },
	  yAxis: {
	    type: 'value',
	    axisLabel: {
	      formatter: '{value} °C'
	    }
	  },
	  series: [
	    {
	      name: '最高气温',
	      type: 'line',
	      data: [11, 11, 15, 13, 12, 13, 10],
	      markPoint: {
	        data: [
	          {type: 'max', name: '最大值'},
	          {type: 'min', name: '最小值'}
	        ]
	      },
	      markLine: {
	        data: [
	          {type: 'average', name: '平均值'}
	        ]
	      }
	    },
	    {
	      name: '最低气温',
	      type: 'line',
	      data: [1, -2, 2, 5, 3, 2, 0],
	      markPoint: {
	        data: [
	          {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
	        ]
	      },
	      markLine: {
	        data: [
	          {type: 'average', name: '平均值'}
	        ]
	      }
	    }
	  ]
	}