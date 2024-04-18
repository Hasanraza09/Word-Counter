#! /usr/bin/env node

// This line is called shabang, which is a command line interface for Nodejs.

// Import 'inquirer' module, command line interface for nodejs
import inquirer from "inquirer";
import chalk from "chalk";

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answer: {
    Sentence: string;
} = await inquirer.prompt([  
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words = answer.Sentence.trim().split(" ");

// Print the array of words to the console
console.log(words);

// Print the word count of the sentence to the console
console.log(chalk.yellow(`Your Sentence has ${chalk.blue(words.length)} words.`));

const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
console.log(chalk.cyan(`Longest Word: ${longestWord}`));
