const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

app.listen(3000, ()=>{console.log("123")});


app.get('/',(req, res)=>{res.send("hello node api")})