const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('build'))


app.listen(PORT, () => console.log('server started on port 5001'))
