exports.ids = [2];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("91508f04", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageStatic_vue_vue_type_style_index_0_id_ce747290_prod_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageStatic_vue_vue_type_style_index_0_id_ce747290_prod_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageStatic_vue_vue_type_style_index_0_id_ce747290_prod_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageStatic_vue_vue_type_style_index_0_id_ce747290_prod_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageStatic_vue_vue_type_style_index_0_id_ce747290_prod_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "svg[data-v-ce747290]{width:50%;height:50%;top:50%;left:50%;transform:translate(-50%,-50%)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ImageStatic.vue?vue&type=template&id=ce747290&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative bg-light"
  }, [_vm._ssrNode("<figure" + _vm._ssrClass(null, _vm.classComputed) + " data-v-ce747290>" + (_vm.srcComputed ? "<img" + _vm._ssrAttr("src", _vm.srcComputed) + _vm._ssrAttr("alt", _vm.alt) + " loading=\"lazy\" class=\"w-full\" data-v-ce747290>" : "<!---->") + "</figure>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/ImageStatic.vue?vue&type=template&id=ce747290&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ImageStatic.vue?vue&type=script&lang=js&
// const IconPlaceholderImage = () => import('~/components/icons/IconPlaceholderImage')

/* harmony default export */ var ImageStaticvue_type_script_lang_js_ = ({
  components: {
    // IconPlaceholderImage
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    aspactW: {
      type: Number,
      default: 16
    },
    aspactH: {
      type: Number,
      default: 9
    }
  },
  computed: {
    srcComputed() {
      if (!this.src) return '/img/defaultImage.jpg';
      return this.src;
    },
    classComputed() {
      return `aspect-w-${this.aspactW} aspect-h-${this.aspactH}`;
    }
  }
});
// CONCATENATED MODULE: ./components/common/ImageStatic.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_ImageStaticvue_type_script_lang_js_ = (ImageStaticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/ImageStatic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_ImageStaticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce747290",
  "0c7644fc"
  
)

/* harmony default export */ var ImageStatic = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-image-static.js.map