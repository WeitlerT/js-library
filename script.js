let myLibrary = [];
let counter = 0;
const libraryDiv = document.getElementById("library");
const addBook = document.getElementById("addBook");
const closeModal = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");
const delBtn = document.getElementById("delBtn");
const toggleBtn = document.getElementById("toggleBtn");

// Listeners
addBook.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

//delBtn.addEventListener('click', () => {
//    console.log("asdasd");
//});

// Get form data and add to library
function getData(form) {
    var formData = new FormData(form);
    let entryArr = [];

    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
      entryArr.push(pair[1]);
    }

    console.log(Object.fromEntries(formData));

    console.log(`This is the new entry array ${entryArr}`);
    let newEntry = new Book(entryArr[0],entryArr[1],entryArr[2],entryArr[3]);
    console.log(`This is new entry ${newEntry}`);
    populateLibrary(newEntry.getInfo());
    console.log(myLibrary);
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });
  

//Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getInfo = function(){
    let info = [];
    info.push(this.title, this.author, this.pages, this.read);
    // info = [`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read":"not read yet"}`];
    return (info);
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

const harryPotter = new Book('Harry Potter Phil Stone', 'JK Rowling', 255, false);

//Adding some books to start
// myLibrary.push(harryPotter.getInfo());

populateLibrary(["Green eggs n ham", "Stephen King", 150, false]);
populateLibrary(["asdasd", "dasdasd King", 150, false]);

// console.log(harryPotter.toggleRead());

// put these as a new entry <--------

console.log(myLibrary);
// console.log(typeof(myLibrary[0]));
// console.log(typeof(myLibrary[1]));

// Populate Library Function to add books to cards
function populateLibrary(inputArray){

        myLibrary.push(inputArray);

        let newEntry = document.createElement('div');
        newEntry.className = "card";
        newEntry.dataset.num = counter;
        newEntry.innerText = inputArray;

        let delButton = document.createElement('button');
        delButton.setAttribute("id","delBtn");
        delButton.innerText = "Remove";

        let toggleButton = document.createElement('button');
        toggleButton.setAttribute("id","toggleBtn");
        toggleButton.innerHTML = "Toggle Read";

        libraryDiv.appendChild(newEntry);
        newEntry.appendChild(delButton);
        newEntry.appendChild(toggleButton);
        counter ++;

        delButton.addEventListener('click', (e) => {
            // console.log(e.target.id);
            //This is targetting the data-num attribute in our parent container
            let itemIndex = e.target.parentNode.dataset.num;
            //Remove matching index and remove parentNode (container) from HTML
            myLibrary.splice(itemIndex);
            e.target.parentNode.remove();
        });

        toggleButton.addEventListener('click', (e) => {
            let itemIndex = e.target.parentNode.dataset.num;
            console.log(myLibrary[itemIndex].constructor.name);
            // myLibrary[itemIndex].toggleRead();
        });
}

/*
    Input ->
    New Book Object Creation ->
    Book Fields Filled ->
    New Div Created ->
    Fill With Book Object Info
*/