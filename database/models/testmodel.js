const mongoose = require('mongoose')

const testmodelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Testmodel = mongoose.model('Testmodel', testmodelSchema)
module.exports = { Testmodel }