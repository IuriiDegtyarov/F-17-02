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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mage__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warrior__ = __webpack_require__(3);



let mage = new __WEBPACK_IMPORTED_MODULE_0__mage__["a" /* default */]();
let warrior = new __WEBPACK_IMPORTED_MODULE_1__warrior__["a" /* default */]();

console.log(mage, warrior);

window.mage = mage;
window.warrior = warrior;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Human {
    constructor() {
        this.strength = 10;
        this.agility = 10;
        this.intelligence = 10;
        this.stamina = 10;
        this._hp = 10 * this.stamina;
        this.primaryAttribute = '';
        this.alive = true;
    }

    get healthPoint() {
        return this._hp;
    }

    set healthPoint(value) {
        this._hp = value;
    }

    get isAttackEvaded() {
        return Math.random() > (100 - this.agility) / 100;
    }

    get isCriticalStrike() {
        return Math.random() > (100 - this.agility) / 100;
    }

    get damage() {
        let crit = this.isCriticalStrike ? 2 : 1;
        if (crit === 2) console.log('CRITICAL DAMAGE!!!!');
        return this[this.primaryAttribute] * 1.5 * crit;
    }

    attackTarget(target) {
        if (target.alive && this.alive) {
            let targetAlive = target.recieveAttack(this.damage);
            console.log(`Your hp: ${this.healthPoint}; Target hp: ${target.healthPoint}`);
            if (!targetAlive) {
                console.log('target has been killed');
            }
        } else {
            console.log(this.alive ? 'Target is dead' : 'You are dead');
        }
    }

    recieveAttack(damage) {
        let evade = this.isAttackEvaded;
        if (evade) console.log('ATTACK HAS BEEN EVADED!!!');
        this.healthPoint = this.healthPoint - (evade ? 0 : damage);
        this.alive = this.healthPoint > 0 ? true : false;
        return this.alive;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Human;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__human__ = __webpack_require__(1);


class Mage extends __WEBPACK_IMPORTED_MODULE_0__human__["a" /* default */] {
    constructor() {
        super();
        this.agility = 25;
        this.strength = 5;
        this.stamina = 10;
        this.intelligence = 20;
        this.primaryAttribute = 'intelligence';
    }

    get spellDamage() {
        return this.intelligence + this.intelligence * 0.8;
    }

    castFireBall(target) {
        if (target.alive && this.alive) {
            let targetAlive = target.recieveAttack(this.spellDamage);
            console.log(`Your hp: ${this.healthPoint}; Target hp: ${target.healthPoint}`);
            if (!targetAlive) {
                console.log('target has been killed');
            }
        } else {
            console.log(this.alive ? 'Target is dead' : 'You are dead');
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mage;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__human__ = __webpack_require__(1);


class Warrior extends __WEBPACK_IMPORTED_MODULE_0__human__["a" /* default */] {
    constructor() {
        super();
        this.agility = 25;
        this.strength = 15;
        this.stamina = 15;
        this.intelligence = 5;
        this.primaryAttribute = 'strength';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Warrior;


/***/ })
/******/ ]);