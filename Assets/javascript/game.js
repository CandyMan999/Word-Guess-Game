//var wordList = ["bananas", "Maui", "surf", "coconut", "palm", "beach", "waves", "dolphin", "turtle", "aloha"];


//var targetWord = wordList[ Math.floor( Math.random() * wordList.length ) ];

//var wordSplit = targetWord.split("");
//console.log(wordSplit);  


//var unsolvedBeach = []


//make this into a boolean 
//for (let i = 0; i < wordSplit.length; i++) {
//    unsolvedBeach.push("_");
//}

//alert(unsolvedBeach.join(" "));

//var beach = ["b","e","a","c","h"];

//var hiddenBeach = [true, true, true, true, true,]

//i need an object for every letter of the target word


//hookup on key down so we can start getting user input

//take what the user does and check it against our array of  wordSplit so we can see if that letter is in the array

//a conditional if that user input  letter is in wordSplit then we want to update unsolved

// go through wordsplit and everytime they find that particular letter update the underscore for to reflect that logic

//map array function search using js mdn that will allow me to store a result of updating an array



//create an array of words
const wordList = ["bananas", "maui", "surf", "coconut", "palm", "beach", "waves", "dolphin", "turtle", "aloha"];

//choose word randomly
    let randNum = Math.floor(Math.random() * wordList.length);
    let targetWord = wordList[randNum];
    let underScore = [];
    let rightLetter = [];
    let wrongLetter = [];
    let wins = 0;
    let losses = 0;
    let GuessesLeft = 5;

// DOM manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let docWinsCounter = document.getElementById('wins');
let docLossesCounter = document.getElementById('losses');
let docGuessCounter = document.getElementById('GuessesLeft');

//testing
    console.log(targetWord);

//create underscores based on length of word
let generateUnderscore = () => {
    let nonMut = [];
    for (let i = 0; i < targetWord.length; i++) {
        nonMut.push('_');

    }
    return nonMut;
}
console.log(underScore);
underScore = generateUnderscore();
console.log(underScore);

docUnderScore[0].innerHTML = underScore.join(' ');


//get users guess
document.addEventListener('keypress', (event) => {
   let keyPress = String.fromCharCode(event.keyCode);
   console.log(keyPress);
  
  
   //compare the letter with the indexOf property
   //check if guess is right
  
    if(targetWord.indexOf(keyPress) > -1) {
    //add to rightLetter array
        rightLetter.push(keyPress);
        
        console.log(rightLetter);
   
    // TO DO PROBLEM AREA    
    //replace underscore with right letter TO
        //underScore[targetWord.indexOf(keyPress)] = keyPress;
        for (let i = 0; i < targetWord.length; i++) {
            if (targetWord[i] == keyPress) {
                underScore[i] = keyPress;
            }

        }
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightLetter;
    // checks to see if user word matches guesses
        if (underScore.join('') == targetWord) {
            setTimeout( () => {
                alert('You Win Kawabonga BRAH!')
            }, 1000); 
            wins++; 
            docWinsCounter.innerHTML = wins 
            randNum = Math.floor(Math.random() * wordList.length);
            targetWord = wordList[randNum];
            underScore = generateUnderscore();
            rightLetter = [];
            wrongLetter = [];
            GuessesLeft = 5;
            docUnderScore[0].innerHTML = underScore.join(' ');
            
        }
        
        //add to wrongLetter array
      
    }
    else {
        wrongLetter.push(keyPress);
        docWrongGuess[0].innerHTML = wrongLetter;
        GuessesLeft--;
        docGuessCounter.innerHTML = GuessesLeft;
        if (GuessesLeft == 0) {
            losses++;
            docLossesCounter.innerHTML = losses;
            randNum = Math.floor(Math.random() * wordList.length);
            targetWord = wordList[randNum];
            underScore = generateUnderscore();
            rightLetter = [];
            wrongLetter = [];
            GuessesLeft = 5;
            docUnderScore[0].innerHTML = underScore.join(' ')
            

            //update html guesses left
            //also the right and wrong letter array
        }
    console.log(wrongLetter);
    }

    
});
  // TO DO maybe add this into a differnt area or modify
            //docUnderScore.innerHTML = generateUnderscore().join('');


//if right push to right array
//if wrong push to wrong array

function timeoutFn() {
    alert('')
}

 