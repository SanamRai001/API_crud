let express= require('express');
let mysql = require('mysql2');

const  app = express();
app.use(express.json());

let conn = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'db'
    }
);
if(!conn){
    console.log("Error Datatabase");
}


conn.connect();


app.get('/users',(request, respond)=>{
    conn.query("select * from users;",(err, result)=>{
        if(err){
            console.error(err);;
            respond.status(404).send("Error retreiving the users.");
        }
        else{
            respond.status(200).send(result);
            console.log(result);
        }
    });
});

app.post('/users',(request, respond)=>{
    const {name, email} = request.body;

    const query = "Insert into users(name, email) values(?, ?);";
    conn.query(query, [name, email],(err, result)=>{
        if(err){
            console.error(err);
            respond.status(404).send("Query Error");
        }
        else{
            respond.status(201).json({
                id: result.insertId,
                name: name,
                email: email
            });
        }
    });

});

app.put('/users/:id', (request, respond)=>{
    const id = request.params.id;
    const {name, email} = request.body;

    const query = "update users set name =?, email = ? where id =?";
    conn.query(query, [name, email, id], (err, result)=>{
        if(err){
            console.error(err);
            respond.status(404).send("Error in query");
        }
        else{
            respond.status(200).json({
                id : id,
                name : name,
                email :email
            });
        }
    });
 });

 app.delete('/users/:id',(request, respond)=>{
    const id = request.params.id;
    const query = "delete from users where id = ?";
    conn.query(query, id, (err, result)=>{
        if(err){
            console.error(err);
            respond.status(404).send("Eror in query");
        }
        else{
            respond.status(200).json({
                id: id,
            })
        }
    });
 });

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Ser ver is listening to :", port);
})