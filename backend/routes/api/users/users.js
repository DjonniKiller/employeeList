const { Router } = require('express');
const router = Router();
const { getUsers } = require('../../../controllers/getUsers.js');

router.get('/getUsersList', getUsers);

module.exports = router;