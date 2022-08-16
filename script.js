"use strict";

const cellList = document.querySelectorAll('.cell');

const gameStatus = document.querySelector('.game--status');
let restartGame = document.querySelector('.game--restart');
let currentUser = 'X';
let activeGame = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningLines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];


function handleCellClick(event) {
	const indexOfCell = event.target.dataset.cellIndex;
	console.log(indexOfCell);
	if (!activeGame || gameState[indexOfCell] !== "") {
		return;
	}
	gameState[indexOfCell] = currentUser;
	cellList[indexOfCell].textContent = currentUser;
	handlePlayerChange();
}
function handlePlayerChange() {
	currentUser === 'X' ? currentUser = 'O' : currentUser = 'X';
	gameStatus.innerHTML = `It's ${currentUser}'s turn`;
}

document.querySelectorAll('.cell').forEach(cellList => cellList.addEventListener('click', handleCellClick)
);



// function checkWinningLines() {
// 	for (let i = 0; i <= winningLines.length - 1; i++) {
// 		const winCondition = winningLines[i];
// 		const a = gameState[winCondition[0]];
// 		const b = gameState[winCondition[1]];
// 		const c = gameState[winCondition[2]];

// 		if (a == "" || b == "" || c == "") {
// 			continue
// 		}
// 		if (a === b $$ b == c) {
// 			gameStatus.innerHTML = `Player ${currentUser} has won!`;
// 			activeGame = false;
// 			break;
// 		}
// 	}
// 	handlePlayerChange();
// 	if (gameState.includes("")) {
// 		gameStatus.innerHTML = `Game ended in a draw!`;
// 		activeGame = false;
// 	}
// };






