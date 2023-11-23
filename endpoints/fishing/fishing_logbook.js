module.exports = function(app){
    app.get('/fishing_logbooks', function(req, res){
        res.send("fishing_logbooks");
    });
    app.get('/fishing_logbooks/:fishing_logbook_id/', function(req, res){
        res.send("fishing_logbooks");
    });

    app.post('/fishing_logbooks', function(req, res){
        res.send("fishing_logbooks");
    });

    app.put('/fishing_logbooks/:fishing_logbook_id/', function(req, res){
        res.send("fishing_logbooks");
    });

    app.delete('/fishing_logbooks/:fishing_logbook_id/', function(req, res){
        res.send("fishing_logbooks");
    });
}
