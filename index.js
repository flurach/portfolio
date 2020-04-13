const express = require('express')
const app = express()


// static files
app.use(express.static('public'))


// listen
const PORT = 8000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))