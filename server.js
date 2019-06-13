const express = require('express')
const app = express()


app.get('/', (request,reponse) => {
    reponse.send('Hello World')
})

app.listen(9000)