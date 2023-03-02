let myLibrary = [];
let counter = 0;
const libraryDiv = document.getElementById("library");
const addBook = document.getElementById("addBookBtn");
const closeModal = document.getElementById("closeModalBtn");
const modalContainer = document.getElementById("modalContainer");
const delBtn = document.getElementById("delBtn");
const toggleBtn = document.getElementById("toggleBtn");
const submitBtn = document.getElementById("submitBtn");

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
    populateLibrary(entryArr[0],entryArr[1],entryArr[2],entryArr[3]);
    console.log(myLibrary);
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });
  

//Book Class
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead(){
        this.read = !this.read;
    }
}


//Adding some books to start
populateLibrary("Green eggs n ham", "Stephen King", 150, false);
populateLibrary("asdasd", "dasdasd King", 150, false);

console.log(myLibrary);

// Populate Library Function to add books to cards
function populateLibrary(title, author, pages, read){

        const book = new Book(title, author, pages, read);
        myLibrary.push(book);

        let newCard = document.createElement('div');
        newCard.className = "card";
        newCard.dataset.num = counter;

        let bookTitle = document.createElement('p');
        bookTitle.className = 'book-title';
        bookTitle.innerText = "Title: " + book.title;

        let bookAuthor = document.createElement('p');
        bookAuthor.className = 'book-author';
        bookAuthor.innerText = "Author: " + book.author;

        let bookPages = document.createElement('p');
        bookPages.className = 'book-pages';
        bookPages.innerText = "Pages: " + book.pages;

        let bookRead = document.createElement('p');
        bookRead.className = 'book-read';
        bookRead.innerText = "Read Status: " + (book.read ? "Read": "Not Read");

        let delButton = document.createElement('button');
        delButton.setAttribute("id","delBtn");
        delButton.innerText = "Remove";

        let toggleButton = document.createElement('button');
        toggleButton.setAttribute("id","toggleBtn");
        toggleButton.innerText = "Toggle Read";

        libraryDiv.appendChild(newCard);
        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        newCard.appendChild(bookRead);
        newCard.appendChild(delButton);
        newCard.appendChild(toggleButton);
        counter ++;

        delButton.addEventListener('click', (e) => {
            //This is targetting the data-num attribute in our parent container
            let itemIndex = e.target.parentNode.dataset.num;
            //Remove matching index and remove parentNode (container) from HTML
            myLibrary.splice(itemIndex);
            e.target.parentNode.remove();
            console.log(myLibrary);
        });

        toggleButton.addEventListener('click', (e) => {
            let itemIndex = e.target.parentNode.dataset.num;
            console.log(myLibrary[itemIndex].constructor.name);
            //Toggle read status using proto method
            myLibrary[itemIndex].toggleRead();
            //Show the change in console and update the HTML
            console.log(myLibrary[itemIndex].read);
            bookRead.innerText = "Read Status: " + (book.read ? "Read": "Not Read");
        });
}