(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offlinelist-offlinelist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/offlinelist/offlinelist.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offlinelist/offlinelist.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Offline List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"ticketBg\" *ngFor=\"let item of closerDataArr;let i=index\">\n    <p class=\"dataLbl\"><b> Closer No </b>: {{item.CloserPrefix}} <img src=\"assets/imgs/refresh_90.png\"\n        (click)=\"syncData(item)\" style=\"float: right;width: 10%;\" /></p>\n    <p class=\"dataLbl\"><b>Closer Id </b>: {{item.CloserID}}</p>\n    <p class=\"dataLbl\"><b>Ticket No </b>: {{item.TicketId}}</p>\n    <p class=\"dataLbl\"><b>Engineer Name </b>: {{item.EngineerId}}</p>\n    <ion-row>\n      <ion-col> <img src=\"data:image/jpeg;base64,{{item.CustomerSignature}}\" class=\"cstmImg\" /> </ion-col>\n      <ion-col> <img src=\"data:image/jpeg;base64,{{item.EngineerSignature}}\" class=\"cstmImg\" /> </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col> Customer Signature </ion-col>\n      <ion-col> Engineer Signature </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"ticketBg\" *ngFor=\"let item of assignedFormArr;\">\n    <p class=\"dataLbl\"><b> FormId </b>:{{item.MasterServiceFormID}} <img src=\"assets/imgs/refresh_90.png\"\n        (click)=\"syncassignForm(item)\" style=\"float: right;width: 10%;\" /></p>\n    <p class=\"dataLbl\"><b> FormTitle </b>: {{item.ServiceFormName}}</p>\n    <p class=\"dataLbl\"><b> TicketId </b>:{{item.TicketNo}}</p>\n    <p class=\"dataLbl\"><b> Id </b>:{{item.TicketId}}</p>\n  </ion-card>\n\n  <ion-card class=\"ticketBg\" *ngFor=\"let item of prodServicArr;\">\n    <p class=\"dataLbl\"><b> Type</b>: {{item.Type}} <img src=\"assets/imgs/refresh_90.png\" (click)=\"syncProduct(item)\"\n        style=\"float: right;width: 10%;\" /></p>\n    <p class=\"dataLbl\"><b>ItemUnitCost</b>: {{item.ItemUnitCost}}</p>\n    <p class=\"dataLbl\"><b>ItemTotalCost</b>: {{item.ItemTotalCost}}</p>\n    <p class=\"dataLbl\"><b>ItemQuantity</b>: {{item.ItemQuantity}}</p>\n    <p class=\"dataLbl\"><b>ItemDescription</b>: {{item.ItemDescription}}</p>\n    <p class=\"dataLbl\"><b>ItemAddredById</b>: {{item.ItemAddredById}}</p>\n    <p class=\"dataLbl\"><b>ItemAddredByName</b>: {{item.ItemAddredByName}}</p>\n    <p class=\"dataLbl\"><b>TicketId</b>: {{item.TicketId}}</p>\n    <p class=\"dataLbl\"><b>ItemName</b>:{{item.ItemName}}</p>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/offlinelist/offlinelist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/offlinelist/offlinelist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OfflinelistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinelistPageRoutingModule", function() { return OfflinelistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offlinelist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offlinelist.page */ "./src/app/offlinelist/offlinelist.page.ts");




const routes = [
    {
        path: '',
        component: _offlinelist_page__WEBPACK_IMPORTED_MODULE_3__["OfflinelistPage"]
    }
];
let OfflinelistPageRoutingModule = class OfflinelistPageRoutingModule {
};
OfflinelistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfflinelistPageRoutingModule);



/***/ }),

/***/ "./src/app/offlinelist/offlinelist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/offlinelist/offlinelist.module.ts ***!
  \***************************************************/
/*! exports provided: OfflinelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinelistPageModule", function() { return OfflinelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offlinelist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offlinelist-routing.module */ "./src/app/offlinelist/offlinelist-routing.module.ts");
/* harmony import */ var _offlinelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offlinelist.page */ "./src/app/offlinelist/offlinelist.page.ts");







let OfflinelistPageModule = class OfflinelistPageModule {
};
OfflinelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offlinelist_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfflinelistPageRoutingModule"]
        ],
        declarations: [_offlinelist_page__WEBPACK_IMPORTED_MODULE_6__["OfflinelistPage"]]
    })
], OfflinelistPageModule);



/***/ }),

