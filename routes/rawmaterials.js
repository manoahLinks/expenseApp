const express = require(`express`),
        router = express.Router(),
        controllers = require(`../controllers/rawmaterials`)

router.route(`/`)
    .get(controllers.getAllRawmaterials)
    .post(controllers.createRawMaterial)


router.route(`/:id`)
    .delete(controllers.deleteRawMaterial)

module.exports = router        
