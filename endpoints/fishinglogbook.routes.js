const { getFishinglogbookById, updateFishinglookbookFromSpecificUser, updateFishinglogbookById, deleteFishinglogbookById, createFishinglogbook } = require("../controllers/fishinglogbook.controller");
const verifyToken = require("../middlewares/auth.middleware")

module.exports = function(app){
    app.post('/fishinglogbook', verifyToken, createFishinglogbook);
    app.get('/fishinglogbook/:id', verifyToken, getFishinglogbookById);
    app.put('/fishinglogbook/:id', verifyToken, updateFishinglogbookById);
    app.put('/userfishinglogbook', verifyToken, updateFishinglookbookFromSpecificUser);
    app.delete('/fishinglogbook/:id', verifyToken, deleteFishinglogbookById);
}