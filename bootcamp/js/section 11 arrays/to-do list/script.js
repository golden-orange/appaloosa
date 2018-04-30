// window.setTimeout(function() {
//   // put all of your JS code from the lecture here
// }, 500);

// enable user to enter
// enable user to view list of to-dos
// enable user to quit app

    // create an array in which to store the list of to-dos
    list = ["Play with Ace"];

    // ask user for original input
    var input = prompt("What would you like to do?");

    // create loop to enable alert prompt to continue until user selects "quit"
    while(input !== "quit"){
      // handle user inputs
      if(input == "list"){
        viewToDo();
      } else if(input == "new"){
          addToDo();
      } else if(input == "delete"){
        deleteToDo();
      }
      // after user has entered inputs, ask again
      input = prompt("What would you like to do?")
  }
      console.log("Goodbye");

function viewToDo(){
  console.log("********");
  list.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("********");
}

function addToDo(){
  // enable user to enter new to-do
  var newToDo = prompt("Please enter new to-do:");
  list.push(newToDo);
  alert("To-do added");
}

function deleteToDo(){
  var remove = prompt("Which to-do do you want to remove?");
  // match to-do to be removed with to-do's in list:
  list.splice(remove,1)
  alert(remove + " " + "deleted from list.");
}
