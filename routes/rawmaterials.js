const express = require(`express`),
        router = express.Router({mergeParams: true}),
        controllers = require(`../controllers/rawmaterials`)

router.route(`/`)
    .get(controllers.getAllRawmaterials)
    .post(controllers.createRawMaterial)


router.route(`/recieve-rawmaterial`)
    .post(controllers.recieveRawmaterial)

router.route(`/:id`)
    .get(controllers.getsingleMaterial)
    .patch(controllers.updateRawmaterialInformation)
    .delete(controllers.deleteRawMaterial)

module.exports = router        
