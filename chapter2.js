/*create a grades object that stores a set of studes in an object.
Provide a function for adding a grade and a function for displaying the student's grade average.
*/

function point(x, y) {
  this.x = x;
  this.y = y;
}
function addGrades(a, b) {
  return a + b;
}

function displayGrades(arr) {
  //Find the sum
  var sum = 0;
  for (var i in arr) {
    sum += arr[i];
  }
  //Get the length of the array
  var numbersCnt = arr.length;
  //Return the average / mean.
  return sum / numbersCnt;
}

var stu1 = new point(12, 14);
var stu2 = new point(10, 35);
var stu3 = new point(01, 45);

var studentGrades = [stu1, stu2, stu3];
console.log(studentGrades);
for (var i = 0; i < studentGrades.length; ++i) {
  console.log(
    "Student grade : " +
      parseInt(i + 1) +
      " : " +
      addGrades(studentGrades[i].x, studentGrades[i].y) +" Task Not Completed"
  );
}

//console.log("Student grade : "+ parseInt(i+1)+ " : "+ addGrades ( studentGrades[i].x  ,studentGrade s[i].y))

/*var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
    var result = Object.keys(obj).map(function(key) {
      return [Number(key), obj[key]];
    });
    
    console.log(result);
    
    var getAverageResult = Object.keys( studentGrades).map(function(key){
        return [Number(key), studentGrades[key]];
    });
    console.log( getAverageResult ) 
    */
