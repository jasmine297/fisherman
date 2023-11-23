module.exports = function(app){
    app.get('/reservations', function(req, res){
        res.send("reservations");
    });
    app.get('/reservations/:reservation_id/', function(req, res){
        res.send("reservations");
    });

    app.post('/reservations', function(req, res){
        res.send("reservations");
    });

    app.put('/reservations/:reservation_id/', function(req, res){
        res.send("reservations");
    });

    app.delete('/reservations/:reservation_id/', function(req, res){
        res.send("reservations");
    });
}
