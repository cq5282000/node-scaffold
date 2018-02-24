const fs_index = async(ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
};

module.exports = {
    method: 'get',
    callback: fs_index,
    url: '/',
};