var readlineSync = require('readline-sync');
const chalk = require('chalk');

//reading user name
var userName = readlineSync.question(chalk.bgYellow.black.bold("Enter your name : "));
var retry = "";
//runs atleast once, unless user want to replay again
do{
console.log(chalk.bgCyan.black.bold.italic("\n<<<<<< WELCOME " + userName.toUpperCase() + " >>>>>>>>") + chalk.bgYellow.black.bold("\n\nLets play the HERA PHERI TRIVIA"));
console.log(chalk.bold("\n------------------R  U  L  E S----------------------\n") + chalk.red.italic("# This quiz test your knowledge of the legendary movie Hera PHERI\n# There are 2 levels in the game\n# Each level has 10 question\n# Level 2 starts only if you score a perfect 10 in Level 1\n# You can quit the game only after Question no. 10 or Question no. 20 if in Level 2\n# Don't forget to have fun and share feedback for improvements.\n\n"));


//starts the quiz after user is ready to play
if (readlineSync.keyInYN("To chaliye suru karte hai: ")) {

  var userScore = 0; //score tracker

//highscore list
  var highscore = [
    {
      name: "Abhisek",
      score: 19
    },
    {
      name: "Abhinash",
      score: 18
    },
    {
      name: "Sarvan",
      score:16
    },
  ]
  //play function
  function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green.bold("\nSahi Jawab re Baba\n"));
      userScore = userScore + 1;
    }
    else {
      console.log(chalk.red.bold("\nKya gunda banega re tu, galat jawaab\n"));
    }
  }

  var questionList = [
    {
      questions: "\n1. What were the names of the lead actors in the movie?\n a)Baburao, Raju, Shyam\n b)Babuji, Raju, Suniel\n c)Baburao, Raju, Soham\n ",
      answer: "a"
    },
    {
      questions: "\n2. Who was originally meant to play the role of Shyam?\n a)Anil Kapoor\n b)Sanjay Dutt\n c)Ajay Devgan\n ",
      answer: "b"
    },
    {
      questions: "\n3. Hera Pheri was a remake of which Malayalam film?\n a)Darling Darling \n b)Ramji Rao Speaking\n c)Pilots\n ",
      answer: "b"
    },
    {
      questions: "\n4. How many 'Pos' does Shyam sing in the song 'Main Ladki Po Po Po'?\n a)20\n b)10\n c)14\n ",
      answer: "c"
    },
    {
      questions: "\n5. Which song does Shyam hear when he is about to sign a blank paper?\n a)Golmaal Hai Bhai Sab Golmaal Hai\n b)Jab koi Baat Bigad Jaaye\n c)Tujhse Naraaz nhi Zindagi\n ",
      answer: "a"
    },
    {
      questions: "\n6. In the movie, there is a printing error in the telephone directory between Star Garage & Star__?\n a)Hostels\n b)Fisheries\n c)Kabadiwala\n ",
      answer: "b"
    },
    {
      questions: "\n7. What is the name of Devi Prasad's granddaughter who is kidnapped?\n a)Tinku\n b)Rinku\n c)Pinku\n ",
      answer: "b"
    },
    {
      questions: "\n8. How much money does Kabira ask in exchange for Devi Prasad's granddaughter the first time?\n a)50 lacs\n b)25 lacs\n c)10 lacs\n ",
      answer: "c"
    },
    {
      questions: "\n9. What was the initial title of the movie? \n a)Raftaar\n b)Karm\n c)Golmaal\n ",
      answer: "a"
    },
    {
      questions: "\n10. What is the actual landline number of Star Garage? \n a)2525252\n b)8881212\n c)8888123\n ",
      answer: "b"
    },
  ];
