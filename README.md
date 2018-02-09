# node-scaffold
node.js项目脚手架
## 2018年2月七日

### 项目新建工程基本配置

- 安装node和npm，并且确定node和npm能正常运行

```bash
$ node -v
```
查看当前安装的node版本

- ‘use strict’，以严格模式运行代码，避免各种潜在的陷阱。

- JS执行

```bash
$ node hello.js
```

以node环境执行hello.js，也可以直接执行

```bash
$ node
```
可以直接执行JS语句

- nodeJS支持CommonJS规范的模块加载机制, module.export, require.

nodeJS支持es6的语法规范,但是不支持，import，export，这个体验非常不好，后期会使用插件用import，export取代CommonJS的加载机制。

- javascript中有且仅有一个全局对象，叫window，但在node.js中，唯一的全局对象叫global。

通过node指令进入node环境，输入global可以查看global所包含的对象和工具。

## 2018年2月8号

### nodeJS基本模块

node.js是运行在服务器端的javascript环境中的，服务器最大的特点是没有浏览器端的安全限制了，服务器程序的必须能接受网络请求，读写文件，处理二进制，所以，node.js常用的内置模块就是为了实现基本的服务器功能，这些模块在浏览器中是无法被执行的，因为他们底层的代码是用c/c++在node.js环境中运行实现的。

- fs文件读取模块，有一点要注意，非空目录无法删除，unlinkSync()是用来删除文件而不是文件夹，为了移除一个空文件夹，使用fs.rmdir()；

- streams是一个流读取模块。

- http,为了支持各种可能的http应用，node.js的API是非常底层的，只涉及流处理与消息解析。 把一个消息解析成头和消息主体，但不设计具体的消息头和消息主体。

- https，https是http基于TLS／SSL的版本，在node.js中，它被称为一个独立的模块。

- 这里我们引入koa框架，进行快速开发。但是有一个问题需要注意，安装koa的时候,如果是使用yarn进行安装，当前默认安装的最新版本是2.4.1，他只兼容node ^7.10.1,此处安装koa可以使用npm，默认的是next版本，或者直接

```bash
yarn add koa@next
```
