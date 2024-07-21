const express = require('express');
const app = express();
const colors = require('colors');
const data = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    console.log("came")
    const message = "Ready to Go!!!".green;
    res.render('index.ejs', { message });
});

app.get('/r/:name', (req, res)=>{
    const {name}  = req.params;
    const obj = data[name];
    res.render('search.ejs', {...obj});
})

app.listen(3000, ()=> {
    console.log("Listening on 3000".rainbow);
})