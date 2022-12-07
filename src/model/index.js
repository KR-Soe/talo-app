const { userSchema } = require('./NeDb/schema');

const getUser = async ({email, password}) => {
    console.log('email', email)
    const user = new Promise((resolve, reject) => userSchema
    .find({$and: [{ email: email }, {password: password}]}).exec((err, docs) => {
        if(err) {
            return reject(err);
        }

        console.log('docs', docs)
        return resolve(docs);
    }));
    
    return user;
};

const getUsers = async () => {
    const data = new Promise((resolve, reject) => userSchema
    .find({}).exec((err, res) => {
        if(err) {
            return reject(err);
        }
        return resolve(res);
    }));

    return data;
};

const createUser = async (user) => {
    return new Promise((resolve, reject) => userSchema.insert(user, (err, res) => {
        if(err){
            return reject(err);
        }

        return resolve(res);
    }));
}

module.exports = { getUser, getUsers, createUser };