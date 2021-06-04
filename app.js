'use strict'
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);


let tr = document.createElement('tr');
table.appendChild(tr);
let td = document.createElement('td');
tr.appendChild(td);
td.textContent = ' Order Image ';
let td1 = document.createElement('td');
tr.appendChild(td1);
td1.textContent = ' Order details ';


let lovers = [];
function foodLovers(foodType, custName) {
    this.foodType = foodType;
    this.custName = custName;
    this.path = `img/${foodType}.jpg` ;

    lovers.push(this);
  

}


let form = document.getElementById('form');
form.addEventListener('submit', formLis);

function formLis(event) {
    event.preventDefault();
    let foodTyp = event.target.foodType.value
    let custNam = event.target.custName.value

    new foodLovers(foodTyp, custNam);
    render();
}

function random(){
    return Math.floor(Math.random() * (90 - 10) + 10);
}

function render() {


    for (let i = 0; i < lovers.length; i++) {
        let tr1 = document.createElement('tr');
        table.appendChild(tr1);

        let td1 = document.createElement('td');
        tr1.appendChild(td1);
        let img = document.createElement('img');
        td1.appendChild(img);
        img.setAttribute('src', lovers[i].path);

        let td2 = document.createElement('td');
        tr1.appendChild(td2);

        td2.textContent = `customer Name : ${lovers[i].custName} /`+ `\n`+`food Type: ${lovers[i].foodType}/` + `\n`+ `Food Prise : ${random()} JOD`;

    }
   
}


