const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('build'))
app.get("*", (req, res) => { res.sendFile(path.join( __dirname + "/build/index.html" )); });

app.listen(PORT, () => console.log('server started on port 5001'))
