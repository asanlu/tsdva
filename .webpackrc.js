
import path from "path";
import pxtorem2 from "postcss-pxtorem";

export default {
  // antd按需引入方案
  extraBabelPlugins: [
    ["import", {
      "libraryName": "antd-mobile",
      "libraryDirectory": "lib",
      "style": true
    }]
  ],
  // px转rem， 大写PX不转
  extraPostCSSPlugins: [
    pxtorem2({ rootValue: 100, propWhiteList: [], })
  ],
  // pxtorem自动转rem的插件，会导致antd-mobile的组件样式同时被转换
  theme: {
    '@hd': '2px'
  },
  // 路径别名
  alias: {
    "@": path.resolve(__dirname, "./src")
  },
  // proxy代理，请求后台数据
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  // 文件哈希后缀编码
  hash: true,
  html: {
    template: './src/index.ejs',
  },
}


// dva + roadhog 踩坑汇总
// https://www.jianshu.com/p/9a7a05a123aa
