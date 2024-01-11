const mongoose = require('mongoose')

const boatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    manufacture_year: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    required_licence_type: {
        type: String,
        required: true
    },
    boat_type: {
        type: String,
        required: true
    },
    equipments: {
        type: Array,
        required: true
    },
    caution: {
        type: Number,
        required: true
    },
    max_capacity: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    city_port: {
        type: String,
        required: true
    },
    port_localisation: {
        type: [Number],
        required: true
    },
    engine_type: {
        type: String,
        required: true
    },
    engine_power: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Boat', boatSchema)