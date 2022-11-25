const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    Adresse:String,
    PhoneNumber:String,
    Horaire:Array,
    Contact:Array
});
module.exports = mongoose.model("Settings",SettingsSchema);

/*
    The default model is :
    {
    "_id": "6380acf50a9354945c6c8b53",
    "Adresse": "Sint-Elisabethstraat, 54, 9120 Else",
    "PhoneNumber": "0123456789",
    "Horaire": [
        {
            "Day": "Lundi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Mardi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Mercredi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Jeudi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Vendredi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Samedi",
            "start": "08:00",
            "end": "19:00"
        },
        {
            "Day": "Dimanche",
            "start": "08:00",
            "end": "19:00"
        }
    ],
    "Contact": [
        {
            "Name": "Doe",
            "FirstName": "John",
            "PhoneNumber": "0123456789",
            "Mail": "user@user.be"
        }
    ],
 */