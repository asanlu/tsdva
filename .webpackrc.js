
import path from "path";

export default {
  // antd按需引入方案
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd-mobile",
      "libraryDirectory": "lib",
      "style": "css"
    }]
  ],
  // 路径别名
  "alias": {
    "@": path.resolve(__dirname, "./src")
  },
  // proxy代理，请求后台数据
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
