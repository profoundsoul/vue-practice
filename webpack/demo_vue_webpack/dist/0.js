webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "e:\\Project\\github\\backbone-require-practice\\webpack\\demo_vue_webpack\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-155c979d", Component.options)
  } else {
    hotAPI.reload("data-v-155c979d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	data: function data() {
		return {
			msg: 'this is my index pages！'
		};
	}
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_vm._v("这是我的主页")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.msg))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-155c979d", module.exports)
  }
}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("58151d04", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(24, function() {
     var newContent = __webpack_require__(24);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});