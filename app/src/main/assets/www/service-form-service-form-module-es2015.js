(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-form-service-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/service-form/service-form.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/service-form/service-form.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Service Form</ion-title>\n    <!-- <img src=\"assets/imgs/Ticket/Filter.png\" alt=\"\" class=\"filter\"> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"main\">\n  <ion-searchbar (ionInput)=\"getItems()\" [(ngModel)]=\"searchTerm\" placeholder=\"Search Form...\" class=\"searchBar\"></ion-searchbar>\n\n  <ion-list class=\"list\">\n    <ion-row class=\"formRow\" *ngFor=\"let form of serviceFormData\">\n      <ion-col size=\"3\">\n        <img src=\"assets/imgs/TicketDetail08/File.png\" class=\"file\" />\n      </ion-col>\n      <ion-col size=\"7\">{{form.FormTitle}}</ion-col>\n      <ion-col size=\"2\">\n        <ion-checkbox (ionChange)=\"addForm($event,form)\"></ion-checkbox>\n        <!-- <img src=\"assets/imgs/TicketDetail08/Pen.png\" class=\"pen\"/> -->\n      </ion-col>\n    </ion-row>\n    <ion-button class=\"btnSubmit\" (click)=\"assignForm()\">Assign</ion-button>\n\n  </ion-list>\n  <!-- <ion-row>\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl cstmMargin\">First Name</ion-label>\n        <ion-input type=\"text\" class=\"input\" disabled=false placeholder=\"Jhon\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl cstmMargin\">Last Name</ion-label>\n        <ion-input type=\"text\" class=\"input\" disabled=false placeholder=\"Deo\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-radio-group>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Male</ion-label>\n            <ion-radio slot=\"start\" color=\"success\" value=\"male\" checked></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>Female</ion-label>\n            <ion-radio slot=\"start\" color=\"success\" value=\"female\"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  </ion-list>\n  <ion-item>\n    <ion-label position=\"stacked\" class=\"lbl\">Mobile</ion-label>\n    <ion-input type=\"tel\" class=\"input usr\" disabled=false placeholder=\"+12 3456789012\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\" class=\"lbl\">Email</ion-label>\n    <ion-input type=\"mail\" class=\"input pass\" disabled=false placeholder=\"jhondeo@gmail.com\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\" class=\"lbl\">Address</ion-label>\n    <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Somestreet,USA 212123\"></ion-input>\n  </ion-item>\n\n  <p position=\"stacked\" class=\"cntrylbl\">Country</p>\n  <ion-item class=\"drpdwn\">\n\n    <ion-select interface=\"action-sheet\">\n      <ion-select-option value=\"nes\">NES</ion-select-option>\n      <ion-select-option value=\"n64\">Nintendo64</ion-select-option>\n      <ion-select-option value=\"ps\">PlayStation</ion-select-option>\n      <ion-select-option value=\"genesis\">Sega Genesis</ion-select-option>\n      <ion-select-option value=\"saturn\">Sega Saturn</ion-select-option>\n      <ion-select-option value=\"snes\">SNES</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\" class=\"lbl\">Subject</ion-label>\n    <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"write subject\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\" class=\"lbl\">Description</ion-label>\n    <ion-textarea class=\"input\" cols=\"10\" rows=\"5\" placeholder=\"write description\"></ion-textarea>\n  </ion-item>\n\n\n  <ion-row class=\"BtnRow\">\n    <ion-col size=\"6\">\n      <ion-button class=\"btnSubmit\" routerLink=\"/ticket-detail\">Submit</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"btnClose\">Cancel</ion-button>\n    </ion-col>\n  </ion-row> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/service-form/service-form-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/service-form/service-form-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ServiceFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFormPageRoutingModule", function() { return ServiceFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-form.page */ "./src/app/service-form/service-form.page.ts");




const routes = [
    {
        path: '',
        component: _service_form_page__WEBPACK_IMPORTED_MODULE_3__["ServiceFormPage"]
    }
];
let ServiceFormPageRoutingModule = class ServiceFormPageRoutingModule {
};
ServiceFormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceFormPageRoutingModule);



/***/ }),

/***/ "./src/app/service-form/service-form.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/service-form/service-form.module.ts ***!
  \*****************************************************/
