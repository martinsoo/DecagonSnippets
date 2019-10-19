
// Stack Implmentation function
function stack(){
    this.datastore = [];
    this.top= 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length= length;
}
/// function to add element to a stack
function push(element){
    this.datastore[this.top++]=element;
}
//remove element from the stack
function pop(){
  return  this.datastore[--this.top];
}
// retrieve eleemt from the stack
function peek(){
    return this.datastore[this.top-1];
    // If you call peek on empty-stack you get undefined
}
// return the number of element from stack
function length(){
    return this.top;
}
// to clear out data from the stack
function clear(){
    return this.top = 0;
}
var getStack = new stack();
getStack.push("dava");
getStack.push("Pava")
getStack.push("sava");
getStack.push("lava");
console.log("length:"+ getStack.length());
console.log(getStack.peek()+" show ");
var popped = getStack.pop();
console.log("elemented popped out "+ popped)

console.log(getStack.peek())
getStack.push("shade");
console.log(getStack.peek());
getStack.clear()
console.log("remaining stack " +getStack.length())
console.log(getStack.peek() + ": the Stack is empty now")
getStack.push("Kaka");
console.log(getStack.peek())


