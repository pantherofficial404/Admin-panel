const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
    email: String,
    password: String,
})

module.exports = mongoose.model("User", UserSchema)