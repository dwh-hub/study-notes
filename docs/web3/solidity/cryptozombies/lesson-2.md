# 第二节 僵尸攻击人类

## 笔记

1. 合约继承：子合约能访问父合约的非私有属性之外的所有
```solidity
contract childContract is fatherContract {}
```
2. `mapping`：声明/存储数据的方法，和JavaScript的Map数据类似，是一个键值对。
```solidity
mapping (键 => 值) public name;
mapping (uint => address) public zombieToOwner;
```
3. `msg.sender`：当前调用者 （ 或智能合约 ）的 address
4. `require`: solidity中的错误处理方式，与`if`不同的是，`require`条件未通过时会自动抛出错误。
```solidity
function createRandomZombie(string _name) public {
    require(ownerZombieCount[msg.sender] == 0);
    // 等同于
    if (ownerZombieCount[msg.sender] == 0) { throw; }
}
```
5. `Storage`与`Memory`
> Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。 你可以把它想象成存储在你电脑的硬盘或是RAM中数据的关系。
6. 如何调用外部合约里的方法：需要先为该合约定义合约接口，然后通过该接口去调用。
```solidity
// 1. 有个外部合约Number
// 2. 为合约定义接口
contract NumberInterface {
  // 这个是外部合约的方法，这里定义的时候不用写{}。
  function getNum(address _myAddress) public view returns (uint);
}

// 3. 调用合约方法
// 3.1 事先拿到外部合约的address
address NumberInterfaceAddress = 0xab38...;
// 3.2 声明新的合约对象
NumberInterface numberContract = NumberInterface(NumberInterfaceAddress);
// 3.3 调用
numberContract.getNum(msg.sender);
```
7. 解构赋值：
```js
// javascript
let {a, b, c} = { a: 1, b: 2, c: 3 }

// solidity
uint a;
uint b;
uint c;
// 这样来做批量赋值:
(a, b, c) = multipleReturns();
// 差异点，solidity不完全是解构赋值，是按顺序赋值，如果要跳过第一个需要空写，如下：
(, , c) = multipleReturns();
```

## 源码

### zombiefactory.sol
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

    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;

    function _createZombie(string _name, uint _dna) internal {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        require(ownerZombieCount[msg.sender] == 0);
        uint randDna = _generateRandomDna(_name);
        randDna = randDna - randDna % 100;
        _createZombie(_name, randDna);
    }

}
```

### zombiefeeding.sol
```solidity
pragma solidity ^0.4.25;
import "./zombiefactory.sol";
contract KittyInterface {
  function getKitty(uint256 _id) external view returns (
    bool isGestating,
    bool isReady,
    uint256 cooldownIndex,
    uint256 nextActionAt,
    uint256 siringWithId,
    uint256 birthTime,
    uint256 matronId,
    uint256 sireId,
    uint256 generation,
    uint256 genes
  );
}
contract ZombieFeeding is ZombieFactory {

  address ckAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d;
  KittyInterface kittyContract = KittyInterface(ckAddress);

  function feedAndMultiply(uint _zombieId, uint _targetDna, string _species) public {
    require(msg.sender == zombieToOwner[_zombieId]);
    Zombie storage myZombie = zombies[_zombieId];
    _targetDna = _targetDna % dnaModulus;
    uint newDna = (myZombie.dna + _targetDna) / 2;
    if (keccak256(abi.encodePacked(_species)) == keccak256(abi.encodePacked("kitty"))) {
      newDna = newDna - newDna % 100 + 99;
    }
    _createZombie("NoName", newDna);
  }

  function feedOnKitty(uint _zombieId, uint _kittyId) public {
    uint kittyDna;
    (,,,,,,,,,kittyDna) = kittyContract.getKitty(_kittyId);
    feedAndMultiply(_zombieId, kittyDna, "kitty");
  }

}
```
