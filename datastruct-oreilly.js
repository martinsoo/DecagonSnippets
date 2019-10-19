//array can be created as the result of calling split function on a string this functions breaks up a string at a common delimiter such as space for each word, and creates an array consisting of the individual parts of the strings

var sentence= " the world brown turned into what is";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i){
    console.log("word " + i + " : " + words[i]);
    
}
// aggregated Array Operations
//when you make a change to the original array, that changes is reflected in the other array as well.
var nums = [];
for(var i= 0; i<20; ++i){
    nums[i]=i+1
}
var samenums = nums;
nums [0]=400;
console.log(samenums[0]); // this is called a shallow copy. The new array simply points to the original array's elements.

//deep copy of an array, so that each of the origninal element is actually copied into the new array
function copy(arr1,arr2){
    for(var i = 0; i< arr1.length; ++i){
        arr2[i]= arr1[i];
    }
}

var nums = [];
for(var i= 0; i<20; ++i){
    nums[i]=i+1;
}
var samenums = [];
copy(nums, samenums);
nums [0]= 400;
console.log(samenums[0]);

function canBalance(array){
    //* create a non empty array
    array = [1.0,-1,11,0.45,3];
    // * a place to split array into
    var splittedArray = [];
   // let sumLeft= 0;
    // let sumRight = arr.reduce()
    //* loop through the entire array
    for(var i = 0; i< array.length; ++i){
        // add into the array
        splittedArray[i]=i+1;
        //console.log(splittedArray);
    // test to know if the length of array is equal to the splitted array
    if( array.length == splittedArray){
        let lengthOFArr = array.length/2;
    } 
    }
    
     
     
}
canBalance();

