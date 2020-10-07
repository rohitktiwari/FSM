(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen>\n  <ion-card class=\"upr\">\n    <ion-card-header>\n      <ion-card-title class=\"title\">Login</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <img src=\"assets/imgs/Login/Logo.png\" class=\"logo\" />\n\n  <form>\n\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmMargin\">\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Username</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"input usr\" disabled=false></ion-input>\n        <!-- <img src=\"assets/imgs/Login/User.png\" class=\"userImg\" item-left /> -->\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Password</ion-label>\n        <ion-input type={{type}} [(ngModel)]=\"password\" name=\"password\" class=\"input pass\" disabled=false></ion-input>\n        <img src=\"assets/imgs/Login/Eye.png\" class=\"eye\" (click)=\"viewPass()\" *ngIf=\"type=='text'\" />\n        <img src=\"assets/imgs/Login/eyeClose.png\" class=\"eye\" (click)=\"viewPass()\" *ngIf=\"type=='password'\" />\n      </ion-item>\n\n      <!-- <ion-radio-group [(ngModel)]=\"mode\" [ngModelOptions]=\"{standalone: true}\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label>Online</ion-label>\n              <ion-radio slot=\"start\" color=\"success\" value=\"Online\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label>Offline</ion-label>\n              <ion-radio slot=\"start\" color=\"success\" value=\"Offline\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group> -->\n\n      <ion-item class=\"item-trns\" style=\"border-bottom:none!important;\">\n\n        <ion-checkbox (ionChange)=\"checkRemember($event)\" name=\"rememberme\" slot=\"start\"></ion-checkbox>\n        <ion-label>Remember Me</ion-label>\n      </ion-item>\n    </ion-list>\n    <p class=\"frgtTxt ion-text-right\" routerLink=\"/forgotpass\">Reset Password?</p>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"login()\">LOGIN</ion-button>\n    </div>\n  </form>\n  <!-- <p class=\"needTxt ion-text-center\">Create an account</p> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upr {\n  margin: 0;\n  height: 30%;\n  background: #4771C7;\n  text-align: center;\n}\n\n.title {\n  color: #fff;\n  font-size: 6vw;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 1.5% !important;\n  padding-left: 15% !important;\n}\n\n.usr {\n  background: url('User.png');\n  background-repeat: no-repeat;\n  background-size: 6%;\n  background-position: 3% center;\n}\n\n.pass {\n  background: url('Lock.png');\n  background-repeat: no-repeat;\n  background-size: 6%;\n  background-position: 3% center;\n}\n\n.logo {\n  position: absolute;\n  z-index: 1;\n  width: 40%;\n  left: 30%;\n  top: 19%;\n}\n\n.cstmMargin {\n  margin-top: 15%;\n}\n\n.lbl {\n  font-size: 5.5vw;\n  margin: 4% 2%;\n}\n\n.eye {\n  position: absolute;\n  right: 7%;\n  bottom: 12%;\n  width: 6%;\n  z-index: 10;\n}\n\n.frgtTxt {\n  margin-right: 5%;\n  font-weight: bold;\n  color: #797979;\n  font-size: 4vw;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  float: right;\n}\n\n.lgnBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n}\n\n.needTxt {\n  color: #4771C7;\n  font-size: 4vw;\n  font-weight: bold;\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vSDpcXE9mZmljZVxcRlNNL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXByIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEuNSUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c3Ige1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL0xvZ2luL1VzZXIucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgY2VudGVyO1xyXG59XHJcblxyXG4ucGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvTG9naW4vTG9jay5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNiU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgdG9wOiAxOSU7XHJcbn1cclxuXHJcbi5jc3RtTWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDUuNXZ3O1xyXG4gICAgbWFyZ2luOiA0JSAyJTtcclxufVxyXG5cclxuLmV5ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNyU7XHJcbiAgICBib3R0b206IDEyJTtcclxuICAgIHdpZHRoOiA2JTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZnJndFR4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubGduQnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbn1cclxuXHJcbi5uZWVkVHh0IHtcclxuICAgIGNvbG9yOiAjNDc3MUM3O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59IiwiLnVwciB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQ6ICM0NzcxQzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNnZ3O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxLjUlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTUlICFpbXBvcnRhbnQ7XG59XG5cbi51c3Ige1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvTG9naW4vVXNlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDYlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XG59XG5cbi5wYXNzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL0xvZ2luL0xvY2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA2JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDQwJTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDE5JTtcbn1cblxuLmNzdG1NYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5sYmwge1xuICBmb250LXNpemU6IDUuNXZ3O1xuICBtYXJnaW46IDQlIDIlO1xufVxuXG4uZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNyU7XG4gIGJvdHRvbTogMTIlO1xuICB3aWR0aDogNiU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZnJndFR4dCB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgZm9udC1zaXplOiA0dnc7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGduQnRuIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0LjV2dztcbn1cblxuLm5lZWRUeHQge1xuICBjb2xvcjogIzQ3NzFDNztcbiAgZm9udC1zaXplOiA0dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");




