#! /usr/bin/env node
import inquirer from "inquirer";

// // 1) computer will genrate a random number    done

// // 2) user input for guessing number      done

// // 3) computer user input with computer genrated number and show result    done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("congtratulations! you guess write number.");
} else {
  console.log("you guess wrong number");
}
