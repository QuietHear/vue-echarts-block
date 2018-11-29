# echarts vue版组件

### 1. 适用前提--必须引入echarts
> npm install echarts

### 2. 安装依赖
> npm i vue-charts-block

### 3. 声明
>
	//根目录下src--main.js文件中
	import vueChartsBlock from 'vue-charts-block'
	//底下引用
	Vue.use(vueChartsBlock)
>

### 4. 使用
>
	<vue-charts-block :id="id" :optionData="optionData" :type="type"></vue-charts-block>
	// 数据示例
	legend:{ // 图例设置
		data: [], // 数据
		x:'left', // 对齐方式，默认'center'
		itemWidth: 12, // 图例小方块宽，默认12
		itemHeight: 12, // 图例小方块高，默认12
		color: '#e4393c', // 图例文字颜色，默认'#000'
		fontSize: 12, // 图例文字字号，默认12
	}, 
	optionData:{
		xAxis:[], // 横坐标数据
	}
>

### 5. 参数
> * 图表ID:*id*-->任意类型;必传
> * 图例设置:*legend*-->Object;非必传，不传时或legend.data无数据不展示
> * 不同类型图标对应数据:*optionData*-->Object;必传

### 6. 样式
> * `.vueChartsBlock.extra`样式中设置了组件的尺寸，可自行覆盖