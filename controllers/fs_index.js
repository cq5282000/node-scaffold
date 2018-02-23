const fs_index = (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>hello  ${name}</h1>`;
};

module.export = {
    method: 'get',
    callback: fs_index,
    url: '/',
};