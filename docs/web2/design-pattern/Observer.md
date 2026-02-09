# 观察者模式

**是一种一对多的对象依赖关系，他的大致构成是 观察者-通知者。**

应用场景：用户预订商品，当商品有库存后，通知所有预订订单发货

- 观察者类 observer 接受一个用户手机号 生成一个预订订单

```js
class Order {
  constructor(phone) {
    this.phone = phone
  }

  // 发货方法
  sendOutGoods() {}
}
```

- 通知者类 subject 对观察者类进行增删改查和通知观察者

```js
class OrderManage {
  constructor() {
    // 存储订单
    this.orderList = []
  }

  // 增加订单
  addOrder(order) {
    // 订单有发货方法才加入订单列表
    if (order && order.sendOutGoods) {
      this.orderList.push(order)
    }
  }

  // 删除订单
  removeOrder(phone) {
    for (let i in this.orderList) {
      const _order = this.orderList[i]
      if (_order.phone === phone) {
        this.splice(i, 1)
        return
      }
    }
  }

  // 通知订单发货
  notify() {
    this.orderList.forEach(item => {
      item.sendOutGoods()
    })
  }
}
```

```js
const order_1 = new Order('130')
const order_2 = new Order('138')

const orderManage = new OrderManage()

orderManage.add(order_1)
orderManage.add(order_2)

// 发货
orderManage.notify()
```
