const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    publishDate : {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    resitrationNo : {
        type: String,
        required: true
    }, 
    tags : {
        tag : {
            type: String,
            lowercase: true
        }
    }
});

module.exports = mongoose.model('Post', PostSchema);