"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Answers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '~/pages/partials/ListAnswers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    ListAnswers: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '~/pages/partials/ListAnswers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n    Filters: Filters\n  },\n  data: function data() {\n    return {\n      answer: '',\n      answers: {},\n      loading: false,\n      alert: false\n    };\n  },\n  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({\n    user: 'auth/user'\n  }),\n  mounted: function mounted() {\n    this.getData();\n  },\n  methods: {\n    getData: function getData() {\n      var self = this;\n      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/get-answers', {\n        id: this.$route.params\n      }).then(function (response) {\n        self.answers = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    },\n    saveAnswer: function saveAnswer() {\n      var self = this;\n      self.loading = true;\n      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/post-question', {\n        answer: self.answer,\n        question_id: this.$route.params\n      }).then(function (response) {\n        self.headline = '';\n        self.text = '';\n        self.getData();\n        self.loading = false;\n        self.alert = true;\n        setTimeout(function () {\n          return self.alert = false;\n        }, 2000);\n      })[\"catch\"](function (error) {\n        console.log(error);\n        self.loading = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsNEtBREE7QUFFQTtBQUZBLEdBREE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FaQTtBQWFBO0FBQ0E7QUFEQSxJQWJBO0FBZ0JBLFNBaEJBLHFCQWdCQTtBQUNBO0FBQ0EsR0FsQkE7QUFtQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsU0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLE9BSkEsV0FJQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBVkE7QUFXQSxjQVhBLHdCQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLE9BVkEsV0FVQTtBQUNBO0FBQ0E7QUFDQSxPQWJBO0FBY0E7QUE1QkE7QUFuQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlPzU0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTAgbS1hdXRvXCI+XG4gICAgICAgIDxhbGVydCB2LWlmPSdhbGVydCcgdHlwZT1cInN1Y2Nlc3NcIj5Zb3UgaGF2ZSBzdWNlc3NmdWx5IGFkZGVkIGEgbmV3IHF1ZXN0aW9uITwvYWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJzIG1iLTRcIiB2LWlmPSd1c2VyJz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz0nZm9ybS1jb250cm9sJyB2LW1vZGVsPSdxdWVzdGlvbicgcGxhY2Vob2xkZXI9J1N0YXJ0IHR5cGluZyB5b3VyIGFuc3dlci4uLic+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBibG9jayB0eXBlPVwic3VjY2Vzc1wiIHYtaWY9J2hlYWRsaW5lLmxlbmd0aD4wJyBAY2xpY2submF0aXZlPSdzYXZlUG9zdCgpJz5cbiAgICAgICAgICAgICAgICBSZXBseVxuICAgICAgICAgICAgPC92LWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGxpc3QtYW5zd2VycyA6YW5zd2Vycz0nYW5zd2VycycvPlxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExpc3RBbnN3ZXJzIGZyb20gJ34vcGFnZXMvcGFydGlhbHMvTGlzdEFuc3dlcnMnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTGlzdEFuc3dlcnMsXG4gICAgICAgIEZpbHRlcnNcbiAgICB9LFxuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuc3dlcjogJycsXG4gICAgICAgICAgICBhbnN3ZXJzOnt9LFxuICAgICAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgICAgIGFsZXJ0OmZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICAgICAgdXNlcjogJ2F1dGgvdXNlcidcbiAgICB9KSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldERhdGEoKXtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9nZXQtYW5zd2Vycycse1xuICAgICAgICAgICAgICAgIGlkOnRoaXMuJHJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFuc3dlcnMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUFuc3dlcigpe1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3Bvc3QtcXVlc3Rpb24nLHtcbiAgICAgICAgICAgICAgICBhbnN3ZXI6c2VsZi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25faWQ6dGhpcy4kcm91dGUucGFyYW1zICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGVhZGxpbmUgPScnXG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gJydcbiAgICAgICAgICAgICAgICBzZWxmLmdldERhdGEoKVxuICAgICAgICAgICAgICAgIHNlbGYubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc2VsZi5hbGVydCA9IHRydWVcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNlbGYuYWxlcnQgPSBmYWxzZSwgMjAwMClcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbjwvc2NyaXB0PlxuPHN0eWxlIGNvbXB1dGVkPlxuLmZpbHRlcnN7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjRweFxufVxuLmJ0bi1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJhY2tncm91bmQ6I2ZmZlxufVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-9[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-9[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMF0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmY29tcHV0ZWQ9dHJ1ZSZsYW5nPWNzcyYuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlP2U3YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-9[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css&\n");

