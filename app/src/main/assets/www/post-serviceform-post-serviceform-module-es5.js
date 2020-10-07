(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-serviceform-post-serviceform-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-serviceform/post-serviceform.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-serviceform/post-serviceform.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Post Service Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <p class=\"dataLbl\">Company Name : {{ticketViewForm.Customers.CompanyName}}</p>\n    <p class=\"dataLbl\">Customer Name :{{ticketViewForm.Customers.FirstName}}</p>\n    <p class=\"dataLbl\">Ticket No : {{ticketViewForm.TicketId}}</p>\n    <p class=\"dataLbl\">Ticket Date : {{ticketViewForm.OneOffAppointmentDate | date : 'MMM d y'}}</p>\n    <p class=\"dataLbl\">Time Schedule : From {{ticketViewForm.OneOffStartTime}} To {{ticketViewForm.OneOffEndTime}}</p>\n  </ion-list>\n\n  <ion-item *ngFor=\"let field of ServiceFormFields;let i=index;\">\n    <ion-label position=\"stacked\" class=\"lbl cstmMargin\">{{field.FieldLabel}}</ion-label>\n\n\n    <ion-input type={{field.FieldType}} class=\"input\" disabled=false placeholder={{field.FieldPlaceholder}}\n      *ngIf=\"field.FieldType =='textarea'\" [(ngModel)]=\"input[i]\"></ion-input>\n\n\n    <ion-input type=\"text\" class=\"input\" disabled=false (click)=\"Attachment(i)\" placeholder={{field.FieldPlaceholder}}\n      *ngIf=\"field.FieldType=='file'\" [(ngModel)]=\"input[i]\"></ion-input>\n\n\n    <ion-radio-group [(ngModel)]=\"input[i]\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"field.FieldType=='radio'\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of field.FormBuilderFieldOptionsList\">\n          <ion-item>\n            <ion-label>{{item.OptionsLable}}</ion-label>\n            <ion-radio slot=\"start\" color=\"success\" [value]=item.OptionsId></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <ion-select interface=\"action-sheet\" multiple=\"true\" placeholder=\"Select\" class=\"selectWidth\" [(ngModel)]=\"input[i]\"\n      *ngIf=\"field.FieldType=='dropdown'\">\n      <ion-select-option *ngFor=\"let item of field.FormBuilderFieldOptionsList\" [value]=item.OptionsId>\n        {{item.OptionsLable}}\n      </ion-select-option>\n    </ion-select>\n\n  </ion-item>\n\n\n  <ion-item *ngFor=\"let field of ServiceFormData;let i=index;\">\n    <ion-label position=\"stacked\" class=\"lbl cstmMargin\">{{field.FieldLabel}}</ion-label>\n\n    <ion-input type={{field.FieldType}} class=\"input\" [value]=field.Values readonly\n      placeholder={{field.FieldPlaceholder}} *ngIf=\"field.FieldType  =='textarea'\"></ion-input>\n\n    <ion-input type=\"text\" class=\"input\" disabled=false (click)=\"Attachment(i)\" placeholder={{field.FieldPlaceholder}}\n      *ngIf=\"field.FieldType=='file'\" [(ngModel)]=\"input[i]\"></ion-input>\n      \n    <ion-radio-group [(ngModel)]=\"field.Values\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"field.FieldType=='radio'\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of field.FormBuilderFieldOptionsList\">\n          <ion-item>\n            <ion-label>{{item.OptionsLable}}</ion-label>\n            <ion-radio slot=\"start\" color=\"success\" [value]=item.OptionsId></ion-radio>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n    </ion-radio-group>\n\n    <ion-select interface=\"action-sheet\" multiple=\"true\" placeholder=\"Select\" class=\"selectWidth\"\n      [(ngModel)]=\"field.Values\" *ngIf=\"field.FieldType=='dropdown'\">\n      <ion-select-option *ngFor=\"let item of field.FormBuilderFieldOptionsList\" [value]=item.OptionsId>\n        {{item.OptionsLable}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <img src=\"assets/imgs/removeIcon.png\" class=\"removeImg\" *ngIf=\"input[i]\" (click)=\"removePic(i)\" />\n  <img src=\"data:image/jpeg;base64,{{input[i]}}\" class=\"uplodedImg\" *ngIf=\"byCamera\" />\n  <!-- <img src=\"assets/imgs/doc.png\" class=\"uplodedImg\" *ngIf=\"!byCamera\" /> -->\n  <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"submit()\"\n    *ngIf=\"servicestate == 'false'\">Submit\n  </ion-button>\n  <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin lgnBtn\" (click)=\"Close()\"\n    *ngIf=\"servicestate == 'true'\">Close\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/post-serviceform/post-serviceform-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/post-serviceform/post-serviceform-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PostServiceformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceformPageRoutingModule", function() { return PostServiceformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_serviceform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-serviceform.page */ "./src/app/post-serviceform/post-serviceform.page.ts");




var routes = [
    {
        path: '',
        component: _post_serviceform_page__WEBPACK_IMPORTED_MODULE_3__["PostServiceformPage"]
    }
];
var PostServiceformPageRoutingModule = /** @class */ (function () {
    function PostServiceformPageRoutingModule() {
    }
    PostServiceformPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PostServiceformPageRoutingModule);
    return PostServiceformPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/post-serviceform/post-serviceform.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/post-serviceform/post-serviceform.module.ts ***!
  \*************************************************************/
/*! exports provided: PostServiceformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceformPageModule", function() { return PostServiceformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_serviceform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-serviceform-routing.module */ "./src/app/post-serviceform/post-serviceform-routing.module.ts");
/* harmony import */ var _post_serviceform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-serviceform.page */ "./src/app/post-serviceform/post-serviceform.page.ts");







