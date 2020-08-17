const path = require("path");
const terserPlugin = require('terser-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

const WEBTITLE = '项目名称'; // 项目名称
const PORT = 6001; // 端口
const PUBLICPATH = 'wonders'; // 上下文
const PROXY = 'https://www.baidu.com';

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? `/${PUBLICPATH}/` : "/",
  outputDir: "./dist",
  productionSourceMap: false, // 不需要生产环境的 source map
  runtimeCompiler: true, //关键点在这
  lintOnSave: false, // 减少eslint的错误监控
  devServer: {
    port: PORT, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    hotOnly: false,
    disableHostCheck: true,
    proxy: PROXY
  },

  // 生产打包后去掉console
  configureWebpack: {
    optimization: {
      minimizer: [
        new terserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: process.env.NODE_ENV=='production' ? true : false,
              drop_debugger: process.env.NODE_ENV=='production' ? true : false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        }),
      ]
    }
  },

  // chainWebpack: config => {
  //   config.entry("index").add("babel-polyfill");
  // },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );

    config.plugin('html').tap(args => {
      args[0].title = WEBTITLE;
      return args
    });

    // 引入公用scss
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
        item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
                resources: './src/assets/css/common.scss'
            })
            .end()
    });

    // 一个规则里的 基础Loader
    // svg是个基础loader
    const svgRule = config.module.rule("svg");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.exclude.add(resolve("src/icons/svg"));

    // 添加要替换的 loader
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons/svg")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "src/styles/base.less") // 需要全局导入的less
        // path.resolve(__dirname, "src/styles/mixin.less")
      ]
    });
}