/***/ }),

/***/ "./resources/js/pages/Answers.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Answers.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answers.vue?vue&type=template&id=299ee308& */ \"./resources/js/pages/Answers.vue?vue&type=template&id=299ee308&\");\n/* harmony import */ var _Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answers.vue?vue&type=script&lang=js& */ \"./resources/js/pages/Answers.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Answers_vue_vue_type_style_index_0_computed_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answers.vue?vue&type=style&index=0&computed=true&lang=css& */ \"./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/Answers.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvQW5zd2Vycy52dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Y7QUFDM0I7QUFDTDtBQUN0RCxDQUFpRjs7O0FBR2pGO0FBQzZGO0FBQzdGLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlPzg4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BbnN3ZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOTllZTMwOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbnN3ZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5zd2Vycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQW5zd2Vycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZjb21wdXRlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcbGFyYXZlbC12dWUtc3BhMlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyOTllZTMwOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyOTllZTMwOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyOTllZTMwOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5zd2Vycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk5ZWUzMDgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjk5ZWUzMDgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9BbnN3ZXJzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/Answers.vue\n");

/***/ }),

/***/ "./resources/js/pages/Answers.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Answers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answers.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvQW5zd2Vycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlOLENBQUMsaUVBQWUsNE1BQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9BbnN3ZXJzLnZ1ZT9kNzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbnN3ZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/Answers.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_9_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_style_index_0_computed_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-9[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answers.vue?vue&type=style&index=0&computed=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-9[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=style&index=0&computed=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/Answers.vue?vue&type=template&id=299ee308&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Answers.vue?vue&type=template&id=299ee308& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_299ee308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Answers.vue?vue&type=template&id=299ee308& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=template&id=299ee308&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=template&id=299ee308&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=template&id=299ee308& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-10 m-auto\" },\n    [\n      _vm.alert\n        ? _c(\"alert\", { attrs: { type: \"success\" } }, [\n            _vm._v(\"You have sucessfuly added a new question!\")\n          ])\n        : _vm._e(),\n      _vm._v(\" \"),\n      _vm.user\n        ? _c(\n            \"div\",\n            { staticClass: \"filters mb-4\" },\n            [\n              _c(\"textarea\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.question,\n                    expression: \"question\"\n                  }\n                ],\n                staticClass: \"form-control\",\n                attrs: { placeholder: \"Start typing your answer...\" },\n                domProps: { value: _vm.question },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.question = $event.target.value\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _vm.headline.length > 0\n                ? _c(\n                    \"v-button\",\n                    {\n                      attrs: {\n                        loading: _vm.loading,\n                        block: \"\",\n                        type: \"success\"\n                      },\n                      nativeOn: {\n                        click: function($event) {\n                          return _vm.savePost()\n                        }\n                      }\n                    },\n                    [_vm._v(\"\\n            Reply\\n        \")]\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        : _vm._e(),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"row\" },\n        [_c(\"list-answers\", { attrs: { answers: _vm.answers } })],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNvdXJjZXMvanMvcGFnZXMvQW5zd2Vycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk5ZWUzMDgmLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpQ0FBaUM7QUFDdkM7QUFDQTtBQUNBLHdCQUF3QixTQUFTLG1CQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCLDhCQUE4QixTQUFTLHdCQUF3QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fuc3dlcnMudnVlPzk0OTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEwIG0tYXV0b1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmFsZXJ0XG4gICAgICAgID8gX2MoXCJhbGVydFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VjY2Vzc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiWW91IGhhdmUgc3VjZXNzZnVseSBhZGRlZCBhIG5ldyBxdWVzdGlvbiFcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS51c2VyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXJzIG1iLTRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiU3RhcnQgdHlwaW5nIHlvdXIgYW5zd2VyLi4uXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXN0aW9uIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXN0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5oZWFkbGluZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlUG9zdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgUmVwbHlcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICBbX2MoXCJsaXN0LWFuc3dlcnNcIiwgeyBhdHRyczogeyBhbnN3ZXJzOiBfdm0uYW5zd2VycyB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Answers.vue?vue&type=template&id=299ee308&\n");

/***/ })

}]);