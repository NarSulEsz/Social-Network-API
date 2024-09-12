const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getThoughts) // GET all thoughts
  .post(createThought); // POST a new thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought) // GET a single thought by its _id
  .put(updateThought) // PUT to update a thought by its _id
  .delete(deleteThought); // DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction); // POST to create a reaction

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE to remove a reaction

module.exports = router;