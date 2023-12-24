const { getReservationById, updateReservationById, deleteReservationById, createReservationById,getReservationListByFilters } = require("../controllers/reservation.controller");

module.exports = function(app){
    app.get('/reservations/:reservation_id/', getReservationById);
    app.get('/reservations/filter', getReservationListByFilters)

    app.post('/reservations', createReservationById);

    app.put('/reservations/:reservation_id/', updateReservationById);

    app.delete('/reservations/:reservation_id/', deleteReservationById);
}
