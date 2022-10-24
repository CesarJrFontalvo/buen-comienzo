const { Router } = require('express');
const router = Router();

const {
    getEntities,
    getContarctById,
    getSedeById } = require('../controllers/index.controller');



router.get('/entities', getEntities);
router.get('/contract/:id', getContarctById);
router.get('/sede/:id', getSedeById);


module.exports = router;