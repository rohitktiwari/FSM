(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-back-button [icon]=\"buttonIcon\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col size=\"5\" class=\"open\" (click)=\"getTickets('total')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalTicket}}</span> <br>Total Tickets</div>\n    </ion-col>\n    <ion-col size=\"5\" class=\"close\" (click)=\"getTickets('opened')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon1\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalOpenTicket}}</span> <br>Total Open Tickets</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col size=\"5\" class=\"new\" (click)=\"getTickets('newTicket')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon2\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalNewTicketToday}}</span> <br>Today New Tickets\n      </div>\n    </ion-col>\n    <ion-col size=\"5\" class=\"closedToday\" (click)=\"getTickets('CLOSED')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon3\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalTicketClosedToday}}</span> <br>Total Closed Today\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col size=\"5\" class=\"overDue\" (click)=\"getTickets('OVERDUE')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon2\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalTicketOverDue}}</span> <br>Total Overdue Tickets\n      </div>\n    </ion-col>\n    <ion-col size=\"5\" class=\"due\" (click)=\"getTickets('UPCOMING')\">\n      <div>\n        <svg _ngcontent-xxb-c1=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"kt-svg-icon3\" height=\"100px\"\n          version=\"1.1\" viewBox=\"0 0 24 24\" width=\"50%\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g _ngcontent-xxb-c1=\"\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\">\n            <rect _ngcontent-xxb-c1=\"\" height=\"24\" id=\"bound\" width=\"24\" x=\"0\" y=\"0\"></rect>\n            <path _ngcontent-xxb-c1=\"\"\n              d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\"\n              fill=\"#000000\" id=\"Combined-Shape-Copy\" opacity=\"0.3\"\n              transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \"></path>\n          </g>\n        </svg>\n      </div>\n      <div class=\"cstmRow\"><span class=\"count\">{{Tickets.EngineerTotalUpcoming}}</span> <br>Total Upcomming Tickets</div>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  width: 80%;\n}\n\n.kt-svg-icon path {\n  fill: #2c77f4;\n}\n\n.kt-svg-icon1 path {\n  fill: #1dc9b7;\n}\n\n.kt-svg-icon2 path {\n  fill: #ffb822;\n}\n\n.kt-svg-icon3 path {\n  fill: #fd397a;\n}\n\n.cstmRow {\n  margin-bottom: 5%;\n  font-weight: bold;\n  color: #4e4e4e;\n  font-size: 3.8vw;\n}\n\n.count {\n  font-size: 6vw;\n}\n\n.open {\n  background-color: #b4cffa !important;\n  margin: 4%;\n}\n\n.close {\n  background-color: #b1ece6 !important;\n  margin: 4%;\n}\n\n.new {\n  background-color: #ffe1a5 !important;\n  margin: 4%;\n}\n\n.closedToday {\n  background-color: #febad1 !important;\n  margin: 4%;\n}\n\n.overDue {\n  background-color: #d8a6ff !important;\n  margin: 4%;\n}\n\n.due {\n  background-color: #b4cffa !important;\n  margin: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0g6XFxPZmZpY2VcXEZTTS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmt0LXN2Zy1pY29uIHBhdGgge1xyXG4gICAgZmlsbDogIzJjNzdmNDtcclxufVxyXG5cclxuLmt0LXN2Zy1pY29uMSBwYXRoIHtcclxuICAgIGZpbGw6ICMxZGM5Yjc7XHJcbn1cclxuXHJcbi5rdC1zdmctaWNvbjIgcGF0aCB7XHJcbiAgICBmaWxsOiAjZmZiODIyO1xyXG59XHJcblxyXG4ua3Qtc3ZnLWljb24zIHBhdGgge1xyXG4gICAgZmlsbDogI2ZkMzk3YTtcclxufVxyXG5cclxuLmNzdG1Sb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgZm9udC1zaXplOiAzLjh2dztcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG4ub3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRjZmZhICFpbXBvcnRhbnQ7IC8vcmdiYSg0NCwgMTE5LCAyNDQsIDAuMDcpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDQlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxZWNlNiAhaW1wb3J0YW50OyAvL3JnYmEoMjksIDIwMSwgMTgzLCAwLjA3KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuLm5ldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWE1ICFpbXBvcnRhbnQ7IC8vIHJnYmEoMjU1LCAxODQsIDM0LCAwLjA3KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuLmNsb3NlZFRvZGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJhZDEgIWltcG9ydGFudDsgLy9yZ2JhKDI1MywgNTcsIDEyMiwgMC4wNykgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNCU7XHJcbn1cclxuXHJcbi5vdmVyRHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGE2ZmYgIWltcG9ydGFudDsgLy8gcmdiYSgyNTUsIDE4NCwgMzQsIDAuMDcpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDQlO1xyXG59XHJcblxyXG4uZHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGNmZmEgIWltcG9ydGFudDsgLy9yZ2JhKDI1MywgNTcsIDEyMiwgMC4wNykgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNCU7XHJcbn0iLCJpb24tdGl0bGUge1xuICB3aWR0aDogODAlO1xufVxuXG4ua3Qtc3ZnLWljb24gcGF0aCB7XG4gIGZpbGw6ICMyYzc3ZjQ7XG59XG5cbi5rdC1zdmctaWNvbjEgcGF0aCB7XG4gIGZpbGw6ICMxZGM5Yjc7XG59XG5cbi5rdC1zdmctaWNvbjIgcGF0aCB7XG4gIGZpbGw6ICNmZmI4MjI7XG59XG5cbi5rdC1zdmctaWNvbjMgcGF0aCB7XG4gIGZpbGw6ICNmZDM5N2E7XG59XG5cbi5jc3RtUm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzRlNGU0ZTtcbiAgZm9udC1zaXplOiAzLjh2dztcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiA2dnc7XG59XG5cbi5vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0Y2ZmYSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDQlO1xufVxuXG4uY2xvc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFlY2U2ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNCU7XG59XG5cbi5uZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWE1ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNCU7XG59XG5cbi5jbG9zZWRUb2RheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWJhZDEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA0JTtcbn1cblxuLm92ZXJEdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhhNmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNCU7XG59XG5cbi5kdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRjZmZhICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");






