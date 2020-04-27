const express = require('express')
const app = express()


app.use(express.static('./dist'))
app.use(express.static('./public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))


app.listen(process.env.PORT || 8080)