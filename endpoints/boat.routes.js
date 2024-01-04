const { getBoatById, deleteBoatById } = require("../controllers/boat.controller")

module.exports = function(app){
    app.get('/boat/:id', getBoatById)
    app.get('/boat/:id', updateBoatById)
    app.get('/boat/:id', deleteBoatById)
    // app.get('/boats/:boat_id/', function(req, res){
    //     res.send("boats");
    // });

    // app.post('/boats', function(req, res){
    //     res.send("boats");
    // });

    // app.put('/boats/:boat_id/', function(req, res){
    //     res.send("boats");
    // });

    // app.delete('/boats/:boat_id/', function(req, res){
    //     res.send("boats");
    // });
}
