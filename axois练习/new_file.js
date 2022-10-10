//引入express模块
const express = require('express');
//创建app应用对象
const app = express();
//创建路由规则
//request是请求报文
//response是响应报文
app.get('/server',(request,response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello world');
});
//监听端口启动服务器
app.listen(3000,() => {
    console.log("服务器启动成功")
})
