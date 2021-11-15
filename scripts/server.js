#!/usr/bin/env node
// sudo killall -9 node

// @requires
const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const nocache = require('nocache');


// @config
dotenv.config()
const app = express()
const env = process.env.ENV

// app.use(nocache());
// app.disable('view cache');
// app.set('etag', false);
app.use(express.static(path.join(__dirname, '../build'), {
  etag: false
}))
//app.set('trust proxy', function (ip) {
//  return true
//  // const whiteListedIps = ['10.244.2.33', '123.123.123.123']
//  // return whiteListedIps.includes(ip)
//})
// @configure express static routes
app.get('/ping', function (req, res) {
  console.log('ping')
  return res.send('pong v1')
})

app.get('/pong', function (req, res) {
  console.log('pong')
  return res.send('ping v1')
})




// @condigure main app handler
app.get('*', function (req, res) {
  console.log('eveyrthing else')
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

// @create listening port
app.listen(process.env.PORT || 8080)
