const { Router } = require('express');
const router = Router();
const { getUsers } = require('../../../controllers/getUsers.js');
const { addUser } = require('../../../controllers/addUser');

router.get('/getUsersList', getUsers);

router.get('/addUser', addUser);

module.exports = router;