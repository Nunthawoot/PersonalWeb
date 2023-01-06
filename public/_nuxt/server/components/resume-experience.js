exports.ids = [16,15];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/EducationCard.vue?vue&type=template&id=5c9d98d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "border-l border-slate-300 px-7 py-4 relative"
  }, [_vm._ssrNode("<div class=\"flex gap-x-4 items-center\"><button class=\"bg-white rounded-full py-1 px-2 border-2 border-green-500 text-black\">" + _vm._ssrEscape(_vm._s(_vm.yearProps)) + "</button> <div class=\"text-sm\">" + _vm._ssrEscape(_vm._s(_vm.nameProps)) + "</div></div> <div class=\"p-4\"><div class=\"font-semibold\">" + _vm._ssrEscape(_vm._s(_vm.degreesProps)) + "</div> <div class=\"text-sm\">" + _vm._ssrEscape(_vm._s(_vm.descriptionProps)) + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/resume/EducationCard.vue?vue&type=template&id=5c9d98d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/EducationCard.vue?vue&type=script&lang=js&
/* harmony default export */ var EducationCardvue_type_script_lang_js_ = ({
  props: {
    yearProps: {
      type: String,
      default: ''
    },
    nameProps: {
      type: String,
      default: 'nameProps'
    },
    degreesProps: {
      type: String,
      default: 'degreesProps'
    },
    descriptionProps: {
      type: String,
      default: 'descriptionProps'
    }
  }
});
// CONCATENATED MODULE: ./components/resume/EducationCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_EducationCardvue_type_script_lang_js_ = (EducationCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/resume/EducationCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_EducationCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b248ba9a"
  
)

/* harmony default export */ var EducationCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Experience.vue?vue&type=template&id=281a0557&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-7"
  }, [_vm._ssrNode("<div class=\"mb-4 font-semibold text-2xl\"><span class=\"pb-2\">Experience</span></div> "), _vm._ssrNode("<div>", "</div>", _vm._l(_vm.experience, function ({
    year,
    name,
    degrees,
    description
  }, index) {
    return _vm._ssrNode("<div>", "</div>", [_c('EducationCard', {
      attrs: {
        "yearProps": year,
        "nameProps": name,
        "degreesProps": degrees,
        "descriptionProps": description
      }
    })], 1);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/resume/Experience.vue?vue&type=template&id=281a0557&

// EXTERNAL MODULE: ./components/resume/EducationCard.vue + 4 modules
var EducationCard = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Experience.vue?vue&type=script&lang=js&

/* harmony default export */ var Experiencevue_type_script_lang_js_ = ({
  components: {
    EducationCard: EducationCard["default"]
  },
  data() {
    return {
      experience: [{
        year: '2020 - Current',
        name: 'Creatder .co',
        degrees: 'Frontend Development',
        description: 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
      }, {
        year: '2020',
        name: 'Creatder .co',
        degrees: 'Trainee Frontend Development',
        description: 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/resume/Experience.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_Experiencevue_type_script_lang_js_ = (Experiencevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/resume/Experience.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_Experiencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89c6a6c2"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=resume-experience.js.map