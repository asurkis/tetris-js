import gameConstants from './constants';

const gameTable = document.getElementById('game-table');
const gameOverElement = document.getElementById('game-over');
const tableCells = [];
const nextCells = [];
const scoreSpan = document.createElement('td');

for (let i = 0; i < gameConstants.visible.width; i++) {
    const col = [];
    tableCells.push(col);
    for (let j = 0; j < gameConstants.visible.height; j++) {
        const cell = document.createElement('td');
        cell.className = 'cell';
        col.push(cell);
    }
}

for (let i = 0; i < 4; i++) {
    const col = [];
    nextCells.push(col);
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement('td');
        cell.className = 'cell';
        col.push(cell);
    }
}

const rows = [];

for (let i = gameConstants.visible.height - 1; i >= 0; i--) {
    const row = document.createElement('tr');
    rows.push(row);
    for (let j = 0; j < gameConstants.visible.width; j++) {
        row.appendChild(tableCells[j][i]);
    }
}

rows[0].insertAdjacentHTML('beforeend', `<td rowspan="${gameConstants.visible.height}" style="width: 20px"></td>`);
rows[0].insertAdjacentHTML('beforeend', '<td colspan="4" style="text-align: center">Next</td>');
rows[6].insertAdjacentHTML('beforeend', '<td colspan="4" style="text-align: center">Score</td>');

scoreSpan.style.textAlign = 'right';
scoreSpan.style.fontFamily = 'monospace';
scoreSpan.colSpan = 4;
rows[7].appendChild(scoreSpan);

rows[8].insertAdjacentHTML('beforeend', `<td colspan="4" rowspan="${gameConstants.visible.height - 4}"></td>`)

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        rows[4 - i].appendChild(nextCells[j][i]);
    }
}

for (const row of rows) {
    gameTable.appendChild(row);
}

export function setTableColor(x, y, c) {
    if (x < 0 || x >= gameConstants.visible.width) {
        return;
    }
    if (y < 0 || y >= gameConstants.visible.height) {
        return;
    }
    tableCells[x][y].style.backgroundColor = c;
}

export function setNextColor(x, y, c) {
    if (x < 0 || x >= 4) {
        return;
    }
    if (y < 0 || y >= 4) {
        return;
    }
    nextCells[x][y].style.backgroundColor = c;
}

export function displayScore(n) {
    scoreSpan.textContent = n.toLocaleString(navigator.language);
}

export function displayGameOver() {
    gameOverElement.style.visibility = 'visible';
}
