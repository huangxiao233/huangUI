const path = require('path')
module.exports = {
    entry:{
        index:'./example.tsx'
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
            },
            {
                test: /\.svg$/,
                loader:'svg-sprite-loader'
            },
            {
                test: /\.scss?$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}