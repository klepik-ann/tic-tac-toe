"use strict";

const cellList = document.querySelectorAll('.cell');

const gameStatus = document.querySelector('.game--status');
let restartGame = document.querySelector('.game--restart');//сброс
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

//находим нового активного пользователя
function handlePlayerChange() {
	currentUser === 'X' ? currentUser = 'O' : currentUser = 'X';
	gameStatus.innerHTML = `It's ${currentUser}'s turn`;

};


//Валидируем результаты игры
function handleResultValidation() {
	for (let i = 0; i <= winningLines.length - 1; i++) {
		const winCondition = winningLines[i];
		const a = gameState[winCondition[0]];
		const b = gameState[winCondition[1]];
		const c = gameState[winCondition[2]];

		if (a == "" || b == "" || c == "") {
			continue
		} else if (a === b && b === c) {
			gameStatus.textContent = `Player ${currentUser} has won!`;
			activeGame = false;
			return;
		}
		break;
	}

	if (!gameState.includes("")) {
		gameStatus.textContent = `Game ended in a draw!`;
		activeGame = false;
		return;
	};
	handlePlayerChange();
};

function handleCellClick(event) {
	const indexOfCell = event.target.dataset.cellIndex;

	if (!activeGame || gameState[indexOfCell] !== "") {
		return;
	}
	gameState[indexOfCell] = currentUser;
	cellList[indexOfCell].textContent = currentUser;

	handleResultValidation();
};

//обнуляем все переменные и контент в разметке
function handleRestartGame(event) {
	event.preventDefault();
	activeGame = true;
	gameState = ["", "", "", "", "", "", "", "", ""];
	currentUser = 'X';
	gameStatus.textContent = `It's ${currentUser}'s turn`;
	cellList.forEach(element => element.textContent = '');
};


document.querySelectorAll('.cell').forEach(cellList => cellList.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
