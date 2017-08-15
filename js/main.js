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
//function to shuffle array order like shuffling deck
function shuffle(cards) {
    for (var i = cards.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}
//array for cards that get selected
var cardsInPlay = [];
//element for result to be displayed
var result = document.getElementById('match-result');
//Variables to tally score
var winTally = 0;
var loseTally = 0;
//function to check for match
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			result.textContent = "Found a match!";
			winTally += 1;
			var win = document.getElementById('win-count');
			win.textContent = winTally;
		}else{
			result.textContent = "Sorry, try again";
			loseTally += 1;
			var lose = document.getElementById('lose-count');
			lose.textContent = loseTally;
		}
	}
}
//function for flipping cards and storing them
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}
var createBoard = function(){
	for(var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', 'card-'+i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}	
}
createBoard();
//resets the board to be able to play again
var boardReset = function(){
	for(i = 0; i < cards.length; i++){
		var cardReset = document.querySelectorAll('img')[i];
		cardReset.setAttribute('src','images/back.png');
		cardsInPlay.pop();
		result.textContent = "";
	}
	cards = shuffle(cards);
}
var reset = document.querySelector('button');
reset.addEventListener('click', boardReset);







