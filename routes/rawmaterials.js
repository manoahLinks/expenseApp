const express = require(`express`),
        router = express.Router(),
        controllers = require(`../controllers/rawmaterials`),
        isAuth = require(`../middleware/auth`)



router.route(`/`)
    .get(controllers.getAllRawmaterials)
    .post(controllers.createRawMaterial)


module.exports = router        
