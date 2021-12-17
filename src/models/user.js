    const mongoose = require("mongoose")
    const {Schema} = mongoose

    const user = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    })

    module.exports = mongoose.model("User", user)