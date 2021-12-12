const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1',{// 遇见/api1前缀的请求，就会触发该代理配置
      target:'http://localhost:8000',
      changeOrigin:true,//控制服务器收到的请求头中Host字段的值
      pathRewrite:{'^/api1':''}//对地址
    }),
    createProxyMiddleware('/api2',{
      target:'http://localhost:8000',
      changeOrigin:false,
      pathRewrite:{'^/api2':''}
    })
  )
}