var PostServiceformPageModule = /** @class */ (function () {
    function PostServiceformPageModule() {
    }
    PostServiceformPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _post_serviceform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostServiceformPageRoutingModule"]
            ],
            declarations: [_post_serviceform_page__WEBPACK_IMPORTED_MODULE_6__["PostServiceformPage"]]
        })
    ], PostServiceformPageModule);
    return PostServiceformPageModule;
}());



/***/ }),

/***/ "./src/app/post-serviceform/post-serviceform.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/post-serviceform/post-serviceform.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl {\n  font-size: 5vw;\n  margin: 2% 2%;\n}\n\n.dataLbl {\n  margin: 2% 5%;\n  font-size: 1.1em;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2.2% !important;\n  padding-left: 2% !important;\n  font-size: 4vw;\n}\n\n.lgnBtn {\n  width: 80%;\n  height: 3rem;\n  --border-radius: 30px;\n  margin: auto;\n  --background: #4771C7;\n  font-weight: bold;\n  font-size: 4.5vw;\n  margin-top: 5%;\n}\n\n.removeImg {\n  position: absolute;\n  width: 5%;\n  right: 18%;\n  top: 35%;\n  z-index: 10;\n}\n\n.uplodedImg {\n  width: 60%;\n  margin: 3% 20% 0;\n  height: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1zZXJ2aWNlZm9ybS9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXHBvc3Qtc2VydmljZWZvcm1cXHBvc3Qtc2VydmljZWZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0LXNlcnZpY2Vmb3JtL3Bvc3Qtc2VydmljZWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1zZXJ2aWNlZm9ybS9wb3N0LXNlcnZpY2Vmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmwge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICBtYXJnaW46IDIlIDIlO1xyXG59XHJcblxyXG4vLyAuY3N0bU1hcmdpbiB7XHJcbi8vICAgICBtYXJnaW46IDAlIDIlIDEwJTtcclxuLy8gfVxyXG4uZGF0YUxibHtcclxuICAgIG1hcmdpbjogMiUgNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuMiUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4ubGduQnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnJlbW92ZUltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIHJpZ2h0OiAxOCU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4udXBsb2RlZEltZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAzJSAyMCUgMDtcclxuICAgIGhlaWdodDogNzVweDtcclxufSIsIi5sYmwge1xuICBmb250LXNpemU6IDV2dztcbiAgbWFyZ2luOiAyJSAyJTtcbn1cblxuLmRhdGFMYmwge1xuICBtYXJnaW46IDIlIDUlO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyLjIlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5sZ25CdG4ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQuNXZ3O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnJlbW92ZUltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUlO1xuICByaWdodDogMTglO1xuICB0b3A6IDM1JTtcbiAgei1pbmRleDogMTA7XG59XG5cbi51cGxvZGVkSW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzJSAyMCUgMDtcbiAgaGVpZ2h0OiA3NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-serviceform/post-serviceform.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/post-serviceform/post-serviceform.page.ts ***!
  \***********************************************************/
