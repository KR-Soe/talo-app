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

const deletePublication = async (id) => {
    const result = new Promise((resolve, reject) => publicationSchema
    .remove({ _id: id }, (err, docs) => {
        if(err) return reject(err);
        return resolve(docs);
    }));
    
    return result;
}

const updatePost = async (id, { title, message, updated, date }) => {
    const newData = { $set: { title, message, updated, date } };

    return new Promise((resolve, reject) => publicationSchema
    .update({ _id: id }, newData, {}, (err, docs) => {
        if(err) return reject(err);
        return resolve(docs);
    }));
}

module.exports = { getPublicationById, getPublications, getPublicationsUser, createPublication, deletePublication, updatePost };