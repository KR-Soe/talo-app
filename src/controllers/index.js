const userModel = require('./../model');

const getUsers = async (_, res) => {
   const users = await userModel.getUsers();

   console.log('users', users)

   return res.send(users)
};

module.exports = { getUsers };

