require('dotenv').config()
const express = require('require')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('../middlewares/errorHandler.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})