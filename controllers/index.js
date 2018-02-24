const fs = require('fs');
const router = require('koa-router')();
const readDirRecurison = async(path) => {
    await fs.readdir(path, (errReaddir, files) => {
        if (errReaddir) throw errReaddir;
        files.map((item, index) => {
            item !== 'index.js' && fs.stat(`${path}/${item}`, (errStat, stats) => {
                if (errStat) throw errStat;
                if (stats.isFile()) {
                    // console.log(`${path}/${item}`);
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
    });
};

readDirRecurison(__dirname);

module.export = router; 