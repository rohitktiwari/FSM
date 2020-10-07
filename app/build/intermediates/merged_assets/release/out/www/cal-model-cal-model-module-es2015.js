(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cal-model-cal-model-module"],{

/***/ "./src/app/cal-model/cal-model-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cal-model/cal-model-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CalModelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModelPageRoutingModule", function() { return CalModelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cal_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cal-model.page */ "./src/app/cal-model/cal-model.page.ts");




const routes = [
    {
        path: '',
        component: _cal_model_page__WEBPACK_IMPORTED_MODULE_3__["CalModelPage"]
    }
];
let CalModelPageRoutingModule = class CalModelPageRoutingModule {
};
CalModelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalModelPageRoutingModule);



/***/ }),

/***/ "./src/app/cal-model/cal-model.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cal-model/cal-model.module.ts ***!
  \***********************************************/
/*! exports provided: CalModelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModelPageModule", function() { return CalModelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cal_model_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cal-model-routing.module */ "./src/app/cal-model/cal-model-routing.module.ts");
/* harmony import */ var _cal_model_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cal-model.page */ "./src/app/cal-model/cal-model.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/fesm2015/ionic2-calendar.js");








let CalModelPageModule = class CalModelPageModule {
};
CalModelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _cal_model_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalModelPageRoutingModule"]
        ],
        declarations: [_cal_model_page__WEBPACK_IMPORTED_MODULE_6__["CalModelPage"]]
    })
], CalModelPageModule);



/***/ })

}]);
//# sourceMappingURL=cal-model-cal-model-module-es2015.js.map