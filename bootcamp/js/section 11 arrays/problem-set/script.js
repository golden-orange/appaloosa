// write a function that takes an array as argument and
// prints out the array in reverse order

var myArr = [1,2,3,4,5,6,7,8,9];
var strArr = ["make", "decent", "money", "writing", "websites"];

function printReverse(arg){
  for(i = arg.indexOf; i <= arg.length; i--){
    console.log(i);
  }
}

function reverseStr(arg){
  strArr.forEach(function(string){
    console.log(string.reverse);
  });
}
