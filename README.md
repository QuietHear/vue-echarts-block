# echarts vue版组件

### 1. 适用前提--必须引入echarts
> npm install echarts

### 2. 安装依赖
> npm i vue-charts-block

### 3. 声明
>
	//根目录下src--main.js文件中
	import VueChartsBlock from 'vue-charts-block'
	//底下引用
	Vue.use(VueChartsBlock)
>

### 4. 使用
>
	<vue-charts-block></vue-charts-block>
>

### 5. 参数
> * 导航信息:*navInformation*-->Array;必传
> * 自定义class:*cname*-->String;非必传;默认`'ele-nav'`
> * 自定义内联样式:*myStyle*-->String;非必传;默认`''`
> * 是否开启横向导航:*horizontal*-->Boolean;非必传;默认`false`
> * 是否开启手风琴模式:*accordion*-->Boolean;非必传;默认`false`

### 6. 样式
> * 自定义颜色:组件上绑定cname后，复制原本的*.ele-nav*样式进行颜色，注意 在.el-menu--horizontal{}外层一定要加一层body，不然没法自定义横向样式