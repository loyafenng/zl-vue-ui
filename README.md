# zl-vue-ui

> 公司实际项目中编写的一些组件，后续会持续更新，有不足的地方希望大家提出宝贵意见，大家共同进步, 主要组件如下

## 引入组件

```
npm install zl-vue-ui -S
```

### 全局引用方法
> main.js 中引入

```
import zlVueUi from 'zl-vue-ui'
Vue.use(zlVueUi)
```
### 局部引用

```
import {
  ZlCalendar,
  ZlCheckbox,
  ZlDialog,
  ZlDialogPlugin,
  ZlLoading,
  ZlLoadingPlugin,
  ZlRadio,
  ZlRange,
  ZlSlideDelete,
  ZlSwitch,
  ZlToast,
  ZlToastPlugin,
} from 'zl-vue-ui'
```
## 以下是主要组件
**目前内部的组件**
- ZlCalendar 日历组件，仿照美团酒店编写的日历组件，支持单选和双选 [git源文件地址](https://github.com/xuqichuang/zl-calendar)
- ZlCheckbox 多选框
- ZlDialog dialog弹框
- ZlLoading loading加载
- ZlRadio 单选框
- ZlRange 价格滑块，双向滑动 [git源文件地址](https://github.com/xuqichuang/zl-range)
- ZlSlideDelete 左滑删除 [git源文件地址](https://github.com/xuqichuang/zl-slide-delete)
- ZlSwitch switch选择器
- ZlToast toast提示


### ZlCalendar
> 仿照美团酒店编写的日历组件，展示选中区间
###### 使用方法

> html
```
<button @click="calendarShow"></button>
<zl-calendar v-model="show" @change="calendarChange"/>
```
> js

```
data:{
    selectedData:[],
    show: false
}
calendarShow(){
  this.show = true
},
calendarChange(val){
    this.selectedData = val
}
```
> 属性


|名字 | 类型 | 默认值 | 说明 | 版本要求|
|-------------|-------------|-----|-------------|-------------|
|close | String | × | 关闭文字|--|
|color | String | rgb(17,55,160) | 选中的背景色 |--|
|lightColor | String | rgb(17,55,160,.15) | 开始结束之间的背景色 |--|
|title | String | 选择日期 | 标题文字 |--|
|months | [Number,String] | 6 | 月份长度 |--|
|type | String | double | 选择类型 // start 开始, end 结束, double 双选 |--|
|selectedDate | Array | [moment().format('YYYY-MM-DD'),moment().add(1, 'd').format('YYYY-MM-DD')] | 默认选中日期 |--|
|selectedText | Array | ['入店','离店'] | 选中的文字，顺序不可颠倒 |--|


> 事件

|名字 | 参数 |  说明 | 版本要求|
|------|------|------|------|
|change|(Array,selectedDate)|切换选中的日期区间|--|


### ZlCheckbox
> 多选框
###### 使用方法

> html
```
<zl-checkbox v-model="checked" :len="len" :max="max" @change="change"></zl-checkbox>
```
> js

```
data:{
    checked:false
},
methods:{
  change(checked){

  }
}

```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|checked | Boolean | false | 选中状态|--|
|disabled | Boolean | false | 不可选中 |--|
|len | [Number, String] | -- | 当前选中长度 |--|
|max | [Number, String] | -- | 允许选择最大长度 |--|

> 事件

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|change | (Boolean) | 切换选中样式时触发 |--|


### ZlDialog
> dialog弹框
###### 使用方法

> html
```
<zl-dialog v-model="show"  @change="change"></zl-dialog>
```
> js

```
data:{
    show:false
},
methods:{
  change(show){

  }
}

```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|show | Boolean | false | 使用 v-model 绑定 |--|


### ZlDialogPlugin
> dialog弹框
###### 使用方法, 暂无默认值，推荐使用 ZlDialog引入

> 方法

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|this.$zhenlv.dialog.show() | -- | 弹窗显示 |--|
|this.$zhenlv.dialog.hide() | -- | 弹窗关闭 |--|

参数1 目前可选: 暂时不支持

参数2 目前可选文字: 暂时不支持

### ZlLoading
> loading加载
###### 使用方法

> 方法

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|this.$zhenlv.loading.show({type:'three-rhombus',text:'正在加载',background:'red'}) | -- | loading显示 |--|
|this.$zhenlv.loading.hide() | -- | loading关闭 |--|

type 目前可选loading样式:  circle, accordion, double-circle, heart, rotate-circle, scale-circle, three-rhombus,默认 three-rhombus

text 目前可选文字:  自己定义的 text值, 默认 加载中

background 背景颜色，默认无背景色，支持自定义 


### ZlRadio
> 单选框
###### 使用方法

> html
```
<zl-radio v-model="checked" @change="change"></zl-radio>
```
> js

```
data:{
    checked:false
},
methods:{
  change(checked){

  }
}

```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|checked | Boolean | false | 选中状态|--|
|disabled | Boolean | false | 不可选中 |--|

> 事件

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|change | (Boolean) | 切换选中样式时触发 |--|


### ZlRange
> 价格滑块，双向滑动，开发人员可以自定义最大值和最小值
###### 使用方法

> html
```
<v-range
  :max="rangeOptions.max"
  :min="rangeOptions.min"
  :space="150"
  :step="50"
  :point="3"
  :min-value="storeRange.minValue"
  :max-value="storeRange.maxValue"
  :status="showFlag"
  @min-move="minMove"
  @max-move="maxMove">
</v-range>
```
> js

```
data:{
    rangeOptions: {
        min: 0,
        max: 1050,
    },
    storeRange:{
        minValue:0,
        maxValue:1050
    },
    showFlag: false,
    
}
methods:{
    minMove (val) {
        this.storeRange.minValue = val
    },
    maxMove (val) {
        this.storeRange.maxValue = val
    },
}
```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|step | [String, Number] | 1 | 步长，默认是1像素|--|
|min | [String, Number] | 0 | 可选的最小值 |--|
|max | [String, Number] | 100 | 可选的最大值 |--|
|minValue | [String, Number] | 0 | 选中的最小值 |--|
|maxValue | [String, Number] | -- | 选中的最大值 |--|
|space | [String, Number] | 10 | 每步滑动的像素 |--|
|point | [String, Number] | 10 | 一共滑几次到头 |--|
|status | Boolean | true | 弹框显示状态 |--|

> 事件

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|minMove | (String) | 切换最小值时触发 |--|
|maxMove | (String) | 切换最大值时触发 |--|


### ZlSlideDelete
> 左滑删除，可以自定义滑动或不滑动，主要内容需根据组件需求而定义

[git源文件地址](https://github.com/xuqichuang/zl-slide-delete)
###### 使用方法

> html
```
<zl-slide-delete 
  :options="dataList"
  @delete-item="deleteFn" 
  @editor="editorFn"/>
```
> js

```
data:{
dataList:[
    {
      id:1,
      title:'他大舅',
      content:[
        12,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:2,
      title:'他二舅',
      content:[
        15,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点，臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:3,
      title:'都是他舅',
      content:[
        19,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    }
],// 数组里的content必须存在
}
methods:{
    editorFn(item){
      console.log(1,item)
    },
    deleteFn(index){
      this.dataList2.splice(index, 1)
    },
}
```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|options | Array | -- | 传入的列表 |--|
|left | String | none，目前可选 'none', 'editor' | 左侧编辑，删除选项 |--|
|right | String | none，目前可选 'none', 'editor' | 右侧选中，编辑选项 |--|
|slideDelete | Boolean | true，true 可以左滑删除， false 不可以左滑删除 | 是否支持左滑删除 |--|
|editor | Boolean | true，true 可以编辑， false 不可以编辑 | 列表是否可编辑 |--|
|leftImgOptions | Object | { img: require('./img/editor.png'),width: '20px',height: '20px' } | 左侧内容， 当left不为none显示 |--|
|rightImgOptions | Object | { img: require('./img/editor.png'),width: '20px',height: '20px' } | 右侧内容， 当right不为none显示 |--|

> 事件

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|delete-item | (index，item) | index, Number 删除的索引，item, Object 数组中的某一项 |--|
|editor | (item) | item, Object 数组中的某一项, 开发人员可以根据item 做编辑删除操作 |--|



### ZlSwitch
> switch选择器
###### 使用方法

> html
```
<zl-switch v-model="checked" @change="change"></zl-switch>
```
> js

```
data:{
    checked:false
},
methods:{
  change(checked){

  }
}

```
> 属性

|名字 | 类型 | 默认值 | 说明 | 版本要求|
|---|---|---|---|---|
|checked | Boolean | false | 选中状态|--|
|disabled | Boolean | false | 不可选中 |--|
|options | Object | -- | {show:'选中文案', hide: '不选中文案'} |--|

> 事件

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|change | (Boolean) | 切换选中样式时触发 |--||



### ZlToast
> toast提示
###### 使用方法

> 方法

|名字 | 参数 |  说明 | 版本要求|
|---|---|---|---|
|this.$zhenlv.toast.show({text:'提示文字', time: 2000, type: 'three-rhombus'}) | -- | toast显示 |--|
|this.$zhenlv.toast.hide() | -- | toast关闭 |--|

type 目前可选toast提示类型:  默认 'three-rhombus', 无其他值

text 目前可选文字:  自己定义的 text值, 无默认值

time 持续时间, 默认 2000 
