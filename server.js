const express = require('express')
const dbConnection = require("./database/connection")
const app = express()
const port = 3000

require('dotenv').config()
require("./endpoints/user")(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    dbConnection.connect();
})