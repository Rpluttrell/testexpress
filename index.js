const express = require('express')
const app = express()
const things = require('./things.js')

// app.get('/', function (req, res){
//     res.send("Hello world!");
// })

// app.get('/hello', function (req, res){
//     res.send("Hello again world!");
// })

// app.post('/hello', function (req, res){
//     res.send("You just called the post method at '/hello'!\n");
// })

// app.all('test', function(req, res){
//     res.send("HTTP method doesn't have any effect on this route!")
// })

app.use('/things', things)

app.listen(3000)