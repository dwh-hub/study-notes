# 第一节 搭建僵尸工厂

## 笔记

1. `struct` 结构体，类似于`TypeScript`里的`interface`
```solidity
// solidity
struct Zombie {
    string name;
    uint dna;
}
// TypeScript
interface Zombie {
    name: string,
    dna: Number
}

// solidity
Zombie[] public zombies;
Zombie public zombie;
// TypeScript
let zombies = Array<Zombie>
let zombie: Zombie
```
2. 函数/变量修饰符/关键字
    1. `public`：可以供外部、子合约、合约内部访问。
    1. `external`：只能在合约之外调用 - 它们不能被合约内的其他函数调用。
    2. `private`：只能在合约内部访问。函数/变量名称前面加”_“来标识（和大多数语言一样）。
    3. `internal`：可供外部和子合约调用。（在第二节有体现）
    3. `view`：函数内只读取过solidity内的状态，没有改变过其状态。
    4. `pure`：函数内只使用到了入参，没有用到任何solidity的状态。
    5. `returns`: 声明函数返回的数据结构与类型。（带s的）
3. 事件`event`：个人理解是认为这是和”前端“进行数据交互的一种方式。
```solidity
// 声明一个事件，并声明其数据结构
event NewZombie(uint zombieId, string name, uint dna);
// 触发事件
emit NewZombie("id", "name", "dna");

// web3.js 前端监听事件获取数据，监听 `NewZombie` 事件
// ...省略部分代码
var event = ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  generateZombie(result.zombieId, result.name, result.dna)
})
```
4. `keccak256`：返回一个256位的随机数，支持多个入参。

## 源码

```solidity
pragma solidity ^0.4.25;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}
```