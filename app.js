var express = require('express');
var fs = require('fs');
var http = require('http');
const bodyParser = require('body-parser');
const router = require('./router/index')  //  引入路由
var app = express(); 
// const mysql = require('mysql');

// //  开启数据库
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test',
//     multipleStatements: true, //  允许执行多条语句
// })

// connection.connect(() =>{
//     console.log('链接成功')
// });

//设置跨域访问                                    
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//  使用路由 /index 是路由指向名称
app.use(`/backend`,router)

app.use(`/`,express.static('./dist'));
app.use(`/`,function (req, res,next) {
  res.sendfile('./dist/index.html');  //路径根据自己文件配置
});
var httpsServer = http.createServer(app);
httpsServer.listen(3333, function () {
  console.log('正在监听3333接口')
});