let DashboardPage = class DashboardPage {
    constructor(events, network, navCtrl, RestService, nativeStorage, platform) {
        this.events = events;
        this.network = network;
        this.navCtrl = navCtrl;
        this.RestService = RestService;
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.Tickets = [];
    }
    ngOnInit() {
        var profileData = JSON.parse(localStorage.profileData);
        this.events.publish('user:logged', profileData);
    }
    ionViewDidLoad() {
    }
    ionViewDidEnter() {
        this.getTotalTickets();
        if (localStorage.modeType == 'Online') {
            //  this.getTotalTickets();
        }
        else if (localStorage.modeType == 'Offline') {
            this.getOfflineData();
            // this.getTotalTickets();
        }
        setTimeout(() => {
            if (this.platform.is('ios')) {
                cordova.exec(null, null, "LocationViewController", "getLatLong", [JSON.parse(localStorage.userData).Token, JSON.parse(localStorage.userData).Id, localStorage.CompanyUrl]);
            }
        }, 3000);
    }
    getOfflineData() {
        var id = JSON.parse(localStorage.userData).Id;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetEngineerTicketsForOffline/' + Token, '').then((response) => {
            console.log(response);
            this.offlineResponse = response;
            this.saveOfflineData();
        });
    }
    saveOfflineData() {
        console.log(this.offlineResponse);
        this.nativeStorage.setItem('offlineAllData', this.offlineResponse.result)
            .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Offline data saved successfully.');
        }), error => console.error('Error storing item', error));
        this.nativeStorage.setItem('AllTickets', this.offlineResponse.result.Item1)
            .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Offline data saved successfully.');
        }), error => console.error('Error storing item', error));
    }
    getTotalTickets() {
        if (this.network.type == 'none') {
            this.nativeStorage.getItem('fsmdashcount')
                .then(data => {
                console.log(data);
                this.Tickets = data;
            }, error => console.error(error));
        }
        else {
            var id = JSON.parse(localStorage.userData).Id;
            var Token = JSON.parse(localStorage.userData).Token;
            this.RestService.requestViaGet('app/EngineerTickets/DashboardDetails/' + id + '/' + Token, '').then((response) => {
                console.log(response);
                this.EngineerTickets = response;
                if (this.EngineerTickets.Message == "success") {
                    this.Tickets = this.EngineerTickets.result;
                    //  localStorage.setItem("fsmdashcount", this.Tickets);
                    if (localStorage.modeType == 'Offline') {
                        this.nativeStorage.setItem('fsmdashcount', this.Tickets)
                            .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log('fsmdashcount data saved successfully.');
                        }), error => console.error('Error storing item', error));
                    }
                }
                else {
                }
            });
        }
    }
    getTickets(type) {
        this.navCtrl.navigateForward("/ticket");
        localStorage.setItem("optionType", type);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map