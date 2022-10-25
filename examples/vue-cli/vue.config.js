// const HelloWorldPlugin = require("./src/plugin/hello-plugin.js")
const HelloWorldLoader = require("webpack-jump-loader")
const HelloWorldPlugin = require("webpack-jump-code")

console.log('HelloWorldLoader-------------', HelloWorldLoader)
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue').test(/\.vue$/)
      .use('webpack-jump-loader').loader('webpack-jump-loader')
  },
  configureWebpack: {
    plugins: [new HelloWorldPlugin({ options: true })]
  },

}