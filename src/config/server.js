const mongoose = require("mongoose")

const connectionDB = async () => await mongoose.connect(
    MONGODB_URL,
    { useNewUrlParser: true }
)

module.exports = {connectionDB}