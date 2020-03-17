const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base,{
    mode:'development',      //production 会压缩代码的，影响最后web server的提示
    plugins: [
        new HtmlWebpackPlugin({
            title:'huangUI',
            template: 'index.html'
        })
    ]
})