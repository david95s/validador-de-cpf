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

/***/ "./js/create-html.js":
/*!***************************!*\
  !*** ./js/create-html.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHtml)\n/* harmony export */ });\nfunction createHtml(objtDAte){\r\n    const {id, nome, idade, musica, sonho, estudos} = objtDAte;\r\n\r\n    const modal = document.querySelector(\".dad\");\r\n    const theDiv = document.createElement(\"div\");\r\n    \r\n    const button =  document.createElement(\"button\");\r\n\r\n    button.classList.add(\"glow-on-hover\", \"btn-inside-modal\");\r\n    button.innerText = \"Tentar outro CPF\";\r\n\r\n    \r\n\r\n    button.addEventListener(\"click\", (e)=>{\r\n        e.preventDefault();\r\n        modal.classList.remove(\"ativo\");\r\n    })\r\n\r\n    theDiv.innerHTML = `\r\n    <img src=\"img/image${id}.jpg\" alt=\"\" class=\"img\">\r\n    <section class=\"dados\">\r\n\r\n        <div class=\"first\">\r\n        <p class=\"icon\">\r\n            <i class=\"fa far fa-user\"></i>\r\n        </p>\r\n        <p>\r\n            <span class=\"title\">Nome</span>\r\n            <br>\r\n            <span>${nome}</span>\r\n        </p>\r\n        </div>\r\n\r\n        <div>\r\n        <p class=\"icon\" >\r\n            <i class=\"fa fas fa-birthday-cake\"></i>\r\n        </p>\r\n        <p>\r\n            <span class=\"title\">Idade:</span>\r\n            <br>\r\n            <span>${idade}</span>\r\n        </p>\r\n        </div>\r\n\r\n        <div>\r\n        <p class=\"icon\">\r\n            <i class=\"fa fas fa-music\"></i>\r\n        </p>\r\n        <p>\r\n            <span class=\"title\">Musica:</span>\r\n            <br>\r\n            <span>${musica}</span>\r\n        </p>\r\n        </div>\r\n\r\n        <div>\r\n        <p class=\"icon\">\r\n            <i class=\"fa fas fa-rocket\"></i>\r\n        </p>\r\n        <p>\r\n            <span class=\"title\">Sonho:</span>\r\n            <br>\r\n            <span>${sonho}</span>\r\n        </p>\r\n\r\n        </div>\r\n        <div>\r\n        <p class=\"icon\">\r\n            <i class=\"fa fas fa-book\"></i>\r\n        </p>\r\n        <p>\r\n            <span class=\"title\">Formação:</span>\r\n            <br>\r\n            <span>${estudos}</span>\r\n        </p>\r\n        </div>\r\n    </section>\r\n    `;\r\n\r\n    theDiv.appendChild(button);\r\n\r\n    return theDiv;\r\n\r\n}\n\n//# sourceURL=webpack://0906-validar-cpf/./js/create-html.js?");

/***/ }),

/***/ "./js/getdata.js":
/*!***********************!*\
  !*** ./js/getdata.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _create_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-html.js */ \"./js/create-html.js\");\n\r\n\r\nfunction getData(numberId){\r\n    const myUrl = \"charactersapi.json\"\r\n\r\n    const main = document.querySelector(\".main-modal\");\r\n\r\n\r\n    if(main){\r\n        function criarHtml(retu){\r\n            main.innerHTML = \"\"\r\n            const div = (0,_create_html_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(retu[0]);\r\n            const thebtn = document.querySelector(\".btn-inside-modal\");\r\n            main.insertBefore(div, thebtn);\r\n\r\n        }\r\n        \r\n        async function testando(numberTo27){\r\n            const data = await fetch(myUrl);\r\n            const json = await data.json();\r\n        \r\n            \r\n            const retu = json.filter(item=> item.id === numberTo27);\r\n            \r\n            criarHtml(retu)\r\n        \r\n        }\r\n        \r\n        testando(numberId);\r\n    }\r\n  \r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://0906-validar-cpf/./js/getdata.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validar_cpf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validar-cpf.js */ \"./js/validar-cpf.js\");\n\n\nconst cpf = document.querySelector('#cpf');\nconst btn = document.querySelector(\".to-get\");\n\n\nconsole.log(\"Meu dados FORAM ACESSADOS\")\nconst validarCpf = new _validar_cpf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](btn, \"click\").iniciar();\n\n\n//# sourceURL=webpack://0906-validar-cpf/./js/script.js?");

/***/ }),

/***/ "./js/validar-cpf.js":
/*!***************************!*\
  !*** ./js/validar-cpf.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidarCpf)\n/* harmony export */ });\n/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ \"./js/getdata.js\");\n\n\n\n\n\nclass ValidarCpf {\n  constructor(element, evento) {\n    this.element = element;\n    this.evento = evento;\n    this.inpput = document.querySelector(\"input\");\n\n  }\n\n  limpar(cpf){\n    return cpf.replace(/\\D/g, '');\n  }\n\n  construir(cpf){\n    return cpf.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/g, \"$1.$2.$3-$4\")\n  }\n\n  formatar(cpf){\n    const cpfLimpo = this.limpar(cpf);\n    const cpfBuilded = this.construir(cpfLimpo);\n    return cpfBuilded;\n  }\n\n  validar(cpf){\n    const matchCpf = cpf.match(/(?:\\d{3}[-.\\s]?){3}\\d{2}/g);\n    // Index 0, pq se eu digitar dois cpfs validos\n    // retornar um array com 2 cpfs, mas sempre valido o primeiro;\n      return (matchCpf && matchCpf[0] === cpf);\n  }\n\n\n  initZoeiraCpf(dados){\n    const myModal = document.querySelector(\".dad\");\n\n\n    if(myModal){\n      const charFirst =  + dados[0];\n      const charSecond =  + dados[1];\n      const charthird =  + dados[2];\n      const total = charFirst + charSecond + charthird;\n      myModal.classList.add(\"ativo\")\n\n      ;(0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(total);\n    }\n\n\n  }\n\n  validarNaMudanca(cpfElement){\n    if(this.validar(cpfElement.value)){\n      cpfElement.value = this.formatar(cpfElement.value);\n      cpfElement.classList.remove('erro');\n      cpfElement.classList.add('valido');\n      cpfElement.nextElementSibling.classList.remove(\"ativar\");\n      this.initZoeiraCpf(cpfElement.value);\n    }else{\n      cpfElement.classList.add('erro');\n      cpfElement.classList.remove('valido');\n      cpfElement.nextElementSibling.classList.add(\"ativar\");\n    }\n  }\n\n\n  adicionarErroSpan() {\n    const erroElement = document.createElement('span');\n    erroElement.classList.add('erro-text');\n    erroElement.innerText = 'CPF Inválido';\n\n\n    this.inpput.parentElement.insertBefore(erroElement, this.inpput.nextElementSibling)\n    // this.element.parentElement.appendChild(erroElement);  \n  }\n\n  adicionarEvento() {\n    this.element.addEventListener(this.evento, (e) => {\n      e.preventDefault();\n      this.validarNaMudanca(this.inpput);\n    });\n  }\n\n  \n  iniciar(){\n    this.adicionarEvento();\n    this.adicionarErroSpan();\n\n    return this;\n  }\n\n}\n\n\n//# sourceURL=webpack://0906-validar-cpf/./js/validar-cpf.js?");

/***/ })

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;