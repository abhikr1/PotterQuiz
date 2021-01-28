const readLineSynch = require('readline-sync');
const name = readLineSynch.question('Enter your name ?\n');
console.log('\n Welcome to the Harry Potter Quiz \n');
const questionset = [
  {
    question : "How many Weasley siblings are there?",
    options : ['5', '3', '9', '7'],
    correctans : 4
  },
  {
    question : "The three kinds of balls used in Quidditch are Bludgers, Snitches, and…",
    options : ['Quaffles', 'Wiffles', 'Boccis', 'Foozles'],
    correctans : 1
  },
  {
    question : "What is the model of the first broom Harry ever receives?",
    options : ['Cleansweep One', 'Nimbus 2000', 'Hoover', 'Firebolt'],
    correctans : 2
  },
  {
    question : "What’s the name of Filch’s cat?",
    options : ['Ser Pounce', 'Buttercup', 'Mrs. Norris', 'Jones'],
    correctans : 3
  },
  {
    question : "Who has given Harry Potter the Invisibility cloak?",
    options : ['Dumbledore', 'Mad-eye Moody', 'Professor Snape', 'Dobby'],
    correctans : 1
  }
];
let questionnumber = 1;
let score = 0;
for(let eachset of questionset){
  console.log(`Q${questionnumber}. ${eachset.question}`);
  let optionnumber = 1;
  for(let option of eachset.options){
        console.log(`\t${optionnumber}. ${option}`);
        optionnumber ++;
  }
  const userans = readLineSynch.question('Choose the correct option.\n');
  if(userans == eachset.correctans){
    console.log('BINGO! You got this one right.\n');
    score ++;
  }
  else{
    console.log('OOPS! You were wrong.\n');
  }
  questionnumber++;
}
console.log(`CONGRATS ${name}! Your quiz is over.\nYour total score is ${score} out of ${questionset.length}`)