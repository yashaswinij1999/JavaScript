"use strict";

let select = prompt("Enter What do you like to do");
console.log(select);

let todoList = [];
let task;

while (select != "quit") {
  if (select === "new") {
    task = prompt("enter what you like to add");
    todoList.push(task);
    console.log(`${task} added to the Todo List`);
    console.log(`***********************************`);
  } else if (select === "list") {
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i} : ${todoList[i]}`);
    }
    console.log(`***********************************`);
  } else if (select === "delete") {
    let index = parseInt(prompt("enter index which you want to delete"));

    if (!Number.isNaN(index)) {
      const task = todoList.splice(index, 1);
      console.log(`***********************************`);
      console.log(` ${task} deleted Successfully`);
    } else {
      prompt("Invalid Index");
    }
  }
  select = prompt("Enter What do you like to do");
}

if (select === "quit") {
  console.log("YOU QUIT!!!!!");
}
