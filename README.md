# PharmacieFidele

It's a web site project for a drug store in Burundi

## Installation
1) install the file
2) At the root of the file, launch 2 cmd : In the first one, use the folowing commande
```bash
npm run client
```
in the other one, use this
```bash
npm run serv
```
3) In the cmd where you run the client-side, you should see the link where you can access to the website (localhost:5173 by default). Make sure the two windows are still open while you're using the app

## Client-side
The client-side is rendered with VueJS and Bootstrap.
### Fonctionnality

#### Buying articles
The customers can check all the product of the drug store, their uses, if they are out of stock,etc. The customer can also add many articles as they want in the cart.

The cart is an object set in the session storage with the following structure

``` javascript
[
  { ArticleID:String,number:Number,price:Number }
]
  
```

- ArticleID: the id of Article in the database (check server-side docs)
- number : the number of the following article add in the carret
- price : the price of the article

Whene the customers want to book an order, they have to give
- A name
- A first name
- A phone number (format:+XXXXXXXXXXX)

If everythings is ok, the order is save in the database

### Dashboard
The dashboard is a space for admin of the website. Only autenticated user can access to it.
The dashboard is an easy whey for manipulate the databases without modify the server-side settings
Once you're log in, you don't have to loggin for the 7 following days (past this period, the cookie expire and you have to login one more time)

#### Articles

The articles can be creates,modify or delete from the dashboard. You can set
- The name of the article
- The quantity of the article in the stock
- The price excluding VAT
- The price including VAT
- The image of the article, visible by the customers

#### Order

The orders can be creates, modify or delete from the dashboard. You can set
- The name of the customer
- The first name of the customer
- The articles they ordered and the number of them
- The state of the commande, if it's ready or not

#### User

The users can be creates, modify or delete form the dashboard. Notice that you must have at leaste one active user, saved in the database.
you can set
- the username
- the mail adresse
- the password

#### settings

The settings are all the data concernings :
- the adress of the drug store
- the phone number of the drug store
- the schedule (from monday to sunday)
- the contact person (name, first name, mail adress and phone number)

You cannot delete or create a new settings.

## server-side

The server-side is mounted with Express JS, mongoose and mongoose-passport-local

### database

The database is structured on Mongo and have 4 collections

#### Users

```javascript
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    active: Boolean,
    email:String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);
```
- active: if the user is active or not. only the active user can be autenticated. The password is automaticaly create, hash and salt for a better security.
- email : the mail of the user

#### Commandes(order)
```javascript
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
```
#### Articles
```javascript
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
```
#### Settings
```javascript
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
```
### Routes

Basicaly, the server-side is the a REST API who create a bridge between the client and the database.
By default, the API link will be `http://localhost:8000`

#### GET

- `http://localhost:8000/users`: returns all database users in a table
- `http://localhost:8000/user/:ID`: returns a user from the database whose ID corresponds to the one passed in the query parameters

- `http://localhost:8000/articles`: returns all articles from the database in an array
- `http://localhost:8000/article/:ID`: returns an article from the database whose ID corresponds to the one passed in the query parameters

- `http://localhost:8000/commands`: returns all orders from the database in an array
- `http://localhost:8000/command/:ID`: returns an order from the database whose ID corresponds to the one passed in the query parameters

- `http://localhost:8000/settings`: returns the site settings saved in the database in a table

- `http://localhost:8000/Images/:image`: returns an uploaded image

#### POST

- `http://localhost:8000/users`: add an new user in the database
```javascript
  var init = {
    method:"POST"
    body:{
    username:String
    password:String
  }
  fetch("http://localhost:8000/users",init)
```
- `http://localhost:8000/login`: Check if the user is in the database and if he send the good password and return the selected user,otherwise it will return `false`
```javascript
  var init = {
    method:"POST"
    body:{
    username:String
    password:String
  }
  fetch("http://localhost:8000/login",init)
```
- `http://localhost:8000/commandes`: add a new order in the database
```javascript
  var init = {
    method:"POST"
    body:{
      Name:String,
      FirstName:String,
      PhoneNumber:String,
      Articles:Array,
      IsReady:Boolean
    }
  fetch("http://localhost:8000/commandes",init)
```
- `http://localhost:8000/articles`: add a new article in the database
```javascript
  var data = new FormData()
  data.append("Name",Name)
  data.append("PTVAC",Name)
  data.append("PHTVA",Name)
  data.append("Use",Name)
  data.append("Description",Name)
  data.append("Image","NameOfTheFile",Image)
  
  
  var init = {
    method:"POST"
    body: data  
  }
  fetch("http://localhost:8000/commandes",init)
```
- `http://localhost:8000/settings`: add a new settings in the database. This route is not used in the dashboard
```javascript
  var init = {
      method:"POST"
      body:{
        Adresse:String,
        PhoneNumber:String,
        Horaire:Array,
        Contact:Array
     }
  fetch("http://localhost:8000/commandes",init)
```
#### PUT/PATCH

- `http://localhost:8000/user/:ID`: find the user and replace him with the folowing data in the request body
```javascript
  const ID = "The ID of the user"
  var init = {
    method:"PATCH"
    body:{
      username:String
      email:String
      oldpwd:String
      newpwd:String
    }
  fetch("http://localhost:8000/user/"+ID,init)
```
- `http://localhost:8000/commande/:ID`: find the order and replace it with the folowing data in the request body
```javascript
  const ID = "The ID of the user"
  var init = {
    method:"PUT"
    body:{
      Name:String,
      FirstName:String,
      PhoneNumber:String,
      Articles:Array,
      IsReady:Boolean
    }
  fetch("http://localhost:8000/commande/"+ID,init)
```
- `http://localhost:8000/article/:ID`: find the article and replace it with the folowing data in the request body
```javascript
  const ID = "The ID of the user"
  var data = new FormData()
  data.append("Name",Name)
  data.append("PTVAC",Name)
  data.append("PHTVA",Name)
  data.append("Use",Name)
  data.append("Description",Name)
  data.append("Image","NameOfTheFile",Image)
  
  
  var init = {
    method:"PUT"
    body: data  
  }
  fetch("http://localhost:8000/commande/"+ID,init)
```
- `http://localhost:8000/settings`: replace the data's settings with the one in the request body
```javascript
  var init = {
      method:"PUT"
      body:{
        Adresse:String,
        PhoneNumber:String,
        Horaire:Array,
        Contact:Array
     }
  fetch("http://localhost:8000/commandes",init)
```

#### DELETE

- `http://localhost:8000/user/:ID`: find the user and remove it from the database
```javascript
  var init = {
    method:"DELETE"
    }
  fetch("http://localhost:8000/user/"+ID,init)
```
- `http://localhost:8000/commande/:ID`: find the order and remove it from the database
```javascript
  var init = {
    method:"DELETE"
    }
  fetch("http://localhost:8000/commande/"+ID,init)
```
- `http://localhost:8000/article/:ID`: find the article remove it from the database
```javascript
var init = {
    method:"DELETE"
    }
  fetch("http://localhost:8000/commande/"+ID,init)
```
- `http://localhost:8000/settings`: remove the settings object from the database. This route is not used in the dashboard
```javascript
var init = {
    method:"DELETE"
    }
  fetch("http://localhost:8000/commandes",init)
```



