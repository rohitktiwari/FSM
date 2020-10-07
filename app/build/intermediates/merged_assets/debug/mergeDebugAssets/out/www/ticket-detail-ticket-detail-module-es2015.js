(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-detail-ticket-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ticket-detail/ticket-detail.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ticket-detail/ticket-detail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\"></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Ticket Details</ion-title>\n    <!-- <img src=\"assets/imgs/Ticket/Filter.png\" alt=\"\" class=\"filter\"> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"main\">\n\n  <ion-card class=\"ticketBg\">\n    <ion-row style=\"padding-left: 5%;\">\n      <ion-col size=\"7\">\n        <h3 class=\"tktNum\"> {{ticketData.TicketId}}\n          <span item-start class=\"bull\" *ngIf=\"ticketData.Status=='UPCOMING'\">&bull;</span>\n          <span item-start class=\"bullBlue\" *ngIf=\"ticketData.Status=='CLOSED'\">&bull;</span>\n        </h3>\n        <h6 class=\"tktName\"> {{ticketData.CustomerCompanyName}}</h6>\n        <h6 class=\"tktName\"> {{ticketData.CustomerName}}</h6>\n        <div class=\"tktDate\"><img src=\"assets/imgs/TicketDetail/Calender.png\"\n            style=\"width: 8%;margin-right: 5%;float: left;\" /> {{ticketData.OneOffAppointmentDate | date : 'MMM d y'}}\n        </div>\n        <div class=\"tktDate\"><img src=\"assets/imgs/TicketDetail/Clock.png\"\n            style=\"width: 8%;margin-right: 5%;float: left;\" /> {{ticketData.OneOffStartTime}} to\n          {{ticketData.OneOffEndTime}}</div>\n        <h6 class=\"tktName\"> {{ticketData.Title}}</h6>\n        <p>Team</p>\n        <span *ngIf=\"ticketData.TicketTeams\">\n          <img src={{preFix}}{{team.EngineerLogo}} tooltip={{team.EngineerName}} placement=\"top\" show-delay=\"500\"\n            class=\"teamImg\" *ngFor=\"let team of ticketData.TicketTeams\" />\n        </span>\n        <span *ngIf=\"!ticketData.TicketTeams\">\n          <img src=\"../assets/imgs/avatar-ben.png\" class=\"teamImg\" />\n        </span>\n      </ion-col>\n      <ion-col size=\"5\" style=\"margin: auto;\">\n        <div class=\"timer\" *ngIf=\"times\"><img src=\"assets/imgs/TicketDetail/Clock.png\"\n            style=\"width: 17%;float: left;margin-right: 8%;\" />{{TimeSlot}}\n        </div>\n        <ion-button class=\"btnStop\" *ngIf=\"isStarted && !isHold\" (click)=\"Stop()\">STOP</ion-button>\n        <ion-button class=\"btnStart\" *ngIf=\"!isStarted && !isHold && ticketData.Status !='CLOSED'\" (click)=\"start()\">\n          START</ion-button>\n        <ion-button class=\"btnResume\" *ngIf=\"isHold\" (click)=\"resumeTimer()\">Resume</ion-button>\n        <ion-button class=\"btnOpen\" *ngIf=\"!isStarted && !isHold\" [class]='ticketData.Status'>{{ticketData.Status}}\n        </ion-button>\n        <ion-button class=\"btnOpen\" *ngIf=\"isStarted && !isHold\" [class]='ticketData.Status'>Inprogress</ion-button>\n        <ion-button class=\"btnHold\" *ngIf=\"isHold\" [class]='ticketData.Status'>Hold</ion-button>\n        <ion-button class=\"histryBtn\" (click)=\"clientHistory()\" *ngIf=\"Designation != 2\">Client History</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <h6 class=\"dtl\">Ticket Details</h6>\n\n  <ion-segment scrollable [(ngModel)]=\"category\" (ionChange)=\"segmentChanged($event)\" class=\"segment\">\n    <ion-segment-button value=\"0\">\n      <ion-label>Customer</ion-label>\n    </ion-segment-button>\n    <!--*ngIf=\"domain != 'hypercom.bthrust.com/'\" -->\n    <ion-segment-button value=\"1\" *ngIf=\"Designation != 2\">\n      <ion-label>Product /<br>Service</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" *ngIf=\"Designation != 2\">\n      <ion-label>Comments <br> Images</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\" *ngIf=\"Designation != 2\">\n      <ion-label>Service <br> Form</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"4\" *ngIf=\"Designation != 2\">\n      <ion-label>Closer <br> Details</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-slides #slides [ngSwitch]=\"category\">\n    <ion-slide *ngSwitchCase=\"'0'\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmWidth\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Company Name</ion-label>\n          <ion-input type=\"text\" class=\"input1\" value={{ticketData.CustomerCompanyName}} readonly></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Customer Name</ion-label>\n          <ion-input type=\"text\" class=\"input1\" value={{ticketData.CustomerName}} readonly></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Contact Info</ion-label>\n          <ion-input type=\"text\" class=\"input1\" value={{ticketData.CustomerContactNo}},{{ticketData.CustomerEmail}}\n            readonly></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Address</ion-label>\n          <ion-textarea class=\"txtarea\" class=\"input1\" cols=\"10\" rows=\"4\" value={{ticketData.CustomerAddress}} readonly>\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Description</ion-label>\n          <ion-textarea class=\"txtarea\" class=\"input1\" cols=\"10\" rows=\"4\" value={{ticketData.Description}} readonly>\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl grayColor\">Issue Type</ion-label>\n          <ion-input type=\"text\" class=\"input1\" *ngFor=\"let typ of ticketData.TicketWiseIssueTypeList\"\n            value={{typ.IssueTypeName}} readonly></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide *ngSwitchCase=\"'1'\">\n      <ion-list class=\"cstmWidth\" *ngIf=\"!showProductForm\">\n        <ion-list-header style=\"padding: 0;\">\n          <ion-label class=\"cstmHeading\">Product /Service</ion-label>\n          <ion-button class=\"addBtn\" (click)=\"addProduct()\" disabled=\"{{ticketData.Status=='CLOSED'}}\"\n            *ngIf=\"domain != 'hypercom.bthrust.com/'\">Add New\n          </ion-button>\n        </ion-list-header>\n        <ion-row class=\"productRow\">\n          <ion-col size=\"2\">No.</ion-col>\n          <ion-col size=\"4\">Product <br>Name</ion-col>\n          <ion-col size=\"2\">Quantity</ion-col>\n          <ion-col size=\"2\" *ngIf=\"Designation != 1\">Unit<br> Cost</ion-col>\n          <ion-col size=\"2\" *ngIf=\"Designation != 1\">Total <br>Cost</ion-col>\n        </ion-row>\n        <ion-row class=\"productRow\" *ngFor=\"let product of ticketData.TicketItems;index as i;\">\n          <ion-col size=\"2\">{{i+1}}</ion-col>\n          <ion-col size=\"4\">{{product.ItemName}}</ion-col>\n          <ion-col size=\"2\">{{product.ItemQuantity}}</ion-col>\n          <ion-col size=\"2\" *ngIf=\"Designation != 1\">{{product.ItemUnitCost}}</ion-col>\n          <ion-col size=\"2\" *ngIf=\"Designation != 1\">{{product.ItemTotalCost}}</ion-col>\n        </ion-row>\n        <ion-row class=\"productRow\" *ngIf=\"Designation != 1\">\n          <ion-col size=\"10\"></ion-col>\n          <ion-col size=\"2\">{{ticketData.NetAmount}}</ion-col>\n        </ion-row>\n      </ion-list>\n      <ion-list class=\"cstmWidth\" *ngIf=\"showProductForm\">\n        <ion-radio-group [(ngModel)]=\"type\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label>Product</ion-label>\n                <ion-radio slot=\"start\" color=\"success\" value=\"Product\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"Designation != 1\">\n              <ion-item>\n                <ion-label>Service</ion-label>\n                <ion-radio slot=\"start\" color=\"success\" value=\"Service\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <ion-item class=\"drpdwn\" *ngIf=\"type=='Product'\">\n          <ion-label>Select Product</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"\" [(ngModel)]=\"productName\">\n            <ion-select-option [value]=item.ProductName *ngFor=\"let item of productList\">{{item.ProductName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class=\"drpdwn\" *ngIf=\"type=='Service'\">\n          <ion-label>Select Service</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"\" [(ngModel)]=\"serviceName\">\n            <ion-select-option [value]=item.ServiceName *ngFor=\"let item of serviceList\">{{item.ServiceName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"type=='Product'\">\n          <ion-label position=\"stacked\" class=\"lbl\">Quantity</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"ItemQuantity\" class=\"input usr\" disabled=false\n            placeholder=\"Enter quantity\" (ngModelChange)=\"updateTotalCost()\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"Designation != 1\">\n          <ion-label position=\"stacked\" class=\"lbl\">Unit Cost</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"ItemUnitCost\" class=\"input usr\" disabled=false\n            placeholder=\"Enter unit cost\" (ngModelChange)=\"updateTotalCost()\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"Designation != 1\">\n          <ion-label position=\"stacked\" class=\"lbl\">Total Cost</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"ItemTotalCost\" class=\"input usr\" readonly\n            placeholder=\"Enter total cost\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Description</ion-label>\n          <ion-textarea class=\"input\" [(ngModel)]=\"ItemDescription\" cols=\"10\" rows=\"5\" placeholder=\"Write description\">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"6\">\n            <ion-button class=\"btnSubmit\" (click)=\"submitProduct()\">Submit</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"btnClose\" (click)=\"cancelProduct()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-slide>\n    <ion-slide *ngSwitchCase=\"'2'\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding cstmWidth commentList\">\n        <p style=\"color: #646c9a;text-align: justify;\">{{ticketData.InternalNoteDescription}} </p>\n        <ion-item *ngFor=\"let comment of ticketData.TicketAttachments\"\n          (click)=\"downloadCommentFile(comment.AttachmentPath)\">\n          <img src={{preFix}}{{comment.AttachmentPath}} style=\"height: 86px;width: 79px;\"\n            *ngIf=\"fileType(comment.AttachmentPath) !='pdf' && fileType(comment.AttachmentPath) !='doc'\">\n          <img src=\"assets/imgs/doc.png\" *ngIf=\"fileType(comment.AttachmentPath) =='doc'\" />\n          <img src=\"assets/imgs/pdf.png\" style=\"width: 25px;margin-left: 2%;\"\n            *ngIf=\"fileType(comment.AttachmentPath) =='pdf'\" />\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide *ngSwitchCase=\"'3'\">\n      <ion-list class=\"cstmWidth\" *ngIf=\"!showServiceForm\">\n        <ion-list-header style=\"padding: 0;\">\n          <ion-label class=\"cstmHeading\">Service Form</ion-label>\n          <ion-button class=\"addBtn\" (click)=\"serviceForm()\" disabled=\"{{ticketData.Status=='CLOSED'}}\">Add New\n          </ion-button>\n        </ion-list-header>\n        <ion-row class=\"productRow\">\n          <ion-col size=\"1\">No.</ion-col>\n          <ion-col size=\"3\">Service <br>Form</ion-col>\n          <ion-col size=\"3\">Service <br>Date </ion-col>\n          <ion-col size=\"3\">Engineer <br>Name</ion-col>\n          <ion-col size=\"2\">Action</ion-col>\n          <!-- <ion-col size=\"3\">Engineer <br>Name</ion-col>\n          <ion-col size=\"2\">Service <br> Date</ion-col>\n          <ion-col size=\"2\">Start <br>Time</ion-col>\n          <ion-col size=\"2\">End <br> Time</ion-col>\n          <ion-col size=\"2\">Total <br>Duration</ion-col> -->\n          <!-- <ion-col size=\"2\">View</ion-col> -->\n        </ion-row>\n\n        <ion-row class=\"productRow\" *ngFor=\"let item of serviceFormData\">\n          <ion-col size=\"1\">{{item.ServicePrefix}}{{item.TicketServiceID}}</ion-col>\n          <ion-col size=\"3\">{{item.ServiceFormName}}</ion-col>\n          <ion-col size=\"3\">{{item.ServiceDate | date : 'MMM d y'}}</ion-col>\n          <ion-col size=\"3\">{{item.EngineerName}}</ion-col>\n          <ion-col size=\"2\"\n            (click)=\"downloadForm(item.MasterServiceFormID,item.ServiceFormSequenceId,item.TicketId,item.EngineerId,item.CloserId)\"\n            *ngIf=\"item.IsActive==true\">View</ion-col>\n          <!-- <ion-col size=\"2\" (click)=\"viewForm(item.MasterServiceFormID,item.ServiceFormSequenceId,item.IsActive)\"\n            *ngIf=\"item.IsActive==true\">View</ion-col> -->\n          <ion-col size=\"2\" (click)=\"viewForm(item.MasterServiceFormID,item.ServiceFormSequenceId,item.IsActive)\"\n            *ngIf=\"item.IsActive==false\">Edit</ion-col>\n        </ion-row>\n\n      </ion-list>\n\n    </ion-slide>\n    <ion-slide *ngSwitchCase=\"'4'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-list-header style=\"padding: 0;\">\n          <ion-label class=\"cstmHeading\">Closer Details</ion-label>\n          <!-- <ion-button class=\"addBtn\" routerLink=\"/closer-detail\">Add New</ion-button> -->\n          <!-- <ion-button class=\"addBtn\" routerLink=\"/closer-detail\"\n            disabled=\"{{isStarted && !isHold}} || {{ticketData.Status=='CLOSED'}}\">Add New\n          </ion-button> -->\n        </ion-list-header>\n        <ion-row class=\"productRow\">\n          <ion-col size=\"2\">No.</ion-col>\n          <ion-col size=\"3\">Engineer <br>Name</ion-col>\n          <ion-col size=\"3\">Service <br> Date</ion-col>\n\n          <!-- <ion-col size=\"2\">Total <br>Duration</ion-col> -->\n          <ion-col size=\"2\">Status</ion-col>\n          <ion-col size=\"2\">Action</ion-col>\n        </ion-row>\n        <!-- (click)=\"showCloserDetails(item)\" {{item.CloserPrefix}} -->\n        <ion-row class=\"productRow\" *ngFor=\"let item of CloserAttachmentList;index as i;\">\n\n          <ion-col size=\"2\">{{i+1}}</ion-col>\n          <ion-col size=\"3\">{{item.EnginnerName}}</ion-col>\n          <ion-col size=\"3\">{{item.StartDate | date : 'MMM d y'}}</ion-col>\n          <!-- <ion-col size=\"2\">{{item.StartTime}}</ion-col>\n          <ion-col size=\"2\">{{item.EndTime}}</ion-col> -->\n          <!-- <ion-col size=\"2\">{{item.TotalDuration}}</ion-col> -->\n          <ion-col size=\"2\">{{item.TicketFlag}}</ion-col>\n          <ion-col size=\"2\" (click)=\"showCloserDetails(item)\">View</ion-col>\n          <!-- <ion-col size=\"2\" (click)=\"viewCloserDet()\">View</ion-col> -->\n        </ion-row>\n      </ion-list>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/ticket-detail/ticket-detail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ticket-detail/ticket-detail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TicketDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPageRoutingModule", function() { return TicketDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ticket_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-detail.page */ "./src/app/ticket-detail/ticket-detail.page.ts");




const routes = [
    {
        path: '',
        component: _ticket_detail_page__WEBPACK_IMPORTED_MODULE_3__["TicketDetailPage"]
    }
];
let TicketDetailPageRoutingModule = class TicketDetailPageRoutingModule {
};
TicketDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/ticket-detail/ticket-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ticket-detail/ticket-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: TicketDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPageModule", function() { return TicketDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ticket_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-detail-routing.module */ "./src/app/ticket-detail/ticket-detail-routing.module.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var _ticket_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket-detail.page */ "./src/app/ticket-detail/ticket-detail.page.ts");








