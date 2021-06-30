// Challenge 1: Your age in  days

function ageInDays(){
    var birthYear = prompt('What year were you born... Good Friend?');
    var ageInDayss = (2021-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswers = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswers);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Generate Cat

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://source.unsplash.com/user/erondu/200x200";
    div.appendChild(image);
}

//  Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computerChoice',botChoice);

    results = decideWinner(humanChoice,botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
     // {'message': 'You won!','color': 'green'}
    rpsFrontEnd(yourChoice.id,botChoice,message); 

}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}

    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
   if(yourScore==0){
       return {'message': 'You lost!','color': 'red'};
   } else if(yourScore==1){
    return {'message': 'You won!','color': 'green'};
   } else{
    return {'message': 'You tied!','color': 'blue'};  
   }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }
    // lets remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" +imageDatabase[humanImageChoice]+"'height = 150 width = 150 >"

    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color']+"; font-size:60px; padding: 30px;'>" + finalMessage['message']+ "</h1>"
    
    botDiv.innerHTML = "<img src='" +imageDatabase[botImageChoice]+"'height = 150 width = 150 >" 

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the colour of all button
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value =='red'){
        buttonRed();
    } else if(buttonThingy.value =='green'){
        buttonGreen();
    } else if(buttonThingy.value =='reset'){
        buttonColorReset();
    } else if(buttonThingy.value =='random'){
        randomColors();
    }

}

function buttonRed(){
    for(let i = 0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i = 0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i = 0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success','btn-warning']
    for(let i = 0; i<all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}