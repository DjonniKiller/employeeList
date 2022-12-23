const usersRepo = require('../repositories/users.repo');

module.exports.getUsers = async ( _, res) => {
    const users = await usersRepo.getAllUsers();
    res.status(200).send(users);
}