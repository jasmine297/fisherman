const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    languages: {
        type: Array,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    boat_licence_number: {
        type: String,
        required: true
    },
    assurance_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    siret: {
        type: String,
        required: true
    },
    rc_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.pre("findOneAndUpdate", (next) => {
    let query = this;
    console.log(next.toString());
    next();
})

module.exports = mongoose.model('User', userSchema)