const express = require('express')
const app = express()

app.use(express.static('public'))

//app.get('/', (request,reponse) => {
//    reponse.send('Hello World')
//})

app.listen(9000)