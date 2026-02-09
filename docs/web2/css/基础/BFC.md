# BFC

## 基本概念
BFC 即 Block Formatting Contexts (块级格式化上下文)。
**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素。**

## 常见定位方案

- 普通流 (normal flow)
- 浮动 (float)
- 绝对定位 (absolute positioning)

### 触发BFC

- html 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

### BFC特性及应用
**1. 同一个 BFC 容器下外边距会发生折叠**  
解决方案：将其放在不同的BFC容器中

**2. BFC 可以包含浮动的元素（清除浮动）**  
浮动的元素会脱离文档流，如下：

```html
<div style="border: 1px solid #000;">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

<div style="border: 1px solid #000;margin-bottom: 110px">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>

解决方案：触发父级的BFC机制

```html
<!-- 1. overflow: hidden -->
<div style="border: 1px solid #000;overflow: hidden">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
<!-- 2. display: inline-block -->
<div style="border: 1px solid #000;display: inline-block">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

<div style="border: 1px solid #000;overflow: hidden;margin-bottom: 20px">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
  
<div style="border: 1px solid #000;display: inline-block">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>


