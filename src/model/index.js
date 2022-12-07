const { userSchema } = require('./NeDb/schema');

const getUser = async ({email, password}) => {
    const user = new Promise((resolve, reject) => userSchema
    .find({$and: [{ email: email }, {password: password}]}).exec((err, docs) => {
        if(err) {
            return reject(err);
        }

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

const getUserByMail = async (email) => {
    const result = new Promise((resolve, reject) => userSchema
    .find({ email: email }).exec((err, docs) => {
        if(err) {
            return reject(err);
        }

        return resolve(docs);
    }));
    
    return result;
}

const createUser = async (user) => {
    const exists = await getUserByMail(user.email);

    if(!exists.length) {
        return new Promise((resolve, reject) => userSchema.insert(user, (err, res) => {
            if(err){
                return reject(err);
            }
    
            return resolve(res);
        }));
    }

    return {
        error: 'error',
        message: 'user alredy exist'
    };
}

module.exports = { getUser, getUsers, createUser };