const { getUserById, getUserListByFilters, updateUserById, deleteUserById } = require("../controllers/user.controller")
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.get('/users/filter', verifyToken, getUserListByFilters)
    app.get('/user/:id', verifyToken, getUserById)
    app.put('/user/:id', verifyToken, updateUserById)
    app.delete('/user/:id', verifyToken, deleteUserById)
}