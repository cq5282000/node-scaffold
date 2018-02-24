const fs = require('fs');
const router = require('koa-router')();
const readDirRecurison = (path) => {
    const files = fs.readdirSync(path);
    files.map((item, index) => {
        item !== 'index.js' && fs.stat(`${path}/${item}`, (errStat, stats) => {
            if (errStat) throw errStat;
            if (stats.isFile()) {
                console.log(`${path}/${item}`);
                const controller = require(`${path}/${item}`);
                const {callback, url, method} = controller;
                if (method.toLowerCase() === 'post') {
                    router.post(url, callback);
                } else {
                    router.get(url, callback);
                }
            } else {
                readDirRecurison(`${path}/${item}`);
            }
        });
    });
};

// module.export = router; 
module.exports = () => {
    readDirRecurison(__dirname);
    return router.routes();
};