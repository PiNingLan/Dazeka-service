var ws = require('nodejs-websocket')

const PORT = 5000
var server = ws.createServer((conn) => {
  console.log("websocket连接成功")
  conn.on('error', () => {
    console.log("websocket连接成功")
  })
  conn.on('close', () => {
    console.log("websocket断开连接了")
  })
  conn.on('text', (data) => {
    conn.send(`收到了text数据为${data}`)
  })
})

server.listen(PORT, () => {
  console.log("websocket正在监听5000端口")
})