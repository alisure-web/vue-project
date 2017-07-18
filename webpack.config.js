module.exports = {
    // 入口文件
    entry: __dirname + '/src/js/main.js',
    // 编译输出的文件路径
    output: {
        //`dist`文件夹
        path: __dirname + '/dist',
        // 文件 `build.js` 即 dist/build.js
        filename: 'build.js',
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: "./src",
        inline: true
    },
    //加载器
    module: {
        loaders: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'css-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    // 解决运行时问题
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};