import serverRequest from "./serverRequest";
//The following method concern the carret -----------------------------------------------------------------------------------------//
// this method will store the Carret data in the session storage
function AddCarret(Article){
    console.log("initialized")
    if(!sessionStorage.getItem("Carret")){
        var Carret = new Array()
        Carret.push(Article);
        sessionStorage.setItem("Carret",JSON.stringify(Carret))
    }
    else{
        var Carret = JSON.parse(sessionStorage.getItem("Carret"));
        if(IsAlreadyInCarret(Article,Carret).IsInCarret){
            Carret[IsAlreadyInCarret(Article,Carret).index].number+=Article.number;
        }
        else{
            Carret.push(Article);
        }
        sessionStorage.setItem("Carret",JSON.stringify(Carret));
    }
    console.log("executed")
}

//this method will only check if the Article is already in the carret or not and return the index of the article in the carret
function IsAlreadyInCarret(Article,Carret){
    var IsInCarret={IsInCarret:false,index:0}
    Carret.forEach(e=>{
        if(e.ArticleID==Article.ArticleID){
            IsInCarret.IsInCarret=true
            IsInCarret.index=Carret.indexOf(e);
        }
    })
    console.log(IsInCarret.IsInCarret)
    return IsInCarret
}

//this method will set a specific Article in the Carret
function SetArticleInCarret(Article){
    console.log(Article)
    var Carret = JSON.parse(sessionStorage.getItem("Carret"));
    Carret.forEach(e=>{
        if(e.ArticleID==Article.ArticleID){
            Carret[Carret.indexOf(e)]=Article
        }
    })
    console.log(Carret)
    sessionStorage.setItem("Carret",JSON.stringify(Carret));

    

}

//this method will return all the article in carret
function GetArticleFromCarret(){
    return JSON.parse(sessionStorage.getItem("Carret"));
}

//this method will calculate the total price of the commande
function calculateTotalPrice(){
    var totalPrice = 0
    var Carret = JSON.parse(sessionStorage.getItem("Carret"));
    Carret.forEach(e=>{
        totalPrice+=(e.price*e.number);
    })
    return totalPrice
}

//this method will post a new Commande
function addCommande(Name,FirstName,PhoneNumber,IsReady){

    if(Name!=null){
        if(FirstName!=null){
            if(PhoneNumber!=null){
                const regex = /\+(\d{2,3})\d{9,}/
                if(regex.test(PhoneNumber)){
                    var Commande = {
                        FirstName:FirstName,
                        Name:Name,
                        PhoneNumber:PhoneNumber,
                        IsReady:false,
                        Articles:JSON.parse(sessionStorage.getItem("Carret"))
                    }
                
                    serverRequest.AddNewCommande(Commande);
                    var Modal = new bootstrap.Modal(document.getElementById('Message'));
                    Modal.show();
                }
                else{
                    alert("Veuillez rentre un numéro de téléphone valide")
                }
            }
            else{
                alert("veuillez rentrer votre numéro de téléphone")
            }
        }
        else{
            alert("Veuillez rentrer votre prénom")
        }
    }
    else{
        alert("Veuillez rentrer votre nom de famille")
    }
}
//The followings methods concern the Commandes settings in the dashboard---------------------------------------------------------------------------------------------------
//This methode will modify the selected commande
function ModifyCommande(Commande,id){
    console.log(Commande)
    if(Commande.Name!=null){
        if(Commande.FirstName!=null){
            if(Commande.PhoneNumber!=null){
                const regex = /\+(\d{2,3})\d{9,}/
                if(regex.test(Commande.PhoneNumber)){
                    serverRequest.ModifyCommande(id,Commande)
                    alert(`La commande ${id} a été modifié avec succès`)
                }
                else{
                    alert("Veuillez rentre un numéro de téléphone valide")
                }
            }
            else{
                alert("veuillez rentrer votre numéro de téléphone")
            }
        }
        else{
            alert("Veuillez rentrer votre prénom")
        }
    }
    else{
        alert("Veuillez rentrer votre nom de famille")
    }
}

//this method will set a session data for the selected commande
function SetSession(commande,id){
    if(id!=null)
    {
        sessionStorage.setItem(id,JSON.stringify(commande))
    }
    else
    {
        if(sessionStorage.getItem("NewCommande")==null){
            sessionStorage.setItem("NewCommande",new Array())
        }
        
    }
}

function GetSession(id){
    return JSON.parse(sessionStorage.getItem(id))
}

function NewCommandeAdd(Article){
    if(sessionStorage.getItem("NewCommande")==""){
        var Articles = new Array()
    }
    else{
        var Articles = JSON.parse(sessionStorage.getItem("NewCommande"))
    }
    Articles.push(Article)
    sessionStorage.setItem("NewCommande",JSON.stringify(Articles))
}

function GetNewCommande(){
    if(sessionStorage.getItem("NewCommande")!=""){
        return JSON.parse(sessionStorage.getItem("NewCommande"))
    }
    else{
        return []
    }
    
}

//this method will modify the number of an article in the selected commande
function ModifyNumber(NewNumber,ArticleID,CommandeID){
    var Articles = JSON.parse(sessionStorage.getItem(CommandeID))
    console.log(Articles)
    if(Articles!=null){
        Articles.forEach(e=>{
            if(e.ArticleID==ArticleID){
                e.number=NewNumber
            }
        })
    }
    

    SetSession(Articles,CommandeID)

}

function GetCommandeSession(CommandeID){
    console.log(CommandeID)
    return JSON.parse(sessionStorage.getItem(CommandeID))
}



//The folowing method concern the login-----------------------------------------------------------------------------/
//this methode will authenticate the user if the cookie passed out, and create a new cookie
function login (Username,Password) {
    var logindata = {
        username:Username,
        password:Password
    }
    return serverRequest.login(logindata).then(res =>{
        if(res != false){
            var today = new Date();
            var expire = new Date();
            expire.setTime(today.getTime()+3600*1000*24*7);
            var stringExpire = expire.toGMTString();
            var NewCookie =`username=${res._id} ; expires=${stringExpire}`
            document.cookie=NewCookie
            return true
        }
        else{
            alert("Nom d'utilisateur ou mot de passe incorrect")
            return false
        }
    })
}

function IsAlreadyConnected(){
    var ID = null;
    var cookies = document.cookie.split(";");
    cookies.forEach(e=>{
        const regex = /(username)/
        if(regex.test(e)){
            ID = e.split("=")[1];
        }
    })
    if(ID!=null){
        return serverRequest.GetUser(ID).then((res)=>{
            if(res!=false){
                return true
            }
            else{
                return false
            }
        })
    }
    else {
        var This = new Promise((resolve)=>{
            resolve(false);
        })

        return This
    }
}
function logOut(){
    document.cookie = "username=???;expires=Sat, 10 Jan 1980 12:00:00 UTC"
    location.reload()
    
}

export default{AddCarret,GetArticleFromCarret,SetArticleInCarret,calculateTotalPrice,addCommande,login,IsAlreadyConnected,ModifyCommande,SetSession,ModifyNumber,GetCommandeSession,NewCommandeAdd,GetNewCommande,GetSession,logOut}