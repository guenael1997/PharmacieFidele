//Settings Request
function GetSettings(){
    fetch("http://localhost:8000/settings").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function SetSettings(NewSettings){
    var init = {
        method:"PUT",
        body:NewSettings
    }
    fetch("http://localhost:8000/settings",init).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}


//Articles Request
function GetAllArticle(){
    var respo ;
    console.log("Get OK")
    return fetch("http://localhost:8000/articles",{method:'GET'}).
    then(res=> res.json())
    .then((data)=>{
        return data
    })
    .catch((err)=>{
        return err
    })
}

function AddNewArticle(NewArticle){
    var init = {
        method:"POST",
        body:NewArticle
    }
    fetch("http://localhost:8000/articles").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function GetArticle(ArticleID){
    fetch("http://localhost:8000/article/"+ArticleID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function ModifyArticle(ArticleID,NewArticle){
    var init = {
        method:"PUT",
        body:NewArticle
    }
    fetch("http://localhost:8000/article/"+ArticleID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function RemoveArticle(ArticleID){
    var init = {
        method:"DELETE",
    }
    fetch("http://localhost:8000/article/"+ArticleID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

//User Request
function GetAllUsers(){
    fetch("http://localhost:8000/users").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function RegisterNewUser(NewUser){
    var init = {
        method:"POST",
        body:NewUser
    }
    fetch("http://localhost:8000/users").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function GetUser(UserID){
    fetch("http://localhost:8000/user/"+UserID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function ModifyUser(UserID,NewUser){
    var init = {
        method:"PUT",
        body:NewUser
    }
    fetch("http://localhost:8000/user/"+UserID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function RemoveUser(UserID){
    var init = {
        method:"DELETE",
    }
    fetch("http://localhost:8000/user/"+UserID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}


//Commande request

function GetAllCommandes(){
    fetch("http://localhost:8000/commandes").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function AddNewCommande(NewCommande){
    var init = {
        method:"POST",
        body:NewCommande
    }
    fetch("http://localhost:8000/commandes").
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function GetCommande(CommandeID){
    fetch("http://localhost:8000/commande/"+CommandeID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function ModifyCommande(CommandeID,NewCommande){
    var init = {
        method:"PUT",
        body:NewCommande
    }
    fetch("http://localhost:8000/user/"+CommandeID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function removeCommande(CommandeID){
    var init = {
        method:"DELETE",
    }
    fetch("http://localhost:8000/user/"+CommandeID).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

//login Request
function login(LogData){
    fetch("http://localhost:8000/login")
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default{GetSettings,SetSettings,GetAllUsers,RegisterNewUser,GetUser,ModifyUser,RemoveUser,GetAllArticle,AddNewArticle,GetArticle,ModifyArticle,RemoveArticle,GetAllCommandes,AddNewCommande,GetCommande,ModifyCommande,removeCommande}



