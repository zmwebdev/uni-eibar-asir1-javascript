/*
https://expressjs.com
*/

// crea una web app "Hello World!!"
// http://[IP]:[port] -> "Hello World!"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))