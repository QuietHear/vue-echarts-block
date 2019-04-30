# echarts vue版组件

## 安装
	npm i vue-charts-block

## 0. 依赖组件
* echarts（引入到全局中且名字叫$echarts）

## 1. 参数
* `id`：图表ID-->任意类型;必传
* `cname`：自定义class-->String;非必传;默认*'extra'*
* `series`：图表对应数据-->Array;必传
* `legend`：图例设置-->Object;非必传，不传时或legend.data无数据不展示
>
	legend:{ // 图例
		data: [], // 数据
		x:'left', // 对齐方式('left','center','right')，默认'center'
		itemWidth: 12, // 图例小方块宽，默认12
		itemHeight: 12, // 图例小方块高，默认12
		color: '#e4393c', // 图例文字颜色，默认'#000'
		fontSize: 12, // 图例文字字号，默认12
	}

* `tooltip`：数据提示框设置-->Object;非必传
>
	tooltip:{ // 数据提示框
		show: true, // 是否展示，默认true
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
	}

* `toolbox`：工具箱设置-->Object;非必传
>
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
	}

* `calculable`：拖拽重计算设置-->Boolean;非必传，默认false
* `color`：坐标轴色盘值设置-->Array;非必传
* `xAxis`：横坐标设置-->Object;非必传
* `yAxis`：纵坐标设置-->Object;非必传

### 2. 自定义class（demo）
	.extra {
	  width: 90%;
	  margin: 0 auto;
	  height: 400px;
	}

### 3. 示例数据
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