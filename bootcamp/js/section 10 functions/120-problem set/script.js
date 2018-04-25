function isEven(x){
  return (x % 2 == 0);
}

function factorial(num){

  var result = 1;

  for(i = num; i > 0; i--){
    result *= i;
  }
  return result;
}

function kebabToSnake(str){
  return str.replace(/-/g, "_");
}
