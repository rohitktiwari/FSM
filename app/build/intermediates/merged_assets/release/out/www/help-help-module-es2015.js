(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/help/help.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/help.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen class=\"main\">\n  <ion-card class=\"upr\">\n    <ion-card-header>\n      <ion-card-title class=\"title\">\n        <ion-icon name=\"arrow-back\" class=\"bckIcon\" (click)=\"goBack()\"></ion-icon>Help\n      </ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n  <div class=\"whiteBlock\">\n    <ion-item class=\"cstmItem\">\n      <ion-avatar slot=\"start\" class=\"avtr\">\n        <img src=\"assets/imgs/Help/help.png\">\n      </ion-avatar>\n      <ion-label>\n        <h1>Need Some <br> Helps?</h1>\n        <!-- <h6>fdgffg fgfhfgh dfgfddh</h6> -->\n      </ion-label>\n    </ion-item>\n  </div>\n  <form>\n    <ion-list class=\"cstmWidth cstmMargin\">\n      <ion-item>\n        <ion-label>\n          <h4>Telephone Number</h4>\n          <h2>\n            <ion-icon ios=\"ios-call\" md=\"md-call\" class=\"callIcon\"></ion-icon> {{helpData.ContactNumber}}\n          </h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h4>Whatsapp Number</h4>\n          <h2>\n            <ion-icon ios=\"ios-call\" md=\"md-call\" class=\"callIcon\"></ion-icon>{{helpData.WhatsAppNumber}}\n          </h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h4>Email</h4>\n          <h2>\n            <ion-icon ios=\"ios-call\" md=\"md-call\" class=\"callIcon\"></ion-icon> {{helpData.Email}}\n          </h2>\n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n    <!-- <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin supBtn\" routerLink=\"/support\">Support</ion-button>\n    </div> -->\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/help/help-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "./src/app/help/help-routing.module.ts");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  --overflow: hidden;\n}\n\n.upr {\n  margin: 0;\n  height: 35%;\n  background: #4574cb;\n  text-align: center;\n}\n\n.title {\n  color: #fff;\n  font-size: 6vw;\n}\n\n.profilePic {\n  width: 30%;\n  border: 3px solid #fff;\n  margin: 2% 35%;\n}\n\n.name,\np {\n  color: #fff;\n}\n\n.cstmItem {\n  margin-top: 8%;\n  border: 0;\n  --inner-border-width: 0;\n}\n\n.cstmMargin {\n  margin-top: 10%;\n}\n\n.avtr {\n  width: 80px;\n  height: 70px;\n}\n\n.bckIcon {\n  position: absolute;\n  left: 2%;\n}\n\nh1 {\n  font-weight: bold;\n  font-size: 5vw;\n}\n\n.whiteBlock {\n  position: absolute;\n  background: #fff;\n  width: 80%;\n  height: 20%;\n  z-index: 1;\n  top: 20%;\n  left: 10%;\n  box-shadow: -1px 1px 2px #ccc;\n  border-radius: 13px;\n}\n\n.cstmWidth {\n  width: 94%;\n}\n\nh6 {\n  color: #b5b5b5;\n}\n\nh4 {\n  margin: 5% 0;\n  color: #b5b5b5;\n}\n\nh2 {\n  font-weight: bold;\n  color: #505050;\n  font-size: 4vw;\n  margin: 3% 0 0;\n}\n\n.lbl {\n  font-size: 5vw;\n  margin: 4% 0%;\n  color: #ababab;\n  font-weight: 500;\n}\n\n.input {\n  border-bottom: 1px solid #ccc;\n}\n\n.supBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4574cb;\n  font-weight: bold;\n  font-size: 4.5vw;\n  text-transform: capitalize;\n}\n\n.callIcon {\n  color: #4574cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXGhlbHBcXGhlbHAucGFnZS5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNHLGNBQUE7QUNDSDs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FESUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXByIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogIzQ1NzRjYjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbn1cclxuXHJcbi5wcm9maWxlUGljIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgbWFyZ2luOiAyJSAzNSU7XHJcbn1cclxuXHJcbi5uYW1lLFxyXG5wIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY3N0bUl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLmNzdG1NYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uYXZ0ciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmJja0ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyJTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcblxyXG4ud2hpdGVCbG9jayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMnB4ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG59XHJcblxyXG4uY3N0bVdpZHRoIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbn1cclxuXHJcbmg2IHtcclxuICAgY29sb3I6ICNiNWI1YjU7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luOiA1JSAwO1xyXG4gICAgY29sb3I6ICNiNWI1YjU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM1MDUwNTA7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIG1hcmdpbjogMyUgMCAwO1xyXG59XHJcblxyXG4ubGJsIHtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgbWFyZ2luOiA0JSAwJTtcclxuICAgIGNvbG9yOiAjYWJhYmFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdXBCdG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogIzQ1NzRjYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FsbEljb257XHJcbiAgICBjb2xvcjogIzQ1NzRjYjtcclxufSIsIi5tYWluIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXByIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDM1JTtcbiAgYmFja2dyb3VuZDogIzQ1NzRjYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA2dnc7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAyJSAzNSU7XG59XG5cbi5uYW1lLFxucCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY3N0bUl0ZW0ge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgYm9yZGVyOiAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmNzdG1NYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5hdnRyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmJja0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIlO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDV2dztcbn1cblxuLndoaXRlQmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjAlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBib3gtc2hhZG93OiAtMXB4IDFweCAycHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuLmNzdG1XaWR0aCB7XG4gIHdpZHRoOiA5NCU7XG59XG5cbmg2IHtcbiAgY29sb3I6ICNiNWI1YjU7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiA1JSAwO1xuICBjb2xvcjogI2I1YjViNTtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBtYXJnaW46IDMlIDAgMDtcbn1cblxuLmxibCB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBtYXJnaW46IDQlIDAlO1xuICBjb2xvcjogI2FiYWJhYjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdXBCdG4ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJhY2tncm91bmQ6ICM0NTc0Y2I7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQuNXZ3O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhbGxJY29uIHtcbiAgY29sb3I6ICM0NTc0Y2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");




let HelpPage = class HelpPage {
    constructor(RestService, location) {
        this.RestService = RestService;
        this.location = location;
        this.helpData = [];
    }
    ngOnInit() {
        this.getHelpData();
    }
    goBack() {
        this.location.back();
    }
    getHelpData() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerProfile/getGenicProfile/' + Token, '').then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.helpData = this.response.result;
                console.log(this.helpData);
                // localStorage.setItem('HelpData', this.helpData);
            }
            else {
            }
        });
    }
};
HelpPage.ctorParameters = () => [
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/help/help.page.html"),
        styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=help-help-module-es2015.js.map