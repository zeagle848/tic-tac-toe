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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:wght@100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".body {\\r\\n  font-family: \\\"Raleway\\\", sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/* ALERT */\\r\\n.alert-wrapper {\\r\\n  position: absolute;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.alert-header {\\r\\n  margin-top: 150px;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-top: 1px solid black;\\r\\n  border-bottom: 1px solid black;\\r\\n  height: 60px;\\r\\n  color: white;\\r\\n  user-select: none;\\r\\n  font-family: \\\"Raleway\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.alert-wrapper-visible {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* HEADER STYLING */\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  font-family: \\\"Raleway\\\", sans-serif;\\r\\n}\\r\\n\\r\\n/* BOARD STYLING */\\r\\n.board-wrapper {\\r\\n  padding-top: 40px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.board {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  width: 400px;\\r\\n  height: 400px;\\r\\n  background-color: #f4f2f2;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.tile {\\r\\n  border: 1px solid black;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 40px;\\r\\n  width: 133px;\\r\\n  height: 133px;\\r\\n  user-select: none;\\r\\n  font-family: \\\"Raleway\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.top-left-tile {\\r\\n  border-top: none;\\r\\n  border-left: none;\\r\\n  border-top-left-radius: 3px;\\r\\n}\\r\\n\\r\\n.top-center-tile {\\r\\n  border-top: none;\\r\\n}\\r\\n\\r\\n.top-right-tile {\\r\\n  border-top: none;\\r\\n  border-right: none;\\r\\n  border-top-right-radius: 3px;\\r\\n}\\r\\n\\r\\n.middle-left-tile {\\r\\n  border-left: none;\\r\\n}\\r\\n\\r\\n.middle-right-tile {\\r\\n  border-right: none;\\r\\n}\\r\\n\\r\\n.bottom-left-tile {\\r\\n  border-left: none;\\r\\n  border-bottom: none;\\r\\n  border-bottom-left-radius: 3px;\\r\\n}\\r\\n\\r\\n.bottom-center-tile {\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.bottom-right-tile {\\r\\n  border-right: none;\\r\\n  border-bottom: none;\\r\\n  border-bottom-right-radius: 3px;\\r\\n}\\r\\n\\r\\n/* FOOTER */\\r\\n\\r\\n.footer {\\r\\n  align-self: flex-end;\\r\\n  font-weight: 900;\\r\\n  padding: 4px;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  font-family: \\\"Raleway\\\", sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n/* TEMP CLASS */\\r\\n\\r\\n.blurred-element {\\r\\n  filter: blur(4px);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Tic-Tac-Toe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Tic-Tac-Toe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Tic-Tac-Toe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\nconst tiles = document.querySelectorAll(\".tile\");\r\n\r\nconst elementsToBlur = [];\r\nelementsToBlur.push(document.querySelector(\".header\"));\r\nelementsToBlur.push(document.querySelector(\".board-wrapper\"));\r\nelementsToBlur.push(document.querySelector(\".footer\"));\r\n\r\nconst alertElement = document.querySelector(\".alert-wrapper\");\r\nconst alertHeader = document.querySelector(\".alert-header\");\r\n\r\nconst turnHeader = document.querySelector(\".turn-header\");\r\n\r\nalertElement.addEventListener(\"click\", () => {\r\n  alertElement.classList.remove(\"alert-wrapper-visible\");\r\n  elementsToBlur.forEach((element) => {\r\n    element.classList.remove(\"blurred-element\");\r\n  });\r\n  game.beginGame();\r\n});\r\n\r\ntiles.forEach((tile) => {\r\n  tile.addEventListener(\"click\", (event) => {\r\n    if (tile.textContent !== \"\") {\r\n      return;\r\n    }\r\n    const currentPlayer = game.getCurrentPlayer();\r\n    const selectedTile = event.target.id;\r\n    tile.textContent = currentPlayer.character;\r\n    gameBoard.updateBoard(selectedTile, currentPlayer.name);\r\n    game.checkGameState();\r\n    game.changeTurn();\r\n  });\r\n});\r\n\r\nconst game = (() => {\r\n  let _currentPlayerIndex;\r\n\r\n  const _players = [\r\n    { name: \"crosses\", character: \"X\" },\r\n    { name: \"noughts\", character: \"O\" },\r\n  ];\r\n\r\n  function checkDraw() {\r\n    const allTiles = gameBoard.getAllTiles();\r\n    return allTiles.every((row) => row.every((tile) => tile.mark !== \"none\"));\r\n  }\r\n\r\n  function changeTurn() {\r\n    _currentPlayerIndex = _currentPlayerIndex ? 0 : 1;\r\n    if (getCurrentPlayer().name === \"crosses\") {\r\n      turnHeader.textContent = \"Crosses move\";\r\n    } else {\r\n      turnHeader.textContent = \"Noughts move\";\r\n    }\r\n  }\r\n\r\n  function getCurrentPlayer() {\r\n    return _players[_currentPlayerIndex];\r\n  }\r\n  function beginGame() {\r\n    _currentPlayerIndex = 0;\r\n    gameBoard.resetBoard();\r\n    turnHeader.textContent = \"Crosses move\";\r\n    tiles.forEach((tile) => {\r\n      tile.textContent = \"\";\r\n    });\r\n  }\r\n  function endGame(winner) {\r\n    alertElement.classList.add(\"alert-wrapper-visible\");\r\n    if (winner === \"crosses\") {\r\n      alertHeader.textContent = \"Crosses have won!\";\r\n    } else if (winner === \"noughts\") {\r\n      alertHeader.textContent = \"Noughts have won!\";\r\n    } else {\r\n      alertHeader.textContent = \"Draw.\";\r\n    }\r\n    elementsToBlur.forEach((element) => {\r\n      element.classList.add(\"blurred-element\");\r\n    });\r\n  }\r\n\r\n  function checkGameState() {\r\n    const allTiles = gameBoard.getAllTiles();\r\n\r\n    if (checkDraw()) {\r\n      //Check the board to see if the game is a draw\r\n      endGame(\"draw\");\r\n    }\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      let startTile = allTiles[i][0];\r\n      let isGameWon = true;\r\n      for (let j = 0; j < 3; j++) {\r\n        const cell = allTiles[i][j];\r\n        if (cell.mark !== startTile.mark || startTile.mark === \"none\") {\r\n          isGameWon = false;\r\n        }\r\n      }\r\n      if (isGameWon) {\r\n        endGame(startTile.mark);\r\n        return;\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      let startTile = allTiles[0][i];\r\n      let isGameWon = true;\r\n      for (let j = 0; j < 3; j++) {\r\n        const cell = allTiles[j][i];\r\n        if (cell.mark !== startTile.mark || startTile.mark === \"none\") {\r\n          isGameWon = false;\r\n        }\r\n      }\r\n      if (isGameWon) {\r\n        endGame(startTile.mark);\r\n        return;\r\n      }\r\n    }\r\n\r\n    if (\r\n      allTiles[0][0].mark === allTiles[1][1].mark &&\r\n      allTiles[0][0].mark === allTiles[2][2].mark &&\r\n      allTiles[2][2].mark !== \"none\"\r\n    ) {\r\n      endGame(allTiles[0][0].mark);\r\n    }\r\n    if (\r\n      allTiles[0][2].mark === allTiles[1][1].mark &&\r\n      allTiles[0][2].mark === allTiles[2][0].mark &&\r\n      allTiles[0][2].mark !== \"none\"\r\n    ) {\r\n      endGame(allTiles[0][2].mark);\r\n    }\r\n  }\r\n  return { endGame, beginGame, checkGameState, getCurrentPlayer, changeTurn };\r\n})();\r\n\r\nconst gameBoard = (() => {\r\n  let _gameBoardTiles = [[], [], []];\r\n\r\n  function _tile(position, mark) {\r\n    return { position, mark };\r\n  }\r\n\r\n  function getAllTiles() {\r\n    return _gameBoardTiles;\r\n  }\r\n\r\n  function resetBoard() {\r\n    _gameBoardTiles = [[], [], []];\r\n\r\n    _gameBoardTiles[0].push(_tile(\"top-left\", \"none\"));\r\n    _gameBoardTiles[0].push(_tile(\"top-center\", \"none\"));\r\n    _gameBoardTiles[0].push(_tile(\"top-right\", \"none\"));\r\n\r\n    _gameBoardTiles[1].push(_tile(\"middle-left\", \"none\"));\r\n    _gameBoardTiles[1].push(_tile(\"middle-center\", \"none\"));\r\n    _gameBoardTiles[1].push(_tile(\"middle-right\", \"none\"));\r\n\r\n    _gameBoardTiles[2].push(_tile(\"bottom-left\", \"none\"));\r\n    _gameBoardTiles[2].push(_tile(\"bottom-center\", \"none\"));\r\n    _gameBoardTiles[2].push(_tile(\"bottom-right\", \"none\"));\r\n  }\r\n\r\n  function updateBoard(tilePosition, turn) {\r\n    switch (tilePosition) {\r\n      case \"top-left-tile\":\r\n        _gameBoardTiles[0][0].mark = `${turn}`;\r\n        break;\r\n      case \"top-center-tile\":\r\n        _gameBoardTiles[0][1].mark = `${turn}`;\r\n        break;\r\n      case \"top-right-tile\":\r\n        _gameBoardTiles[0][2].mark = `${turn}`;\r\n        break;\r\n      case \"middle-left-tile\":\r\n        _gameBoardTiles[1][0].mark = `${turn}`;\r\n        break;\r\n      case \"middle-center-tile\":\r\n        _gameBoardTiles[1][1].mark = `${turn}`;\r\n        break;\r\n      case \"middle-right-tile\":\r\n        _gameBoardTiles[1][2].mark = `${turn}`;\r\n        break;\r\n      case \"bottom-left-tile\":\r\n        _gameBoardTiles[2][0].mark = `${turn}`;\r\n        break;\r\n      case \"bottom-center-tile\":\r\n        _gameBoardTiles[2][1].mark = `${turn}`;\r\n        break;\r\n      case \"bottom-right-tile\":\r\n        _gameBoardTiles[2][2].mark = `${turn}`;\r\n        break;\r\n    }\r\n  }\r\n\r\n  return {\r\n    resetBoard,\r\n    updateBoard,\r\n    getAllTiles,\r\n  };\r\n})();\r\n\r\ngame.beginGame();\r\n\n\n//# sourceURL=webpack://Tic-Tac-Toe/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;