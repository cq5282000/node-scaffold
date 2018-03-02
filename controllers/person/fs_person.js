/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:33 
 * @Last Modified by:   chenqu 
 * @Last Modified time: 2018-02-24 12:29:33 
 */
const fs_person = async(ctx, next) => {
    ctx.response.body = '<h1>person</h1>';
};

module.exports = {
    method: 'get',
    callback: fs_person,
    url: '/person',
};