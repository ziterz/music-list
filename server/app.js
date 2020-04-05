require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT
const routes = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(PORT => {
    console.log(`SERVER ON PORT: ${port}`)
})


