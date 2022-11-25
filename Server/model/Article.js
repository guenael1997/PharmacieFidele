const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const ArticleSchema = new mongoose.Schema({
    Name:String,
    PTVAC:Number,
    PHTVA:Number,
    Use:String,
    Description:String,
    Quantité:Number,
    Image:String
});
module.exports = mongoose.model("Article",ArticleSchema);