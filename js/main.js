//array containing cards for game
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
//array for cards that get selected
var cardsInPlay = [];
var cardId;
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
var flipCard = function(){
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}
var createBoard = function(){
	for(var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}	
}
createBoard();