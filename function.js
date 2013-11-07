//Library Constructor

function library() {
    this.getShelves = function getShelves() {
        return shelves.length;
    };
    this.countBooks = function countBooks() {
        var totalBooks = 0;
        for (var i = 0; i < shelves.length; i++) {
            totalBooks = totalBooks + shelves[i].length;
        }
        return totalBooks;
    };
    this.printAllBooks = function printAllBooks() {
        for (var i = 0; i < shelves.length; i++) {
            for (var j = 0; j < shelves[i].length; j++)
            console.log(shelves[i][j].name);
        }
    };
}

//Book constructor

function book(name) {
    this.name = name;
    this.enshelf = function enshelf(shelf) {
        shelf.push(this);
    };
    this.unshelf = function unshelf(shelf) {
        shelf.splice(shelf.indexOf(this), 1);
    };
}

//Shelf Arrary and shelf functions

var shelves = [];

function newShelf() {
    shelves[shelves.length] = new Array();
}

function printBooks(shelf) {
    for (var i = 0; i < shelf.length; i++) {
        console.log(shelf[i].name);
    }
}

//Test commands

/*
var myLibrary = new library;
  
var book1 = new book("Moby Dick");
var book2 = new book("Mark Twain");
var book3 = new book("The Hobbit");
var book4 = new book("Little Women");


newShelf();
newShelf();
newShelf();

book1.enshelf(shelves[1]);
book2.enshelf(shelves[0]);
book3.enshelf(shelves[2]);
book4.enshelf(shelves[0]);

book2.unshelf(shelves[0]);

myLibrary.printAllBooks();

printBooks(shelves[0]);
*/