const userModel = require('../database/models/user')
const asyncHandler = require("express-async-handler");

const getUserById = asyncHandler(async (req, res) => {
    userModel.findById(req.params.id).then((user) => {
        if (!user) return res.status(404).json({ message: "User not found"})
        else return res.status(200).json(user)
    })
})

const getUserListByFilters = asyncHandler(async (req, res) => {
    try {
        userModel.find(req.body).then((users) => {
            if (!users) return res.status(404).json({ message: "No user found with filters"})
            else return res.status(200).json(users)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateUserById = asyncHandler(async (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body).then((user) => {
        if (!user) return res.status(404).json({ message: "User not found"})
        else return res.status(200).json(req.body) 
    })
})

const deleteUserById = asyncHandler(async (req, res) => {
    userModel.findByIdAndDelete(req.params.id).then((user) => {
        if (!user) return res.status(404).json({ message: "User not found"})
        else return res.status(200).json({
            message: "User deleted"
        })
    })
})

module.exports = {
    getUserById,
    getUserListByFilters,
    updateUserById,
    deleteUserById
}