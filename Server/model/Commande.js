const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Article = require("./Article");

const CommandeSchema = new mongoose.Schema({
    Name:String,
    FirstName:String,
    PhoneNumber:String,
    Articles:Array,
    IsReady:Boolean
});
module.exports = mongoose.model("Commande",CommandeSchema);

/*
    The exact model of this model is :
    {
        Name:"",
        FirstName:"",
        PhoneNumber:"",
        Articles:[
            {ArticleId:"Id of the Articles", number:int},
            {ArticleId:"Id of the Articles", number:int},
            {ArticleId:"Id of the Articles", number:int},
            etc.
        ]
        IsReady:true or false

    }
 */