const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.bold.bgRed(" Hey, Do you watch superhero movies? \n"));
console.log(chalk.bold.hex('ffa45b')("Hope you will enjoy while playing this game\n"));

var playerName = (readlineSync.question((chalk.bold.hex('fecd1a')("Enter your name : ")))).toUpperCase();

var questionCount = 1;
var playerScore = 0;

console.log(chalk.bold.bgHex('056674')(`\n Cool, Nice to meet you, ${playerName} `));

console.log(`${chalk.bold.bgHex('ec524b')('\n KNOW THE RULES : ')}\n`);

console.log(`${chalk.bold.hex('cfd3ce')("     1. Quiz contains 3 levels. Level 1 and level 2 contains 6 questions. Level 3 contains 8 questions")}\n`);
console.log(`${chalk.bold.hex('cfd3ce')("    2. Select an option among a, b, c and d. Each correct answer adds up 1 point to existing score.")}\n`);

console.log(`${chalk.bold.hex('cfd3ce')("     3. If you score atleast 4 in level 1 and level 2 you can go to the next level.")}\n`);

var players = 
{
	'Dhanush    ' : 5,
	'Ajay       ' : 35,
	'Pranu      ' : 20,
	'Jaswanth   ' : 25,
	'Bhava      ' : 15,     
	'Jaswanth T ': 15,  
	'Vishnu     ' : 40,
}

const superLevelOne = [
    {
      q: "Which of these is NOT the name of one of the 'Heroes Three' of Asgard (Thor's pals)?",
      a1: "Hogun",
      a2: "Bjorn",
      a3: "Fandral",
      a4: "Volstagg",
      crt: "b"
    },
    {
      q: "Who is Gotham’s Clown Prince of Crime?",
      a1: "Joker",
      a2: "Harley Quinn",
      a3: "Crazy Quilt",
      a4: "Mad Hatter",
      crt: "a"
    },
    {
      q: "What is Superman’s weakness?",
      a1: "Speed Force",
      a2: "Nth Metal",
      a3: "Kryptonite",
      a4: "Parallax",
      crt: "c"
    },
    {
      q: "What is Batman’s secret identity?",
      a1: "Knightfall",
      a2: "Cheshire",
      a3: "Catwoman",
      a4: "Bronze Tiger",
      crt: "c"
    },
	{
      q: "Which of these films happens first in Marvel Cinematic Continuity?",
      a1: "The Incredible Hulk",
      a2: "Iron Man 2",
      a3: "Thor",
      a4: "Spider Man",
      crt: "a"

    },
    {
      q: "What piece of jewelry does each Green Lantern wear?",
      a1: "Bracelet",
      a2: "Crown",
      a3: "Watch",
      a4: "Ring",
      crt: "d"
    },
]

const superLevelTwo = [
	{
      q: "This member of the Justice League has cybernetic prostheses.",
      a1: "Green Latern",
      a2: "Cyborg",
      a3: "Wonder Woman",
      a4: "Batman",
      crt: "b"
    },
    {
      q: "Captain America's shield is made of:",
      a1: "Titanium",
      a2: "Zirconium",
      a3: "Adamantium",
      a4: "Vibranium",
      crt: "d"
    },
	{
      q: "Who was assigned by Nick Fury to specifically monitor the cosmic cube, a.k.a Tesseract before Loki's arrival on Earth?",
      a1: "Agent Coulson",
      a2: "Black Window",
      a3: "Hawkeye",
      a4: "Captain America",
      crt: "c"
    },
    {
      q: "Which city is protected by Batman?",
      a1: "Gotham",
      a2: "Metropolis",
      a3: "Coast City",
      a4: "Opal City",
      crt: "a"
    },
    {
      q: "What is the name of Tony Stark's Robotic lab assistant?",
      a1: "Dum-E",
      a2: "Dim-Wit",
      a3: "Ding-bat",
      a4: "Dum-B",
      crt: "a"
    },
    {
      q: "Before being recruited by Black Widow, Bruce Banner was helping citizens in:",
      a1: "Belize, South America",
      a2: "Manila, PhillreadlineSync.questionines",
      a3: "Kolkata, India",
      a4: "Libronqe, North America",
      crt: "c"
    }
  ]

  const superLevelThree = [
    
    {
      q: "Who is the Scarlet Speedster of Central City?",
      a1: "Flash",
      a2: "Max Mercury",
      a3: "Superman",
      a4: "Red Tornado",
      crt: "a"

    },
    {
      q: "What is the main superhero team of the DC Universe?",
      a1: "Outsiders",
      a2: "Teen Titans",
      a3: "Guardians of Galaxy",
      a4: "Justice League",
      crt: "d"
    },
	{
      q: "Which of these beings did the 'Science Bros' have NOTHING to do with their creation(Thor's pals)?",
      a1: "Destroyer",
      a2: "Hulk",
      a3: "Ultron",
      a4: "Vision",
      crt: "a"
    },
    {
      q: "Due to studio rights, the lineage of the Maximoff Twins has changed in Avengers: Age of Ultron. Who is their ORIGINAL father within the comics?",
      a1: "Dr.Doom",
      a2: "Thanos",
      a3: "Magneto",
      a4: "Norman OSbom",
      crt: "c"
    },
    {
      q: "Peggy Carter was a member of which military entity before helping found S.H.I.E.L.D?",
      a1: "British Secret Service",
      a2: "Strategic Scientific Reserve",
      a3: "Homefront Security Division",
      a4: "Spark crawdles",
      crt: "b"
    },
    {
      q: "What is the name of Thanos' servant and minion?",
      a1: "The Seer",
      a2: "The Other",
      a3: "Mouth of Thanos",
      a4: "The Seeker",
      crt: "b"

    },
    {
      q: "Where does Wonder Woman come from?",
      a1: "Dinosaur Island",
      a2: "Themyscira",
      a3: "Nanda Prabat",
      a4: "Avalon",
      crt: "b"
    },
	 {
      q: "Who is the half-human ruler of Atlantis?",
      a1: "Black Manta",
      a2: "Mera",
      a3: "Ocean Master",
      a4: "Aquaman",
      crt: "d"
    },
    
  ]

