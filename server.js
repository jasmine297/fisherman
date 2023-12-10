require('dotenv').config()

const express = require('express')
const dbConnection = require("./database/connection")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.SERVER_PORT
const secret = process.env.TOKEN_SECRET

require("./endpoints/user")(app);

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    dbConnection.connect();
})