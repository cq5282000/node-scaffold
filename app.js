/*
 * @Author: chenqu 
 * @Date: 2018-02-08 13:25:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-02-24 11:41:51
 */
// 倒入koa的类
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

// 引入body-parser
app.use(bodyparser());

// 引入controllers


app.use(async (ctx, next) => {
    await next();
});
const router = require(`${__dirname}/controllers/index.js`)();
console.log(router);
app.use(router);

app.listen(3000);
console.log('app started at port 3000');

