const { userSchema } = require('./NeDb/schema');

const getUsers = async() => {
    const data = new Promise((resolve, reject) => userSchema
    .find({}).exec((err, docs) => {
        if(err) {
            return reject(err);
        }
        return resolve(docs);
    }));

    return data;
};

module.exports = { getUsers };