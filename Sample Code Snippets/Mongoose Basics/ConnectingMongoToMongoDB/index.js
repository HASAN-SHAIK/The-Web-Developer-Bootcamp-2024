const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');




const Product = require('./models/product');
const categories = ['vegetable', 'fruit', 'dairy'];
mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/farmStand',async(req,res)=>{
    const products = await Product.find({});
    res.render('Home',{products});
});

app.get('/farmStand/delete/:id', async(req,res)=>{
    const {id} = req.params;
    const {name, price, category} = req.body;
    await Product.deleteOne({_id:id});
    res.redirect('/farmStand');
})

app.get('/farmStand/add',async(req,res)=>{
    res.render('Add');
})

app.post('/farmStand/add', async(req,res)=>{
    const {name, price, category} = req.body;
    await Product.insertMany({name: name,price: price, category: category});
    res.redirect('/farmStand');
})

app.get('/farmStand/:id',async(req,res)=>{
    const {id} = req.params;
    const produc = await Product.find({_id:id});
    const product = produc[0];
    res.render('Details',{ product });
});

app.get('/farmStand/:id/edit', async(req,res) =>{
    const {id} = req.params;
    const produc = await Product.find({_id:id});
    const product = produc[0];
    res.render('Update',{ product, categories });
})

app.post('/farmStand/:id/update', async(req, res)=>{
    const {id} = req.params;
    const {name, price, category} = req.body;
    await Product.findOneAndUpdate({_id:id},
        { $set: { name: name, price: price, category: category}}
    )
    res.redirect('/farmStand');
})

app.post('/farmStand/search',async(req,res)=>{
    const {category} = req.body;
    const products = await Product.find({category: category});
    res.render('Home',{products});
})


app.listen(8080, ()=>{
    console.log("listening at 8080");
})