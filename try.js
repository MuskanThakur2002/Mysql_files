var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED IN')
  next()
}

app.use(myLogger)
app.get('/', function (req, res) {
    console.log("logged")
    res.send('Hello World!')
  })

app.listen(3000)
