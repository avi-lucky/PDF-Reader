const express = require('express')
const path = require('path')
const http = require('http')
const fs = require('fs')
const pdfparse = require('pdf-parse')

const pdffile = fs.readFileSync('sample.pdf')

// get the information
pdfparse(pdffile).then(function(data) {
    console.log(data.numpages)

    console.log(data.info)

    console.log(data.text)
})

const app = express();
const server = http.createServer(app)

const port = process.env.PORT || 3000

app.use(express.json())

server.listen(port, () => console.log("Server Up and Running!"));

module.exports = app