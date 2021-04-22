module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false,
            host: '127.0.0.1',
            port: 8080,
        }
    },
    lintOnSave: false,
    publicPath: './',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 12.5, // 新版本的是这个值
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
                        exclude: /(node_module)/,
                    }),
                ]
            }
        }
    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false
        },

        //或者

        //警告 webpack 的性能提示
        performance: {
            hints: 'warning',
            //入口起点的最大体积
            maxEntrypointSize: 5000000000,
            //生成文件的最大体积
            maxAssetSize: 3000000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }

}