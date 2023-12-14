const { register, login } = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.post("/auth/register", register)
    app.post("/auth/login", login)
}
