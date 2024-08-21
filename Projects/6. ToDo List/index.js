const express = require('express');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid');
const methodOverride = require('method-override');
const { redirect } = require('react-router-dom');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
var tasks = [
    {
        id : uuid(),
        task : "First task"
    },
    {
        id: uuid(),
        task: "Second Task"
    }
]

app.get('/todolist',(req,res)=>{
    res.render("home",{tasks});
})

app.post('/todolist/add',(req,res)=>{
    const id = uuid();
    const {task} = req.body;
    tasks.push({id,task});
    res.redirect('/todolist');
})

app.post('/todolist/edit/modal',(req,res)=>{
    const {newTask} = req.body;
    return newTask;
})



app.patch('/todolist/edit/:id',async(req,res)=>{

})

app.delete('/todolist/delete/:id',(req,res)=>{
    const {id} = req.params;
    tasks = tasks.filter(x => x.id != id);
    res.redirect('/todolist');
})








app.listen(8080, ()=> console.log("Listening at 8080"));