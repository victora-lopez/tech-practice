var database = [
    {
        username: "vikram",
        password: "margu",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coool!"
    },

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for (var i = 0; i<database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                console.log(newsFeed);
                return true;
            }
    }
    return false;
}


function signIn(user, pass){
        if(isUserValid(user, pass)){
                console.log(newsFeed);
            } else{
                alert("Sorry, wrong username or password");
            }
}

signIn(userNamePrompt, passwordPrompt)