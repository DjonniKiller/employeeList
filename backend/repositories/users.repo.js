const { mainConnection } = require('../connections/usersDB');

exports.getAllUsers = async () => {
    const users = await mainConnection('users');
    return users;
}