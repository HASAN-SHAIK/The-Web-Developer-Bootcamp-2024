const req = new XMLHttpRequest();

req.onload= ((response)=>{
    const data = JSON.parse(this.responseText);
    console.log(data);
})
req.onerror = (err =>{
    console.log(err);
})
req.open('get',"www.google.com", true);
req.send();
console.log(req)