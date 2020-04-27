const express = require('express')
const app = express()


app.use(express.static('./dist'))
app.use(express.static('./public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))