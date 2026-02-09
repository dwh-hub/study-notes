# apply与call
> 参考链接：  
> call: *https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call*  
> apply: *https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply*

## 共同点

他们的共同点是，都能够**改变函数执行时的上下文（也就是函数内部的this指向）**，将一个对象的方法交给另一个对象来执行，并且是立即执行的。  
**调用 call 和 apply 的对象，必须是一个函数 Function**。

> A 对象有一个方法，而 B 对象因为某种原因，也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？当然是借用 A 对象的啦，既完成了需求，又减少了内存的占用。

## 区别

它们的区别，主要体现在参数的写法上。

### call 的写法

```js
Function.call(thisArg, arg1, arg2, ...)

```

**参数：**

- thisArg：可选的，在 function 函数运行时使用的 this 值，若不传或为`null/undefined`时，自动替换成指向全局对象 window
- arg1, arg2, ...：任意个参数，每个参数会映射到相应位置的`Function`的参数上。

### apply 的写法

```js
Function.apply(thisArg, argsArray)

```

**参数：**
- thisArg：与`call`一致
- argsArray：一个数组或者类数组对象

**什么是类数组？**

就是**具备与数组特征类似的对象**  
类数组 arrayLike 可以通过角标进行调用，具有length属性，同时也可以通过 for 循环进行遍历。如下：

```js
let arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

```

**类数组无法使用 forEach、splice、push 等数组原型链上的方法**

## 用法

### call

1. **对象的继承**

```js

function Game(name, price) {
  this.name = name;
  this.price = name;
}

function Pokemon(name, price, edition) {
  // 通过call方法继承Game的变量和方法
  Game.call(this, name, price)
  // 扩展其他方法
  this.edition = edition

}

const pokemon9 = new Pokemon('宝可梦', 298, '朱紫')

console.log(pokemon9.name) // 宝可梦
```

2. **借用方法**，比如上面的类数组要使用数组专属的方法

```js
// 1. 赋值给新对象
let array = Array.prototype.slice.call(arrayLike)
console.log(array.slice(1)) // [2, 3]

// 2. 直接调用
Array.prototype.slice.call(arrayLike, 1)
console.log(array.slice(1)) // [2, 3]

```

### apply

与call用法大致相同

例子：

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // 7

const min = Math.min.apply(null, numbers);

console.log(min); // 2

// 注：感觉不如扩展运算符……方便

```


## 实现

### 实现call

目标

```js
let Game = {
  name: 'gameName',
  say() {
    console.log(`游戏名：${this.name}`)
  }
}

let Pokemon = {
  name: '宝可梦'
}

// 原生效果 - Pokemon 借用 Game的say方法
Game.say.call(Pokemon) // 游戏名：宝可梦

```

实现

```js
Function.prototype.myCall = function(thisArg) {
  // 1.调用对象需要是函数
  if (typeof this !== 'function'){
    throw new TypeError(this + ' is not a function');
  }

  // 2. 没传参数时，指向全局 window
  thisArg = thisArg || window

  // 3. 给方法名设置一个唯一值，防止和thisArg上的方法名重复导致原方法被覆盖
  let fn = Symbol()

  // 4. 给thisArg添加这个方法，指向this
  thisArg[fn] = this 

  // 5. 处理参数，去除第一个参数thisArg, 其他传入fn函数
  let args = [...arguments].slice(1)

  // 6. 执行该方法
  thisArg[fn](...args)

  // 7. 执行完成后删除该方法
  delete thisArg[fn]
}

// 实现效果
Game.say.myCall(Pokemon) // 游戏名：宝可梦

```

### 实现apply

```js
Function.prototype.myApply = function(thisArg) {
  if (typeof this !== 'function'){
    throw new TypeError(this + ' is not a function');
  }

  thisArg = thisArg || window
  let fn = Symbol()
  thisArg[fn] = this
  let arg = [...arguments].slice(1)
  // 与call的差别就是，arg只会有一个参数，并且类型是数组/类数组
  thisArg[fn](arg)
  delete thisArg[fn]
}

```
