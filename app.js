/*
 * @Author: chenqu 
 * @Date: 2018-02-08 13:25:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-02-23 20:47:55
 */
// 倒入koa的类
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

// 引入koa-router
const router = require('koa-router')();
app.use(bodyparser());

app.use(async (ctx, next) => {
    await next();
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>hello world</h1>';
});

router.get('/hello/:name', async(ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
});

router.get('/', async(ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000');

