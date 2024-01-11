require('dotenv').config()

const express = require('express')
const dbConnection = require("./database/connection")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    dbConnection.connect();
})