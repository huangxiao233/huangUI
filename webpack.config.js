const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',      //production 会压缩代码的，影响最后web server的提示
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
    
}