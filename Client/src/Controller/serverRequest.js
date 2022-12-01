//Settings Request
function GetSettings(){
    return fetch("http://localhost:8000/settings")
    .then(res=> res.json())
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function SetSettings(NewSettings){
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"PUT",
        body:JSON.stringify(NewSettings)
    }
    return fetch("http://localhost:8000/settings",init)
    .then(res=> res.json())
    .then((res)=>{
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
    console.log('new article')
    var init = {
        method:"POST",
        body:NewArticle
    }
    fetch("http://localhost:8000/articles",init).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function GetArticle(ArticleID){
    return fetch("http://localhost:8000/article/"+ArticleID).
    then(res=> res.json()).
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
    fetch("http://localhost:8000/article/"+ArticleID,init)
    .then((res)=>{
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
    fetch("http://localhost:8000/article/"+ArticleID,init)
    .then(res=>res.json())
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        return err
    })
}

//User Request
function GetAllUsers(){
    return fetch("http://localhost:8000/users").
    then(res=>res.json())
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function RegisterNewUser(NewUser){
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body:JSON.stringify(NewUser)
    }
    fetch("http://localhost:8000/users",init).
    then(res=>res.json()).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function GetUser(UserID){
    return fetch("http://localhost:8000/user/"+UserID).
    then(res=>res.json()).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function ModifyUser(UserID,NewUser){
    console.log(NewUser,UserID)
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"PATCH",
        body:JSON.stringify(NewUser)
    }
    fetch("http://localhost:8000/user/"+UserID,init).
    then(res=>res.json).
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
    fetch("http://localhost:8000/user/"+UserID,init).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}


//Commande request

function GetAllCommandes(){
    return fetch("http://localhost:8000/commandes").
    then(res=>res.json()).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function AddNewCommande(NewCommande){
    console.log(NewCommande);
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"POST",
        body:JSON.stringify(NewCommande)
    }
    fetch("http://localhost:8000/commandes",init).
    then(res=>res.json()).
    then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        return err
    })
}

function GetCommande(CommandeID){
    return fetch("http://localhost:8000/commande/"+CommandeID).
    then(res=>res.json()).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

function ModifyCommande(CommandeID,NewCommande){
    console.log(NewCommande)
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"PUT",
        body:JSON.stringify(NewCommande)
    }
    fetch("http://localhost:8000/commande/"+CommandeID,init).
    then(res=>res.json()).
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
    fetch("http://localhost:8000/commande/"+CommandeID,init).
    then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}

//login Request
function login(LogData){
    var init = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:"POST",
          body:JSON.stringify(LogData)
    }
    return fetch("http://localhost:8000/login",init)
    .then(res=>res.json())
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default{GetSettings,SetSettings,GetAllUsers,RegisterNewUser,GetUser,ModifyUser,RemoveUser,GetAllArticle,AddNewArticle,GetArticle,ModifyArticle,RemoveArticle,GetAllCommandes,AddNewCommande,GetCommande,ModifyCommande,removeCommande,login}



