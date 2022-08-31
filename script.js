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
  //updateDisplay();
}

// Delete the title from the myLibrary array
function deleteFromLibrary(title) {
  for (var i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == title) {
      myLibrary.splice(i, 1);
    }
  }
}

// Allow the delete button to delete the entry from the library and update the display
function tableDelete(title) {
  deleteFromLibrary(title);
  updateDisplay();
}

// Function to update the html with each of the books
function updateDisplay() {
  // Get the div where the content will be displayed
  const libraryDisplay = document.getElementById("libraryDisplay");

  // Clear the display of books
  libraryDisplay.innerHTML = "";
  // For each book in the library, display the information
  for (var i = 0, l = myLibrary.length; i < l; i++) {
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

    var deleteBook = document.createElement("td")
    deleteBook.innerHTML = `<button class="deleteBook" onclick="tableDelete('${myLibrary[i].title}')">Delete</button>`

    tag.append(title, author, page, read, deleteBook)
    libraryDisplay.appendChild(tag);
  }
};

function bookForm() {
  // Validate button by checking to see if a formContainer has already been created
  if (document.getElementsByClassName("formContainer").length ==0) {
    
    const mainContainer = document.getElementsByClassName("mainContainer")
    // This didnt work var linebreak = document.createElement("br")
    // Create a container for the form
    const formContainer = document.createElement('div')
    formContainer.className = "formContainer"
    
    // Create a form
    var formContent = document.createElement("div")  // This could be abstracted
    // formContent.setAttribute("onsubmit","doForm(); return false")
    // Create a title field
    var labelTitle = document.createElement("label")
    labelTitle.htmlFor ="inputTitle"
    labelTitle.innerHTML = "Title:"
    formContent.appendChild(labelTitle)
    var inputTitle = document.createElement("input")
    inputTitle.id = "inputTitle"
    inputTitle.name = "inputTitle"
    formContent.appendChild(inputTitle)
    formContent.appendChild(document.createElement("br"))
    // Create a author field
    var labelAuthor = document.createElement("label")
    labelAuthor.htmlFor ="inputAuthor"
    labelAuthor.innerHTML = "Author:"
    formContent.appendChild(labelAuthor);
    var inputAuthor = document.createElement("input");
    inputAuthor.id = "inputAuthor"
    inputAuthor.name = "inputAuthor"
    formContent.appendChild(inputAuthor);
    formContent.appendChild(document.createElement("br"));
    // Create a pages field
    var labelPages = document.createElement("label")
    labelPages.htmlFor ="inputPages"
    labelPages.innerHTML = "Pages:"
    formContent.appendChild(labelPages);
    var inputPages = document.createElement("input")
    inputPages.id = "inputPages"
    inputPages.name = "inputPages"
    formContent.appendChild(inputPages);
    formContent.appendChild(document.createElement("br"));
    // Create a read field
    var labelRead = document.createElement("label")
    labelRead.htmlFor ="inputRead"
    labelRead.innerHTML = "Have you read it?"
    formContent.appendChild(labelRead);
    var inputRead = document.createElement("input")
    inputRead.id = "inputRead"
    inputRead.name = "inputRead"
    inputRead.setAttribute("type", "checkbox");
    formContent.appendChild(inputRead);
    formContent.appendChild(document.createElement("br"));
    // Create a submit field
    var submit = document.createElement("span")
    submit.id = "bookFormSubmit"
    submit.innerHTML = `<button onclick="submitData()"></button>`
    formContent.append(submit)
    var cancel = document.createElement("span")
    cancel.id = "bookFormSubmit"
    cancel.innerHTML = "<button onclick='clearForm()'></button>"
    formContent.append(cancel)

    // Attach the form to the container
    formContainer.append(formContent);
    mainContainer[0].append(formContainer);
  }
}

function clearForm() {
  const element = document.getElementsByClassName("formContainer")
  element[0].remove();
}

function submitData() {
  if (document.getElementById("inputRead").checked == true) {
  var revRead = "yes"
  } else {
    var revRead = "no"
  }

  addToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, revRead);
  clearForm();
  updateDisplay();
  // clear out the form input
  
}

updateDisplay();