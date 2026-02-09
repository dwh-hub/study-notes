# 单例模式

**类只能被实例化一次，当实例已经存在时，只会返回该对象的引用**

## 实现

```js
let mySingleton = (function () {
  let instance;
  function init() {
    function privateMethod() {
      console.log("我是私有方法");
    }
    let privateVariable = "我是私有变量";
    let privateRandomNumber = Math.random();

    return {
      publicMethod: function () {
        console.log("公有方法");
      },
      publicProperty: "我也是公有的",
      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }
  return {
    getInstance: function () {
      // 保证只被实例化一次
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

let singletonA = mySingleton.getInstance();
let singletonB = mySingleton.getInstance();

console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber()); // true
```

## 应用场景

登录弹窗

```js
class loginModel {
  constructor() {
    this.state = "hide";
  }
  show() {
    if (this.state === "show") {
      return;
    }
    this.state = "show";
    console.log("显示登陆弹窗");
  }
  hide() {
    if (this.state === "hide") {
      return;
    }
    this.state = "hide";
    console.log("关闭登陆弹窗");
  }
}

loginModel.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new loginModel();
    }
    return instance;
  };
})();

let login = loginModel.getInstance();
```