module.exports = function(app){
    app.get('/users', function(req, res){
        res.send("users");
    });
    app.get('/users/:user_id/', function(req, res){
        res.send("users");
    });

    app.post('/users', function(req, res){
        res.send("users");
    });

    app.put('/users/:user_id/', function(req, res){
        res.send("users");
    });

    app.delete('/users/:user_id/', function(req, res){
        res.send("users");
    });
}
