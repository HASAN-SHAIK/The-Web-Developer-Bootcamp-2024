// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
// .then(()=>{console.log("Connected")})
// .catch(err =>{ console.log("ERRORRRRR", err);})

// const movieSchema = new mongoose.Schema({
//     name: String,
//     year: Number,
//     rating: Number,
//     description: String 
// });
// const Movie = mongoose.model('Movie', movieSchema);
// const gabbarSingh = new Movie({name: "Gabbar Singh", year: 2012, rating: 8.7,description: "Hit"});

// Movie.insertMany({name:"Murari", year:2013, rating: 8.3, description: "Must Watch"});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{console.log("Connected")})
.catch(err =>{ console.log("ERRORRRRR", err);})

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    year: Number,
    rating: Number,
    description: String 
});
movieSchema.methods.sample = function(){
    console.log("Movie Name",this.name);
}
const Movie = mongoose.model('Movie', movieSchema);
// Movie.insertMany({year:2013, rating: 8.3, description: "Must Watch"});



const greet = async() => {
    const gabbarSingh = await Movie.findOne({name:"Murari"})
    // gabbarSingh.save();
    gabbarSingh.sample();
}

greet();

