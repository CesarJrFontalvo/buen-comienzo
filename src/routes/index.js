const { Router } = require('express');
const router = Router();

const {
    getEntities,
    getContarctById,
    createUser,
    updateUser,
    deleteUser } = require('../controllers/index.controller');



router.get('/entities', getEntities);

router.get('/contract/:id', getContarctById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

module.exports = router;