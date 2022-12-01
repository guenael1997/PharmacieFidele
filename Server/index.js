//Models
const User = require('./model/User');
const Commande = require('./model/Commande');
const Article = require('./model/Article');
const Settings = require('./model/Settings');

// init app
const express = require('express');
const app = express();

//init cors
const cors = require('cors');
app.use(cors())

//Connect to Mongoose Atlas database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://guenael1997:17Pokemonninja@cluster0.mip6smh.mongodb.net/?retryWrites=true&w=majority');



//init Passport-Local-Mongoose
const Passport = require('passport');
const PassportLocalMongoose = require('passport-local-mongoose');
Passport.use(User.createStrategy());
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

//ini formidable
const formidable=require('formidable');
const e = require('express');
const form = formidable({uploadDir:__dirname+'/Image',keepExtensions:true});

//Body-parser
const bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,limit:"50mb",parameterLimit:50000}));


//Login Route
app.post("/login",(req,res)=>{
    const authenticate = User.authenticate();
    authenticate(req.body.username,req.body.password,(err,result)=>{
        if(err){
            res.send('err');
        }
        else{
            res.send(result);
        }
    })
})

//File Send
app.get("/Image/:image",(req,res)=>{
    res.sendFile(__dirname+"/Image/"+req.params.image)
})

//API - Article
app.route("/articles")
.get((req,res)=>{
    Article.find({},(err,obj)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(obj);
        }
    })
})
.post((req,res)=>{
    var Object;
    form.parse(req,(err,fields,files)=>{
        if(!err){
            console.log('ok ici');
            Object=fields;
            Object.Image="http://localhost:8000/Image/"+files.ImageFile.newFilename

            const NewArticle = new Article(Object);
            NewArticle.save((err,obj)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(obj);
                }
            })
        }
    })
})

app.route("/article/:ArticleID")
.get((req,res)=>{
    Article.findOne({_id:req.params.ArticleID},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})
.put((req,res)=>{
    var Object;
    form.parse(req,(err,fields,files)=>{
        if(!err){
            console.log(files);
            Object=fields;
            if(files.ImageFile.size!=0)
            {
                Object.Image="http://localhost:8000/Image/"+files.ImageFile.newFilename
            }

            Article.updateOne({_id:req.params.ArticleID},{$set:Object},(err,obj)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(Object);
                }
            })
        }
    })
})
.delete((req,res)=>{
    console.log(req.params.ArticleID)
    Article.deleteOne({_id:req.params.ArticleID},(err)=>{
        if(err){
            res.send(err);
        }
    })
})

//API - User
app.route("/users")
.get((req,res)=>{
    User.find((err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})
.post((req,res)=>{
    User.register({username:req.body.username,active:true},req.body.password,(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})

app.route("/user/:userID")
.get((req,res)=>{
    User.findOne({_id:req.params.userID},(err,obj)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(obj);
        }
    })
})
.patch((req,res)=>{
    const Object = {
        username:req.body.username,
        email:req.body.email,
        oldpwd:req.body.oldpwd,
        newpwd:req.body.newpwd
    }
    console.log(Object)
    if(Object.newpwd != null & Object.newpwd!=""){
        User.findOne({_id:req.params.userID},(err,obj)=>{
            if(err){
                res.send(err)
            }
            else{
                obj.changePassword(Object.oldpwd,Object.newpwd,(err)=>{
                    if(err){
                        console.log(err)
                        
                    }
                    else{
                        Object.password=null
                    }
                });
            }
        })
    }
    User.updateOne({_id:req.params.userID},{username:Object.username,email:Object.email},(err)=>{
        if(err){
            res.send(err);
        }
    })
})
.delete((req,res)=>{
    User.deleteOne({_id:req.params.userID},(err)=>{
        if(err){
            res.send(err);
        }
    })
})

//API - Commande

app.route("/commandes")
.get((req,res)=>{
    Commande.find((err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})
.post((req,res)=>{
    console.log(req.body)
    const Object = new Commande(req.body)
    Object.save((err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})

app.route("/commande/:commandeID")
.get((req,res)=>{
    Commande.findOne({_id:req.params.commandeID},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})
.put((req,res)=>{
    var Object = req.body
    NewArticles=Object.Articles.filter(element=>element.number!=0);
    Object.Articles=NewArticles
    Commande.replaceOne({_id:req.params.commandeID},{Articles:Object.Article},{strict:true},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            Commande.updateOne({_id:req.params.commandeID},{$set:Object},(err,obj)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(obj);
                }
            })
        }
    })
})
.patch((req,res)=>{
    var Object = req.body
    NewArticles=Object.Articles.filter(element=>element.number!=0);
    Object.Articles=NewArticles
    Commande.replaceOne({_id:req.params.commandeID},{Articles:Object.Article},{strict:true},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            Commande.updateOne({_id:req.params.commandeID},{$set:Object},(err,obj)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(obj);
                }
            })
        }
    })
})
.delete((req,res)=>{
    Commande.deleteOne({_id:req.params.commandeID},(err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("deleted")
        }
    })
})

//API - Settings
    //no need a delete route because there's always one sample in the database
    //the post route is only use once for init the sample.
app.route("/settings")
.get((req,res)=>{
    Settings.findOne({_id:"6380acf50a9354945c6c8b53"},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj)
        }
    })
})
.put((req,res)=>{
    console.log(req.body)
    Settings.updateOne({_id:"6380acf50a9354945c6c8b53"},{$set:req.body},(err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})
.post((req,res)=>{
    const NewSettings = new Settings(req.body);
    NewSettings.save((err,obj)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
})

//listen the server
app.listen(8000,(req,res)=>{
    console.log("serveur Ok")
})
