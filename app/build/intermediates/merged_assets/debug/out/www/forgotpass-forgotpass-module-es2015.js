(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpass/forgotpass.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpass/forgotpass.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\" class=\"ion-no-margin cstmMargin\">\n    <ion-item>\n      <ion-label position=\"stacked\" class=\"lbl\">Email Id</ion-label>\n      <ion-input type=\"email\" class=\"input usr\" disabled=false [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"showOtp\">\n      <ion-label position=\"stacked\" class=\"lbl\">OTP</ion-label>\n      <ion-input type=\"text\" class=\"input usr\" disabled=false [(ngModel)]=\"otp\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"showPass\">\n      <ion-label position=\"stacked\" class=\"lbl\">New Password</ion-label>\n      <ion-input type=\"password\" class=\"input usr\" disabled=false [(ngModel)]=\"newPass\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"getOtp()\"\n      *ngIf=\"!showPass && !showOtp\">Get OTP</ion-button>\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"submitOtp()\" *ngIf=\"showOtp\">Submit\n      OTP</ion-button>\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"submitNewPassword()\"\n      *ngIf=\"showPass\">Submit\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpass/forgotpass-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageRoutingModule", function() { return ForgotpassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassPage"]
    }
];
let ForgotpassPageRoutingModule = class ForgotpassPageRoutingModule {
};
ForgotpassPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpassPageRoutingModule);



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpass-routing.module */ "./src/app/forgotpass/forgotpass-routing.module.ts");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







let ForgotpassPageModule = class ForgotpassPageModule {
};
ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassPageRoutingModule"]
        ],
        declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
    })
], ForgotpassPageModule);



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl {\n  font-size: 5.5vw;\n  margin: 4% 2%;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2.2% !important;\n  padding-left: 5% !important;\n  font-size: 4vw;\n}\n\n.lgnBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzcy9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXGZvcmdvdHBhc3NcXGZvcmdvdHBhc3MucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3RwYXNzL2ZvcmdvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzL2ZvcmdvdHBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDUuNXZ3O1xyXG4gICAgbWFyZ2luOiA0JSAyJTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMi4yJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuXHJcbi5sZ25CdG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxufVxyXG5cclxuXHJcbiIsIi5sYmwge1xuICBmb250LXNpemU6IDUuNXZ3O1xuICBtYXJnaW46IDQlIDIlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyLjIlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNSUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5sZ25CdG4ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQuNXZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ForgotpassPage = class ForgotpassPage {
    constructor(RestService, navCtrl, alertController) {
        this.RestService = RestService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.showOtp = false;
        this.showPass = false;
    }
    ngOnInit() {
        //this.email=JSON.parse(localStorage.userData).UserName;
    }
    getOtp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.email == '' || this.email == undefined) {
                const alert = yield this.alertController.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Enter Email.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            var data = { username: this.email };
            this.RestService.postServices('Logins/ForgotPasswordStep1', data).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                this.apiResponse = response;
                if (this.apiResponse.Message == "success") {
                    //alert(response.MessageDescription);
                    this.showOtp = true;
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'secondary',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'required',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                // alert(this.apiResponse.MessageDescription);
            }));
        });
    }
    submitOtp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.email == '' || this.email == undefined) {
                const alert = yield this.alertController.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Enter Email.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if (this.otp == '' || this.otp == undefined) {
                const alert = yield this.alertController.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Enter OTP.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            var data = { username: this.email, otp: this.otp };
            this.RestService.postServices('Logins/ForgotPasswordStep2', data).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                this.apiResponse = response;
                if (this.apiResponse.Message == "success") {
                    // alert(response.MessageDescription);
                    this.showPass = true;
                    this.showOtp = false;
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'secondary',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'required',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                // alert(this.apiResponse.MessageDescription);
            }));
        });
    }
    submitNewPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.email == '' || this.email == undefined) {
                const alert = yield this.alertController.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Enter Email.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if (this.newPass == '' || this.newPass == undefined) {
                const alert = yield this.alertController.create({
                    cssClass: 'cstmAlert',
                    message: 'Please Enter New Password.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            var data = { username: this.email, newPassword: this.newPass };
            this.RestService.postServices('Logins/ForgotPasswordStep3', data).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                this.apiResponse = response;
                if (this.apiResponse.Message == "success") {
                    this.navCtrl.navigateRoot("/login");
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'secondary',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: '',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'required',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                // alert(this.apiResponse.MessageDescription);
            }));
        });
    }
};
ForgotpassPage.ctorParameters = () => [
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpass',
        template: __webpack_require__(/*! raw-loader!./forgotpass.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpass/forgotpass.page.html"),
        styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ForgotpassPage);



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module-es2015.js.map