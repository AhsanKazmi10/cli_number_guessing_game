#! /usr/bin/env node
import inquirer from "inquirer";
//computer will genreate a rendom number /done
//user input for guessing number /done
//compare user input with computer grnerated number and show reasult /done
const random_number = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    },
]);
if (answers.UserGuessNumber === random_number) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
