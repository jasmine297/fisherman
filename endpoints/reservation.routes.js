const { getReservationById, updateReservationById, deleteReservationById, createReservation ,getReservationListByFilters } = require("../controllers/reservation.controller");
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.get('/reservation/:id', verifyToken, getReservationById);
    app.get('/reservations/filter', verifyToken, getReservationListByFilters)
    app.post('/reservation', verifyToken, createReservation);
    app.put('/reservation/:id', verifyToken, updateReservationById);
    app.delete('/reservation/:id', verifyToken, deleteReservationById);
}