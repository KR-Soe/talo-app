const { publicationSchema } = require('./NeDb/schema');

const getPublicationsUser = async (id) => {
    const result = new Promise((resolve, reject) => publicationSchema
    .find({ userId: id }).exec((err, docs) => {
        if(err) {
            return reject(err);
        }

        return resolve(docs);
    }));
    
    return result;
};

const getPublications = async () => {
    const data = new Promise((resolve, reject) => publicationSchema
    .find({}).exec((err, res) => {
        if(err) {
            return reject(err);
        }
        return resolve(res);
    }));

    return data;
};

const getPublicationById = async (id) => {
    const result = new Promise((resolve, reject) => publicationSchema
    .find({ _id: id }).exec((err, docs) => {
        if(err) {
            return reject(err);
        }

        return resolve(docs);
    }));
    
    return result;
}

const createPublication = async (publication) => {
    return new Promise((resolve, reject) => publicationSchema.insert(publication, (err, res) => {
        if(err){
            return reject(err);
        }

        return resolve(res);
    }));
}

module.exports = { getPublicationById, getPublications, getPublicationsUser, createPublication };