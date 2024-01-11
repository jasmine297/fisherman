require('dotenv').config()

const https = require('https')
const fs = require('fs')
const express = require('express')
const dbConnection = require("./database/connection")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT

const keys = {
    key: fs.readFileSync("./cert/localhost.key"),
    cert: fs.readFileSync('./cert/localhost.crt')
}

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

require("./endpoints/user.routes")(app);
require("./endpoints/auth.routes")(app);
require("./endpoints/boat.routes")(app);
require("./endpoints/trip.routes")(app);
require("./endpoints/reservation.routes")(app);
require("./endpoints/fishinglogbook.routes")(app);

const server = https.createServer(keys, app)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    dbConnection.connect();
})