//question list two
var questionList2 = [
  {
    questions:"\n\n11. Raju Paise kitne din me double karne ka wada karta hai?\na)21\nb)25\nc)30\n",
    answer:"b"
  },
  {
    questions:"\n12. What’s the full form of ‘I.T.U.S.’?\na)Iski Topi Uske Sar\nb)Indian Technical University for Smarts\nc)Interntional Talent of Ultimate Student\n",
    answer:"c"
  },
  {
    questions:"\n13. How much did Raju tip the Chaiwala?\na)1000\nb)2000\nc)500\n",
    answer:"a"
  },
  {
    questions:"\n14. What song Babu Rao’s Dadaji used to sing?\na)Gaata rahe mera dil\nb)Mere saamne wali khidki me\nc)Yeh shaam mastani\n",
    answer:"a"
  },
  {
    questions:"\n15. How much did Raju spend on his driver’s plastic surgery?\na)2 Crore\nb)3 Crore\nc)4 Crore\n",
    answer:"c"
  },
  {
    questions:"\n16. Where exactly was the Laxmi Chit Fund office?\na)Versova, Mumbai\nb)Fort, Mumbai\nc)Panvel, Mumbai\n",
    answer:"b"
  },
  {
    questions:"\n17. For how much did Raju sell Shyam’s suit?\na)1000\nb)2000\nc)5000\n",
    answer:"a"
  },
  {
    questions:"\n18. What was the name of the circus?\na)The Great Golden Circus\nb)The Great Royal Circus\nc)The Great Carnival Circus\n",
    answer:"b"
  },
  {
    questions:"\n19. Choose the correct order of how did Raju try to spend Rs. 1000?\na)Gola, Bhutta, Jhoola\nb)Bhutta, Gola, Jhoola\nc)Jhoola,Gola,Bhutta\n",
    answer:"b"
  },
  {
    questions:"\n20. Pick the right definition of an ‘Ameer Aadmi’ by Raju?\na)Ameer aadmi 15 minute me apne kapde badalta hai, aadhe ghante me apna dhandha badalta hai, ek ghante me apni biwi badalta hai aur do ghante me apna ghar badalta hai\n\nb)Ameer aadmi 15 minute me apne kapde badalta hai, aadhe ghante me apna ghar badalta hai, ek ghante me apna dhandha badalta hai aur do ghante me apni biwi badalta hai\n\n",
    answer:"b"
  },
]


//calling function using a loop and passing from question array
  for (var i = 0; i < questionList.length; i++) {
    play(questionList[i].questions, questionList[i].answer);
    if(userScore == 10)
    {
      console.log(chalk.bgCyan.black.bold.italic(" You score a perfect 10, lets move ahead to Level 2 \n"));
      console.log(chalk.bold.yellow("\n-------------------LEVEL 2------------------"));
      for(var k=0; k< questionList2.length; k++)
      {
        play(questionList2[k].questions, questionList2[k].answer);
      }
    }
  }




  console.log(chalk.bold.yellow("------------------- WELL PLAYED "+userName.toUpperCase()+ " --------------------"));
  console.log(chalk.bgRed.black.bold.italic("\n" + userName + ", Your final score is : " + userScore+"  "));

 if(userScore> highscore[0].score)
  {
    console.log(chalk.bgGreen.black.bold.italic("\nCongratulation on  beating the Highscore\n"));
    console.log(chalk.bold.yellow("-------------------------------------"));
    console.log(chalk.red.italic("\n**Since you have beaten the highscore, send me a screensot and I have rewards waiting for you...** "));
    console.log(chalk.bold.yellow("-------------------------------------"));
  }


  //printing a congrats message for full score
  if(userScore == 20){
    console.log(chalk.magenta.bold("\n----------------------------------------\n"));
    console.log(chalk.bgCyan.black.bold.italic("\n~~~~CONGRATULATION ON GETTING A PERFECT SCORE~~~~\n"));
    console.log(chalk.magenta.bold("\n------------------------------------------\n"));
  }
  
  highscore.push({ name: userName, score: userScore, });



  if (readlineSync.keyInYN('\nDo you want to check Scores of other Players?')) {
    console.log(chalk.bold.yellow("\n----------- SCORES ----------- \n"));
    for (var j = 0; j < highscore.length; j++) {
      console.log(chalk.bold.yellow(highscore[j].name + " : " + highscore[j].score));
    }
  }
  else {
    console.log(chalk.bgRed.bold.black("Thank you for playing"));
  }


  retry = readlineSync.question("\nPress Y to replay the Quiz\nPress N to exit the Quiz.\n")
}

else {
  console.log(chalk.bgBlack.bold.red("Nahi kelega to Nikal, pehli fursat me nikal"));
  retry = "";
}
}while(retry === "y");