let TicketDetailPageModule = class TicketDetailPageModule {
};
TicketDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ticket_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketDetailPageRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"]
        ],
        declarations: [_ticket_detail_page__WEBPACK_IMPORTED_MODULE_7__["TicketDetailPage"]]
    })
], TicketDetailPageModule);



/***/ }),

/***/ "./src/app/ticket-detail/ticket-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/ticket-detail/ticket-detail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar:first-child {\n  --background: #4771C7;\n  text-align: center;\n  color: #fff;\n}\n\nion-title {\n  width: 70%;\n}\n\n.main {\n  --overflow: hidden;\n}\n\nion-slides {\n  max-height: 50%;\n  overflow: auto;\n}\n\n.ticketBg {\n  margin: 0;\n  height: auto;\n  background: #f7f7f7;\n}\n\n.teamImg {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-left: -3%;\n  float: left;\n}\n\n.tktNum {\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.tktName {\n  margin: 3% 0px;\n  color: #585858;\n  font-weight: bold;\n}\n\n.tktDate {\n  font-size: 4vw;\n  margin: 5% 0;\n}\n\n.btnStart {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #4771C7;\n  font-size: 4vw;\n}\n\n.btnOpen {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #43B2E0;\n  font-size: 3.5vw;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.btnResume {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #1dc9b7;\n  font-size: 4vw;\n}\n\n.btnHold {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #f8bfd3;\n  font-size: 4vw;\n}\n\n.histryBtn {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #43B2E0;\n  font-size: 2.8vw;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.btnStop {\n  width: 80%;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #DF0100;\n  font-size: 4vw;\n}\n\n.dtl {\n  margin: 3% 0 0;\n  margin-left: 5%;\n  color: #585858;\n  font-weight: bold;\n}\n\n.timer {\n  margin-left: 15%;\n  font-size: 4.5vw;\n}\n\n.segment {\n  text-align: left;\n}\n\nion-segment-button {\n  font-size: 3vw;\n  color: #4c4c4c;\n  font-weight: bold;\n}\n\nion-segment-button ion-label {\n  margin: 0;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated,\n.segment-ios .segment-button.activated,\n.segment-ios .segment-button.segment-activated {\n  border-color: #4771C7 !important;\n  color: #4771C7 !important;\n  background: transparent;\n}\n\n.segment-ios .segment-button {\n  border: 0;\n}\n\n.cstmWidth {\n  width: 98%;\n  text-align: left;\n}\n\n.lbl {\n  font-size: 5vw;\n  margin: 2% 2%;\n}\n\n.cstmMargin {\n  margin: 0% 2% 10%;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2.2% !important;\n  padding-left: 2% !important;\n  font-size: 4vw;\n}\n\n.commentList h3 {\n  white-space: normal;\n}\n\n.btnSubmit {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #4771C7;\n  font-size: 4.5vw;\n}\n\n.btnClose {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 5% 10%;\n  --background: #fff;\n  font-size: 4.5vw;\n  color: #4771C7;\n}\n\n.btnClose button {\n  border: 2px solid;\n}\n\n.drpdwn {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  font-size: 4vw;\n  width: 90%;\n  margin: 0% auto;\n}\n\n.cntrylbl {\n  font-size: 4vw;\n  margin-left: 7%;\n}\n\n.select-icon {\n  position: absolute;\n  right: 5%;\n  top: 30%;\n}\n\n.input1 {\n  border-bottom: 1px solid #ccc;\n  padding-left: 2% !important;\n  font-size: 4vw;\n  margin-bottom: 4%;\n}\n\n.grayColor {\n  color: #696969;\n}\n\n.filter {\n  right: 6%;\n  width: 6%;\n  position: absolute;\n  top: 30%;\n}\n\n.productRow {\n  border-bottom: 1px solid #ccc;\n}\n\n.productRow:nth-of-type(1) {\n  background: #f7f8fa;\n}\n\n.productRow ion-col {\n  margin: auto;\n  font-size: 3vw;\n  color: #464650;\n  border-right: 1px solid #ccc;\n  padding: 4% 2%;\n}\n\n.cstmHeading {\n  font-size: 5vw;\n  font-weight: bold;\n  margin-left: 2%;\n  color: #464650;\n}\n\n.addBtn {\n  height: 1.8rem;\n  --background: #4771C7;\n  font-size: 3vw;\n  text-transform: capitalize;\n}\n\n.bull {\n  font-size: 2.5em !important;\n  color: #4771C7;\n  font-weight: 500 !important;\n  margin: -20px 8px 0 8px !important;\n  position: absolute;\n}\n\n.bullBlue {\n  font-size: 2.5em !important;\n  color: red;\n  font-weight: 500 !important;\n  margin: -20px 8px 0 8px !important;\n  position: absolute;\n}\n\n.UPCOMING {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #3C78D8 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.OVERDUE {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FF0000 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.INPROGRESS {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #00FF00 !important;\n  font-size: 3vw;\n  color: #111 !important;\n  font-weight: bold;\n}\n\n.HOLD {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FFFF00 !important;\n  font-size: 3vw;\n  color: #111 !important;\n  font-weight: bold;\n}\n\n.CLOSED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #6AA84F !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.CANCELED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #CCCCCC !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.UNSECHEDULED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FF9900 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.RESECHEDULED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FF9900 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.UNALLOCATED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FFFF00 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n\n.REALLOCATED {\n  width: 80%;\n  text-align: center;\n  height: 2rem;\n  --border-radius: 30px;\n  margin: 3% 10%;\n  --background: #FF0000 !important;\n  font-size: 3vw;\n  color: #fff !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0LWRldGFpbC9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXHRpY2tldC1kZXRhaWxcXHRpY2tldC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC90aWNrZXQtZGV0YWlsL3RpY2tldC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEc0JBO0VBRUksZ0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR3QkE7RUFDSSxTQUFBO0FDckJKOztBRHdCQTs7OztFQUlJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxTQUFBO0FDckJKOztBRHdCQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxpQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNyQko7O0FEd0JBO0VBQ0ksbUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDckJKOztBRHdCQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNyQko7O0FEd0JBO0VBQ0ksaUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDckJKOztBRHdCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksY0FBQTtBQ3JCSjs7QUR5QkE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSw2QkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxtQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDdEJKOztBRHlCQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2FwcC90aWNrZXQtZGV0YWlsL3RpY2tldC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpY2tldEJnIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50ZWFtSW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGt0TnVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGt0TmFtZSB7XHJcbiAgICBtYXJnaW46IDMlIDBweDtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50a3REYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgbWFyZ2luOiA1JSAwO1xyXG59XHJcblxyXG5cclxuLmJ0blN0YXJ0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uYnRuT3BlbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0M0IyRTA7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYnRuUmVzdW1lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzFkYzliNztcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uYnRuSG9sZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGJmZDM7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLmhpc3RyeUJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0M0IyRTA7XHJcbiAgICBmb250LXNpemU6IDIuOHZ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYnRuU3RvcCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNERjAxMDA7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLmR0bCB7XHJcbiAgICBtYXJnaW46IDMlIDAgMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aW1lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxufVxyXG5cclxuXHJcbi8vIC8qKioqIEFsZXJ0IENzcyAqKioqL1xyXG5cclxuLy8gLmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LW1ke1xyXG4vLyAgICAgZm9udC1zaXplOiA1LjV2dztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIH1cclxuXHJcbi8vIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnNlZ21lbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxyXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQsXHJcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ3NzFDNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0NzcxQzcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNzdG1XaWR0aCB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIG1hcmdpbjogMiUgMiU7XHJcbn1cclxuXHJcbi5jc3RtTWFyZ2luIHtcclxuICAgIG1hcmdpbjogMCUgMiUgMTAlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyLjIlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLmNvbW1lbnRMaXN0IGgzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5idG5TdWJtaXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMi42cmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG59XHJcblxyXG4uYnRuQ2xvc2Uge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMi42cmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgY29sb3I6ICM0NzcxQzc7XHJcbn1cclxuXHJcbi5idG5DbG9zZSBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbi5kcnBkd24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuXHJcbi5jbnRyeWxibCB7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHRvcDogMzAlO1xyXG59XHJcblxyXG4uaW5wdXQxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmdyYXlDb2xvciB7XHJcbiAgICBjb2xvcjogIzY5Njk2OTtcclxufVxyXG5cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0Um93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4ucHJvZHVjdFJvdzpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG59XHJcblxyXG4ucHJvZHVjdFJvdyBpb24tY29sIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6ICM0NjQ2NTA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNCUgMiU7XHJcbn1cclxuXHJcbi5jc3RtSGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6ICM0NjQ2NTA7XHJcbn1cclxuXHJcbi5hZGRCdG4ge1xyXG4gICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYnVsbCB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQ3NzFDNztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogLTIwcHggOHB4IDAgOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5idWxsQmx1ZSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAtMjBweCA4cHggMCA4cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLlVQQ09NSU5HIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzNDNzhEOCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5PVkVSRFVFIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5JTlBST0dSRVNTIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogIzExMSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5IT0xEIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogIzExMSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5DTE9TRUQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogMyUgMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNkFBODRGICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLkNBTkNFTEVEIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0NDQ0NDQyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5VTlNFQ0hFRFVMRUQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogMyUgMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkY5OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLlJFU0VDSEVEVUxFRCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAzJSAxMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRjk5MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uVU5BTExPQ0FURUQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogMyUgMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLlJFQUxMT0NBVEVEIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDMlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tdGl0bGUge1xuICB3aWR0aDogNzAlO1xufVxuXG4ubWFpbiB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50aWNrZXRCZyB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuXG4udGVhbUltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50a3ROdW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50a3ROYW1lIHtcbiAgbWFyZ2luOiAzJSAwcHg7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRrdERhdGUge1xuICBmb250LXNpemU6IDR2dztcbiAgbWFyZ2luOiA1JSAwO1xufVxuXG4uYnRuU3RhcnQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDJyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiA1JSAxMCU7XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5idG5PcGVuIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAycmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogNSUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICM0M0IyRTA7XG4gIGZvbnQtc2l6ZTogMy41dnc7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnRuUmVzdW1lIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAycmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogNSUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICMxZGM5Yjc7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuXG4uYnRuSG9sZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDUlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhiZmQzO1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLmhpc3RyeUJ0biB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDUlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjNDNCMkUwO1xuICBmb250LXNpemU6IDIuOHZ3O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0blN0b3Age1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDJyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiA1JSAxMCU7XG4gIC0tYmFja2dyb3VuZDogI0RGMDEwMDtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5kdGwge1xuICBtYXJnaW46IDMlIDAgMDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aW1lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGZvbnQtc2l6ZTogNC41dnc7XG59XG5cbi5zZWdtZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCxcbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCxcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG4gIGJvcmRlci1jb2xvcjogIzQ3NzFDNyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ3NzFDNyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmNzdG1XaWR0aCB7XG4gIHdpZHRoOiA5OCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5sYmwge1xuICBmb250LXNpemU6IDV2dztcbiAgbWFyZ2luOiAyJSAyJTtcbn1cblxuLmNzdG1NYXJnaW4ge1xuICBtYXJnaW46IDAlIDIlIDEwJTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMi4yJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuXG4uY29tbWVudExpc3QgaDMge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uYnRuU3VibWl0IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyLjZyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiA1JSAxMCU7XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC1zaXplOiA0LjV2dztcbn1cblxuLmJ0bkNsb3NlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyLjZyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiA1JSAxMCU7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiA0LjV2dztcbiAgY29sb3I6ICM0NzcxQzc7XG59XG5cbi5idG5DbG9zZSBidXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbn1cblxuLmRycGR3biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAlIGF1dG87XG59XG5cbi5jbnRyeWxibCB7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBtYXJnaW4tbGVmdDogNyU7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICB0b3A6IDMwJTtcbn1cblxuLmlucHV0MSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuLmdyYXlDb2xvciB7XG4gIGNvbG9yOiAjNjk2OTY5O1xufVxuXG4uZmlsdGVyIHtcbiAgcmlnaHQ6IDYlO1xuICB3aWR0aDogNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG59XG5cbi5wcm9kdWN0Um93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9kdWN0Um93Om50aC1vZi10eXBlKDEpIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbn1cblxuLnByb2R1Y3RSb3cgaW9uLWNvbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjNDY0NjUwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA0JSAyJTtcbn1cblxuLmNzdG1IZWFkaW5nIHtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGNvbG9yOiAjNDY0NjUwO1xufVxuXG4uYWRkQnRuIHtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgZm9udC1zaXplOiAzdnc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYnVsbCB7XG4gIGZvbnQtc2l6ZTogMi41ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NzcxQzc7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMjBweCA4cHggMCA4cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnVsbEJsdWUge1xuICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMjBweCA4cHggMCA4cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uVVBDT01JTkcge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjM0M3OEQ4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLk9WRVJEVUUge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkYwMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLklOUFJPR1JFU1Mge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBGRjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogIzExMSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLkhPTEQge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGRjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogIzExMSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLkNMT1NFRCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMyUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICM2QUE4NEYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uQ0FOQ0VMRUQge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjQ0NDQ0NDICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLlVOU0VDSEVEVUxFRCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMyUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICNGRjk5MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uUkVTRUNIRURVTEVEIHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDJyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiAzJSAxMCU7XG4gIC0tYmFja2dyb3VuZDogI0ZGOTkwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5VTkFMTE9DQVRFRCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMyUgMTAlO1xuICAtLWJhY2tncm91bmQ6ICNGRkZGMDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uUkVBTExPQ0FURUQge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDMlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkYwMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ticket-detail/ticket-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/ticket-detail/ticket-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: TicketDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPage", function() { return TicketDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");










let TicketDetailPage = class TicketDetailPage {
    constructor(platform, network, nativeStorage, alertController, zone, transfer, loadingCtrl, file, fileOpener, navCtrl, activatedRoute, RestService) {
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.zone = zone;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.RestService = RestService;
        this.isStarted = false;
        this.category = 0;
        this.showServiceForm = false;
        this.showCloserDetail = false;
        this.type = "Product";
        this.ItemQuantity = '';
        this.ItemUnitCost = '';
        this.ItemTotalCost = '';
        this.percentage = 0;
        this.showProductForm = false;
        this.validateType = true;
        this.times = false;
        this.isHold = false;
        this.AllTickets = [];
        // this.activatedRoute.queryParams.subscribe((res) => {
        //   console.log(res);
        //   this.ticketData=JSON.parse(res.value);
        //   console.log(this.ticketData);
        // });
        this.ticketData = JSON.parse(localStorage.ticket);
        if (this.ticketData.Status == 'INPROGRESS') {
            this.isStarted = true;
        }
        else if (this.ticketData.Status == 'HOLD') {
            this.isHold = true;
        }
        this.preFix = localStorage.getItem('urlPrefix');
        console.log(this.ticketData);
        localStorage.setItem('ticketStatus', this.ticketData.Status);
    }
    ngOnInit() {
        this.Designation = JSON.parse(localStorage.userData).Designation;
        this.domain = localStorage.urlPrefix.split("//")[1];
        this.urlPrefix = localStorage.urlPrefix;
        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
            this.getOfflineData();
            this.getKeys();
        }
        else {
            this.getProductList();
            this.getServiceList();
            this.getAddedProductList();
            if (this.Designation == 2) {
                this.getTimeDiffranceForeman();
            }
            else {
                this.getTimeDiffrance();
            }
        }
    }
    ionViewDidLeave() {
        this.isStarted = false;
    }
    getOfflineData() {
        this.nativeStorage.getItem('offlineAllData')
            .then(data => {
            console.log(data);
            // this.events = data.Item1;
            this.serviceList = data.Item2;
            this.productList = data.Item3;
        }, error => console.error(error));
    }
    ionViewDidEnter() {
        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
            this.changeTicketStatus();
        }
        else {
            this.GetCloserAttachmentList();
            this.getServiceForm();
            if (this.Designation == 2) {
                this.getTimeDiffranceForeman();
            }
            else {
                this.getTimeDiffrance();
            }
        }
        if (localStorage.statusFlag) {
            if (localStorage.statusFlag == 'HOLD') {
                this.isHold = true;
            }
            else {
                //this.isStarted = false;
                this.isHold = false;
            }
        }
        // else  if(localStorage.statusFlag=='HOLD'){
        //   this.isHold = true;
        // }
    }
    changeTicketStatus() {
        //for changing status of ticket on ticket listing page in offline mode---------------->
        this.nativeStorage.getItem('AllTickets')
            .then(data => {
            this.AllTickets = data;
        }, error => console.error(error));
        for (let i = 0; i < this.AllTickets.length; i++) {
            if (this.AllTickets[i].TicketId == this.ticketData.TicketId) {
                this.AllTickets[i].Status = localStorage.statusFlag;
            }
        }
        if (this.AllTickets.length > 0) {
            this.nativeStorage.setItem('AllTickets', this.AllTickets)
                .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('Offline data saved successfully.');
            }), error => console.error('Error storing item', error));
        }
    }
    getTimeDiffranceForeman() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestTimer('app/EngineerTickets/GetTicketTimeDiffrance/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.isStarted = true;
                this.times = true;
                this.TimeSlot = this.apiResponse.result;
                let IsDays = this.TimeSlot.split('.').length;
                switch (IsDays) {
                    case 2:
                        this.TimeSlot = this.TimeSlot.split('.')[0];
                        break;
                    case 3:
                        this.TimeSlot = this.TimeSlot.split('.')[0] + ' Day ' + this.TimeSlot.split('.')[1];
                        break;
                }
                setTimeout(() => {
                    this.getTimeDiffranceForeman();
                }, 1000);
            }
            else {
                this.isStarted = false;
                return;
            }
            //  alert(response.MessageDescription);
        });
    }
    getTimeDiffrance() {
        if (this.isStarted == false) {
            return;
        }
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestTimer('app/EngineerTickets/GetTicketTimeDiffrance/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            // console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.times = true;
                this.TimeSlot = this.apiResponse.result;
                let IsDays = this.TimeSlot.split('.').length;
                switch (IsDays) {
                    case 2:
                        this.TimeSlot = this.TimeSlot.split('.')[0];
                        break;
                    case 3:
                        this.TimeSlot = this.TimeSlot.split('.')[0] + ' Day ' + this.TimeSlot.split('.')[1];
                        break;
                }
                // return this.TimeSlot;
                setTimeout(() => {
                    //  if (this.isStarted && this.apiResponse.Message == "success") {
                    this.getTimeDiffrance();
                    //  }
                }, 1000);
                //}, 30000);
            }
            else {
                this.isStarted = false;
                return;
            }
            //  alert(response.MessageDescription);
        });
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    start() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Alert',
                subHeader: 'Are You Sure?',
                message: 'You want to start ticket !',
                cssClass: 'cstmAlert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Yes, Start it!',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.isStarted = true;
                            this.initTimer();
                            if (this.Designation == 2) {
                                this.startTicketForreman();
                            }
                            else {
                                this.startTimer();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Stop() {
        if (this.Designation == 2) {
            this.stopTicketForremanAlert();
        }
        else {
            this.StopAll();
        }
    }
    StopAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Alert',
                subHeader: 'Are You Sure?',
                message: 'You want to stop or hold ticket !',
                cssClass: 'cstmAlert',
                buttons: [
                    {
                        text: 'Close Ticket',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            this.isHold = false;
                            localStorage.setItem('statusFlag', 'CLOSED');
                            this.isStarted = false;
                            if (this.Designation == 2) {
                                this.stopTicketForreman();
                            }
                            else {
                                this.navCtrl.navigateForward('/closer-detail');
                            }
                        }
                    },
                    {
                        text: 'Yes, Hold it!',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.navCtrl.navigateForward('/closer-detail');
                            this.isStarted = true;
                            this.isHold = true;
                            localStorage.setItem('statusFlag', 'HOLD');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    stopTicketForremanAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Are You Sure?',
                message: 'You want to stop ticket !',
                cssClass: 'cstmAlert',
                buttons: [
                    {
                        text: 'Close Ticket',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            this.isHold = false;
                            localStorage.setItem('statusFlag', 'CLOSED');
                            this.isStarted = false;
                            if (this.Designation == 2) {
                                this.stopTicketForreman();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    stopTicketForreman() {
        var ticketData = JSON.parse(localStorage.ticket);
        var userData = JSON.parse(localStorage.userData);
        this.RestService.putServices('app/EngineerTickets/stopTicketTimer/' + userData.Id + '/' + ticketData.Id + '/' + userData.Token, '').then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                const alert = yield this.alertController.create({
                    header: 'Success',
                    message: 'Ticket closed successfully.',
                    cssClass: 'secondary',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'ok',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                                this.isStarted = false;
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
            }
        }));
    }
    startTicketForreman() {
        var ticketData = JSON.parse(localStorage.ticket);
        var userData = JSON.parse(localStorage.userData);
        this.RestService.postServices('app/EngineerTickets/startTicketTimerByforeman/' + ticketData.Id + '/' + userData.Id + '/' + userData.Token + '/' + this.validateType, '').then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(response);
            this.apiResponse = response;
            this.isStarted = true;
            if (this.apiResponse.Message == "success") {
                this.serviceList = this.apiResponse.result;
                this.getTimeDiffranceForeman();
                //this.startTime();
            }
            else {
                this.serviceList = this.apiResponse.result;
                if (this.serviceList) {
                    const alert = yield this.alertController.create({
                        subHeader: this.apiResponse.MessageDescription,
                        message: this.serviceList,
                        cssClass: 'cstmAlert',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    this.getTimeDiffranceForeman();
                                }
                            },
                            {
                                text: 'Continue',
                                handler: () => {
                                    this.validateType = false;
                                    this.startTicketForreman();
                                    this.getTimeDiffranceForeman();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        subHeader: 'Alert',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'cstmAlert',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: () => {
                                    this.getTimeDiffranceForeman();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
            }
            // if (this.apiResponse.Message == "success") {
            //   this.isStarted = true;
            //   this.getTimeDiffrance();
            // } else {
            // }
        }));
    }
    addNewService() {
        this.showServiceForm = true;
    }
    clientHistory() {
        this.navCtrl.navigateForward("/clienthistory");
    }
    closeServiceAdd() {
        this.showServiceForm = false;
    }
    addProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ItemDescription = '';
            this.productName = '';
            this.serviceName = '';
            this.ItemQuantity = '';
            this.ItemUnitCost = '';
            this.ItemTotalCost = '';
            this.showProductForm = true;
            // if(this.ticketData.Status =='' || this.ticketData.Status ==''){
            //   this.ItemDescription = '';
            //   this.productName = '';
            //   this.serviceName = '';
            //   this.ItemQuantity = '';
            //   this.ItemUnitCost = '';
            //   this.ItemTotalCost = '';
            //   this.showProductForm = true;
            // }else {
            // const alert = await this.alertController.create({
            //   message: 'Please check Ticket Status. .',
            //   buttons: ['OK']
            // });
            // await alert.present();
            // }
        });
    }
    cancelProduct() {
        this.showProductForm = false;
    }
    updateTotalCost() {
        if (this.ItemQuantity == '') {
            this.ItemQuantity = 1;
        }
        this.ItemTotalCost = this.ItemQuantity * this.ItemUnitCost;
    }
    showCloserDetails(closerData) {
        console.log(closerData);
        localStorage.setItem('viewCloser', JSON.stringify(closerData));
        this.navCtrl.navigateForward('/view-closer');
    }
    submitProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var ItemName = '';
            if (this.type == "Product") {
                ItemName = this.productName;
                if (this.productName == '' || this.productName == undefined) {
                    const alert = yield this.alertController.create({
                        cssClass: 'cstmAlert',
                        message: 'Please Select Product.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
                if (this.ItemQuantity == '' || this.ItemQuantity == undefined) {
                    const alert = yield this.alertController.create({
                        cssClass: 'cstmAlert',
                        message: 'Please Enter Quantity.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
            }
            else {
                ItemName = this.serviceName;
                if (this.serviceName == '' || this.serviceName == undefined) {
                    const alert = yield this.alertController.create({
                        cssClass: 'cstmAlert',
                        message: 'Please Select Service.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
            }
            if (this.Designation != 1) {
                if (this.ItemUnitCost == '' || this.ItemUnitCost == undefined) {
                    const alert = yield this.alertController.create({
                        cssClass: 'cstmAlert',
                        message: 'Please Enter Unit Cost.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
                if (this.ItemTotalCost == '' || this.ItemTotalCost == undefined) {
                    const alert = yield this.alertController.create({
                        cssClass: 'cstmAlert',
                        message: 'Please Enter Total Cost.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
            }
            console.log(ItemName);
            if (this.Designation == 1 && this.ItemUnitCost == '') {
                this.ItemUnitCost = 0;
            }
            //validation pending according to requirement
            var data = {
                "Type": this.type,
                "ItemUnitCost": this.ItemUnitCost,
                "ItemTotalCost": this.ItemTotalCost,
                "ItemQuantity": this.ItemQuantity,
                "ItemDescription": this.ItemDescription,
                "ItemAddredById": JSON.parse(localStorage.userData).Id,
                "ItemAddredByName": JSON.parse(localStorage.userData).FullName,
                "TicketId": this.ticketData.Id,
                "ItemName": ItemName,
            };
            if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
                this.nativeStorage.setItem(ItemName, data).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('Offline data ' + ItemName + ' saved successfully.');
                    this.showProductForm = false;
                }), error => console.error('Error storing item', error));
            }
            else {
                var Token = JSON.parse(localStorage.userData).Token;
                this.RestService.postServices('app/EngineerTickets/PostTicketItem/' + Token, data).then((response) => {
                    console.log(response);
                    this.apiResponse = response;
                    if (this.apiResponse.Message == "success") {
                        this.getAddedProductList();
                    }
                    else {
                    }
                    this.showProductForm = false;
                    //  alert(response.MessageDescription);
                });
            }
        });
    }
    getAddedProductList() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetTicketItem/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.ticketData.TicketItems = this.apiResponse.result;
            }
            else {
            }
            //  alert(response.MessageDescription);
        });
    }
    getKeys() {
        this.nativeStorage.keys()
            .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                this.getOfflineAddedProductList(data[i]);
            }
        }, error => console.error(error));
    }
    getOfflineAddedProductList(key) {
        this.nativeStorage.getItem(key)
            .then(data => {
            console.log(data);
            if (key.includes("Product") || key.includes("Service")) {
                this.ticketData.TicketItems.push(data);
            }
        }, error => console.error(error));
    }
    GetCloserAttachmentList() {
        var CloserID = '';
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetTicketCloserDetails/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.CloserAttachmentList = this.apiResponse.result;
            }
            else {
            }
            //  alert(response.MessageDescription);
        });
    }
    /******closer detail view ***************************** */
    viewCloserDet() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetTicketCloserDetails/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.closerDetailViewData = this.apiResponse.result;
                console.log(this.closerDetailViewData);
            }
            else {
            }
            // alert(response.MessageDescription);
        });
    }
    // addNewCloser(){app/EngineerTickets/GetCloserAttachmentList/CloserID/Token
    //   this.showCloserDetail = false;
    // }
    getProductList() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetProduct/' + Token, '').then((response) => {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.productList = this.apiResponse.result;
            }
            else {
            }
            //  alert(response.MessageDescription);
        });
    }
    getServiceList() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetService/' + Token, '').then((response) => {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.serviceList = this.apiResponse.result;
            }
            else {
            }
            // alert(response.MessageDescription);
        });
    }
    open() {
    }
    startTimer() {
        var userData = JSON.parse(localStorage.userData);
        var ticketData = JSON.parse(localStorage.ticket);
        this.RestService.postServices('app/EngineerTickets/StartTicketTimer/' + ticketData.Id + '/' + userData.Id + '/' + userData.Token + '/' + this.validateType, '').then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(response);
            this.apiResponse = response;
            this.isStarted = true;
            if (this.apiResponse.Message == "success") {
                this.serviceList = this.apiResponse.result;
                this.getTimeDiffrance();
                //this.startTime();
            }
            else {
                this.serviceList = this.apiResponse.result;
                if (this.serviceList) {
                    const alert = yield this.alertController.create({
                        subHeader: this.apiResponse.MessageDescription,
                        message: this.serviceList,
                        cssClass: 'cstmAlert',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    this.getTimeDiffrance();
                                }
                            },
                            {
                                text: 'Continue',
                                handler: () => {
                                    this.validateType = false;
                                    this.startTimer();
                                    this.getTimeDiffrance();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        subHeader: 'Alert',
                        message: this.apiResponse.MessageDescription,
                        cssClass: 'cstmAlert',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok',
                                handler: () => {
                                    this.getTimeDiffrance();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
            }
            // alert(response.MessageDescription);
        }));
    }
    serviceForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward("/service-form");
            // if(this.ticketData.Status =='HOLD' || this.ticketData.Status =='CLOSE'){
            //   this.navCtrl.navigateForward("/service-form");
            // }else {
            // const alert = await this.alertController.create({
            //   message: 'Please check Ticket Status. .',
            //   buttons: ['OK']
            // });
            // await alert.present();
            // }
        });
    }
    //timer work----------->
    initTimer() {
        // Pomodoro is usually for 25 minutes
        if (!this.timeInSeconds) {
            this.timeInSeconds = 1500;
        }
        this.time = this.timeInSeconds;
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        this.remainingTime = this.timeInSeconds;
        this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
    }
    startTime() {
        this.runTimer = true;
        this.hasStarted = true;
        this.timerTick();
    }
    pauseTimer() {
        this.runTimer = false;
    }
    resumeTimer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.startTimer();
            const alert = yield this.alertController.create({
                // header: 'Alert',
                subHeader: 'Are You Sure?',
                message: 'You want to Resume ticket !',
                cssClass: 'cstmAlert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Yes,Resume it!',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.isStarted = true;
                            this.isHold = false;
                            this.initTimer();
                            this.startTimer();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //GetTicketTimeDiffrance
    timerTick() {
        setTimeout(() => {
            if (!this.runTimer) {
                return;
            }
            this.remainingTime--;
            this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
            if (this.remainingTime > 0) {
                this.timerTick();
            }
            else {
                this.hasFinished = true;
            }
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
    //getTicketTimeDiffrance
    getServiceForm() {
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetAssignedServiceFormByTicketId/' + this.ticketData.Id + '/' + Token, '').then((response) => {
            // console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                this.serviceFormData = this.apiResponse.result;
                console.log(this.serviceFormData[0]);
            }
            else {
            }
            // alert(response.MessageDescription);
        });
    }
    /*****View Service form click *********************** */
    viewForm(formID, serviceId, status) {
        localStorage.setItem('formId', formID);
        localStorage.setItem('serviceId', serviceId);
        localStorage.setItem('serviceStatus', status);
        this.navCtrl.navigateForward('/post-serviceform');
        // var Token = JSON.parse(localStorage.userData).Token;
        // this.RestService.requestViaGet('app/EngineerTickets/getServiceFormFieldsByServiceFormId/' + formID + '/' + Token, '').then((response) => {
        //   this.apiResponse = response;
        //   if (this.apiResponse.Message == "success") {
        //     this.serviceFormView = this.apiResponse.result;
        //     console.log(this.serviceFormView);
        //   } else {
        //   }
        //   // alert(response.MessageDescription);
        // });
    }
    fileType(val) {
        // var filePath = "http://fsm.bthrust.com/Documents/TicketAttachment/d1a49507-220e-4719-a0a2-691b994a70aa/20200208060246.pdf"; 
        var fileExt = val.split('.').pop();
        //console.log(fileExt);
        return fileExt;
    }
    // downloadForm1(MasterServiceFormId, ServiceFormSequenceId, TicketId, EngineerId) {
    //   this.RestService.requestViaGet('app/EngineerTickets/getServiceFormPDF/' + MasterServiceFormId + '/' + ServiceFormSequenceId + '/' + TicketId + '/' + EngineerId, '').then((response) => {
    //     console.log(response);
    //     this.apiResponse = response;
    //     if (this.apiResponse.Message == "success") {
    //       //  var url = 'Documents/ServiceFormPDF/' + ServicePrefix + TicketServiceID + '.pdf';
    //       // console.log(url)
    //       this.downloadCommentFile(this.apiResponse.MessageDescription);
    //     } else {
    //     }
    //     // alert(response.MessageDescription);
    //   });
    //   // var url = 'Documents/ServiceFormPDF/' + ServicePrefix + TicketServiceID + '.pdf';
    //   // console.log(url)
    //   // this.downloadCommentFile(url);
    // }
    downloadForm(MasterServiceFormId, ServiceFormSequenceId, TicketId, EngineerId, closerId) {
        this.RestService.requestViaGet('app/EngineerTickets/getServiceFormPDF/' + closerId, '').then((response) => {
            console.log(response);
            this.apiResponse = response;
            if (this.apiResponse.Message == "success") {
                //  var url = 'Documents/ServiceFormPDF/' + ServicePrefix + TicketServiceID + '.pdf';
                // console.log(url)
                this.downloadCommentFile(this.apiResponse.MessageDescription);
            }
            else {
            }
            // alert(response.MessageDescription);
        });
        // var url = 'Documents/ServiceFormPDF/' + ServicePrefix + TicketServiceID + '.pdf';
        // console.log(url)
        // this.downloadCommentFile(url);
    }
    downloadCommentFile(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
                return;
            }
            var mimeType = '';
            if (url.split('/').pop().split('.')[1] == 'pdf') {
                mimeType = 'application/pdf';
            }
            else {
                mimeType = 'image/' + url.split('/').pop().split('.')[1];
            }
            var name = url.substring(url.lastIndexOf('/') + 1);
            console.log(name);
            const loader = yield this.loadingCtrl.create({
                //spinner: 'hide',
                message: "Downloading ..."
            });
            loader.present();
            const fileTransfer = this.transfer.create();
            fileTransfer.onProgress((progressEvent) => {
                var percent = progressEvent.loaded / progressEvent.total * 100;
                this.zone.run(() => {
                    this.percentage = Math.round(percent);
                    //  loader.set("Downloading " + this.percentage + "%");
                });
                console.log(this.percentage);
            });
            if (this.platform.is('ios')) {
                fileTransfer.download(this.urlPrefix + url, this.file.documentsDirectory + name).then((entry) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('download complete: ' + entry.toURL());
                    const alert = yield this.alertController.create({
                        header: '',
                        message: 'File Downloaded successfully',
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
                    loader.dismiss();
                    loader.dismiss();
                    this.fileOpener.open(entry.toURL(), 'application/pdf')
                        .then(() => console.log('File is opened'))
                        .catch(e => console.log('Error opening file', e));
                }), (error) => {
                    // handle error
                    console.log(error);
                    loader.dismiss();
                });
            }
            else {
                fileTransfer.download(this.urlPrefix + url, this.file.externalDataDirectory + name).then((entry) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('download complete: ' + entry.toURL());
                    const alert = yield this.alertController.create({
                        header: '',
                        message: 'File Downloaded successfully',
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
                    loader.dismiss();
                    this.fileOpener.open(entry.toURL(), mimeType)
                        .then(() => console.log('File is opened'))
                        .catch(e => console.log('Error opening file', e));
                }), (error) => {
                    // handle error
                    loader.dismiss();
                });
                // });
            }
        });
    }
};
TicketDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
TicketDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-detail',
        template: __webpack_require__(/*! raw-loader!./ticket-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/ticket-detail/ticket-detail.page.html"),
        styles: [__webpack_require__(/*! ./ticket-detail.page.scss */ "./src/app/ticket-detail/ticket-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
], TicketDetailPage);



/***/ })

}]);
//# sourceMappingURL=ticket-detail-ticket-detail-module-es2015.js.map