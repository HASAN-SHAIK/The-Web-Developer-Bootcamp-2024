// import axios from "axios";
const button = document.querySelector('#submit');
var movies =0;
button.addEventListener('click',()=>{
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('img');
    for(var image of images)
    container.removeChild(image);
    const input = document.querySelector('#search');
    axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((res)=>{
        const data = res.data;
        input.value = '';
        for(obj of data){
            const container = document.querySelector('.container');
            const img = document.createElement('img');
            img.src = obj.show.image.medium;
            container.appendChild(img);
        }
    })
    .catch(err => { console.log("ERROR: ",err);})   
})
