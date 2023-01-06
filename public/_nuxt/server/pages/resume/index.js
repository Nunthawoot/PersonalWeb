exports.ids = [23,13,14,15,16];
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Education.vue?vue&type=template&id=df450142&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-7"
  }, [_vm._ssrNode("<div class=\"mb-4 font-semibold text-2xl\"><span class=\"pb-2\">Education</span></div> "), _vm._ssrNode("<div>", "</div>", _vm._l(_vm.education, function ({
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

// CONCATENATED MODULE: ./components/resume/Education.vue?vue&type=template&id=df450142&

// EXTERNAL MODULE: ./components/resume/EducationCard.vue + 4 modules
var EducationCard = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Education.vue?vue&type=script&lang=js&

/* harmony default export */ var Educationvue_type_script_lang_js_ = ({
  components: {
    EducationCard: EducationCard["default"]
  },
  data() {
    return {
      education: [{
        year: '2015',
        name: 'Suranaree university of tecnology',
        degrees: 'Bachelor of Engineering Program in Computer Engineering',
        description: 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/resume/Education.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_Educationvue_type_script_lang_js_ = (Educationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/resume/Education.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_Educationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ad5f903"
  
)

/* harmony default export */ var Education = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Resume.vue?vue&type=template&id=f785f994&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex justify-between h-44 bg-slate-50 px-7 border-y border-slate-100\"><div class=\"flex items-center h-auto\"><p class=\"font-semibold text-4xl\">Resume</p></div> <div class=\"mt-4\"><p>" + _vm._ssrEscape(_vm._s(_vm.calculateExperience()) + " Years of Experience") + "</p></div></div> "), _vm._ssrNode("<div class=\"flex justify-center\">", "</div>", [_vm._ssrNode("<div class=\"w-2/3 grid grid-cols-2\">", "</div>", [_c('Education'), _vm._ssrNode(" "), _c('Experience')], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/resume/Resume.vue?vue&type=template&id=f785f994&

// EXTERNAL MODULE: ./components/resume/Education.vue + 4 modules
var Education = __webpack_require__(41);

// EXTERNAL MODULE: ./components/resume/Experience.vue + 4 modules
var Experience = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/resume/Resume.vue?vue&type=script&lang=js&


/* harmony default export */ var Resumevue_type_script_lang_js_ = ({
  name: 'Resume',
  components: {
    Education: Education["default"],
    Experience: Experience["default"]
  },
  data() {
    return {
      startFrontEnd: new Date('01/03/2020')
    };
  },
  methods: {
    calculateExperience() {
      const start = this.startFrontEnd.getFullYear();
      const now = new Date().getFullYear();
      return now - start;
    }
  }
});
// CONCATENATED MODULE: ./components/resume/Resume.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_Resumevue_type_script_lang_js_ = (Resumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/resume/Resume.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_Resumevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57034f3c"
  
)

/* harmony default export */ var Resume = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resume/index.vue?vue&type=template&id=76f5438c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "min-h-screen"
  }, [_c('Resume')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/resume/index.vue?vue&type=template&id=76f5438c&

// EXTERNAL MODULE: ./components/resume/Resume.vue + 4 modules
var Resume = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resume/index.vue?vue&type=script&lang=js&

/* harmony default export */ var resumevue_type_script_lang_js_ = ({
  components: {
    Resume: Resume["default"]
  }
});
// CONCATENATED MODULE: ./pages/resume/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_resumevue_type_script_lang_js_ = (resumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/resume/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_resumevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "84bb76f2"
  
)

/* harmony default export */ var resume = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Resume: __webpack_require__(45).default})


/***/ })

};;
//# sourceMappingURL=index.js.map