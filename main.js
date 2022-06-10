var readlineSync=require('readline-sync')
var welcomeMessage="Welcome to Yajat's Big Bang Theory Quiz"
console.log(welcomeMessage)

var userName=readlineSync.question("What is your name?")
var score=0;

console.log("Hi "+userName+ " and best of luck!")
var highScores=
  [
    {
      name: "Yajat",
      score: 5
    },
    {
      name: "Arjun",
      score: 4
    }
  ]
var questionList=[
  {
    question:
      "What is Pennys job in the first episode? \n a. Waitress \n b. Pharmaceutical Rep \n c. Model",
    answer: "a"
                  
  }, 
   {
    question:
      "Which college does the main cast work at? \n a. MIT \n b. Caltech \n c. Harvard",
    answer: "b"
                  
  }, 
   {
    question:
      "What is Sheldon's twin sister's name \n a. Minny \n b. Missy \n c. Mandy",
    answer: "b"
                  
  }, 
   {
    question:
      "Which game did Penny get obsessed with? \n a. World of Warcraft \n b. Age of Conan \n c. The Sims",
    answer: "b"
                  
  }
]
  
for(var i=0;i<questionList.length;i++)
  {
    var userAnswer=readlineSync.question(questionList[i].question)
    if(userAnswer==questionList[i].answer)
    {
      console.log("Correct Answer")
      score++
      console.log("Your score is "+ score)
    }
    else
    {
      console.log("Wrong Answer")
      score--
      console.log("Your score is "+ score)
    }
  
    
  }
console.log("Your final score was "+ score)
console.log("Check out the High Scores")
console.log("Name Score")
var highScore=highScores[0].score
for(var i=0;i<highScores.length;i++)
  {
    console.log(highScores[i].name + " "+ highScores[i].score)
    if(highScores[i].score>=highScore)
    {
      highScore=highScores[i].score;
    }
  }
if(highScore<=score)
{
  console.log("Congratulations you have achieved the new High Score")
}
console.log("Thanks for playing \n ------------")