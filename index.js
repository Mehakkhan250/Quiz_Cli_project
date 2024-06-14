import inquirer from "inquirer";
console.log(`Welcome to Daily Quiz`);
console.log(`Each question is of 10 marks\n`);
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: `list`,
        name: `question1`,
        message: `1. Which is the Capital city of Pakistan`,
        choices: ["karachi", "Lahore", "Islamabad", "Multan"],
    },
    {
        type: `list`,
        name: `question2`,
        message: `2. How any times name AHMED came in Quran`,
        choices: [1, 2, 3, 10],
    },
    {
        type: `list`,
        name: `question3`,
        message: `3. How many Surahs are there in Holy quran`,
        choices: [120, 114, 110, 125],
    },
    {
        type: `list`,
        name: `question4`,
        message: `4. Most populated city in Pakistan`,
        choices: ["Karachi", "lahore", "Islamabad", "Punjab"],
    },
    {
        type: `list`,
        name: `question5`,
        message: `5. How many days are there in leap year?`,
        choices: [365, 360, 315, 370],
    },
]);
const { question1, question2, question3, question4, question5 } = userInput;
let correctOption = ["Islamabad", 1, 114, "Karachi", 365];
if (question1 === "Islamabad")
    marks += 10;
if (question2 === 1)
    marks += 10;
if (question3 === 114)
    marks += 10;
if (question4 === "Karachi")
    marks += 10;
if (question5 === 365)
    marks += 10;
console.log(marks);
function myAnswer() {
    console.log(`\ncorrect Option:`, correctOption);
    if (marks == 50) {
        console.log(`/nCongratulation! You got full${marks} marks`);
    }
    else {
        console.log(`\nYou got ${marks} marks`);
    }
    {
        console.log(`\nUnfortunately you got ${marks} marks`);
    }
}
myAnswer();
