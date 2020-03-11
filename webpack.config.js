const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',      //production 会压缩代码的，影响最后web server的提示
    entry:{
        index:'./lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']   //找以这个为结尾的
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        library:'huangUI',
        libraryTarget:'umd'  //我要把我的代码封装成什么样的module定义
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'huangUI111',
            template: 'index.html'
        })
    ],
    externals: {
        react: {
            //几种不同的打包方式。
            commonjs: 'react',    //module.export 方式
            commonjs2: 'react',   //也是一种node 的标准
            amd: 'react',        //浏览器的标准
            root: 'React', // 用script标签来引入React
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
}