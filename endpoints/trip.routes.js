const { getTripById, deleteTripById, updateTripById, createTrip, getTripListByFilters } = require("../controllers/trip.controller")
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.post('/trip', verifyToken, createTrip)
    app.get('/trips/filter', verifyToken, getTripListByFilters)
    app.get('/trip/:id', verifyToken, getTripById)
    app.put('/trip/:id', verifyToken, updateTripById)
    app.delete('/trip/:id', verifyToken, deleteTripById)
}