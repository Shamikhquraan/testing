'use strict';
let containerEl = document.getElementById('container');
let containerForm = document.getElementById ('container-form');
let containerTable = document.getElementById ('container-table');
let tableEl = document.createElement('table');


let totalPrice=0;
let books = [];
let trEl;

function book (bName, nPage, cCategory) {
this.bName = bName;
this.nPage = nPage;
this.cCategory = cCategory;
this.randomPrMS =this.random();
this.totalCos=totalPrice+this.randomPrMS;
books.push(this);
saveTolocalStorage();
};

book.prototype.random=function(){

   let min = Math.ceil(3);
   let max = Math.floor(8);
    let randomP = Math.floor(Math.random() * (max - min) + min);
return randomP;
};





function createTableHeader() {
  

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    
    let mm = document.createElement('th');
    mm.textContent = "icon";
    trEl.appendChild(mm);

    let thBookNameEl = document.createElement('th');
    thBookNameEl.textContent = "Book Name";
    trEl.appendChild(thBookNameEl);

    let thNumberPagesEl = document.createElement('th');
    thNumberPagesEl.textContent = "Num berof Pages";
    trEl.appendChild(thNumberPagesEl);



    let thPriceEl = document.createElement('th');
    thPriceEl.textContent = "Price";
    trEl.appendChild(thPriceEl);


    let thCategoryEl = document.createElement('th');
    thCategoryEl.textContent = "Category";
    trEl.appendChild(thCategoryEl);

    let thTotalEl = document.createElement('th');
    thTotalEl.textContent = "Total coast";
    trEl.appendChild(thTotalEl);
    



    tableEl.appendChild(trEl);
    // containerTable.appendChild(tableEl);

};

let count=0;

book.prototype.render=function(){
    totalPrice+=this.randomPrMS;

    let trEl = document.createElement('tr');

      
     let tdEl = document.createElement('td');
     let aEl = document.createElement('a');
     aEl.innerHTML = `<ion-icon id=${count} name="close-circle-outline"></ion-icon>`;
     tdEl.addEventListener('click',removCart);
     tdEl.appendChild(aEl);
    trEl.appendChild(tdEl)
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = this.bName;
    trEl.appendChild(tdEl1);
    count++;
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = this.nPage;
    trEl.appendChild(tdEl2);
    
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = this.randomPrMS;
    trEl.appendChild(tdEl3);
    
    let tdEl4 = document.createElement('td');
    tdEl4.textContent = this.cCategory;
    trEl.appendChild(tdEl4);

    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);

  
    let tdEl5 = document.createElement('td');
    tdEl5.textContent =this.totalCos;
    trEl.appendChild(tdEl5);
    


    tableEl.appendChild(trEl);
    containerTable.appendChild(tableEl);

    
    }

// =================================Form==============
createTableHeader();
let myForm = document.getElementById ('myform');
myForm.addEventListener('submit' ,addBook);
function addBook(event) {

event.preventDefault();

let bName = event.target.bName.value;
let nPage = event.target.nPage.value;
let cCategory = event.target.cCategory.value;

let newBook =new book(bName,nPage,cCategory);
newBook.random();
newBook.render();

}


function saveTolocalStorage (){

    let saveLocal =JSON.stringify(books);
    localStorage.setItem('boook',saveLocal)

}

function readFromLocalStorage (){
    
    let stringObj=localStorage.getItem('boook');
    let normalObj=JSON.parse(stringObj);
   let bkNew=normalObj;
    if (normalObj !==null) {
      for(let i=0 ; i<normalObj.length;i++){
      new book(normalObj[i].bName,normalObj[i].nPage,normalObj[i].cCategory).render();

      }
    }
}
readFromLocalStorage ();

  