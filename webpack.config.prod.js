const base = require('./webpack.config')

module.exports = Object.assign({},base,{
    mode:'production',      //production 会压缩代码的，影响最后web server的提示
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
})