module.exports = function(app){
    app.get('/boats', function(req, res){
        res.send("boats");
    });
    app.get('/boats/:boat_id/', function(req, res){
        res.send("boats");
    });

    app.post('/boats', function(req, res){
        res.send("boats");
    });

    app.put('/boats/:boat_id/', function(req, res){
        res.send("boats");
    });

    app.delete('/boats/:boat_id/', function(req, res){
        res.send("boats");
    });
}