//import { Http, Headers } from '@ionic/http';


let LoginPage = class LoginPage {
    //  mode: any = 'Online';
    constructor(menuCtrl, network, http, navCtrl, RestService, alertCtrl, events) {
        this.menuCtrl = menuCtrl;
        this.network = network;
        this.http = http;
        this.navCtrl = navCtrl;
        this.RestService = RestService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.type = 'password';
        this.username = '';
        this.password = '';
        this.rememberme = '';
    }
    ngOnInit() {
        // this.rememberme=true;
    }
    ionViewDidEnter() {
        if (localStorage.getItem('remember')) {
            this.rememberme = false;
            this.username = localStorage.getItem('username');
            this.password = localStorage.getItem('password');
        }
        // else {
        //   this.rememberme = false;
        //   this.username = '';
        //   this.password = '';
        // }
    }
    checkRemember(event) {
        this.rememberme = event.target.checked;
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.username == '' || this.username == undefined) {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'cstmAlert',
                    message: 'Please enter Username.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if (this.password == '' || this.password == undefined) {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'cstmAlert',
                    message: 'Please enter Password.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if (this.network.type === "none") {
                const alert = yield this.alertCtrl.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Check Internet Connection.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            var remember = this.rememberme;
            var data = {
                username: this.username,
                password: this.password,
                DeviceId: localStorage.deviceID,
                AppToken: localStorage.token
            };
            this.RestService.loginApi(data).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.result = response;
                if (this.result.Message == "success") {
                    if (remember) {
                        localStorage.setItem('remember', remember);
                        localStorage.setItem('username', this.username);
                        localStorage.setItem('password', this.password);
                    }
                    else {
                        localStorage.setItem('remember', remember);
                        localStorage.removeItem('username');
                        localStorage.removeItem('password');
                    }
                    localStorage.setItem('userData', JSON.stringify(this.result.result));
                    // localStorage.setItem('modeType', this.mode)
                    this.getProfileData();
                    // this.navCtrl.navigateRoot("/dashboard");
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'cstmAlert',
                        message: 'Username or Password incorrect!.',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }));
        });
    }
    getProfileData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var Token = JSON.parse(localStorage.userData).Token;
            this.RestService.requestViaGet('app/EngineerProfile/GetEngineerProfile/' + Token, '').then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                this.result = response;
                if (this.result.Message == "success") {
                    var profileData = this.result.result[0];
                    localStorage.setItem('profileData', JSON.stringify(profileData));
                    this.events.publish('user:logged', profileData);
                    this.navCtrl.navigateRoot("/dashboard");
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        cssClass: 'cstmAlert',
                        message: 'Something went wrong!.',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }));
        });
    }
    // ionViewWillEnter() {
    // //  this.menuCtrl.enable(false);
    // }
    viewPass() {
        if (this.type == 'password') {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map