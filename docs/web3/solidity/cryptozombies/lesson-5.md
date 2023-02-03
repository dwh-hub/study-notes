# 第五节 ERC721 标准和加密收藏品

该节课主要是运用之前的知识，实现一个 ERC721 代币合约。

## 代币的基本概念

> 一个 _代币_ 在以太坊基本上就是一个遵循一些共同规则的智能合约——即它实现了所有其他代币合约共享的一组标准函数。  
> 基本上一个代币只是一个追踪谁拥有多少该代币的合约，和一些可以让那些用户将他们的代币转移到其他地址的函数。

### 代币的基本功能

- 将代币从一个帐户转到另一个帐户
- 获取帐户的当前代币余额
- 获取网络上可用代币的总供应量
- 批准一个帐户中一定的代币金额由第三方帐户使用

### ERC20 和 ERC721 区别

- ERC20: 这就是以太坊上常见的虚拟币类型，和货币类似
- ERC721: ERC721 代币是不能互换的，因为每个代币都被认为是唯一且不可分割的。 你只能以整个单位交易它们(不能说我转你 0.2 个这种)，并且每个单位都有唯一的 ID。(例如: NFT)

## ERC721 合约基本功能

一个标准的 ERC721 合约所包含的方法：

```solidity
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}
```

1. `balanceOf`: 返回 `_owner` 拥有的代币数量
1. `ownerOf`: 返回 `_tokenId` (代币的唯一 id)的所有者
1. `transfer`: 代币拥有者转移代币，传入他想转移到的 address 和他想转移的代币的 \_tokenId。
1. `approve`: 相当于将代代币存起来，并设置谁有权限提取存储的代币，然后有权限的人调用 `takeOwnership` 提取代币。
1. `takeOwnership`: 提取通过 `approve` 授权并存储的代币。

## 溢出和下溢

- 溢出(overflow): 当超出地址所存储的最大值，将会被重置。

假设我们有一个 uint8, 只能存储 8 bit 数据,这意味着我们能存储的最大数字就是二进制 11111111 (或者说十进制的 2^8 - 1 = 255).

```solidity
uint8 number = 255
number++ // number => 0 就像时钟23:59 => 00:00一样
```

- 下溢(underflow): 原理同上，
```solidity
uint number = 0
number-- // number => 255, 因为uint是无符号的，没有负数
```

## 笔记

1. 关键字 `library`(库): 和合约`contract`类似，区别是库允许我们使用 using 关键字，它可以自动把库的所有方法添加给一个数据类型：

```solidity
using SafeMath for uint;
// 这下我们可以为任何 uint 调用这些方法了
uint test = 2;
test = test.mul(3); // test 等于 6 了
test = test.add(5); // test 等于 11 了
```