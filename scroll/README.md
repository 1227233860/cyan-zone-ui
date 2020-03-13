# Scroll使用方法

## 1、引入

```
import { __Scroll } from '@cyan-zone/ui';
```

## 2、基础使用

1. 给需要添加滚动动画的元素添加 **.cyan-animate** 类名，对其直接父级添加任意选择器（若标签是唯一的，也可不加）；

```
<div class="container>
    <img class="cyan-animate" src="1.png">
    <img class="cyan-animate" src="2.png">
    <img class="cyan-animate" src="3.png">
    <img class="cyan-animate" src="4.png">
</div>
```

2. 在相应的钩子上调用 **prepare** 函数，并传入容器选择器。

```
ngAfterViewInit(): void {
    __Scroll.prepare('.container');
}
```

原则上只需要对需要添加滚动动画的元素添加 **.cyan-animate** 类名，给prepare函数提供容器的选择器即可。

## 3、注意

1. 为了能够正确找到相应元素，请尽量为父级元素提供唯一的选择器。
2. 保证需要添加动画的元素直接父级溢出，例如：

```
<!-- 正确的做法 -->
<div class="container" style="overflow: auto">
    <img class="cyan-animate" src="1.png">
    <img class="cyan-animate" src="2.png">
    <img class="cyan-animate" src="3.png">
    <img class="cyan-animate" src="4.png">
</div>

<!-- 错误的做法 -->
<div class="container" style="overflow: auto">
    <div>
        <img class="cyan-animate" src="1.png">
        <img class="cyan-animate" src="2.png">
        <img class="cyan-animate" src="3.png">
        <img class="cyan-animate" src="4.png">
    </div>
</div>

<!-- 错误的做法 -->
<body style="overflow: auto">
    <div class="container">
        <img class="cyan-animate" src="1.png">
        <img class="cyan-animate" src="2.png">
        <img class="cyan-animate" src="3.png">
        <img class="cyan-animate" src="4.png">
    </div>
</body>
```

## 4、Api

|属性|描述|类型|默认值|可选值|
|---------|--|-----|-------|--|
|cyan-name|动画类型|enum|opacity|opacity/slideBottom/slideslideTop
|cyan-delay|动画延迟后执行|number|100(ms)|
|cyan-duration|动画持续时间|number|500(ms)|
|cyan-timing|动画执行的速率|string|ease-in|ease-in/ease-out/ease/ease-in-out/cubic-bazier(x2, y2, x2, y2)
