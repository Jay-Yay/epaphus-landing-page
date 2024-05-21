exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 7078:
/***/ ((module) => {

// Exports
module.exports = {
	"pageDescriptionWrapper": "PageDescription_pageDescriptionWrapper___HgmB",
	"title": "PageDescription_title__RCuzk",
	"descriptionWrapper": "PageDescription_descriptionWrapper__IXjkB",
	"image": "PageDescription_image__oI7xP",
	"description": "PageDescription_description__BmIKH"
};


/***/ }),

/***/ 4463:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBody": "Common_mainBody__WQwTV",
	"mainContentFlex": "Common_mainContentFlex__pexx0",
	"mainContentService": "Common_mainContentService__fSGgu",
	"mainContentSolution": "Common_mainContentSolution__GUIsv",
	"mainContentCommunity": "Common_mainContentCommunity__gEou5"
};


/***/ }),

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7078);
/* harmony import */ var _PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const PageDescription = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default().pageDescriptionWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
                    children: props.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default().descriptionWrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props.imgData.src,
                            alt: props.label,
                            className: (_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_PageDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default().description),
                            children: props.description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDescription);


/***/ })

};
;