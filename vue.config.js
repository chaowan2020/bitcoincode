const CompressionPlugin  = require('compression-webpack-plugin');
module.exports = {
    publicPath: "./",
    devServer: {
        port: 3000,
        open: true,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            '/api': {
                target: 'http://47.94.171.191:8090/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Bitcoin Code NFT',
        }
    },
    lintOnSave: false,
    productionSourceMap: false,
    assetsDir: "./public",    
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          return {
            plugins: [
              new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css)$/,// 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 不删除源文件
                minRatio: 0.8 // 压缩比
              })
            ]
          }
        }
      }
}