const mongoose = require("mongoose")
const {Schema} = mongoose

const post = new Schema({
    _id: {
        type: Schema.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    title: String,
    authorName: {
        type: String,
        default: "Gustavo Michels de Camargo"
    },
    authorId: {
        type: Schema.ObjectId,
        required: true
    },
    body: String,
    tags: [{
        name: String
    }],
    date: [{
        type: Date,
        default: Date.now
    }],
    hidden: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    commentsEnabled:{
        type: Boolean,
        default: true
    },
    comments: [{
        _id: {
            type: Schema.ObjectId,
            index: true,
            required: true,
            auto: true
        },
        author: {
            type: String,
            default: "Anônimo"
        },
        body: String,
        date: {
            type: Date,
            default: Date.now
        },
        hidden: {
            type: Boolean,
            default: false
        }
    }]
})

module.exports = mongoose.model("Post", post)