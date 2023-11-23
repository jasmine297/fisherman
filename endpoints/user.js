module.exports = function(app){
    app.get('/user', function(req, res){
        res.send("user");
    });

    app.post('/user/:user_id/new', function(req, res){
        res.send("user");
    });

    app.put('/user/:user_id/', function(req, res){
        res.send("user");
    });

    app.delete('/user/:user_id/', function(req, res){
        res.send("user");
    });
}
