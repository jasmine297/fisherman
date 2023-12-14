require('dotenv').config()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../database/models/user')
const asyncHandler = require("express-async-handler");

const register =  asyncHandler(async (req, res) => {
    console.log(req.body)
    const userBody = req.body

    const verifyEmail = await userModel.findOne({ email: userBody.email })

    try {
        if (verifyEmail) return res.status(403).json({ message: "Email already used"})
        else {
            bcrypt.hash(userBody.password, 10).then((hash) => {
                userBody.password = hash
                const newUser = new userModel(userBody)
                newUser.save().then((response) => {
                    return res.status(201).json({
                        message: "New user created",
                        result: response,
                        success: true
                    })
                }).catch((error) => {
                    res.status(500).json({
                        error: error,
                        success: false
                    })
                })
            })
        }
    } catch (error) {
        return res.status(412).send({
            message: error.message,
            success: false
        })
    }
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    let user = null

    userModel.findOne({
        email: email
    }).then((getUser) => {
        if (!getUser) return res.status(401).json({ message: "User not found"})
        else {
            user = getUser
            return bcrypt.compare(password, getUser.password)
        } 
    }).then((response) => {
        if (!response) return res.status(401).json({ message: "Authentification failed"})
        else {
            let jwtToken = jwt.sign(
                {
                    email: user.email,
                    userId: user._id
                },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: "1h"
                }
            )
            
            return res.status(200).json({
                accessToken: jwtToken
            })
        }
    }).catch((error) => {
        return res.status(401).json({
            message: error.message,
            success: false
        })
    })
})

module.exports = {
    login,
    register
}