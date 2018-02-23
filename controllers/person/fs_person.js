const fs_person = (ctx, next) => {
    ctx.response.body = '<h1>person</h1>';
};

module.export = {
    method: 'get',
    callback: fs_person,
    url: '/person',
};