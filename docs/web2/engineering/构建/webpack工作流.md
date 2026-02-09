# webpack工作流

## 概念

1. 是一个模块化管理工具和打包工具。**通过loader的转换，任何形式的资源都可以视为模块**，比如CommonJS模块、AMD模块、ES6模块、CSS、图片等，也就是可以将松散的模块按照依赖和规则打包成符合生产环境部署的前端资源
2. 可以将按需加载的模块进行分割，等需要的时候再异步加载
3. webpack被定义为一个模块打包器，而gulp和grunt属于构建工具。

## loader和plugin的区别

- loader也就是加载器。webpack将一切文件视为模块，但是webpack原生只是能解析js文件，有了loader就能把其他所有文件转换成js文件，那么就能通过webpack对所有的文件进行解析。**也就是loader给webpack提供了加载非js文件的能力。**
- plugin也就是插件。plugin可以扩展webpack的功能。因为在webpack的运行周期中会广播许多的事件，plugin只需要监听这些事件，在合适的时候通过webpack提供的API对ast进行操作，就达到了目的。

## 构建流程

### 关键的 webpack 事件节点

1. `compile` 开始编译
2. `make` 从入口点分析模块及其依赖的模块，创建这些模块对象
3. `build-module` 构建模块
4. `after-compile` 完成构建
5. `seal` 封装构建结果
6. `emit` 把各个chunk输出到结果文件
7. `after-emit` 完成输出

### 1. 初始化参数

解析webpack配置参数，合并shell传入的webpack.config.js文件的配置参数，得到最后的配置结果

### 2. 开始执行编译

用上一步得到的初始化参数去初始化compiler对象来注册所有配置的插件。插件监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。

- compiler模块：是 `webpack` 的支柱引擎，通俗来说就是接受配置参数，输出compiler实例。该实例的 `run` 方法可以触发所有编译工作。
> 这个对象有两个作用 :  
> 一是负责组织整个打包过程，包含了每个构建环节及输出环节所对应的方法，可以从图中看到比较关键的步骤，如 addEntry() , _addModuleChain() ,buildModule() , seal() , createChunkAssets() (在每一个节点都会触发 webpack 事件去调用各插件)。  
> 二是该对象内部存放着所有 module ，chunk，生成的 asset 以及用来生成最后打包文件的 template 的信息。

### 3. 编译模块

> 在创建 module 之前，Compiler 会触发 make，并调用 Compilation.addEntry 方法，通过 options 对象的 entry 字段找到我们的入口js文件。

从入口文件触发，调用所有配置的loader对模块进行编译，在找出该模块依赖的模块，依次递归直到所有入口依赖文件都经过了loader编译

### 4. 完成编译

递归结束后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry配置生成代码块chunk。

- chunk：webpack的代码块，是Webpack打包过程中，一堆module的集合

### 5. 写入文件

输出所有的 chunk 到文件系统。

## webpack热更新的原理

就是当我们的代码修改并保存后,webpack将会对代码进行更新打包，并将新的模块发送到浏览器端，浏览器用新的模块替代旧的模块。

## 如何利用webpack优化性能？

- 压缩
- 代码分割
- 清除无用css
- tree shaking

> Tree-shaking的本质是消除无用的js代码。无用代码消除在广泛存在于传统的编程语言编译器中，编译器可以判断出某些代码根本不影响输出，然后消除这些代码，这个称之为DCE（dead code elimination）。  
> Tree-shaking 是 DCE 的一种新的实现，Javascript同传统的编程语言不同的是，javascript绝大多数情况需要通过网络进行加载，然后执行，加载的文件大小越小，整体执行时间更短，所以去除无用代码以减少文件体积，对javascript来说更有意义。
