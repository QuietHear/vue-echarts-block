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
	<vue-charts-block :id="id" :legend="item.legend" 
	:tooltip="item.tooltip" :toolbox="item.toolbox" 
	:optionData="optionData">
	</vue-charts-block>
	// 数据示例
	legend:{ // 图例
		data: [], // 数据
		x:'left', // 对齐方式('left','center','right')，默认'center'
		itemWidth: 12, // 图例小方块宽，默认12
		itemHeight: 12, // 图例小方块高，默认12
		color: '#e4393c', // 图例文字颜色，默认'#000'
		fontSize: 12, // 图例文字字号，默认12
	},
	tooltip:{ // 数据提示框
		show: true, // 是否展示，默认false
		trigger: 'axis', // 触发方式('item','axis')，默认'item'
		formatter:'', // 提示内容模板，abcde对应值具体查看官网，默认null
		axisPointer:{ // 提示中轴线
			type:'line', // 中轴线格式('line','cross','shadow','none')，默认'line'
			lineColor:'', // line的颜色，默认'#48b'
			lineWidth:'', // line的宽度，默认2
			lineStyle:'', // line的形态('solid','dashed','double','auto')，默认'solid'
			crossColor:'', // cross的颜色，默认'#1e90ff'
			crossWidth:'', // cross的宽度，默认1
			crossStyle:'', // cross的形态('solid','dashed','double','auto')，默认'dashed'
			shadowColor:'', // shadow的颜色，默认'rgba(150,150,150,0.3)'
			shadowWidth:'', // shadow的宽度，默认'auto'
			shadowStyle:'' // shadow的形态('solid','dashed','double','auto')，默认'default'
		}
	},
	toolbox:{ // 工具箱
		show: true, // 是否展示，默认false
		mark: true, // 辅助线标志，默认false
		dataZoom: true, // 框选区域缩放，默认false
		dataView: true, // 数据视图，默认false
		magicType: true, // 动态类型切换，默认false
		magicTypeAll: [], // 切换种类('line', 'bar', 'stack', 'tiled', 'force', 'chord', 'pie', 'funnel')，默认空数组
		restore: true, // 还原，默认false
		saveAsImage: true, // 保存图片，默认false
		saveAsImageType: 'png' // 保存图片的格式('png','jpeg','base64')，默认'png'
	},
	calculable:false, // 拖拽重计算
	optionData:{
		xAxis:[], // 横坐标数据
	}
>

### 5. 参数
> * 图表ID:*id*-->任意类型;必传
> * 图例设置:*legend*-->Object;非必传，不传时或legend.data无数据不展示
> * 数据提示框设置:*tooltip*-->Object;非必传
> * 工具箱设置:*toolbox*-->Object;非必传
> * 拖拽重计算设置:*calculable*-->Boolean;非必传
> * 不同类型图标对应数据:*optionData*-->Object;必传

### 6. 样式
> * `.vueChartsBlock.extra`样式中设置了组件的尺寸，可自行覆盖