/*! exports provided: PostServiceformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceformPage", function() { return PostServiceformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");








var PostServiceformPage = /** @class */ (function () {
    function PostServiceformPage(loadingController, filePath, fileChooser, navCtrl, alertController, RestService, camera, actionSheetController, base64) {
        this.loadingController = loadingController;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.RestService = RestService;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.base64 = base64;
        this.input = [];
        this.submitArr = [];
    }
    PostServiceformPage.prototype.ngOnInit = function () {
        if (localStorage.serviceStatus == 'false') {
            this.getFields();
        }
        else if (localStorage.serviceStatus == 'true') {
            this.getFieldsData();
        }
        this.servicestate = localStorage.serviceStatus;
        // alert(this.servicestate);
        this.ticketViewForm = JSON.parse(localStorage.ticket);
    };
    PostServiceformPage.prototype.getFields = function () {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/getServiceFormFieldsByServiceFormId/' + localStorage.formId + '/' + Token, '').then(function (response) {
            _this.apiResponse = response;
            if (_this.apiResponse.Message == "success") {
                _this.ServiceFormFields = _this.apiResponse.result;
                //  console.log(this.ServiceFormFields);
            }
            else {
            }
            // alert(response.MessageDescription);
        });
    };
    PostServiceformPage.prototype.getFieldsData = function () {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        var id = JSON.parse(localStorage.userData).Id;
        this.RestService.requestViaGet('app/EngineerTickets/viewServiceFormDetails/' + localStorage.formId + '/' + localStorage.serviceId + '/' + JSON.parse(localStorage.ticket).Id + '/' + id + '/' + Token, '').then(function (response) {
            console.log(response);
            _this.apiResponse = response;
            if (_this.apiResponse.Message == "success") {
                _this.ServiceFormData = _this.apiResponse.result;
                console.log(_this.ServiceFormData);
            }
            else {
            }
        });
    };
    PostServiceformPage.prototype.Attachment = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera' + i);
                                        _this.takePic(i);
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        console.log('Gallery' + i);
                                        _this.uploadPic(i);
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostServiceformPage.prototype.uploadPic = function (i) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            var baseFileSize = Math.round(imageData.length * 0.75);
            _this.input[i] = imageData;
            _this.byCamera = true;
        }, function (err) {
            // Handle error
        });
    };
    // async uploadPic(i) {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //   });
    //   loading.present();
    //   this.fileChooser
    //     .open()
    //     .then(url => {
    //       this.filePath.resolveNativePath(url)
    //         .then(filePath => {
    //           console.log(filePath);
    //           //let filePath = imageData;
    //           let fileName = filePath.split('/').pop();
    //           //this.ext[i] = fileName.split('.')[1];
    //           //  console.log
    //           let path = filePath.substring(0, filePath.lastIndexOf("/") + 1);
    //           this.base64.encodeFile(filePath).then((base64File: string) => {
    //             console.log(base64File);
    //             this.input[i] = base64File.split(',')[1];
    //             this.byCamera = false;
    //             loading.dismiss();
    //           }, (err) => {
    //             console.log(err);
    //             loading.dismiss();
    //           });
    //         })
    //     }, (err) => {
    //       // Handle error
    //       loading.dismiss();
    //     });
    // }
    PostServiceformPage.prototype.takePic = function (i) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            var baseFileSize = Math.round(imageData.length * 0.75);
            _this.input[i] = imageData;
            _this.byCamera = true;
            // this.PostCloserAttachment(imageData);
            //  let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    PostServiceformPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: 'Confirm Submission',
                            message: 'Once submit you can not edit later.',
                            cssClass: 'cstmAlert',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Submit',
                                    handler: function () {
                                        var Token = JSON.parse(localStorage.userData).Token;
                                        _this.submitArr = [];
                                        for (var i = 0; i < _this.ServiceFormFields.length; i++) {
                                            for (var j = 0; j < _this.ServiceFormFields[i].FormBuilderFieldOptionsList.length; j++) {
                                                if (_this.ServiceFormFields[i].FormBuilderFieldOptionsList[j].OptionsId == _this.input[i]) {
                                                    _this.ServiceFormFields[i].FormBuilderFieldOptionsList[j].SelectedValues = 1;
                                                    _this.ServiceFormFields[i].FormBuilderFieldOptionsList[j].OptionsValue = "true";
                                                }
                                                //console.log(j);
                                            }
                                            var a = {
                                                "FormFieldId": _this.ServiceFormFields[i].FormFieldId,
                                                "FormId": _this.ServiceFormFields[i].FormId,
                                                "FieldType": _this.ServiceFormFields[i].FieldType,
                                                "FieldLabel": _this.ServiceFormFields[i].FieldLabel,
                                                "FieldPlaceholder": _this.ServiceFormFields[i].FieldPlaceholder,
                                                "FieldRequired": _this.ServiceFormFields[i].FieldRequired,
                                                "SequenceNo": _this.ServiceFormFields[i].SequenceNo,
                                                "CreatedDate": _this.ServiceFormFields[i].CreatedDate,
                                                "Values": _this.input[i],
                                                "FormBuilderFieldOptionsList": _this.ServiceFormFields[i].FormBuilderFieldOptionsList
                                            };
                                            _this.submitArr.push(a);
                                        }
                                        //console.log(this.submitArr);
                                        _this.RestService.postServices('app/EngineerTickets/postServiceForm/' + JSON.parse(localStorage.ticket).Id + '/' + Token + '/' + localStorage.serviceId, _this.submitArr).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                this.apiResponse = response;
                                                if (this.apiResponse.Message == "success") {
                                                    // const alert = await this.alertController.create({
                                                    //   header: '',
                                                    //   message: 'Service data saved sucessfully',
                                                    //   cssClass: 'secondary',
                                                    //   buttons: [
                                                    //     {
                                                    //       text: 'Ok',
                                                    //       role: 'ok',
                                                    //       handler: (blah) => {
                                                    //         console.log('Confirm Cancel: blah');
                                                    //       }
                                                    //     }
                                                    //   ]
                                                    // });
                                                    // await alert.present();
                                                    this.navCtrl.navigateBack('/ticket-detail');
                                                }
                                                else {
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); });
                                        //  this.navCtrl.navigateBack('/ticket-detail')
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostServiceformPage.prototype.Close = function () {
        this.navCtrl.navigateBack('/ticket-detail');
    };
    PostServiceformPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__["Base64"] }
    ]; };
    PostServiceformPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-serviceform',
            template: __webpack_require__(/*! raw-loader!./post-serviceform.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-serviceform/post-serviceform.page.html"),
            styles: [__webpack_require__(/*! ./post-serviceform.page.scss */ "./src/app/post-serviceform/post-serviceform.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__["Base64"]])
    ], PostServiceformPage);
    return PostServiceformPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-serviceform-post-serviceform-module-es5.js.map