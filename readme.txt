自己的vue项目脚手架

目的：
      使用ES6、Vue、Vuex、webpack构建项目

1.安装
    克隆安装：
        npm install
    从零开始安装：
        创建package.json:
            npm init
        安装webpack:
            npm install webpack --save-dev
        安装babel:
            npm install babel-cli --save-dev
            npm install babel-core --save-dev
            npm install babel-loader --save-dev
            npm install babel-polyfill --save-dev
            npm install babel-preset-es2015 --save-dev
            npm install babel-preset-stage-2 --save-dev
            npm install babel-plugin-transform-runtime --save-dev
            npm install babel-register --save-dev
        安装Vue:
            npm install vue --save-dev
            npm install vue-loader --save-dev
        安装Vuex:
            npm install vuex --save-dev
        安装webpack-dev-server：
            npm install webpack-dev-server --save-dev

2.使用
    bulid:
        1）右键package.json
        2）show npm scripts
        3）点击 start

    热加载：
       1）右键package.json
       2）show npm scripts
       3）点击 hot

3.问题
    You are using the runtime-only build of Vue where the template compiler is not available.
    Either pre-compile the templates into render functions, or use the compiler-included build.
    解决方法：
        webpack.config.js中加入：
            resolve: {
                alias: {
                    'vue': 'vue/dist/vue.js'
                }
            }
