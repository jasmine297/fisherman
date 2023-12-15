const { getUserById, getUserListByFilters, updateUserById, deleteUserById } = require("../controllers/user.controller")

module.exports = function(app){
    app.get('/users/filter', getUserListByFilters)
    app.get('/user/:id', getUserById)
    app.put('/user/:id', updateUserById)
    app.delete('/user/:id', deleteUserById)
}
