const readline = require("readline");
// sample of  ADT list
function List() {
  // defining properties to use for the list
  this.listSize = 0; //
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}
List();
// implement append() function oepration
function append(element) {
  this.dataStore[this.listSize++] = element;
  // affter element is appended listsize is incremeted by 1
}
// helper function for remove is find()cls
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}
//remove () operation
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}
//know the number of Elements in a list
function length() {
  return this.listSize;
}
// retrieving elements or view the element list
function toString() {
  return this.dataStore;
}

// Implement Insertion function
//insertion occur after a specified element already in the list

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}
// insert() uses helper function find() to determine the correct insertion position
//for the new elment by finding the element specifie in the after argumentp5.BandPass()

// clear () implementation allows to clear out elements from a list and allow new elements to be netered
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
// contains() function to check a list to see if a particular value is part of the list

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}
// front() moves element to the front of the list
function front() {
  this.pos = 0;
}

//end() moves element to the end of the list positon of element

function end() {
  this.pos = this.listSize - 1;
}
// implementation of PreV() on list ADT
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}
// next() implemented of list of ADT
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}
// current position

function currPos() {
  return this.pos;
}
// move elment to a certain position
function moveTo(position) {
  this.pos = position;
}
// display elment
function getElement() {
  return this.dataStore[this.pos];
}

var namesNow = new List();
namesNow.append("john Lock" + " london try it");
namesNow.append("john Lockx");
namesNow.append("Pohn Lock");
namesNow.append("laide");
console.log(namesNow.toString());

// move to 1st element on the list n display it
namesNow.front();
console.log(namesNow.getElement());

// move forward on the list n display the elment's value
namesNow.next();
namesNow.next();
namesNow.prev();
console.log(namesNow.getElement().length);

// Iteration thru the list
/*for (namesNow.front(); currPos < namesNow.length(); namesNow.next()) {
  console.log(namesNow.getElement() + " this ITERATION");
}
*/
//var fs = require("fs");

const fs = require("fs");
/*
try {
  let data = fs.readFileSync("list.txt", "utf8");
  let getIt = data.split("\n");
  let itFound = getIt.join("\n ");
  console.log(itFound);
} catch (err) {
  console.error(err);
}
*/
/// list based application
var emails = fs.readFileSync("list.txt", "utf8").split("\n");
//A loop that strips the space frm each array elemenr using trim() function

function createArr(file) {
  // below creates variable to read file n split
  file = fs.readFileSync("list.txt", "utf8").split("\n");
  var arr = file;
  // creates fo/r loop to do indexing
  for (var i = 0; i < arr.length; ++i) {
    // connect trim function to trim array index that was looped
    arr[i] = arr[i].trim();
  }
  return arr;
}
//OBEJIVE: take email array and store its content in a list
var emailList = new List(); // email list  reference here as list() function
// Need for loop here
for (var i = 0; i < emails.length; ++i) {
  // copy emaillist into readIt

  emailList.append(emails[i]);
}

// the above displayyLIst()  can work for object data type  only native types need to modify
function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(
        list.getElement()[" NAME"] + " , " + list.getElement()[" MOVie"]
      );
    } else {
      console.log(list.getElement() + " nothing sha!!!");
      break;
    }
  }
}

// user object in terms of customer
var customers = new List();
// constructor for customer object

function Customer(name, email) {
  this.name = name;
  this.email = email;
}
// function allow customer checkout Email

function checkOut(name, email, emailCollectionList, customerList) {
  // check email is available customer obj created with email tile and customer's name
  if (emailList.contains(email)) {
    var c = new Customer(name, email);
    //customer object appended to customer list
    customerList.append(c);
    //email is removed from the email-Collection list
    emailCollectionList.remove(email);
  } //if email is not available simple msg displayed
  else {
    console.log(email + " is not available.");
  }
}

var emails = createArr("flim.txt");

//console.log(emails + " print\n");
var emailList = new List();
var customers = new List();
for (var i = 0; i < emails.length; ++i) {
  emailList.append(emails[i]);
}

console.log("Available emails: \n");
displayList(emailList);
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  rl.question(`enter your name?`, (answer) => {
  console.log(`${answer}`);
});
var email = rl.setPrompt("what email do want?\n");
rl.prompt();
*/
checkOut("name", "email", emailList, customers);
console.log("\n Customer Query: \n");
displayList(customers);
console.log("\n Emails That is Available\n");
displayList(emailList);
