let publicPathStr = '/entry/'; // 公共路径字符串
const path = require('path');
module.exports = [{
    entry: {
        app: './common/app.js'
    },
    target: "node",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        publicPath: publicPathStr,
        library: 'app',
        libraryTarget: 'commonjs2',
        // publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname),
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'node_modules'),
        inline: true,
        historyApiFallback: true,
        stats: 'normal',
        publicPath: publicPathStr,
        host: '0.0.0.0',
        port: 8000,
    },
}];