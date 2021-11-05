const path = require('path')

module.export = {
    entry: './src/index.js' , 
    output:{
        path:path.resolve(__dirname ,'public/scripts') , 
        filename: 'my-first-webpack.bundle.js',
    } , 
    module:{
        rules: [{
            test: /\.js$/ , 
            exclude: /node_modules/ ,
            use:{
                loader:'babel-loader' , 
                options:{
                    presets: ['env']
                }
            }
        }]
    }, 
    devServer:{
        contentBase: path.resolve(__dirname , 'public') , 
        publicpath:'../dist'
    }
}
