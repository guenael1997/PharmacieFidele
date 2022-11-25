const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    active: Boolean,
    email:String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);