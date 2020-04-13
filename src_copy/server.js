const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')  
//服务端使用express
const app = express()
app.use(express.static(path.resolve(__dirname, '../dist')))
//发送给前端页面
app.get('/', function(req, res) {  
    console.log(req.url,'url.............10')
    if(req.url!=='/'){
        res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))  
    }
})
//监听3333端口号内容
app.listen(3000, function() {
    console.log('server is listening on 3333')
})
