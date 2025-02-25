const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

let courses=[
    {id:1, name:'bit'},
    {id:2, name:'csit'},
    {id:3, name:'mit'},
    
];

app.get('/',(request, respond)=>{
    respond.send("Heloo world! to express.js");
});

app.get('/api/courses',(request, respond)=>{
    respond.send(courses);
})

app.get('/api/courses/:id',(request, respond)=>{
    let course= courses.find(c=>{
        return c.id === parseInt(request.params.id);
    });
    if(!course) respond.status(404).send("File nt dound !");
    else{
        respond.send(course);
    }
});

app.post('/api/courses', (request, respond)=>{
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(request.body, schema);
    console.result;

    const course = {
        id: courses.length+ 1,
        name : request.body.name
    }
    courses.push(course);
    respond.send(course);
});

app.put('/api/courses/:id',(request, respond)=>{
    const course = courses.find(c=>{
        return c.id === parseInt(request.params.id);
    });
    if(!course) respond.status(404).send("NOt found");
    course.name = request.body.name;
    respond.send(course);
});

app.delete('/api/courses/:id',(request,respond)=>{
    const course = courses.find(c=>{
        return c.id=== parseInt(request.params.id);
    });
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    respond.send(course);

});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("The server is listneing to theport no: ", port);
})



