const publicationModel = require('./../model/publication');

const getPublicationsUser = async(req, res) => {
    const publication = await publicationModel.getPublicationsUser(req.params.userId)

   return res.status(200).send(publications);
}

const getPublications = async (_, res) => {
   const publications = await publicationModel.getPublications();

   return res.status(200).send(publications);
};

const createPublication = async (req, res) => {
   const { title, message, userId } = req.body;
   const updated = req.body.updated || false;
   const date = new Date();


   const publication = await publicationModel.createPublication({
      title,
      message,
      date: date.toISOString(),
      updated,
      userId
   });

   return res.status(200).send(publication);
};

module.exports = { getPublications, getPublicationsUser, createPublication };