import gameConstants from './constants';
import { setTableColor, setNextColor, displayScore, displayGameOver } from './gui';

let score = 0;
const currentBag = generateBag();

const staticCells = [];
for (let i = 0; i < gameConstants.field.width; i++) {
    const col = [];
    staticCells.push(col);
    for (let j = 0; j < gameConstants.field.height; j++) {
        col.push(-1);
    }
}

let fallingTetrimino = createFallingTetrimino(currentBag[0]);

const colors = {};
colors[-1] = gameConstants.backgroundColor;
for (let i = 0; i < gameConstants.tetriminos.length; i++) {
    colors[i] = gameConstants.tetriminos[i].color;
}

// for (let x = 0; x < 4; x++) {
//     for (let y = 0; y < 4; y++) {
//         setNextColor(x, y, gameConstants.visible.backgroundColor);
//     }
// }

function displayTetrimino({ color, shape, position }, displayFunc) {
    for (const cell of shape) {
        const x = position.x + cell.x;
        const y = position.y + cell.y;
        displayFunc(x, y, color);
    }
}

function updateDisplay() {
    displayScore(score);

    for (let x = 0; x < gameConstants.visible.width; x++) {
        for (let y = 0; y < gameConstants.visible.height; y++) {
            setTableColor(x, y, colors[staticCells[x][y]]);
        }
    }

    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            setNextColor(x, y, gameConstants.backgroundColor);
        }
    }

    const nextTetrimino = gameConstants.tetriminos[currentBag[1]];
    const center = { x: 2, y: 1 };

    displayTetrimino({
        ...nextTetrimino, position: {
            x: center.x + nextTetrimino.offsetFromCenter.x,
            y: center.y + nextTetrimino.offsetFromCenter.y,
        }
    }, setNextColor);

    if (fallingTetrimino) {
        displayTetrimino({ ...fallingTetrimino }, setTableColor);
    }
}

updateDisplay();

function rotateClockwise(tetrimino) {
    const center = tetrimino.center;
    const newShape = [];
    for (const cell of tetrimino.shape) {
        newShape.push({
            x: center.x + cell.y - center.y,
            y: center.y - cell.x + center.x,
        });
    }

    if (isPositionValid({ shape: newShape, position: tetrimino.position })) {
        tetrimino.shape = newShape;
    }
}

function rotateCounterClockwise(tetrimino) {
    const center = tetrimino.center;
    const newShape = [];
    for (const cell of tetrimino.shape) {
        newShape.push({
            x: center.x - cell.y + center.y,
            y: center.y + cell.x - center.x,
        });
    }

    if (isPositionValid({ shape: newShape, position: tetrimino.position })) {
        tetrimino.shape = newShape;
    }
}

function generateBag() {
    const bag = [];
    for (let i = 0; i < gameConstants.tetriminos.length; i++) {
        bag.push(i);
    }
    for (let i = 0; i < bag.length; i++) {
        const r = Math.floor(Math.random() * (bag.length - i));
        const tmp = bag[i + r];
        bag[i + r] = bag[i];
        bag[i] = tmp;
    }
    return bag;
}

function isPositionValid({ shape, position }) {
    for (const cell of shape) {
        const x = position.x + cell.x;
        const y = position.y + cell.y;
        if (x < 0 || x >= gameConstants.field.width) {
            return false;
        }
        if (y < 0 || y >= gameConstants.field.height) {
            return false;
        }
        if (staticCells[x][y] !== -1) {
            return false;
        }
    }
    return true;
}

function createFallingTetrimino(index) {
    const center = {
        x: Math.floor(gameConstants.field.width / 2),
        y: gameConstants.visible.height,
    };

    const tetrimino = {
        index,
        color: gameConstants.tetriminos[index].color,
        center: gameConstants.tetriminos[index].center,
        shape: gameConstants.tetriminos[index].shape.map(({ x, y }) => ({ x, y })),
        position: {
            x: center.x + gameConstants.tetriminos[index].offsetFromCenter.x,
            y: center.y + gameConstants.tetriminos[index].offsetFromCenter.y,
        },
    };

    return isPositionValid(tetrimino) ? tetrimino : null;
}

