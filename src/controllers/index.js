const userModel = require('./../model');

const getUser = async(req, res) => {
   const { email, password } = req.body;
   const result = await userModel.getUser({
      email,
      password
   });

   return res.status(200).send(result);
}

const getUsers = async (_, res) => {
   const users = await userModel.getUsers();

   return res.status(200).send(users);
};

const createUser = async (req, res) => {
   const { email, password, username } = req.body;

   const user = await userModel.createUser({
      username,
      password,
      email
   });

   return res.status(200).send(user);
};

module.exports = { getUsers, createUser, getUser };