/***/ "./src/app/offlinelist/offlinelist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/offlinelist/offlinelist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cstmImg {\n  width: 25%;\n  border: 1px solid #ccc;\n}\n\n.ticketBg {\n  padding: 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmbGluZWxpc3QvSDpcXE9mZmljZVxcRlNNL3NyY1xcYXBwXFxvZmZsaW5lbGlzdFxcb2ZmbGluZWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9vZmZsaW5lbGlzdC9vZmZsaW5lbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29mZmxpbmVsaXN0L29mZmxpbmVsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jc3RtSW1nIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4udGlja2V0Qmcge1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxufSIsIi5jc3RtSW1nIHtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRpY2tldEJnIHtcbiAgcGFkZGluZzogMCA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/offlinelist/offlinelist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/offlinelist/offlinelist.page.ts ***!
  \*************************************************/
/*! exports provided: OfflinelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinelistPage", function() { return OfflinelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let OfflinelistPage = class OfflinelistPage {
    constructor(RestService, nativeStorage, alertController) {
        this.RestService = RestService;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.savedKeys = [];
        this.closerDataArr = [];
        this.assignedFormArr = [];
        this.prodServicArr = [];
        this.Token = JSON.parse(localStorage.userData).Token;
    }
    ngOnInit() {
        this.getKeys();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad OfflinelistPage');
    }
    getKeys() {
        this.nativeStorage.keys()
            .then(data => {
            console.log(data);
            this.savedKeys = data;
            // this.displaySyncData()
            for (let i = 0; i < data.length; i++) {
                this.displaySyncData(data[i]);
            }
        }, error => console.error(error));
    }
    displaySyncData(key) {
        try {
            this.assignedFormArr = [];
            this.prodServicArr = [];
            this.closerDataArr = [];
            this.nativeStorage.getItem(key)
                .then(data => {
                console.log(data);
                if (key != 'offlineAllData' && key != 'fsmdashcount' && key != 'AllTickets') {
                    if (key == 'AssignForm') {
                        this.assignedFormArr = data;
                    }
                    else if (key.includes("Product") || key.includes("Service")) {
                        this.prodServicArr.push(data);
                    }
                    else {
                        this.closerDataArr.push(data);
                    }
                }
            }, error => console.error(error));
        }
        catch (e) {
        }
    }
    syncData(data) {
        // this.offlinetokendata = {
        //   EngineerId: data.EngineerId,
        //   TicketId: data.TicketId,
        //   StartDate: data.StartDate,
        //   EndTime: data.EndDate,
        //   Status: 2
        // }
        this.offlinetokendata = {
            "CloserID": "00000000-0000-0000-0000-000000000000",
            "TicketId": data.TicketId,
            "EngineerId": data.EngineerId,
        };
        this.RestService.postServices('app/EngineerTickets/PostCloserDetails/' + this.Token, this.offlinetokendata).then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.syncOfflineCloserData(data, response);
            }
            else {
            }
        });
    }
    syncOfflineCloserData(data, resp) {
        // this.closerData = {
        //   CloserID: resp.result.CloserID,
        //   TicketId: TicketId,
        //   EngineerId: EngineerId,
        //   EnginnerName: "",
        //   CustomerSignature: "",
        //   EngineerSignature: "",
        //   StartDate: "2020-03-26 13:00:00",
        //   EndDate: "2020-03-26 14:00:00",
        //   StartTime: "hh:mm",
        //   EndTime: "hh:mm",
        //   Remarks: "",
        //   TicketFlag: "HOLD/CLOSED"
        // }
        data.CloserID = resp.result.CloserID;
        data.CloserPrefix = resp.result.CloserPrefix;
        this.RestService.postServices('app/EngineerTickets/OfflinePutCloserDetails/' + this.Token, data).then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.successAlert();
                this.nativeStorage.remove(data.TicketId).then(data => {
                    console.log(data);
                }, error => console.error(error));
                this.getKeys();
            }
            else {
            }
        });
    }
    syncassignForm(item) {
        this.RestService.postServices('app/EngineerTickets/asignServiceformToTicket/' + this.Token, [item]).then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.successAlert();
            }
            else {
            }
        });
    }
    syncProduct(item) {
        // var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.postServices('app/EngineerTickets/PostTicketItem/' + this.Token, item).then((response) => {
            console.log(response);
            this.response = response;
            if (this.response.Message == "success") {
                this.successAlert();
                this.nativeStorage.remove(item.ItemName).then(data => {
                    console.log(data);
                }, error => console.error(error));
                this.getKeys();
            }
            else {
            }
        });
    }
    successAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
                message: 'Sync sucessfull',
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
        });
    }
};
OfflinelistPage.ctorParameters = () => [
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OfflinelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offlinelist',
        template: __webpack_require__(/*! raw-loader!./offlinelist.page.html */ "./node_modules/raw-loader/index.js!./src/app/offlinelist/offlinelist.page.html"),
        styles: [__webpack_require__(/*! ./offlinelist.page.scss */ "./src/app/offlinelist/offlinelist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], OfflinelistPage);



/***/ })

}]);
//# sourceMappingURL=offlinelist-offlinelist-module-es2015.js.map