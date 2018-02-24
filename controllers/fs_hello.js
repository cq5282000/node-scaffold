const fs_hello = async(ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
};

module.exports = {
    method: 'post',
    callback: fs_hello,
    url: '/hello/:name',
};