/*! exports provided: ServiceFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFormPageModule", function() { return ServiceFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-form-routing.module */ "./src/app/service-form/service-form-routing.module.ts");
/* harmony import */ var _service_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-form.page */ "./src/app/service-form/service-form.page.ts");







let ServiceFormPageModule = class ServiceFormPageModule {
};
ServiceFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceFormPageRoutingModule"]
        ],
        declarations: [_service_form_page__WEBPACK_IMPORTED_MODULE_6__["ServiceFormPage"]]
    })
], ServiceFormPageModule);



/***/ }),

/***/ "./src/app/service-form/service-form.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/service-form/service-form.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  width: 80%;\n}\n\n.filter {\n  right: 6%;\n  width: 6%;\n  position: absolute;\n  top: 30%;\n}\n\n.main {\n  --overflow: hidden;\n}\n\n.list {\n  overflow: auto;\n  height: 90%;\n}\n\n.searchBar .searchbar-input.sc-ion-searchbar-md {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2% !important;\n  padding-left: 13% !important;\n  font-size: 4vw;\n}\n\n.formRow {\n  border: 1px solid #ccc;\n  margin: 4%;\n  border-radius: 15px;\n  font-weight: bold;\n  color: #ccc;\n}\n\n.blueBorder {\n  border: 1px solid #8ba8df;\n  color: #8ba8df;\n}\n\n.formRow ion-col {\n  margin: auto;\n}\n\n.file {\n  width: 65%;\n  margin: 10%;\n}\n\n.pen {\n  width: 40%;\n}\n\n.btnSubmit {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #4771C7;\n  font-size: 4.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS1mb3JtL0g6XFxPZmZpY2VcXEZTTS9zcmNcXGFwcFxcc2VydmljZS1mb3JtXFxzZXJ2aWNlLWZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlLWZvcm0vc2VydmljZS1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURtQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNoQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLWZvcm0vc2VydmljZS1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnNlYXJjaEJhciAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMyUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uZm9ybVJvdyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uYmx1ZUJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGJhOGRmO1xyXG4gICAgY29sb3I6ICM4YmE4ZGY7XHJcbn1cclxuXHJcbi5mb3JtUm93IGlvbi1jb2wge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbn1cclxuXHJcbi5wZW4ge1xyXG4gICAgd2lkdGg6IDQwJVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyAubGJsIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4vLyAgICAgbWFyZ2luOiAyJSAyJTtcclxuLy8gfVxyXG5cclxuLy8gLmNzdG1NYXJnaW4ge1xyXG4vLyAgICAgbWFyZ2luOiAwJSAyJSAxMCU7XHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dCB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDIuMiUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4vLyB9XHJcblxyXG4vLyAuY250cnlsYmwge1xyXG4vLyAgICAgZm9udC1zaXplOiA0dnc7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbi8vIH1cclxuXHJcbi8vIC5kcnBkd24ge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDR2dztcclxuLy8gICAgIHdpZHRoOiA5MCU7XHJcbi8vICAgICBtYXJnaW46IDAlIGF1dG87XHJcbi8vIH1cclxuXHJcbi5idG5TdWJtaXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMi42cmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG59XHJcblxyXG4vLyAuYnRuQ2xvc2Uge1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gICAgIGhlaWdodDogMi42cmVtO1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4vLyAgICAgbWFyZ2luOiA1JSAxMCU7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4vLyAgICAgY29sb3I6ICM0NzcxQzc7XHJcbi8vIH0iLCJpb24tdGl0bGUge1xuICB3aWR0aDogODAlO1xufVxuXG4uZmlsdGVyIHtcbiAgcmlnaHQ6IDYlO1xuICB3aWR0aDogNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG59XG5cbi5tYWluIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLnNlYXJjaEJhciAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEzJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLmZvcm1Sb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDQlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5ibHVlQm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiYThkZjtcbiAgY29sb3I6ICM4YmE4ZGY7XG59XG5cbi5mb3JtUm93IGlvbi1jb2wge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5maWxlIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAxMCU7XG59XG5cbi5wZW4ge1xuICB3aWR0aDogNDAlO1xufVxuXG4uYnRuU3VibWl0IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyLjZyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiA1JSAxMCU7XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC1zaXplOiA0LjV2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/service-form/service-form.page.ts":
/*!***************************************************!*\
  !*** ./src/app/service-form/service-form.page.ts ***!
  \***************************************************/
