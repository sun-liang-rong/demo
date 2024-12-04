const { Configuration } = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('node:path')
const { VueLoaderPlugin } = require('vue-loader')
/**
 * @type {Configuration}
 */
const config = {
  mode: 'development',
  entry: './src/main.ts', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 生成目录
    filename: 'bundle.js' // 打包文件
  },
  module: {
    rules: [
      { 
        test: /\.vue$/, 
        use: 'vue-loader' 
      },
      { 
        test: /\.ts$/, 
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        } 
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}
module.exports = config 