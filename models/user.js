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
    thoughts: [
        // TODO NEED TO INSERT CODE HERE
    ],
    friends: [
        // TODO NEED TO INSERT CODE HERE
    ],


})

    // TODO
// Schema Settings:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.




// create the User model using the UserSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;