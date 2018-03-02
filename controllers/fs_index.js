/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-02 20:38:16
 */
const Test = require('../dist/app').default;
const { renderToString } = require('react-dom/server');
const fs_index = async(ctx, next) => {
    const html = renderToString(Test());
    const name = ctx.params.name;
    ctx.response.body = html;
};

module.exports = {
    method: 'get',
    callback: fs_index,
    url: '/',
};