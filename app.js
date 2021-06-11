'use strict'
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let remove = document.getElementById('Remove');
remove.addEventListener('click', removeOrders);

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
    this.path = `img/${foodType}.jpg`;

    lovers.push(this);
}

let form = document.getElementById('form');
form.addEventListener('submit', formLis);

function formLis(event) {
    event.preventDefault();
    let foodTyp = event.target.foodType.value
    let custNam = event.target.custName.value

    new foodLovers(foodTyp, custNam);
    settingItem();
    render();

}

function random() {
    return Math.floor(Math.random() * (90 - 10) + 10);
}

function render() {
    table.textContent = "";
    for (let i = 0; i < lovers.length; i++) {

        let tr1 = document.createElement('tr');
        table.appendChild(tr1);

        let td1 = document.createElement('td');
        tr1.appendChild(td1);
        let img = document.createElement('img');
        td1.appendChild(img);
        img.setAttribute('src', lovers[i].path);

        let p = document.createElement('p');
        tr1.appendChild(p);

        p.textContent =

            ` customer Name : ${lovers[i].custName} 


         food Type : ${lovers[i].foodType} 


         Food Prise : ${random()} JOD `;
    }
}

function settingItem() {
    let setObject = JSON.stringify(lovers);
    localStorage.setItem('key', setObject);

}

function getObject() {
    let local = localStorage.getItem('key');
    let convert = JSON.parse(local);
    if (convert !== null) {
        lovers = convert;
    }


}
getObject();

function removeOrders() {
    localStorage.clear();
    window.location.reload();

}
