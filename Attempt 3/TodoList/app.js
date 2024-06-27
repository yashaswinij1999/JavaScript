let select = prompt("enter what you like to do");
let todos = [];

while (select != "quit") {
  if (select === "add") {
    let task = prompt("enter what you like add");
    todos.push(task);
    console.log(`${task} added sucessfully`);
    console.log(`******************************************`);
  } else if (select === "list") {
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log(`******************************************`);
  } else if (select === "delete") {
    let index = prompt("enter the index of the task which you want to delete");
    while (isNaN(index)) {
      index = prompt("invalid enter again");
    }
    todos.splice(index, 1);
  }
  select = prompt("enter what you like to do");
}

if (select === "quit") {
  console.log("you quit");
}
