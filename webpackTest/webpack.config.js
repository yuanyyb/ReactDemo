module.exports = {
    devtool: 'eval-source-map',//四个选项：source-map  cheap-module-source-map  eval-source-map  cheap-module-eval-source-map
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        port:"4000",//服务的端口号  设置默认监听端口，如果省略，默认为”8080“
        contentBase: "./public",//本地服务器所加载的页面所在的目录  默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        historyApiFallback: true,//不跳转  在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true//实时刷新  设置为true，当源文件改变时会自动刷新页面
      } 
  }