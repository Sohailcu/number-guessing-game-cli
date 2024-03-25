#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number    (Done)
// 2) user input for gussing number             (Done)
// 3) compare user input with computer generated number and show result


// const randomnumber = Math.random();

const randomnumber = Math.floor(Math.random() * 10 + 1); // Generate a random whole number between 1 - 10 inclusiveconst minNumber=1;

console.log("Welcome to My First  Project Number Guessing Game")
// console.log(randomnumber);


// const randomnumber = 13; 

const answers = await inquirer.prompt([
    {
        name: "Userguessednumber",
        type: "number",
        message: "please guess a number between 1-10 : ",
    }
]);

if(answers.Userguessednumber === randomnumber){
        console.log("Congtatulational.! You Guessed Right Number.")
}else{
    console.log("You Guessed Wrong Number.")

}
