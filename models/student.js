const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const commentSchema = new Schema({
//     rating: {
//         type: Number,
//         min: 1,
//         max: 5,
//         required: true
//     },
//     text: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    checkedIn: {
        type: Boolean,
        required: false
    },
},{
        timestamps: true
});

const Campsite = mongoose.model('Student', studentSchema)

module.exports = Campsite;