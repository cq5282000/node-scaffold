# node-scaffold
node.js项目脚手架
## 2018年2月七日

### 项目新建工程基本配置

- 安装node和npm，并且确定node和npm能正常运行

```bash
$ node -v
```
查看当前安装的node版本

- 代码第一行总是写上‘use strict’;以严格模式运行代码，避免各种潜在的陷阱。

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

nodeJS支持es6的语法规范，后期会使用插件用import，export取代CommonJS的加载机制。

- javascript中有且仅有一个全局对象，叫window，但在node.js中，唯一的全局对象叫global。

通过node指令进入node环境，输入global可以查看global所包含的对象和工具，

