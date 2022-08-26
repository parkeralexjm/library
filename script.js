let myLibrary = [];

// A constructor for the book object
function book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
  // Constructor method to recall the information for the book
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.page +
      " pages, " +
      this.read
    );
  };
}

// Initialise the array with three new books
var theHobbit = new book("The Hobbit", "J.R.R Tolkien", "304", "yes");
var dune = new book("Dune", "Frank Herbert", "412", "no");
var war = new book("War and Peace", "Leo Tolstoy", "1225", "no");

// Move the new books into the library array
myLibrary.push(theHobbit);
myLibrary.push(dune);
myLibrary.push(war);

// Function to create a new book using inputs
function addToLibrary(title, author, page, read) {
  var newBook = new book(title, author, page, read);
  myLibrary.push(newBook);
}

// debugging
console.log(myLibrary);


// Function to update the html with each of the books
function updateDisplay() {
  // Get the div where the content will be displayed
  const libraryDisplay = document.getElementById("libraryDisplay");

  // Clear the display of books
  libraryDisplay.innerHTML = "";
  // For each book in the library, display the information
  for (var i = 0, l = myLibrary.length; i < l; i++) {
    //console.log(myLibrary[i].title)
    const tag = document.createElement("tr");
    tag.className = "libraryEntry"
    tag.id = `book ${i + 1}`
    var title = document.createElement("td")
    title.className = "libraryTitle"
    title.innerHTML = myLibrary[i].title
    var author = document.createElement("td")
    author.className = "libraryAuthor"
    author.innerHTML = myLibrary[i].author
    var page = document.createElement("td")
    page.className = "libraryPage"
    page.innerHTML = myLibrary[i].page
    var read = document.createElement("td")
    read.className = "libraryRead"
    read.innerHTML = myLibrary[i].read

    tag.appendChild(title)
    tag.appendChild(author)
    tag.appendChild(page)
    tag.appendChild(read)
    libraryDisplay.appendChild(tag);
  }

};