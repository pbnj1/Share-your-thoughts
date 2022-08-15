const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    // the two below are for bonus
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//    /api/users GET all and POST 
router.route('/')
.get(getUser)
.post(createUser);

//    /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// bonus below.....
// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);