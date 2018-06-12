var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

function ClozeCard(text, cloze) {
    this.text = text
	this.cloze = cloze
}

ClozeCard.prototype.full = function() {
	clozeDeleted = this.cloze
	clozeText = this.text
	clozeText = clozeText.replace("...", clozeDeleted);
	console.log(clozeText);
}

var card1 = new ClozeCard("George Washington was the first ... of the United States?", "president");
var card2 = new ClozeCard("First president to get ... was Abraham Lincoln?", "assassinated");
var card3 = new ClozeCard("What president had polio?", "franklin roosevelt");
var card4 = new ClozeCard("who was the first african american president?", "barack obama");
var card5 = new ClozeCard("What president is on the $100 bill?", "benjamin franklin");
var card6 = new ClozeCard("Which president ended the vietnam war?", "richard nixon");

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
name: "partial",
message: cards[cardCount].text
}
]).then(function(answer) {
if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
    console.log("correct");
    cardCount ++
    studyCards();
} 
else { 
    console.log("incorrect");
    cards[cardCount].full();
    cardCount ++
    studyCards();
}});
}}

studyCards();