start();

function start(){
console.log(""+chalk.bold.bgRed(" Hero, the fight starts... \n"));
console.log(chalk.bold.bgHex('cad315')(" W E L C O M E  T O  L E V E L  -  1 \n"));
var returnScore =0;
returnScore =  playQuiz(superLevelOne);

if(returnScore >= 4){
	console.log(chalk.bold.bgHex('cad315')(" W E L C O M E  T O  L E V E L  -  2 \n"));
	returnScore =playQuiz(superLevelTwo);

	if(returnScore >= 8){
		
		console.log(chalk.bold.bgHex('cad315')(" W E L C O M E  T O  L E V E L  -  3 \n"));
		returnScore = playQuiz(superLevelThree);

	validate(returnScore, playerName);
	}
	else{	
	validate(returnScore, playerName);
}
}
else{
validate(returnScore, playerName);
}
	
}

function playQuiz(quizArray){
  for (let i = 0; i < quizArray.length; i++) {
    console.log(`\n${questionCount++}. ${chalk.inverse.hex('ec5858')(quizArray[i].q)}\n`);
    console.log(`          a: ${chalk.bgHex('34626c')(quizArray[i].a1)}`);
    console.log(`          b: ${chalk.bgHex('34626c')(quizArray[i].a2)}`);
    console.log(`          c: ${chalk.bgHex('34626c')(quizArray[i].a3)}`);
    console.log(`          d: ${chalk.bgHex('34626c')(quizArray[i].a4)}`);
    var thisAnswer = readlineSync.question(chalk.hex("ccf6c8")("Answer: ")+" ");
   if (thisAnswer.toLowerCase() == quizArray[i].crt){ 
	   console.log(chalk.bold.green('Correct answer'));
     playerScore+=5;
	 console.log(chalk.bold.blue(`Current Score : ${playerScore}`));
   } 
   else{
	   	   console.log(chalk.bold.red('Wrong answer'));
			console.log(chalk.bold.blue(`Current Score : ${playerScore}\n`));

   }
   }
	return playerScore;
}


function validate(finalScore, playerName){
		let ok = Object.keys(players);
	var maxi = 0;
	for(let i=0;i<ok.length;i++){
		let na = ok[i];
		if(players[na] < finalScore){
			maxi++;
	}
	}
	if (maxi==ok.length){
		console.log(chalk.bold.green(`\n Tadaaa!!! HIGH SCORE - ${finalScore}\n`));
      console.log(chalk.bold.bgGreen(` YOU ARE A TRUE SUPERHERO FAN, YOU WERE THE HIGHEST TILL NOW!! ZING ZING YOU ARE AMAZING`+"😍😍😍"));

	  
	}
   else{ 
   console.log(` ${chalk.bold.red(`\n 🤨🤨🤨    ${playerName}, YOUR SCORE IS : `)} ${chalk.bold.bgRed(" "+finalScore+" ")} \n`);
   }

   players[`${playerName}`]= finalScore;
	showLeader();

}
   

function showLeader(){
let ok = Object.keys(players);
let okvalue = [];
ok.forEach(key => {
	okvalue.push(players[key]);
})
var newPlayers={};
okvalue.sort(function(a, b){return b-a});
okvalue.forEach(each => {
	for(let eachKey=0; eachKey<ok.length;eachKey++){
		let o=ok[eachKey];
		if(players[o] == each){
			newPlayers[o] = each;
			players[o] = 1000;
			break;
		}
	}
})

console.log(chalk.bold.bgHex('52057b')('\n --- L E A D E R   B O A R D --- '));
let newok = Object.keys(newPlayers);

for(let i=0;i<newok.length;i++){
	let na = newok[i]
	console.log(`${chalk.bold.bgHex('495464')(` ${na} :: ${newPlayers[na]} `)}`);
}
		if(readlineSync.question(`${chalk.bold.yellow('\n Do you want to try again?(yes or no) ')}`).toLowerCase() == 'yes')
		{
		questionCount=1;
		start();
		}
		else{

		console.log(chalk.bold.hex('28df25')("\n Screenshot your score so that I will update the leaderboard your name to the object of fame."));
		console.log(chalk.bold.hex('28df25')(" \nI am very happy that you have played the quiz. "))
		console.log(chalk.bold.hex('28df99')("\nDon't forget to share on twitter or linkedin and tag me."));
		console.log(chalk.bold.bgHex('8f384d')("\n ----- KEEP LEARNING, KEEP SHARING----- "));
}
		}
