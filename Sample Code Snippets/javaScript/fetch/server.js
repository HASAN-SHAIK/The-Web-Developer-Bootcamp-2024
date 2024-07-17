// fetch("https://swapi.dev/api/people")
// .then((res)=>{ 
//     const data = res;
//     console.log(data.json());
// })
// .catch(err => {console.log(err)});

const addCard = () =>{
    var card = document.createElement('div.container');
    card.classList.add('col-6', 'col-md-4','text-center','card')
    card.style.border = 'solid grey 2px'
    card.style.padding = '2px'
    card.style.margin = '2px' 
    return card;
}

const addName = (name) =>{
    var ele = document.createElement('h4');
    ele.innerText = name;
    ele.style.textDecoration = 'underline purple'
    return ele;
}

const addDetails = (label, value)=>{
    var div = document.createElement('div');
    var p1 = document.createElement('span');
    p1.innerHTML = `<b>${label}: <b>`;
    var p2 = document.createElement('span');
    p2.innerText = value;
    div.appendChild(p1);
    div.appendChild(p2);
    return div;
}
const createTable = () =>{
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerText = "Movie Name";
    th2.innerText = "Link";
    th1.style.padding = "5px";
    th2.style.padding = "5px";
    table.style.border = 'solid hotpink 1px'
    tr.style.border = 'solid 1px'
    table.classList.add('mx-auto')
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    return table;
}

const createRowwithData=(title, link)=>{
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var a = document.createElement('a');
    a.href = link;
    a.innerText = "Click Here"
    td1.innerText = title;
    td2.appendChild(a);
    row.appendChild(td1);
    row.appendChild(td2);
    td2.style.padding = "5px";
    td1.style.padding = "5px";
    console.log("Row Data", row);
    return row; 
}


const addDataToTable=(film, table)=>{
    var row;
    fetch(film)
    .then((res)=>{
        res.json()
        .then((data)=>{
            title = data.title;
            row = createRowwithData(title, film);
            table.appendChild(row);
            return table;
        })
    }
    )
    .catch(err => console.log("Error: ",err))
}

const addFilms = (films) => {
    var table = createTable();
    for(film of films)
    addDataToTable(film,table);
    return table;
}

const addContainer = (name, height, gender, films) => {
    var container = document.querySelector('.container')
    var card = addCard();
    var name = addName(name); 
    height = addDetails("Height",height);
    gender = addDetails("Gender",gender);
    films = films && addFilms(films);
    card.appendChild(name);
    card.appendChild(height);
    card.appendChild(gender);
    card.appendChild(films);
    container.appendChild(card);
}

fetch("https://swapi.dev/api/people")
.then((res) => {
    res.json().then(res => {
        const data = res.results;
            for( obj of data){
                const name = obj.name;
                const height = obj.height;
                const gender = obj.gender;
                const films = obj.films;
                console.log("name",name);
                console.log("height",height);
                console.log("gender",gender);
                console.log("films",films);
                addContainer(name,height,gender,films);
            }
    })
})