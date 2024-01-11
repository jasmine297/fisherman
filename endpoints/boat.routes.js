const { getBoatById, deleteBoatById, updateBoatById, createBoat, getBoatByBoundingBox } = require("../controllers/boat.controller")
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.post('/boat', verifyToken, createBoat)
    app.get('/boats/boundingbox', verifyToken, getBoatByBoundingBox)
    app.get('/boat/:id', verifyToken, getBoatById)
    app.put('/boat/:id', verifyToken, updateBoatById)
    app.delete('/boat/:id', verifyToken, deleteBoatById)
}