(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/support/support.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/support/support.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen class=\"main\">\n  <ion-card class=\"upr\">\n    <ion-card-header>\n      <!-- <ion-buttons slot=\"start\">\n        <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons> -->\n      <ion-card-title class=\"title\">\n        <ion-icon name=\"arrow-back\" class=\"bckIcon\" (click)=\"goBack()\"></ion-icon>Support\n      </ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n\n  <div class=\"whiteBlock\">\n    <ion-item class=\"cstmItem\">\n      <ion-avatar slot=\"start\" class=\"avtr\">\n        <img src=\"assets/imgs/Support/Speaker.png\">\n      </ion-avatar>\n      <ion-label>\n        <h1>Need some <br> Support?</h1>\n        <h4>fdgffg fgfhfgh dfgfddh</h4>\n      </ion-label>\n    </ion-item>\n  </div>\n\n\n  <form>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmMargin\">\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Subject</ion-label>\n        <ion-input type=\"text\" class=\"input\" disabled=false></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Message</ion-label>\n        <ion-textarea rows=\"6\" placeholder=\"Enter more information\" class=\"input\" disabled=false></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin supBtn\">Submit</ion-button>\n    </div>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/support/support-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "./src/app/support/support.page.ts");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/support/support.module.ts":
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/support/support-routing.module.ts");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/support/support.page.ts");







let SupportPageModule = class SupportPageModule {
};
SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportPageRoutingModule"]
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/support/support.page.scss":
/*!*******************************************!*\
  !*** ./src/app/support/support.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  --overflow: hidden;\n}\n\n.upr {\n  margin: 0;\n  height: 35%;\n  background: #4771C7;\n  text-align: center;\n}\n\n.title {\n  color: #fff;\n  font-size: 6vw;\n}\n\n.cstmWidth {\n  width: 94%;\n}\n\n.lbl {\n  font-size: 5vw;\n  margin: 4% 0%;\n  color: #ababab;\n  font-weight: 500;\n}\n\n.input {\n  border-bottom: 1px solid #ccc;\n}\n\n.whiteBlock {\n  position: absolute;\n  background: #fff;\n  width: 80%;\n  height: 20%;\n  z-index: 1;\n  top: 20%;\n  left: 10%;\n  box-shadow: -1px 1px 2px #ccc;\n  border-radius: 13px;\n}\n\n.supBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n}\n\n.cstmItem {\n  margin-top: 8%;\n  border: 0;\n  --inner-border-width:0;\n}\n\n.cstmMargin {\n  margin-top: 10%;\n}\n\n.bckIcon {\n  position: absolute;\n  left: 2%;\n}\n\n.avtr {\n  width: 80px;\n  height: 70px;\n}\n\nh1 {\n  font-weight: bold;\n  font-size: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcG9ydC9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXHN1cHBvcnRcXHN1cHBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVwciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG5cclxuXHJcbi5jc3RtV2lkdGgge1xyXG4gICAgd2lkdGg6IDk0JTtcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICBjb2xvcjogI2FiYWJhYjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLndoaXRlQmxvY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDJweCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxufVxyXG5cclxuLnN1cEJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDc3MUM3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG59XHJcblxyXG4uY3N0bUl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xyXG59XHJcblxyXG4uY3N0bU1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmJja0ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyJTtcclxufVxyXG5cclxuLmF2dHIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxufSIsIi5tYWluIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXByIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDM1JTtcbiAgYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA2dnc7XG59XG5cbi5jc3RtV2lkdGgge1xuICB3aWR0aDogOTQlO1xufVxuXG4ubGJsIHtcbiAgZm9udC1zaXplOiA1dnc7XG4gIG1hcmdpbjogNCUgMCU7XG4gIGNvbG9yOiAjYWJhYmFiO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLndoaXRlQmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjAlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBib3gtc2hhZG93OiAtMXB4IDFweCAycHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuLnN1cEJ0biB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogM3JlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG59XG5cbi5jc3RtSXRlbSB7XG4gIG1hcmdpbi10b3A6IDglO1xuICBib3JkZXI6IDA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XG59XG5cbi5jc3RtTWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYmNrSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMiU7XG59XG5cbi5hdnRyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1dnc7XG59Il19 */"

/***/ }),

/***/ "./src/app/support/support.page.ts":
/*!*****************************************!*\
  !*** ./src/app/support/support.page.ts ***!
  \*****************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SupportPage = class SupportPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
SupportPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: __webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/index.js!./src/app/support/support.page.html"),
        styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/support/support.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=support-support-module-es2015.js.map