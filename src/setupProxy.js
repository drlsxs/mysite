const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target : 'http://localhost:8082/site',
        changeOrigin : true, // 添加代理，只在开发环境时生效
        ws: true,
        pathRewrite : {
            '^/api' : ''
        },
        onProxyReq: function(proxyReq, req, res) {
            console.log('Proxy request to ' + req.url);
        },
        onProxyRes: function(proxyRes, req, res) {
            console.log('Proxy response from ' + req.url);
        },
    }));
};
