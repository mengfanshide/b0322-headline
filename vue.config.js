const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// console.log(path.resolve(__dirname, '../src/utils/'));
module.exports = {
    lintOnSave: false,
    devServer:{
        open: true
    },

    configureWebpack: {
        resolve:{
            //别名 //可以配置路径别名
            alias:{
                'utils': path.resolve(__dirname, './src/utils/'),
                'api': path.resolve(__dirname, './src/api/'),
            }
        },
        plugins:[
            new BundleAnalyzerPlugin()
        ]
    }
}