function shiftTetrimino(tetrimino, offset) {
    const isValid = isPositionValid({
        shape: tetrimino.shape,
        position: {
            x: tetrimino.position.x + offset.x,
            y: tetrimino.position.y + offset.y,
        }
    });
    if (isValid) {
        tetrimino.position.x += offset.x;
        tetrimino.position.y += offset.y;
        updateDisplay();
    }
    return isValid;
}

function fixateTetrimino(tetrimino) {
    for (const cell of tetrimino.shape) {
        const x = tetrimino.position.x + cell.x;
        const y = tetrimino.position.y + cell.y;
        staticCells[x][y] = tetrimino.id;
    }
    updateDisplay();
}

function gameTick() {
    if (!shiftTetrimino(fallingTetrimino, { x: 0, y: -1 })) {
        fixateTetrimino(fallingTetrimino);
        currentBag.shift();
        if (currentBag.length < 2) {
            const newBag = generateBag();
            for (let i = 0; i < newBag.length; i++) {
                currentBag.push(newBag[i]);
            }
        }
        fallingTetrimino = createFallingTetrimino(currentBag[0]);
        if (!fallingTetrimino) {
            gameOver();
        }
    }

    let rowsToShift = [];
    for (let y = 0; y < gameConstants.field.height; y++) {
        let isFull = true;
        for (let x = 0; x < gameConstants.field.width; x++) {
            isFull &= staticCells[x][y] !== -1;
        }
        if (isFull) {
            rowsToShift.push(y);
        }
    }

    score += [0, 100, 250, 500, 1000][rowsToShift.length];

    rowsToShift.reverse();
    for (const row of rowsToShift) {
        for (let y = row; y + 1 < gameConstants.field.height; y++) {
            for (let x = 0; x < gameConstants.field.width; x++) {
                staticCells[x][y] = staticCells[x][y + 1];
            }
        }
        for (let x = 0; x < gameConstants.field.width; x++) {
            staticCells[x][gameConstants.field.height - 1] = -1;
        }
    }

    updateDisplay();
}

function gameOver() {
    clearInterval(timerId);
    clearInterval(gamepadTimerId);
    displayGameOver();
}

function checkGamepad() {
    if (navigator.getGamepads().length == 0) {
        return;
    }

    if (!fallingTetrimino) {
        return;
    }

    if (!this.wasPressed) {
        this.wasPressed = {
            up: false,
            down: false,
            left: false,
            right: false,
            A: false,
            B: false,
        };
    }

    const gamepad = navigator.getGamepads()[0];
    const isPressed = {
        up: gamepad.buttons[12].pressed,
        down: gamepad.buttons[13].pressed,
        left: gamepad.buttons[14].pressed,
        right: gamepad.buttons[15].pressed,
        A: gamepad.buttons[0].pressed,
        B: gamepad.buttons[1].pressed,
    };

    if (!this.wasPressed.left && isPressed.left) {
        shiftTetrimino(fallingTetrimino, { x: -1, y: 0 });
    }

    if (!this.wasPressed.right && isPressed.right) {
        shiftTetrimino(fallingTetrimino, { x: 1, y: 0 });
    }

    if (!this.wasPressed.down && isPressed.down) {
        shiftTetrimino(fallingTetrimino, { x: 0, y: -1 });
    }

    if (!this.wasPressed.A && isPressed.A) {
        rotateCounterClockwise(fallingTetrimino);
    }

    if (!this.wasPressed.B && isPressed.B) {
        rotateClockwise(fallingTetrimino);
    }

    this.wasPressed = isPressed;
}

let timerId = setInterval(gameTick, 400);
const gamepadTimerId = setInterval(checkGamepad, 1);

window.addEventListener('keydown', e => {
    if (!fallingTetrimino) {
        return;
    }
    if (e.key === 'ArrowRight') {
        shiftTetrimino(fallingTetrimino, { x: 1, y: 0 });
    } else if (e.key === 'ArrowLeft') {
        shiftTetrimino(fallingTetrimino, { x: -1, y: 0 });
    } else if (e.key === 'ArrowDown') {
        shiftTetrimino(fallingTetrimino, { x: 0, y: -1 });
    } else if (e.key === 'ArrowUp' || e.key == 'x') {
        rotateClockwise(fallingTetrimino);
    } else if (e.key === 'Control' || e.key === 'z') {
        rotateCounterClockwise(fallingTetrimino);
    }
});
