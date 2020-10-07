(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["api-code-api-code-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api-code/api-code.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api-code/api-code.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n  <ion-card class=\"upr\">\n    <ion-card-header>\n      <!-- <ion-card-title class=\"title\">Customer Code Page</ion-card-title> -->\n      <ion-card-title class=\"title\">Field Service <br> Management Solution</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <img src=\"assets/imgs/Login/Logo.png\" class=\"logo\" />\n\n  <form>\n\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmMargin\">\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Client Code</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"code\" name=\"code\" placeholder=\"Enter code here\" class=\"input\"\n          disabled=false></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"getApiUrl()\">SUBMIT</ion-button>\n    </div>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/api-code/api-code-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/api-code/api-code-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ApiCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCodePageRoutingModule", function() { return ApiCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-code.page */ "./src/app/api-code/api-code.page.ts");




var routes = [
    {
        path: '',
        component: _api_code_page__WEBPACK_IMPORTED_MODULE_3__["ApiCodePage"]
    }
];
var ApiCodePageRoutingModule = /** @class */ (function () {
    function ApiCodePageRoutingModule() {
    }
    ApiCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ApiCodePageRoutingModule);
    return ApiCodePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/api-code/api-code.module.ts":
/*!*********************************************!*\
  !*** ./src/app/api-code/api-code.module.ts ***!
  \*********************************************/
/*! exports provided: ApiCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCodePageModule", function() { return ApiCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-code-routing.module */ "./src/app/api-code/api-code-routing.module.ts");
/* harmony import */ var _api_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-code.page */ "./src/app/api-code/api-code.page.ts");







var ApiCodePageModule = /** @class */ (function () {
    function ApiCodePageModule() {
    }
    ApiCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _api_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApiCodePageRoutingModule"]
            ],
            declarations: [_api_code_page__WEBPACK_IMPORTED_MODULE_6__["ApiCodePage"]]
        })
    ], ApiCodePageModule);
    return ApiCodePageModule;
}());



/***/ }),

/***/ "./src/app/api-code/api-code.page.scss":
/*!*********************************************!*\
  !*** ./src/app/api-code/api-code.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upr {\n  margin: 0;\n  height: 30%;\n  background: #4771C7;\n  text-align: center;\n}\n\n.title {\n  color: #fff;\n  font-size: 6vw;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 1.5% !important;\n}\n\n.logo {\n  position: absolute;\n  z-index: 1;\n  width: 40%;\n  left: 30%;\n  top: 19%;\n}\n\n.cstmMargin {\n  margin-top: 15%;\n}\n\n.lbl {\n  font-size: 5.5vw;\n  margin: 4% 2%;\n}\n\n.lgnBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpLWNvZGUvSDpcXE9mZmljZVxcRlNNL3NyY1xcYXBwXFxhcGktY29kZVxcYXBpLWNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9hcGktY29kZS9hcGktY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBpLWNvZGUvYXBpLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogMTklO1xyXG59XHJcblxyXG4uY3N0bU1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5sYmwge1xyXG4gICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgIG1hcmdpbjogNCUgMiU7XHJcbn1cclxuXHJcbi5sZ25CdG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxufSIsIi51cHIge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDZ2dztcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMS41JSAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDQwJTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDE5JTtcbn1cblxuLmNzdG1NYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5sYmwge1xuICBmb250LXNpemU6IDUuNXZ3O1xuICBtYXJnaW46IDQlIDIlO1xufVxuXG4ubGduQnRuIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0LjV2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/api-code/api-code.page.ts":
/*!*******************************************!*\
  !*** ./src/app/api-code/api-code.page.ts ***!
  \*******************************************/
/*! exports provided: ApiCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCodePage", function() { return ApiCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ApiCodePage = /** @class */ (function () {
    function ApiCodePage(navCtrl, RestService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.RestService = RestService;
        this.alertCtrl = alertCtrl;
        this.code = ''; //HY012020 //BT002020
    }
    ApiCodePage.prototype.ngOnInit = function () {
    };
    ApiCodePage.prototype.ionViewDidEnter = function () {
        //this.getApiUrl();
    };
    ApiCodePage.prototype.getApiUrl = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.code == '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                cssClass: 'cstmAlert',
                                message: 'Please enter code.',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.RestService.requestViaGet('GenicProfile/GenicClients/' + this.code, '').then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var mode, alert_2;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(response);
                                        this.apicode = response;
                                        if (!(this.apicode.Message == "success")) return [3 /*break*/, 1];
                                        this.urlData = this.apicode.result;
                                        console.log(this.urlData);
                                        if (this.urlData.IsOffline) {
                                            mode = 'Offline';
                                        }
                                        else {
                                            mode = 'Online';
                                        }
                                        localStorage.setItem('modeType', mode);
                                        localStorage.setItem('CompanyUrl', this.urlData.CompanyUrl);
                                        this.navCtrl.navigateRoot("/login");
                                        return [3 /*break*/, 4];
                                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                                            cssClass: 'cstmAlert',
                                            message: this.apicode.MessageDescription,
                                            buttons: ['OK']
                                        })];
                                    case 2:
                                        alert_2 = _a.sent();
                                        return [4 /*yield*/, alert_2.present()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiCodePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ApiCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-code',
            template: __webpack_require__(/*! raw-loader!./api-code.page.html */ "./node_modules/raw-loader/index.js!./src/app/api-code/api-code.page.html"),
            styles: [__webpack_require__(/*! ./api-code.page.scss */ "./src/app/api-code/api-code.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ApiCodePage);
    return ApiCodePage;
}());



/***/ })

}]);
//# sourceMappingURL=api-code-api-code-module-es5.js.map