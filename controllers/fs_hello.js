const fs_hello = (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
};

module.export = {
    method: 'post',
    callback: fs_hello,
    url: '/hello/:name',
};