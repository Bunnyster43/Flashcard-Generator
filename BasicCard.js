var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("Who was the first president of the United States?", "george washington");
var card2 = new BasicCard("What was the first president to get assassinated?", "abraham lincoln");
var card3 = new BasicCard("What president had polio?", "franklin roosevelt");
var card4 = new BasicCard("who was the first african american president?", "barack obama");
var card5 = new BasicCard("What president is on the $100 bill?", "benjamin franklin");
var card6 = new BasicCard("Which president ended the vietnam war?", "richard nixon");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);

function studyCards() {
    if(cardCount < cards.length) {
        inquirer.prompt([
{
    name: "question",
    message: cards[cardCount].front
}
    ]).then(function(answer) {

if((answer.question).toLowerCase() === cards[cardCount].back) {
    console.log("correct");
    cardCount ++
    studyCards();
} 
else {
    console.log("incorrect");
    console.log("Back Reads:  " + cards[cardCount].back);
cardCount ++
studyCards();
}
});
}}

studyCards();