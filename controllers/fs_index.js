/*
 * @Author: chenqu 
 * @Date: 2018-02-24 12:29:43 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-12 20:47:22
 */
// const Test = require('../dist/app').default;
// import Test from '../common/app';
import Test from '../dist/app';
import { renderToString } from 'react-dom/server';
// const { renderToString } = require('react-dom/server');
const fs_index = async(ctx, next) => {
    const html = renderToString(Test());
    const name = ctx.params.name;
    ctx.response.body = html;
};

export default {
    method: 'get',
    callback: fs_index,
    url: '/',
};