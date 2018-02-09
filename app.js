/*
 * @Author: chenqu 
 * @Date: 2018-02-08 13:25:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-02-08 13:38:35
 */
// 倒入koa的类
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello world</h1>';
});
app.listen(3000);
console.log('app started at port 3000');

