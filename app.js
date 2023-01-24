const express = require('express')
const mongoose = require('mongoose')
const books = require('./routers/books.js')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/books',books)
//app.use(express.json())


const url = 'mongodb://localhost:27017/FirstApi'
mongoose.connect(url, {useNewUrlParser:true})
 
const con = mongoose.connection

con.on('open', () => {
    console.log('conneted..!!!')
})
const port = 9000
app.listen(port, ()=>{
    console.log(`listening to port${port}`)
})