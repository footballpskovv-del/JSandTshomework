/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.ts\");\n/* harmony import */ var _usersInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersInfo */ \"./src/usersInfo.ts\");\n\n\nfunction getUsersJobPositions(usersArray) {\n    return usersArray.map((user) => {\n        const userInfo = _usersInfo__WEBPACK_IMPORTED_MODULE_1__.usersInfoArray.find((info) => {\n            return info.userid === user.userid;\n        });\n        return {\n            name: user.name,\n            position: userInfo.organization.position,\n            age: userInfo.age,\n            gender: user.gender,\n        };\n    });\n}\nconst usersPositions = getUsersJobPositions(_users__WEBPACK_IMPORTED_MODULE_0__.usersArray);\nconsole.log(\"userPositions\", usersPositions);\n\n\n//# sourceURL=webpack://typescript-homework-1/./src/index.ts?\n}");

/***/ },

/***/ "./src/users.ts"
/*!**********************!*\
  !*** ./src/users.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usersArray: () => (/* binding */ usersArray)\n/* harmony export */ });\nconst usersArray = [\n    {\n        userid: \"127e4567-e89b-12d3-a458-426614174000\",\n        name: \"John\",\n        gender: \"man\",\n    },\n    {\n        userid: \"127e4567-e89a-12f3-a458-327395154000\",\n        name: \"Anna\",\n        gender: \"woman\",\n    },\n];\n\n//////\n\n\n//# sourceURL=webpack://typescript-homework-1/./src/users.ts?\n}");

/***/ },

/***/ "./src/usersInfo.ts"
/*!**************************!*\
  !*** ./src/usersInfo.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usersInfoArray: () => (/* binding */ usersInfoArray)\n/* harmony export */ });\nconst usersInfoArray = [\n    {\n        userid: \"127e4567-e89b-12d3-a458-426614174000\",\n        name: \"John\",\n        birthdate: \"1982-02-17T21:00:00.000Z\",\n        age: 40,\n        organization: {\n            name: \"Amazon\",\n            position: \"General manager\",\n        },\n    },\n    {\n        userid: \"127e4567-e89a-12f3-a458-327395154000\",\n        name: \"Anna\",\n        birthdate: \"1988-02-17T21:00:00.000Z\",\n        age: 34,\n        organization: {\n            name: \"Amazon\",\n            position: \"Manager\",\n        },\n    },\n];\n\n\n\n//# sourceURL=webpack://typescript-homework-1/./src/usersInfo.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;