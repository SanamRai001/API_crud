let express= require('express');
let path = require('path');
let mysql = require('mysql2');

let conn = mysql.createConnection(
 {   
    host: 'localhost',
    user:'sanam',
    password:'root',
    database:'mydb'
}
);
conn.connect();

if (!conn) console.log("Error on the database;");
conn.query('SELECT * from users;',(err, result)=>{
    console.log("Connection is Working!");
});

let app= express();
let port=3000;
app.use(express.json());

let users=[
    {id:1, name:"Sanam"},
    {id:2, name:"Manas"},
    {id:3, name:"Axaxin"}
];

//home page
app.get('/',(request, respond)=>{
    respond.sendFile(path.join(__dirname,'index.html'));
});

app.get('/users',(request, respond)=>{
    respond.send(users);
});

app.post('/users',(request, respond)=>{
    let user={
        id:users.length+1,
        name:request.body.name
    }
    users.push(user);
    respond.json(user);
});

// update the user
app.put('/users/:id',(request,respond)=>{
    let id = request.params.id;
    let user = users.find((u)=>{
        return u.id === parseInt(id);
    });
    user.name= request.body.name;
    respond.send(user);
});

// delete the user
app.delete('/users/:id',(request, respond)=>{
    let id = request.params.id;
    let user = users.find((u)=>{
        return u.id === parseInt(id);
    });
    let index = users.indexOf(user);
    users.splice(index,1);
    respond.send(user);
});


app.listen(port,()=>console.log("The server is listening to port no :"),3000);