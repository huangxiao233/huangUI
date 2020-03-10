const path = require('path')
module.exports = {
    mode:'development',
    entry:{
        index:'./lib/index.tsx'
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
    }
}