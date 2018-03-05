/*
 * @Author: chenqu 
 * @Date: 2018-02-08 13:25:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-02 18:07:16
 */
// 倒入koa的类
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

const open = require('open');
const openBrowser = () => {
    // const address = server.listeningApp.address();
    const url = `http://localhost:3000/hello/koa`;
    open(url);
    // open(`${url}`);
};
// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const path = require('path');
// const webpackConfig = require('../../webpack.config');

// const compiler = webpack(webpackConfig);
// const server = new WebpackDevServer(compiler, webpackConfig.devServer);
// let opened = false;

// compiler.plugin('done', () => {
//     if (!opened) {
//         opened = true;
        
//     }
// });
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
openBrowser();
// 打开浏览器