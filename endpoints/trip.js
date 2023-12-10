module.exports = function(app){
    app.get('/fishing_trips', function(req, res){
        res.send("fishing_trips");
    });
    app.get('/fishing_trips/:fishing_trip_id/', function(req, res){
        res.send("fishing_trips");
    });

    app.post('/fishing_trips', function(req, res){
        res.send("fishing_trips");
    });

    app.put('/fishing_trips/:fishing_trip_id/', function(req, res){
        res.send("fishing_trips");
    });

    app.delete('/fishing_trips/:fishing_trip_id/', function(req, res){
        res.send("fishing_trips");
    });
}
