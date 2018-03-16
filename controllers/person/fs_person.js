/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:33 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-12 20:19:29
 */
const fs_person = async(ctx, next) => {
    ctx.response.body = '<h1>person</h1>';
};

export default {
    method: 'get',
    callback: fs_person,
    url: '/person',
};