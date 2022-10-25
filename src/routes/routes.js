const { Router } = require('express');
const router = Router();

const {
    getEntities,
    getContarctById,
    getSedeById } = require('../controllers/index.controller');



router.get('/api/v1/entities', getEntities);
router.get('/api/v1/contract/:id', getContarctById);
router.get('/api/v1/sede/:id', getSedeById);


module.exports = router;