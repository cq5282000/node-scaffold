/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:40 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-12 20:24:30
 */
const fs_hello = async(ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
};

export default {
    method: 'get',
    callback: fs_hello,
    url: '/hello/:name',
};