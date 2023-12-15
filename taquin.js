
function shuffle() {
	var grid = document.getElementById('game');
	for (var i = grid.children.length; i >= 0; i--) {
		grid.appendchild(grid.children[Math.random() * i | 0]);
	}
}





function loadGame() {
	shuffle();

}

window.addEventListener('click', function (e) {

	if (e.target.className === 'item') {
		var emptyItem = document.querySelector('.empty');

		if(getDistance(e.target.offsetLeft, e.target.offsetTop, emptyItem.offsetLeft, emptyItem.offsetTop) <= 110) 
		{
			emptyItem.className = 'item';
			emptyItem.innerText = e.target.innerText;
			e.target.className = 'empty';
			e.target.innerText = '';

			checkvictory();

		}

	}
});

function getDistance(x1, y1, x2, y2) {
	var a = x1 - x2;
	var b = y1 - y2; 
	return Math.sqrt(a*a + b*b);
}


	/*
	HERE WE ARE GOING TO CHECK FOR VICTORY
	*/

function checkvictory() {

	var items = document.querySelectorAll('#game>div');
	var score = 0;
	for (var i = 0 ; i < items.length; i++) {
		if(items[i].innerText ===(''+(i + 1))) {
			score++;
		}
		
	}

	if (score>=15) {
		var victoryItem = document.querySelector('.victory');
		victoryItem.style.opacity = "i";

	}
}