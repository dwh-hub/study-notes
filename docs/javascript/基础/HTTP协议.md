# HTTP协议

## 简介

`HTTP`协议(超文本传输协议HyperText Transfer Protocol)，它是基于TCP协议的应用层传输协议，简单来说就是客户端和服务端进行数据传输的一种规则。

## HTTP请求

HTTP报文：是HTTP协议在客户端和服务端之间传送的数据块。

### 请求报文构成

1. 请求行：包括请求方法、URL、协议/版本
2. 请求头(Request Header)
3. 请求正文（只有在发送`POST`请求时才会有请求正文，`GET`方法并没有请求正文）：请求参数

### 响应报文构成

1. 状态行
2. 响应头
3. 响应正文：后端返回的实际数据

## 什么是状态码

1xx：指示信息-表示请求已接受，继续处理  
2xx：成功-表示请求已被成功接受  
3xx：重定向-要完成请求必须进行更近一步的操作  
4xx: 客户端错误-请求有语法错误或请求无法实现  
5xx：服务器错误-服务器未能实现合法的请求  

## GET与POST区别

- **GET参数通过URL传递，POST放在Request body中**
- GET请求在URL中传送的参数的有长度限制的，而POST没有限制
- **post更安全（不会作为url的一部分，不会被缓存、保存在服务器日志、以及浏览器浏览记录中）**
- post在真正接收数据前，会将请求头发给服务器进行确认，然后才发送请求体给服务器


## HTTP和HTTPS
> 由于HTTP自己本身是一个明文协议，每个HTTP请求和返回的数据在网络上都是明文传播，无论是url、header还是body。 只要在网络节点抓包，就能获取完整的数据报文，要防止泄密的唯一手段就是使用HTTPS

HTTPS（Hypertext Transfer Protocol Secure：超文本传输安全协议）
- HTTPS = SSL（互联网加密通信）+HTTP 
- HTTP 明文传输，数据都是未加密的，HTTPS 数据传输过程是加密的。
- HTTP通过3次握手建立链接， HTTPS是7次，因此HTTPS会导致页面加载时间变长
- http 默认端口80，https 是443

## 经典面试题：从 URL 输入到页面展现到底发生什么
1. DNS 解析:将域名解析成 IP 地址
2. TCP 连接：TCP 三次握手
3. 发送 HTTP 请求
4. 服务器处理请求并返回 HTTP 报文
5. 浏览器解析渲染页面
6. 断开连接：TCP 四次挥手

### URL的构成

一个普通的URL遵循以下语法个规则
```
scheme://host.domain:port/path/filename
```
- scheme - 定义因特网服务的类型。常见的协议有 http、https、ftp、file，其中最常见的类型是 http
- host - 定义域主机（http 的默认主机是 www）
- domain - 定义因特网域名，比如 http://w3school.com.cn
- port - 定义主机上的端口号（http 的默认端口号是 80）
- path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
- filename - 定义文档/资源的名称

### 域名解析（DNS）

在浏览器输入网址后，首先要经过域名解析，因为浏览器并不能直接通过域名找到对应的服务器，而是要通过 IP 地址。

### TCP的三次握手

1. 第一次握手：客户端尝试连接服务器，向服务器发送数据包，并等待服务器确认
2. 第二次握手：服务器接收客户端数据包并确认，同时向客户端发送确认信息
3. 第三次握手：客户端收到确认信息，并向服务器发送确认包，代表握手结束