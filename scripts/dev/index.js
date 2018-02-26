/*
 * @Author: chenqu 
 * @Date: 2018-02-08 13:25:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-02-26 11:22:14
 */
// 倒入koa的类
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

const open = require('open');

// 引入body-parser
app.use(bodyparser());

// 引入controllers
app.use(async (ctx, next) => {
    await next();
});
const router = require(`${process.cwd()}/controllers/index.js`)();
app.use(router);

app.listen(3000);
console.log('app started at port 3000');

// 打开浏览器
const openBrowser = () => {
    // const address = server.listeningApp.address();
    const url = `http://localhost:3000/hello/koa`;
    open(url);
    // open(`${url}`);
};
openBrowser();