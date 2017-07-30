//array containing cards for game
var cards = ["queen","queen","king","king"];
//array for cards that get selected
var cardsInPlay = [];
//function to check for match
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("Found a match!");
		}else{
			alert("Sorry, try again")
		}
	}
}
//function for flipping cards and storing them
var flipCard = function(cardId){
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);