const fs_person = async(ctx, next) => {
    ctx.response.body = '<h1>person</h1>';
};

module.exports = {
    method: 'get',
    callback: fs_person,
    url: '/person',
};