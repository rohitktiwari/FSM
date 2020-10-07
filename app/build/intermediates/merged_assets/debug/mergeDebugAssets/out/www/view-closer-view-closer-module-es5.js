(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-closer-view-closer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-closer/view-closer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-closer/view-closer.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Closer Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- <ion-segment (ionChange)=\"slides.slideTo(segment)\" [(ngModel)]=\"segment\" class=\"segment\">\n    <ion-segment-button value=\"0\">\n      Remark\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      Attachment\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      Signature\n    </ion-segment-button>\n  </ion-segment>\n  <ion-slides #slides (ionSlideWillChange)=\"segment=''+slides.getActiveIndex()\">\n    <ion-slide>\n      <ion-list class=\"cstmWidth\">\n        <h5>Remarks</h5>\n        <p class=\"txtarea\">{{closerData.Remarks}}</p>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list class=\"cstmWidth\">\n        <p *ngIf=\"closerData.CloserAttachmentList.length == 0\">No Document found ...</p>\n        <ion-grid *ngFor=\"let attchment of closerData.CloserAttachmentList\">\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Attachment</ion-label>\n            <img src={{urlPrefix}}{{attchment.AttachmentFile}} />\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Comment</ion-label>\n            <ion-input type=\"text\" class=\"input pass\" value={{attchment.Remarks}} readonly></ion-input>\n          </ion-item>\n        </ion-grid>\n\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list class=\"cstmWidth\">\n\n        <h5>Engineer Signature</h5>\n\n        <ion-grid class=\"cstmBorder\" >\n          <img src={{urlPrefix}}{{closerData.EngineerSignature}} />\n        </ion-grid>\n\n        <h5>Customer Signature</h5>\n        <ion-grid class=\"cstmBorder\">\n          <img src={{urlPrefix}}{{closerData.CustomerSignature}} />\n        </ion-grid>\n        \n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"6\">\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"btnClose\" (click)=\"closeDetail()\">Close</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-slide>\n  </ion-slides> -->\n\n  <ion-list>\n\n    <p class=\"dataLbl\">Closer No : {{closerData.CloserPrefix}}</p>\n\n\n    <p class=\"dataLbl\">Ticket No : {{closerData.TicketNo}}</p>\n\n\n    <p class=\"dataLbl\">Engineer Name : {{closerData.EnginnerName}}</p>\n\n\n    <p class=\"dataLbl\">Start Date : {{closerData.StartDate | date : 'MMM d y'}}</p>\n\n\n    <p class=\"dataLbl\">End Date : {{closerData.EndDate | date : 'MMM d y'}}</p>\n\n\n    <p class=\"dataLbl\">Start Time :{{closerData.StartTime}} </p>\n\n\n    <p class=\"dataLbl\">End Time : {{closerData.EndTime}}</p>\n\n\n    <p class=\"dataLbl\">Total Duration : {{closerData.TotalDuration}}</p>\n    <P class=\"dataLbl\">Status: {{closerData.TicketFlag}}</P>\n\n    <h5 style=\"margin: 0;\">Remarks :</h5>\n    <p class=\"txtarea\">{{closerData.Remarks}}</p>\n\n    <p *ngIf=\"closerData.CloserAttachmentList.length == 0\">No Document found ...</p>\n    <ion-grid *ngFor=\"let attchment of closerData.CloserAttachmentList\">\n      <ion-item (click)=\"downloadFile(attchment.AttachmentFile)\">\n        <ion-label position=\"stacked\" class=\"lbl\">Attachment</ion-label>\n        <img src={{urlPrefix}}{{attchment.AttachmentFile}} class=\"uplodedImg\" *ngIf=\"type(attchment.AttachmentFile)\" />\n        <img src=\"assets/imgs/doc.png\" class=\"uplodedDoc\" *ngIf=\"!type(attchment.AttachmentFile)\" />\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"lbl\">Comment</ion-label>\n        <!-- <ion-input type=\"text\" class=\"input pass\" value={{attchment.Remarks}} readonly></ion-input> -->\n        <p>{{attchment.Remarks}}</p>\n      </ion-item>\n    </ion-grid>\n\n    <h5>Engineer Signature</h5>\n\n    <ion-grid class=\"cstmBorder\">\n      <img src={{urlPrefix}}{{closerData.EngineerSignature}} class=\"cstmImg\" />\n    </ion-grid>\n\n    <h5>Customer Signature</h5>\n    <ion-grid class=\"cstmBorder\">\n      <img src={{urlPrefix}}{{closerData.CustomerSignature}} class=\"cstmImg\" />\n    </ion-grid>\n\n\n    <ion-row class=\"BtnRow\">\n      <ion-col size=\"6\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button class=\"btnClose\" (click)=\"closeDetail()\">Close</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/view-closer/view-closer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/view-closer/view-closer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewCloserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCloserPageRoutingModule", function() { return ViewCloserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_closer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-closer.page */ "./src/app/view-closer/view-closer.page.ts");




var routes = [
    {
        path: '',
        component: _view_closer_page__WEBPACK_IMPORTED_MODULE_3__["ViewCloserPage"]
    }
];
var ViewCloserPageRoutingModule = /** @class */ (function () {
    function ViewCloserPageRoutingModule() {
    }
    ViewCloserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewCloserPageRoutingModule);
    return ViewCloserPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-closer/view-closer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/view-closer/view-closer.module.ts ***!
  \***************************************************/
/*! exports provided: ViewCloserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCloserPageModule", function() { return ViewCloserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_closer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-closer-routing.module */ "./src/app/view-closer/view-closer-routing.module.ts");
/* harmony import */ var _view_closer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-closer.page */ "./src/app/view-closer/view-closer.page.ts");







