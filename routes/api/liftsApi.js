var express = require('express');
var router = express.Router();

const liftController = require('../../controllers/lift');

router.get('/view', liftController.getLifts);

router.post('/create', liftController.createLift);

router.get('/:id', liftController.getLift);

router.put('/:id/update', liftController.updateLift);

router.delete('/:id/delete', liftController.deleteLift);

module.exports = router;
