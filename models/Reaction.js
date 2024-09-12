// To import reation schema
const { Schema, Types } = require('mongoose');


// Schema to create Thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // 280 character max
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return timestamp ? timestamp.toLocaleString() : null;      //Use a getter method to format the timestamp on query
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
)

module.exports = reactionSchema;
