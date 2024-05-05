#! /usr/bin/env node
import inquirer from 'inquirer';
let todo = [];
let conAddTodo = true;
while (conAddTodo) {
    let addTodo = await inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: 'Enter your items in todo list',
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'do you want to add more items?',
            degfault: "false",
        },
    ]);
    todo.push(addTodo.todo);
    conAddTodo = addTodo.addMore;
    console.log(todo);
}
