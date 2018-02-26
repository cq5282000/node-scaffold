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

## 2018年2月11号

关于node做中间层项目的几点思考：

- 同构的概念，同一份代码，既可以跑在浏览器端，又可以跑在服务器端。

- 同构主要用来解决前端渲染的两个痛点， seo和首屏加载。
1. seo的概念很好理解，由于传统的搜索引擎只会从HTML中抓取数据，导致前端的渲染的界面无法被读取。
2. 前端渲染尝使用的SPA会把所有的JS整体打包，导致文件太大，渲染等待的时间很长，特别是网速差的时候，白屏时间会非常长。

- 同构优点
1. seo即搜索引擎优化，其实一些后台类的应用不需要，但是一些内容型网站，需要做搜索排名的，需要做这部分优化，，同构的时候使用后台渲染成最终的HTML，满足了seo的需求.
2. 由于spa打包生成的JS往往都比较大，会导致页面加载后花费很长的时间来解析，也就是所谓的白屏问题，服务端渲染可以预先拿到数据并渲染成最终的HTML展示，一定程度上解决了白屏问题。

- 同构缺点
1. 所有的工作游浏览器端转在后台完成，对计算力要求高。
2. 其次个性化缓存。原来的每个每个用户个性化缓存信息都存储到浏览器，这是一个天生的分布式系统，如果这些缓存全部放到服务器存贮，需要的存储空间和计算都是非常大的。
3. 浏览器端和服务器端的环境差异，document服务器端找不到对象，前端渲染和服务器端渲染内容不一致的问题，DOM计算报错等的问题。
4. 内存溢出，前端代码浏览器刷新内存重置，但是对于服务端，React 的设计是服务器端渲染只会运行 `componentDidMount` 之前的操作。
5. redux的simple store 是必须以字符串形式塞到前端，所以复杂类型是无法转义成字符串的，比如function。

- 同构应用构建
1. 包管理工具和模块管理工具一致，其中对于包管理工具，前端和node目前都使用npm进行管理，保证了客户端和服务端可以使用同一个兼容包。
2. 模块依赖方式：通过webpack这样的打包工具，可以保证前端和后台均适用CommonJS的依赖方式，确保代码相互依赖。

### 最重要的一点，应用别人的观点，上游才是主导，底层才是主导，比如Google支持spa的seo的话，我们同构与否其实并没有多大影响，然后硬件才是终结者。随便一个升级，所有考虑都是多余的。

## react虚拟DOM，以对象树的形式保存在内存中，，并在前后端有两种展露原型的形式

- 客户端上，虚拟DOM通过ReactDOM的Render方法渲染到页面中。
- 服务端上，react提供的另外两个方法：ReactDOMServer.renderToString和ReactDOMServer.renderToStaticMarkup可将其渲染为字符串。
- 在服务端上component生命周期只会到componentWillMount,其余的生命周期会在客户端继续执行。
- 同构时，服务端结合数据将component渲染成完整的HTML字符串并将数据状态返回给客户端，客户端判断是都可以直接使用或需要重新挂载；
- 同构的项目，当前后端需要使用同一段代码的时候，像前端特有的window对象，ajax请求在后端是无法使用的。需要根据平台进行代码适配

解决方案：
1. 使用前后端通用模块，如isomorphic-fetch
2. 前后端通过webpack配置resolve.alias对应不同文件；
例如客户端：

```javascript
resolve: {
    alias: {
        'request': path.join(pathConfig.src, '/browser/request'),
    }
}
```
服务器端：

```javascript
resolve: {
    alias: {
        'request': path.join(pathConfig.src, '/server/request'),
    }
}
```

3. 定义一个平台全局变量，然后在JS代码逻辑中根据这个全局变量去适配

```javascript
new webpack.DefinePlugin({
    "__ISOMORPHIC__": true
}),
```
在JS代码逻辑上做判断

```javascript
if(__ISOMORPHIC__){
    // do server thing
} else {
    // do browser thing
}
```

### 2018年2月12日

服务端渲染：

客户端请求----》后端渲染好HTML字符串-----》客户端接受html字符串渲染静态界面-------》客户端下载reactJS----》客户端执行reactJS-----》界面变成可交互

客户端渲染的概念是：

客户端请求----》服务端响应---》客户端下载reactJS----》客户端执行react-------》前端显示出可交互的界面

- redux

- webpack做语法兼容

```javascript
require("babel-register")({
    extensions: [".jsx"],
    presets: ['react']
});
require("babel-polyfill");
```

- UglifyJsPlugin慎用

- 纠正_filename和_dirname的值
当服务端代码需要使用到 __dirname 时，需在 webpack.config.js 配置 target 为 node，并在 node 中声明__filename和__dirname为true，否则拿不到准确值
```javascript
target: 'node', 
node: {
    __filename: true,
    __dirname: true
}
```

- react-router
webpack 现在是不支持在 server 上使用 webpack.ensure 的,所以react-router的require.ensure的按需加载服务器端渲染的时候不能用。
所以同构项目中，server端全加载，client按需加在。

在群里一讨论，又是一堆疑问。
记录下未解决的问题：
Q1: react端渲染的生命周期到componentWillMount,假如我写了componentDidMount，客户端显示界面以后，componentDidMount会在客户端继续执行吗？？

Q2: 对于引入react-router的服务端渲染的SPA，页面切换的时候，是不是会重新发起HTTP请求，还是本地记载的？？？？？

### 2018年2月13日

基本问题想清楚以后，今天继续项目的搭建。

- koa-router, 处理URL

- koa-bodyparser, 因为无论是原始的nodeJS的request对象还是koa提供的request对象，对不提供解析request的body的功能，所以我们需要引入koa-bodyparser来进行解析。koa-bodyparser必须在router之前注册到app对象上；

#### 结构设计

- 所有的接口处理函数统一放置在controller文件夹下，开发的时候每个接口处理文件单独建一个新的js文件，统一输出；

### 2018年2月23日

嗯，过个年完全失忆了，什么都记不起来了，哎，感觉完蛋了，呵呵，学习，学你妹。。。

### 2018年2月24日

- 把所有接口抽象出来放在controller文件夹下，开发的时候可以在controllers直接新建JS文件，也可以根据页面新建文件夹，具体可以看demo。

- 工程运行指令

```bash
yarn run dev
```

### 2018年2月26日
