const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = "mine";

app.post('/login',(request, respond)=>{
    const {user, password} = request.body;

    if(user == "admin" && password == "password"){
        const token = jwt.sign({user}, SECRET_KEY, {expiresIn: "1h"});
        respond.json({token});
    }
    else{
        respond.status(404).send("Error");
    }
});

function authToken(request, respond, next){
    const authHeader = request.headers['authentication'];
    const token = authHeader && authHeader.split('')[1];
}

app.listen(3000,()=>console.log("LIve on port : 3000"));