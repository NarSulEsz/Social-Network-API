const { Schema, model} = require('mongoose');
const reactionSchema = require("./Reaction")

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
         },
  createdAt: {
      type: Date,
      default: Date.now(),
      get: (timestamp) => {
        return new Date(timestamp).toLocaleString(); // Format the timestamp
      }
    },
    username: {
     type: String,
     required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
