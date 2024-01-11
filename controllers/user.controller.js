const userModel = require('../database/models/user.model')
const asyncHandler = require("express-async-handler");
const { isFormatIdIncorrect } = require('../validators/data.validator');
const boatModel = require('../database/models/boat.model')
const tripModel = require('../database/models/trip.model')
const reservationModel = require('../database/models/reservation.model')
const fishinglogbookModel = require('../database/models/fishinglogbook.model')

const getUserById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        userModel.findById(req.params.id).then(async (user) => {
            if (!user) return res.status(404).json({ message: "User not found"})
            else {
                let resultPopulate = await populateUser(req.params.id)
                // return res.status(200).json({
                //     user, 
                //     boats: resultPopulate.boats,
                //     trips: resultPopulate.trips,
                //     reservations: resultPopulate.reservations,
                //     fishinglogbooks: resultPopulate.fishinglogbooks
                // })
                return res.status(200).json(Object.assign(user.toObject(), resultPopulate))
            } 
        })

    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const getUserListByFilters = asyncHandler(async (req, res) => {
    try {
        userModel.find(req.body).then((users) => {
            if (!users || users.length === 0) return res.status(404).json({ message: "No user found with filters"})
            else return res.status(200).json(users)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateUserById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        userModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).then((user) => {
            if (!user) return res.status(404).json({ message: "User not found"})
            else return res.status(200).json(user) 
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const deleteUserById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        userModel.findByIdAndDelete(req.params.id).then((user) => {
            if (!user) return res.status(404).json({ message: "User not found"})
            else return res.status(200).json({
                message: "User deleted"
            })
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const populateUser = (async userId => {
    let boats, trips, reservations, fishinglogbooks
    //let userId = userId.toString()

    try {
        boats = await boatModel.find({user: userId});
        trips = await tripModel.find({user: userId});
        reservations = await reservationModel.find({user: userId});
        fishinglogbooks = await fishinglogbookModel.find({user: userId});

        return { boats, trips, reservations, fishinglogbooks }
    } catch (error) {
        return error;
    }
})

module.exports = {
    getUserById,
    getUserListByFilters,
    updateUserById,
    deleteUserById
}