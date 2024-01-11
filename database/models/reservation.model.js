const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    trip: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    },
    date: {
        type: Date,
        required: true
    },
    reserved_slots_number: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Reservation', reservationSchema)