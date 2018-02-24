/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:43 
 * @Last Modified by:   chenqu 
 * @Last Modified time: 2018-02-24 12:29:43 
 */
const fs_index = async(ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello world</h1>`;
};

module.exports = {
    method: 'get',
    callback: fs_index,
    url: '/',
};