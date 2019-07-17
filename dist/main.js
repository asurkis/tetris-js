/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameConstants = {\r\n    field: {\r\n        width: 10,\r\n        height: 22,\r\n    },\r\n    visible: {\r\n        width: 10,\r\n        height: 20,\r\n    },\r\n    cell: {\r\n        width: 10,\r\n        height: 10,\r\n    },\r\n    tetriminos: [\r\n        {\r\n            // I\r\n            color: 'cyan',\r\n            center: { x: 1.5, y: 0.5, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 2, y: 0, },\r\n                { x: 3, y: 0, },\r\n            ],\r\n        },\r\n        {\r\n            // O\r\n            color: 'yellow',\r\n            center: { x: 0.5, y: 0.5, },\r\n            offsetFromCenter: { x: -1, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 0, y: 1, },\r\n                { x: 1, y: 1, },\r\n            ],\r\n        },\r\n        {\r\n            // T\r\n            color: 'purple',\r\n            center: { x: 1, y: 0, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 2, y: 0, },\r\n                { x: 1, y: 1, },\r\n            ],\r\n        },\r\n        {\r\n            // S\r\n            color: 'green',\r\n            center: { x: 1, y: 0, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 1, y: 1, },\r\n                { x: 2, y: 1, },\r\n            ],\r\n        },\r\n        {\r\n            // Z\r\n            color: 'red',\r\n            center: { x: 1, y: 0, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 1, },\r\n                { x: 1, y: 1, },\r\n                { x: 1, y: 0, },\r\n                { x: 2, y: 0, },\r\n            ],\r\n        },\r\n        {\r\n            // J\r\n            color: 'blue',\r\n            center: { x: 1, y: 0, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 1, },\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 2, y: 0, },\r\n            ],\r\n        },\r\n        {\r\n            // L\r\n            color: 'orange',\r\n            center: { x: 1, y: 0, },\r\n            offsetFromCenter: { x: -2, y: 0, },\r\n            shape: [\r\n                { x: 0, y: 0, },\r\n                { x: 1, y: 0, },\r\n                { x: 2, y: 0, },\r\n                { x: 2, y: 1, },\r\n            ],\r\n        },\r\n    ],\r\n    backgroundColor: 'black',\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameConstants);\r\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/*! exports provided: setTableColor, setNextColor, displayScore, displayGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTableColor\", function() { return setTableColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNextColor\", function() { return setNextColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayScore\", function() { return displayScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayGameOver\", function() { return displayGameOver; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\nconst gameTable = document.getElementById('game-table');\r\nconst gameOverElement = document.getElementById('game-over');\r\nconst tableCells = [];\r\nconst nextCells = [];\r\nconst scoreSpan = document.createElement('td');\r\n\r\nfor (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.width; i++) {\r\n    const col = [];\r\n    tableCells.push(col);\r\n    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height; j++) {\r\n        const cell = document.createElement('td');\r\n        cell.className = 'cell';\r\n        col.push(cell);\r\n    }\r\n}\r\n\r\nfor (let i = 0; i < 4; i++) {\r\n    const col = [];\r\n    nextCells.push(col);\r\n    for (let j = 0; j < 4; j++) {\r\n        const cell = document.createElement('td');\r\n        cell.className = 'cell';\r\n        col.push(cell);\r\n    }\r\n}\r\n\r\nconst rows = [];\r\n\r\nfor (let i = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height - 1; i >= 0; i--) {\r\n    const row = document.createElement('tr');\r\n    rows.push(row);\r\n    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.width; j++) {\r\n        row.appendChild(tableCells[j][i]);\r\n    }\r\n}\r\n\r\nrows[0].insertAdjacentHTML('beforeend', `<td rowspan=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height}\" style=\"width: 20px\"></td>`);\r\nrows[0].insertAdjacentHTML('beforeend', '<td colspan=\"4\" style=\"text-align: center\">Next</td>');\r\nrows[6].insertAdjacentHTML('beforeend', '<td colspan=\"4\" style=\"text-align: center\">Score</td>');\r\n\r\nscoreSpan.style.textAlign = 'right';\r\nscoreSpan.style.fontFamily = 'monospace';\r\nscoreSpan.colSpan = 4;\r\nrows[7].appendChild(scoreSpan);\r\n\r\nrows[8].insertAdjacentHTML('beforeend', `<td colspan=\"4\" rowspan=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height - 4}\"></td>`)\r\n\r\nfor (let i = 0; i < 4; i++) {\r\n    for (let j = 0; j < 4; j++) {\r\n        rows[4 - i].appendChild(nextCells[j][i]);\r\n    }\r\n}\r\n\r\nfor (const row of rows) {\r\n    gameTable.appendChild(row);\r\n}\r\n\r\nfunction setTableColor(x, y, c) {\r\n    if (x < 0 || x >= _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.width) {\r\n        return;\r\n    }\r\n    if (y < 0 || y >= _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height) {\r\n        return;\r\n    }\r\n    tableCells[x][y].style.backgroundColor = c;\r\n}\r\n\r\nfunction setNextColor(x, y, c) {\r\n    if (x < 0 || x >= 4) {\r\n        return;\r\n    }\r\n    if (y < 0 || y >= 4) {\r\n        return;\r\n    }\r\n    nextCells[x][y].style.backgroundColor = c;\r\n}\r\n\r\nfunction displayScore(n) {\r\n    scoreSpan.textContent = n.toLocaleString(navigator.language);\r\n}\r\n\r\nfunction displayGameOver() {\r\n    gameOverElement.style.visibility = 'visible';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui */ \"./src/gui.js\");\n\r\n\r\n\r\nlet score = 0;\r\nconst currentBag = generateBag();\r\n\r\nconst staticCells = [];\r\nfor (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width; i++) {\r\n    const col = [];\r\n    staticCells.push(col);\r\n    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.height; j++) {\r\n        col.push(-1);\r\n    }\r\n}\r\n\r\nlet fallingTetrimino = createFallingTetrimino(currentBag[0]);\r\n\r\nconst colors = {};\r\ncolors[-1] = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backgroundColor;\r\nfor (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos.length; i++) {\r\n    colors[i] = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[i].color;\r\n}\r\n\r\n// for (let x = 0; x < 4; x++) {\r\n//     for (let y = 0; y < 4; y++) {\r\n//         setNextColor(x, y, gameConstants.visible.backgroundColor);\r\n//     }\r\n// }\r\n\r\nfunction displayTetrimino({ color, shape, position }, displayFunc) {\r\n    for (const cell of shape) {\r\n        const x = position.x + cell.x;\r\n        const y = position.y + cell.y;\r\n        displayFunc(x, y, color);\r\n    }\r\n}\r\n\r\nfunction updateDisplay() {\r\n    Object(_gui__WEBPACK_IMPORTED_MODULE_1__[\"displayScore\"])(score);\r\n\r\n    for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.width; x++) {\r\n        for (let y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height; y++) {\r\n            Object(_gui__WEBPACK_IMPORTED_MODULE_1__[\"setTableColor\"])(x, y, colors[staticCells[x][y]]);\r\n        }\r\n    }\r\n\r\n    for (let x = 0; x < 4; x++) {\r\n        for (let y = 0; y < 4; y++) {\r\n            Object(_gui__WEBPACK_IMPORTED_MODULE_1__[\"setNextColor\"])(x, y, _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backgroundColor);\r\n        }\r\n    }\r\n\r\n    const nextTetrimino = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[currentBag[1]];\r\n    const center = { x: 2, y: 1 };\r\n\r\n    displayTetrimino({\r\n        ...nextTetrimino, position: {\r\n            x: center.x + nextTetrimino.offsetFromCenter.x,\r\n            y: center.y + nextTetrimino.offsetFromCenter.y,\r\n        }\r\n    }, _gui__WEBPACK_IMPORTED_MODULE_1__[\"setNextColor\"]);\r\n\r\n    if (fallingTetrimino) {\r\n        displayTetrimino({ ...fallingTetrimino }, _gui__WEBPACK_IMPORTED_MODULE_1__[\"setTableColor\"]);\r\n    }\r\n}\r\n\r\nupdateDisplay();\r\n\r\nfunction rotateClockwise(tetrimino) {\r\n    const center = tetrimino.center;\r\n    const newShape = [];\r\n    for (const cell of tetrimino.shape) {\r\n        newShape.push({\r\n            x: center.x + cell.y - center.y,\r\n            y: center.y - cell.x + center.x,\r\n        });\r\n    }\r\n\r\n    if (isPositionValid({ shape: newShape, position: tetrimino.position })) {\r\n        tetrimino.shape = newShape;\r\n    }\r\n}\r\n\r\nfunction rotateCounterClockwise(tetrimino) {\r\n    const center = tetrimino.center;\r\n    const newShape = [];\r\n    for (const cell of tetrimino.shape) {\r\n        newShape.push({\r\n            x: center.x - cell.y + center.y,\r\n            y: center.y + cell.x - center.x,\r\n        });\r\n    }\r\n\r\n    if (isPositionValid({ shape: newShape, position: tetrimino.position })) {\r\n        tetrimino.shape = newShape;\r\n    }\r\n}\r\n\r\nfunction generateBag() {\r\n    const bag = [];\r\n    for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos.length; i++) {\r\n        bag.push(i);\r\n    }\r\n    for (let i = 0; i < bag.length; i++) {\r\n        const r = Math.floor(Math.random() * (bag.length - i));\r\n        const tmp = bag[i + r];\r\n        bag[i + r] = bag[i];\r\n        bag[i] = tmp;\r\n    }\r\n    return bag;\r\n}\r\n\r\nfunction isPositionValid({ shape, position }) {\r\n    for (const cell of shape) {\r\n        const x = position.x + cell.x;\r\n        const y = position.y + cell.y;\r\n        if (x < 0 || x >= _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width) {\r\n            return false;\r\n        }\r\n        if (y < 0 || y >= _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.height) {\r\n            return false;\r\n        }\r\n        if (staticCells[x][y] !== -1) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nfunction createFallingTetrimino(index) {\r\n    const center = {\r\n        x: Math.floor(_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width / 2),\r\n        y: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].visible.height,\r\n    };\r\n\r\n    const tetrimino = {\r\n        index,\r\n        color: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[index].color,\r\n        center: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[index].center,\r\n        shape: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[index].shape.map(({ x, y }) => ({ x, y })),\r\n        position: {\r\n            x: center.x + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[index].offsetFromCenter.x,\r\n            y: center.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tetriminos[index].offsetFromCenter.y,\r\n        },\r\n    };\r\n\r\n    return isPositionValid(tetrimino) ? tetrimino : null;\r\n}\r\n\r\nfunction shiftTetrimino(tetrimino, offset) {\r\n    const isValid = isPositionValid({\r\n        shape: tetrimino.shape,\r\n        position: {\r\n            x: tetrimino.position.x + offset.x,\r\n            y: tetrimino.position.y + offset.y,\r\n        }\r\n    });\r\n    if (isValid) {\r\n        tetrimino.position.x += offset.x;\r\n        tetrimino.position.y += offset.y;\r\n        updateDisplay();\r\n    }\r\n    return isValid;\r\n}\r\n\r\nfunction fixateTetrimino(tetrimino) {\r\n    for (const cell of tetrimino.shape) {\r\n        const x = tetrimino.position.x + cell.x;\r\n        const y = tetrimino.position.y + cell.y;\r\n        staticCells[x][y] = tetrimino.id;\r\n    }\r\n    updateDisplay();\r\n}\r\n\r\nfunction gameTick() {\r\n    if (!shiftTetrimino(fallingTetrimino, { x: 0, y: -1 })) {\r\n        fixateTetrimino(fallingTetrimino);\r\n        currentBag.shift();\r\n        if (currentBag.length < 2) {\r\n            const newBag = generateBag();\r\n            for (let i = 0; i < newBag.length; i++) {\r\n                currentBag.push(newBag[i]);\r\n            }\r\n        }\r\n        fallingTetrimino = createFallingTetrimino(currentBag[0]);\r\n        if (!fallingTetrimino) {\r\n            gameOver();\r\n        }\r\n    }\r\n\r\n    let rowsToShift = [];\r\n    for (let y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.height; y++) {\r\n        let isFull = true;\r\n        for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width; x++) {\r\n            isFull &= staticCells[x][y] !== -1;\r\n        }\r\n        if (isFull) {\r\n            rowsToShift.push(y);\r\n        }\r\n    }\r\n\r\n    score += [0, 100, 250, 500, 1000][rowsToShift.length];\r\n\r\n    rowsToShift.reverse();\r\n    for (const row of rowsToShift) {\r\n        for (let y = row; y + 1 < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.height; y++) {\r\n            for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width; x++) {\r\n                staticCells[x][y] = staticCells[x][y + 1];\r\n            }\r\n        }\r\n        for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.width; x++) {\r\n            staticCells[x][_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].field.height - 1] = -1;\r\n        }\r\n    }\r\n\r\n    updateDisplay();\r\n}\r\n\r\nfunction gameOver() {\r\n    clearInterval(timerId);\r\n    clearInterval(gamepadTimerId);\r\n    Object(_gui__WEBPACK_IMPORTED_MODULE_1__[\"displayGameOver\"])();\r\n}\r\n\r\nfunction checkGamepad() {\r\n    if (navigator.getGamepads().length == 0) {\r\n        return;\r\n    }\r\n\r\n    if (!fallingTetrimino) {\r\n        return;\r\n    }\r\n\r\n    if (!this.wasPressed) {\r\n        this.wasPressed = {\r\n            up: false,\r\n            down: false,\r\n            left: false,\r\n            right: false,\r\n            A: false,\r\n            B: false,\r\n        };\r\n    }\r\n\r\n    const gamepad = navigator.getGamepads()[0];\r\n    const isPressed = {\r\n        up: gamepad.buttons[12].pressed,\r\n        down: gamepad.buttons[13].pressed,\r\n        left: gamepad.buttons[14].pressed,\r\n        right: gamepad.buttons[15].pressed,\r\n        A: gamepad.buttons[0].pressed,\r\n        B: gamepad.buttons[1].pressed,\r\n    };\r\n\r\n    if (!wasPressed.left && isPressed.left) {\r\n        shiftTetrimino(fallingTetrimino, { x: -1, y: 0 });\r\n    }\r\n\r\n    if (!wasPressed.right && isPressed.right) {\r\n        shiftTetrimino(fallingTetrimino, { x: 1, y: 0 });\r\n    }\r\n\r\n    if (!wasPressed.down && isPressed.down) {\r\n        shiftTetrimino(fallingTetrimino, { x: 0, y: -1 });\r\n    }\r\n\r\n    if (!wasPressed.A && isPressed.A) {\r\n        rotateCounterClockwise(fallingTetrimino);\r\n    }\r\n\r\n    if (!wasPressed.B && isPressed.B) {\r\n        rotateClockwise(fallingTetrimino);\r\n    }\r\n\r\n    this.wasPressed = isPressed;\r\n}\r\n\r\nlet timerId = setInterval(gameTick, 400);\r\nconst gamepadTimerId = setInterval(checkGamepad, 1);\r\n\r\nwindow.addEventListener('keydown', e => {\r\n    if (!fallingTetrimino) {\r\n        return;\r\n    }\r\n    if (e.key === 'ArrowRight') {\r\n        shiftTetrimino(fallingTetrimino, { x: 1, y: 0 });\r\n    } else if (e.key === 'ArrowLeft') {\r\n        shiftTetrimino(fallingTetrimino, { x: -1, y: 0 });\r\n    } else if (e.key === 'ArrowDown') {\r\n        shiftTetrimino(fallingTetrimino, { x: 0, y: -1 });\r\n    } else if (e.key === 'ArrowUp' || e.key == 'x') {\r\n        rotateClockwise(fallingTetrimino);\r\n    } else if (e.key === 'Control' || e.key === 'z') {\r\n        rotateCounterClockwise(fallingTetrimino);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });