let myLibrary = [];
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

// Get form data
function getData(form) {
    var formData = new FormData(form);
    let entryArr = [];

    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
      entryArr.push(pair[1]);
    }

    console.log(Object.fromEntries(formData));

    console.log(`This is the new entry ${entryArr}`);
    let newEntry = new Book(entryArr[0],entryArr[1],entryArr[2],entryArr[3]);
    console.log(newEntry);
    myLibrary.push(newEntry.getInfo());
    console.log(myLibrary);
    populateLibrary();
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
    let info;
    info = (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read":"not read yet"}`);
    return (info);
}

const harryPotter = new Book('Harry Potter Phil Stone', 'JK Rowling', 255, false);

//Adding some books to start
myLibrary.push(harryPotter.getInfo());
myLibrary.push(["Cool book", "cool author", 100, false])
myLibrary.push(["Hunger Games", "Stephen King", 125, false])
myLibrary.push(["Green eggs n ham", "Dr.Seuss", 150, false])

console.log(myLibrary);
console.log(typeof(myLibrary[0]));
console.log(typeof(myLibrary[1]));

// Populate Library Function to add books to cards
function populateLibrary(){
    for (let i=0; i<myLibrary.length; i++ ){
        let newEntry = document.createElement('div');
        newEntry.className = "card";
        newEntry.dataset.num = i;
        newEntry.innerText = myLibrary[i];

        let delButton = document.createElement('button');
        delButton.setAttribute("id","delBtn");
        delButton.innerText = "Remove";

        let toggleButton = document.createElement('button');
        toggleButton.setAttribute("id","toggleBtn");
        toggleButton.innerHTML = "Toggle Read";

        libraryDiv.appendChild(newEntry);
        newEntry.appendChild(delButton);
        newEntry.appendChild(toggleButton);
    }
}

populateLibrary();
