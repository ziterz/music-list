if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const errhandler = require('./middleware/errhandler')
app.use(express.urlencoded({extended: false}))
app.use(cors())
const router = require('./routes/index')

app.use(router)



app.use(errhandler)
app.listen(process.env.PORT, function() {
    console.log(`listening to port ${process.env.PORT}`)
})

