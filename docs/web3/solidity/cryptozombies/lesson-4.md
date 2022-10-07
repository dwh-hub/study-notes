# 第四节 僵尸作战系统

## 笔记

1. `payable`修饰符：是一种可以接收以太的特殊函数。
```solidity
function buySomething() external payable {}
```
2. `this.balance`： 返回该合约地址里的以太坊余额
3. `msg.value`：和message一起发送过来的以太币(以wei为单位)

## 总结

这一课依然是根据以往知识细化“僵尸游戏”的逻辑，加深了`modifier`的用法，总体来说倒是和solidity的关系不大，都是通用的程序语言逻辑思想。没体现更多的solidity特性。

## 源码

[官方第四节代码github地址](https://github.com/CryptozombiesHQ/cryptozombies-lesson-code/tree/master/lesson-4/chapter-11)