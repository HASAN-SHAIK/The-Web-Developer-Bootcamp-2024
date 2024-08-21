const express = require('express');
const methodOverride = require('method-override')
const {v4:uuid} = require('uuid');
const app = express();
const path = require('path');
const { name } = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json());
//To make form method to patch
app.use(methodOverride('_method'));

var comments = [
    {
        id: uuid(),
        name: "hasan",
        comment: "Hasan's Comment"
    },
    {
        id: uuid(),
        name: "Aasim",
        comment: "Aasim's Comment"
    },
    {
        id: uuid(),
        name: "Siddu",
        comment: "Siddu's Comment"
    }
] 

app.get('/comments', (req,res)=>{
    res.render('home.ejs',{comments});
});

app.post('/comments',(req,res)=>{
    const {name, comment} = req.body;
    const id = uuid();
    comments.push({id,name,comment});
    res.redirect('/comments')
});
app.get('/comments/new',(req,res) =>{
    res.render('new.ejs');
});

app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.filter(comment => id == comment.id);
    res.render('edit',{...comment[0]});
})

app.patch('/comments/:id',(req, res)=>{
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments')
});

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.filter(comment => id == comment.id);
    res.render('show',{...comment[0]});
});

app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(x=> x.id != id);
    res.redirect('/comments');
})



app.listen(8080, ()=>{
    console.log("LISTENING AT 8080!!!");
})