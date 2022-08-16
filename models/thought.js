// ...file is done?
const { Schema, model, Types } = require('mongoose');
// import moment module to format the timestamp 
const moment = require('moment')


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
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
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
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
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

//  Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
});


// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;