/*! exports provided: ServiceFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFormPage", function() { return ServiceFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");






let ServiceFormPage = class ServiceFormPage {
    constructor(alertCtrl, network, nativeStorage, RestService, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.RestService = RestService;
        this.navCtrl = navCtrl;
        this.submitData = [];
        this.offlineAssignFormArr = [];
        this.Token = JSON.parse(localStorage.userData).Token;
    }
    ngOnInit() {
        // if (localStorage.modeType == 'Online') {
        // } else 
        this.nativeStorage.getItem('AssignForm').then(data => {
            console.log(data);
            this.offlineAssignFormArr = data;
        }, error => console.error(error));
        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
            this.getOfflineData();
        }
        else {
            this.getMasterServiceForm();
            this.getCloserIdForService();
        }
    }
    getOfflineData() {
        this.nativeStorage.getItem('offlineAllData')
            .then(data => {
            console.log(data);
            // this.events = data.Item1;
            this.serviceFormData = data.Item4;
        }, error => console.error(error));
    }
    getCloserIdForService() {
        var ticketData = JSON.parse(localStorage.ticket);
        var userData = JSON.parse(localStorage.userData);
        var data = {
            "CloserID": "00000000-0000-0000-0000-000000000000",
            "TicketId": ticketData.Id,
            "EngineerId": userData.Id,
        };
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.postServices('/app/EngineerTickets/PostCloserDetails/' + Token, data).then((response) => {
            console.log(response);
            this.apiServiceResponse = response;
            if (this.apiServiceResponse.Message == "success") {
                this.ServicecloserId = this.apiServiceResponse.result.CloserID;
            }
            else {
            }
        });
    }
    getItems() {
        var q = this.searchTerm;
        if (q == undefined) {
            return;
        }
        var newarr = [];
        newarr = this.dataArray;
        this.serviceFormData = newarr;
        return this.serviceFormData = this.serviceFormData.filter((v) => {
            if (v["FormTitle"].toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
        });
    }
    getMasterServiceForm() {
        this.RestService.requestViaGet('app/EngineerTickets/GetMasterServiceForm/' + this.Token, '').then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.serviceFormData = this.response.result;
                this.dataArray = this.response.result;
            }
            else {
            }
        });
    }
    addForm(event, form) {
        // console.log(event.target.checked);
        // console.log(form);
        var ticket = JSON.parse(localStorage.ticket);
        //console.log('+++++++++++++++++++'+this.ServicecloserId);
        var format = {
            "MasterServiceFormID": form.FormId,
            "ServiceFormName": form.FormTitle,
            "TicketNo": ticket.TicketId,
            "TicketId": ticket.Id,
            "CloserId": this.ServicecloserId,
        };
        if (event.target.checked) {
            this.submitData.push(format);
        }
        else {
            for (let i = 0; i < this.submitData.length; i++) {
                if (form.FormId == this.submitData[i].MasterServiceFormID) {
                    var index = this.submitData.indexOf(this.submitData[i]);
                }
            }
            if (index > -1) {
                this.submitData.splice(index, 1);
            }
        }
        console.log(this.submitData);
    }
    assignForm() {
        // var data = [{
        //   "MasterServiceFormID": 1,
        //   "ServiceFormName": "Abc",
        //   "TicketNo": "TIC00001",
        //   "TicketId": "51674fac-0e18-41c9-a822-705b8416efd9"
        // }]
        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
            this.offlineAssignFormArr.push(this.submitData);
            this.nativeStorage.setItem('AssignForm', this.offlineAssignFormArr).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('Offline data for form add saved successfully.');
                this.navCtrl.navigateBack('/ticket-detail');
            }), error => console.error('Error storing item', error));
        }
        else {
            this.RestService.postServices('app/EngineerTickets/asignServiceformToTicket/' + this.Token, this.submitData).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                this.response = response;
                if (this.response.Message == "success") {
                    this.navCtrl.navigateBack('/ticket-detail');
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'cstmAlert',
                        message: this.response.MessageDescription,
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }));
        }
    }
};
ServiceFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ServiceFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-form',
        template: __webpack_require__(/*! raw-loader!./service-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/service-form/service-form.page.html"),
        styles: [__webpack_require__(/*! ./service-form.page.scss */ "./src/app/service-form/service-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ServiceFormPage);



/***/ })

}]);
//# sourceMappingURL=service-form-service-form-module-es2015.js.map