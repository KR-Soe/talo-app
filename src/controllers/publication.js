const publicationModel = require('./../model/publication');

const getPublicationsUser = async(req, res) => {
   const id = req.params.userId;
   if(!id) return res.sendStatus(404);
   const publication = await publicationModel.getPublicationsUser(req.params.userId);
   if (!publication) return res.sendStatus(404);

   return res.status(200).send(publication);
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

const deletePublication = async(req, res) => {
   await publicationModel.deletePublication(req.params.id);
   return res.sendStatus(204);
}

const updatePost = async(req, res) => {
   const { title, message, date, updated, userId } = req.body;
   const id = req.params.id;

   if(!id) return res.sendStatus(404);

   const publication = await publicationModel.updatePost(req.params.id, {
      title,
      message,
      date,
      updated,
      userId
   });

   return res.sendStatus(204);
}

module.exports = { getPublications, getPublicationsUser, createPublication, deletePublication, updatePost };