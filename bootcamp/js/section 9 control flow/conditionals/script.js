function bouncer(){
  var age = prompt("How old are you?");
  if(age < 18){
    alert("You are " + age + ". You are too young to enter.");
  }
  else if(age < 21){
    alert("You are " + age + ". You may enter but not drink.")
  }
  else{
    alert("You may enter and drink.")
  }
}

bouncer();

function whatThe(){
  var age = prompt("How old are ya?");
  if(!(age > 0)){
    alert("How can you be " + age + "??? You don't exist!!!");
  }
  else if(age == 21){
    alert("Happy birthday you lucky bastard!! C'mon eeen!");
  }
  else if(age % 2 !== 0){
    alert("You're age is " + age + " which is very odd....");
  }
  else if(Math.sqrt(age)){
    alert("Wow... you age is a perfect square  8-o ");
  }
  else{
    alert("Whatever " + age + " year old.");
  }
}

whatThe();
