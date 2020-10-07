(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen class=\"main\">\n  <ion-card class=\"upr\">\n    <ion-card-header>\n      <ion-card-title class=\"title\">\n        <ion-icon name=\"arrow-back\" class=\"bckIcon\" (click)=\"goBack()\"></ion-icon>Profile\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <img src=\"assets/imgs/Login/Logo.png\" alt=\"\" class=\"profilePic\"> -->\n      <svg viewBox=\"0 0 100 100\">\n        <defs>\n          <pattern id=\"img\" patternUnits=\"userSpaceOnUse\" width=\"100\" height=\"100\">\n            <!-- <img src=\"{{preFix}}{{profileData.EngineerLogo}}\" x=\"-50\" y=\"0\" width=\"200\" height=\"100\"  alt=\"\" /> -->\n            <!-- <image xlink:href=\"http://fsm.bthrust.com/Images/EngineerProfile/20200107050152.png\" x=\"-50\" y=\"0\"\n              width=\"200\" height=\"100\" /> -->\n            <image attr.xlink:href={{preFix}}{{profileData.EngineerLogo}} x=\"-50\" y=\"0\" width=\"200\" height=\"100\" />\n          </pattern>\n        </defs>\n        <polygon points=\"50 1 95 25 95 75 50 99 5 75 5 25\" fill=\"url(#img)\" />\n      </svg>\n      <h1 class=\"ion-text-center name\">{{profileData.EngineerName}}</h1>\n      <!-- <p class=\"ion-text-center\">Graphic Designer</p> -->\n    </ion-card-content>\n  </ion-card>\n\n  <ion-segment (ionChange)=\"slides.slideTo(segment)\" [(ngModel)]=\"segment\" class=\"segment\">\n    <ion-segment-button value=\"0\" checked>\n      Personal <br> Details\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      Emergency <br> Contact\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      Security\n    </ion-segment-button>\n  </ion-segment>\n  <ion-slides #slides (ionSlideWillChange)=\"segment=''+slides.getActiveIndex()\">\n    <ion-slide>\n      <ion-list class=\"cstmWidth\">\n        <ion-item>\n          <ion-label>\n            <h4>Name</h4>\n            <h2>{{profileData.EngineerName}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>Email</h4>\n            <h2>{{profileData.EngineerEmail}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>Contact Number</h4>\n            <h2>{{profileData.EngineerPhone}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>Address</h4>\n            <h2>{{profileData.AddressStreet1}}, {{profileData.AddressStreet2}}, {{profileData.AddressCity}},\n              {{profileData.AddressState}}, {{profileData.AddressZipCode}}</h2>\n          </ion-label>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>\n            <h4>License</h4>\n            <h2>{{profileData.LicenceType}}-{{profileData.LicenceNo}}</h2>\n          </ion-label>\n        </ion-item> -->\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list class=\"cstmWidth\">\n        <ion-item>\n          <ion-label>\n            <h4>Name</h4>\n            <h2>{{profileData.EmergencyName}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>Relation</h4>\n            <h2>{{profileData.EmergencyRelation}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>Contact Number</h4>\n            <h2>{{profileData.EmergencyNumber}}</h2>\n          </ion-label>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>\n            <h4>Address</h4>\n            <h2>Somestreet, USA 212123</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h4>License</h4>\n            <h2>DL-1420110012345</h2>\n          </ion-label>\n        </ion-item> -->\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmWidth\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\"> Current Password</ion-label>\n          <ion-input type=\"password\" class=\"input usr\" [(ngModel)]=\"currentPass\" disabled=false></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">New Password</ion-label>\n          <ion-input type=\"password\" class=\"input pass\" [(ngModel)]=\"newPass\" disabled=false></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Retype New Password</ion-label>\n          <ion-input type=\"password\" class=\"input pass\" [(ngModel)]=\"retypPass\" disabled=false></ion-input>\n        </ion-item>\n        <p style=\"color: #a7a7a7;font-size: 0.6em;\">\n          *password should be 6 to 16 digit,atleast one capital letter,atleast\n          one digit,atleast one special character\n        </p>\n        <ion-button expand=\"block\" class=\"ion-no-margin btn\" (click)=\"changePass()\">Change</ion-button>\n      </ion-list>\n\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  --overflow: hidden;\n}\n\n.upr {\n  margin: 0;\n  height: auto;\n  background: #4771C7;\n  text-align: center;\n}\n\n.title {\n  color: #fff;\n  font-size: 6vw;\n}\n\nsvg {\n  width: 30%;\n}\n\n.profilePic {\n  width: 30%;\n  border: 3px solid #fff;\n  margin: 2% 35%;\n}\n\n.name,\np {\n  color: #fff;\n}\n\n.segment {\n  --background: #efefef;\n  text-align: left;\n}\n\nion-segment-button {\n  font-size: 3vw;\n  color: #4c4c4c;\n  font-weight: bold;\n}\n\nion-slides {\n  max-height: 55%;\n  overflow: auto;\n}\n\n.cstmWidth {\n  width: 94%;\n}\n\nh4 {\n  color: #ccc;\n}\n\nh2 {\n  font-weight: bold;\n  color: #505050;\n  font-size: 4vw;\n  margin: 3% 0 0;\n  white-space: normal;\n}\n\n.lbl {\n  font-size: 5vw;\n  margin: 4% 0%;\n  color: #ababab;\n  font-weight: 500;\n}\n\n.bckIcon {\n  position: absolute;\n  left: 2%;\n}\n\n.input {\n  border-bottom: 1px solid #ccc;\n}\n\n.btn {\n  width: 74%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXByIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG5zdmd7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgfVxyXG5cclxuLnByb2ZpbGVQaWMge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDIlIDM1JTtcclxufVxyXG5cclxuLm5hbWUsXHJcbnAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgbWF4LWhlaWdodDogNTUlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jc3RtV2lkdGgge1xyXG4gICAgd2lkdGg6IDk0JTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM1MDUwNTA7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIG1hcmdpbjogMyUgMCAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICBjb2xvcjogI2FiYWJhYjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5iY2tJY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMiU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogNzQlO1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbn0iLCIubWFpbiB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVwciB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDZ2dztcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMzAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDIlIDM1JTtcbn1cblxuLm5hbWUsXG5wIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgbWF4LWhlaWdodDogNTUlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNzdG1XaWR0aCB7XG4gIHdpZHRoOiA5NCU7XG59XG5cbmg0IHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICBmb250LXNpemU6IDR2dztcbiAgbWFyZ2luOiAzJSAwIDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5sYmwge1xuICBmb250LXNpemU6IDV2dztcbiAgbWFyZ2luOiA0JSAwJTtcbiAgY29sb3I6ICNhYmFiYWI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iY2tJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyJTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5idG4ge1xuICB3aWR0aDogNzQlO1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDUlIGF1dG87XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ProfilePage = /** @class */ (function () {
    function ProfilePage(alertController, RestService, navCtrl, location) {
        this.alertController = alertController;
        this.RestService = RestService;
        this.navCtrl = navCtrl;
        this.location = location;
        this.segment = 0;
        this.profileData = [];
        this.preFix = localStorage.getItem('urlPrefix');
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getProfileData();
    };
    ProfilePage.prototype.segmentChanged = function (ev) {
        // console.log('Segment changed', ev);
    };
    ProfilePage.prototype.goBack = function () {
        this.location.back();
    };
    ProfilePage.prototype.getProfileData = function () {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerProfile/GetEngineerProfile/' + Token, '').then(function (response) {
            //console.log(response);
            _this.response = response;
            if (_this.response.Message == "success") {
                _this.profileData = _this.response.result[0];
                localStorage.setItem('profileData', JSON.stringify(_this.profileData));
            }
            else {
            }
        });
    };
    ProfilePage.prototype.changePass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2, alert_3, alert_4, data, Token;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentPass == '' || this.currentPass == undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'cstmAlert',
                                message: 'Please Enter Current Password.',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!(this.newPass == '' || this.newPass == undefined)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'cstmAlert',
                                message: 'Please Enter New Password.',
                                buttons: ['OK']
                            })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.retypPass == '' || this.retypPass == undefined)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'cstmAlert',
                                message: 'Please Enter Confirm Password.',
                                buttons: ['OK']
                            })];
                    case 7:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9:
                        if (!(this.newPass != this.retypPass)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'New Password and retype password are not same',
                                cssClass: 'required',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        role: 'ok',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ]
                            })];
                    case 10:
                        alert_4 = _a.sent();
                        return [4 /*yield*/, alert_4.present()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                    case 12:
                        data = {
                            "UserName": "",
                            "OTP": "",
                            "OldPassword": this.currentPass,
                            "NewPassword": this.retypPass
                        };
                        Token = JSON.parse(localStorage.userData).Token;
                        this.RestService.postServices('app/EngineerProfile/PasswordChange/' + Token, data).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert, alert_5;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(response);
                                        this.response = response;
                                        return [4 /*yield*/, this.alertController.create({
                                                header: '',
                                                message: this.response.MessageDescription,
                                                cssClass: 'secondary',
                                                buttons: [
                                                    {
                                                        text: 'Ok',
                                                        role: 'ok',
                                                        handler: function (blah) {
                                                            console.log('Confirm Cancel: blah');
                                                        }
                                                    }
                                                ]
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
                                        _a.sent();
                                        if (!(this.response.Message == "success")) return [3 /*break*/, 3];
                                        this.navCtrl.navigateForward("/login");
                                        return [3 /*break*/, 6];
                                    case 3: return [4 /*yield*/, this.alertController.create({
                                            header: '',
                                            message: this.response.MessageDescription,
                                            cssClass: 'required',
                                            buttons: [
                                                {
                                                    text: 'Ok',
                                                    role: 'ok',
                                                    handler: function (blah) {
                                                        console.log('Confirm Cancel: blah');
                                                    }
                                                }
                                            ]
                                        })];
                                    case 4:
                                        alert_5 = _a.sent();
                                        return [4 /*yield*/, alert_5.present()];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map