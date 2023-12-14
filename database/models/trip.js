const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    informations: {
        type: String,
        required: true
    },
    trip_type: {
        type: String,
        required: true
    },
    type_price: {
        type: String,
        required: true
    },
    trip_dates: {
        type: Object,
        required: true
    },
    passenger_number: {
        type: Int8Array,
        required: true
    },
    trip_price: {
        type: Float32Array,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Trip', tripSchema)