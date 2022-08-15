const { Schema, model, Types } = require('mongoose');

// create the thought schema
const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO : Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionsSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

//  TODO: Schema Settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.



// create the reaction subdocument schema

const reactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
       },
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
       // TODO : Use a getter method to format the timestamp on query
       },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)


// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;