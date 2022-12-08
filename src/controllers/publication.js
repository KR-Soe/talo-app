const publicationModel = require('./../model/publication');

const getPublications = async (_, res) => {
   const publications = await publicationModel.getPublications();

   return res.status(200).send(publications);
};

const createPublication = async (req, res) => {
   const { title, message } = req.body;
   const updated = req.body.updated || false;
   const date = new Date();


   const publication = await publicationModel.createPublication({
      title,
      message,
      date: date.toISOString(),
      updated
   });

   return res.status(200).send(publication);
};

module.exports = { getPublications, createPublication };