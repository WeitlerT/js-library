let myLibrary = [];
const libraryDiv = document.getElementById("library");


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

console.log(harryPotter.getInfo());
myLibrary.push(harryPotter.getInfo());
console.log(myLibrary);


function populateLibrary(){
    for (let i=0; i<myLibrary.length; i++ ){
        let newEntry = document.createElement('p');
        newEntry.className = "card";
        newEntry.innerText = myLibrary[i];
        libraryDiv.appendChild(newEntry)
    }
}

populateLibrary();