const mongoose = require('mongoose')

const fishinglogbookSchema = new mongoose.Schema({
    fish_name: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    size: {
        type: Float32Array,
        required: true
    },
    weight: {
        type: Float32Array,
        required: true
    },
    fishing_place: {
        type: String,
        required: true
    },
    fishing_date: {
        type: Date,
        required: true
    },
    fishing_released: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Reservation', reservationSchema)