var ViewCloserPageModule = /** @class */ (function () {
    function ViewCloserPageModule() {
    }
    ViewCloserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_closer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewCloserPageRoutingModule"]
            ],
            declarations: [_view_closer_page__WEBPACK_IMPORTED_MODULE_6__["ViewCloserPage"]]
        })
    ], ViewCloserPageModule);
    return ViewCloserPageModule;
}());



/***/ }),

/***/ "./src/app/view-closer/view-closer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/view-closer/view-closer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".segment {\n  --background: #efefef;\n  text-align: left;\n}\n\nion-segment-button {\n  font-size: 3vw;\n  color: #4c4c4c;\n  font-weight: bold;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated,\n.segment-ios .segment-button.activated,\n.segment-ios .segment-button.segment-activated {\n  border-color: #4771C7 !important;\n  color: #4771C7 !important;\n  background: transparent;\n}\n\n.segment-ios .segment-button {\n  border: 0;\n}\n\n.txtarea {\n  border: 1px solid #ccc;\n  font-size: 4.5vw;\n  color: #4c4c4c;\n  min-height: 25vh;\n  padding: 2%;\n}\n\n.cstmWidth {\n  width: 98%;\n  text-align: left;\n}\n\n.lbl {\n  font-size: 5.5vw;\n  margin: 4% 2%;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2.2% !important;\n  padding-left: 5% !important;\n  font-size: 4vw;\n}\n\n.BtnRow ion-col:nth-of-type(3) {\n  margin: auto;\n  text-align: center;\n  color: #4771C7;\n  font-size: 4vw;\n}\n\n.Btn {\n  --background: #4771C7;\n  text-transform: capitalize;\n  height: 2rem;\n}\n\n.cstmBorder {\n  border: 1px solid #ccc;\n}\n\n.btnSubmit {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #4771C7;\n  font-size: 4.5vw;\n}\n\n.btnClose {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #fff;\n  font-size: 4.5vw;\n  color: #4771C7;\n}\n\n.btnClose button {\n  border: 2px solid;\n}\n\n.dataLbl {\n  margin: 2% 0;\n  font-size: 1.1em;\n}\n\n.cstmImg {\n  width: 100%;\n  height: 201px;\n}\n\n.uplodedImg {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jbG9zZXIvSDpcXE9mZmljZVxcRlNNL3NyY1xcYXBwXFx2aWV3LWNsb3Nlclxcdmlldy1jbG9zZXIucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWNsb3Nlci92aWV3LWNsb3Nlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7Ozs7RUFJSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNMSjs7QURRQTtFQUNJLFNBQUE7QUNMSjs7QURRQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTtFQUNJLHNCQUFBO0FDTEo7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0QsYUFBQTtBQ05IIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jbG9zZXIvdmlldy1jbG9zZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuLnNlZ21lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCxcclxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkLFxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCxcclxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NzcxQzcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDc3MUM3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50eHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXZoO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5jc3RtV2lkdGgge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sYmwge1xyXG4gICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgIG1hcmdpbjogNCUgMiU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuMiUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNSUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uQnRuUm93IGlvbi1jb2w6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0NzcxQzc7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLkJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmNzdG1Cb3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIC8vIGhlaWdodDogMTh2aDtcclxufVxyXG5cclxuLmJ0blN1Ym1pdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbn1cclxuXHJcbi5idG5DbG9zZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICBjb2xvcjogIzQ3NzFDNztcclxufVxyXG5cclxuLmJ0bkNsb3NlIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLmRhdGFMYmx7XHJcbiAgICBtYXJnaW46IDIlIDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uY3N0bUltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDFweDtcclxufVxyXG5cclxuLnVwbG9kZWRJbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAyMDBweDtcclxufSIsIi5zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkLFxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbi5hY3RpdmF0ZWQsXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDc3MUM3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDc3MUM3ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udHh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBtaW4taGVpZ2h0OiAyNXZoO1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLmNzdG1XaWR0aCB7XG4gIHdpZHRoOiA5OCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5sYmwge1xuICBmb250LXNpemU6IDUuNXZ3O1xuICBtYXJnaW46IDQlIDIlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyLjIlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNSUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5CdG5Sb3cgaW9uLWNvbDpudGgtb2YtdHlwZSgzKSB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ3NzFDNztcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5CdG4ge1xuICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5jc3RtQm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMi42cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogNSUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG59XG5cbi5idG5DbG9zZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMi42cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogNSUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG4gIGNvbG9yOiAjNDc3MUM3O1xufVxuXG4uYnRuQ2xvc2UgYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG59XG5cbi5kYXRhTGJsIHtcbiAgbWFyZ2luOiAyJSAwO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uY3N0bUltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMXB4O1xufVxuXG4udXBsb2RlZEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-closer/view-closer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/view-closer/view-closer.page.ts ***!
  \*************************************************/
/*! exports provided: ViewCloserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCloserPage", function() { return ViewCloserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");






var ViewCloserPage = /** @class */ (function () {
    function ViewCloserPage(navCtrl, loadingCtrl, transfer, file, fileOpener, zone, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.percentage = 0;
    }
    ViewCloserPage.prototype.ngOnInit = function () {
        this.closerData = JSON.parse(localStorage.viewCloser);
        this.urlPrefix = localStorage.urlPrefix;
        // alert(this.urlPrefix);
        console.log(this.closerData);
    };
    ViewCloserPage.prototype.closeDetail = function () {
        localStorage.removeItem('viewCloser');
        this.navCtrl.navigateBack("/ticket-detail");
    };
    ViewCloserPage.prototype.type = function (val) {
        var fileExt = val.split('/').pop().split('.')[1];
        if (fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'jpg') {
            return true;
        }
        else {
            return false;
        }
    };
    ViewCloserPage.prototype.downloadFile = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mimeType, name, loader, fileTransfer;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mimeType = '';
                        if (url.split('/').pop().split('.')[1] == 'pdf') {
                            mimeType = 'application/pdf';
                        }
                        else {
                            mimeType = 'image/' + url.split('/').pop().split('.')[1];
                        }
                        name = url.substring(url.lastIndexOf('/') + 1);
                        console.log(name);
                        return [4 /*yield*/, this.loadingCtrl.create({
                                //spinner: 'hide',
                                message: "Downloading ..."
                            })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        fileTransfer = this.transfer.create();
                        fileTransfer.onProgress(function (progressEvent) {
                            var percent = progressEvent.loaded / progressEvent.total * 100;
                            _this.zone.run(function () {
                                _this.percentage = Math.round(percent);
                                //  loader.set("Downloading " + this.percentage + "%");
                            });
                            console.log(_this.percentage);
                        });
                        fileTransfer.download(this.urlPrefix + url, this.file.externalDataDirectory + name).then(function (entry) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            header: '',
                                            message: 'File Download sucess',
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
                                        loader.dismiss();
                                        this.fileOpener.open(entry.toURL(), mimeType)
                                            .then(function () { return console.log('File is opened'); })
                                            .catch(function (e) { return console.log('Error opening file', e); });
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            // handle error
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewCloserPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ViewCloserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-closer',
            template: __webpack_require__(/*! raw-loader!./view-closer.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-closer/view-closer.page.html"),
            styles: [__webpack_require__(/*! ./view-closer.page.scss */ "./src/app/view-closer/view-closer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ViewCloserPage);
    return ViewCloserPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-closer-view-closer-module-es5.js.map