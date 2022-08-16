// ...file is done?
const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
    },
    // references the thoughts model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
          },
    ],
    // references the user model
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
    ],
    },
    // lets us use virtuals
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }

)

 
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });


// create the User model using the UserSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;