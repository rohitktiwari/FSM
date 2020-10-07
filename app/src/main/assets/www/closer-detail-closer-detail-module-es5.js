(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["closer-detail-closer-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/closer-detail/closer-detail.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/closer-detail/closer-detail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\" (click)=\"closerDetBack()\">\n      <ion-icon name=\"arrow-back\" style=\"font-size: 1.8em;margin-left: 15%;\"></ion-icon>\n      <!-- <ion-back-button [icon]=\"buttonIcon\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>Closer Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" class=\"main\">\n\n  <ion-segment scrollable [(ngModel)]=\"category\" (ionChange)=\"segmentChanged($event)\" class=\"segment\">\n    <ion-segment-button value=\"0\">\n      Remark\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      Attachment\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" *ngIf=\"Designation != 1\">\n      Payment <br> Details\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      Closer <br> Details\n    </ion-segment-button>\n    <ion-segment-button value=\"4\">\n      Engineer <br> Signature\n    </ion-segment-button>\n    <ion-segment-button value=\"5\">\n      Customer <br> Signature\n    </ion-segment-button>\n  </ion-segment>\n  <!-- <ion-slides #slides (ionSlideWillChange)=\"segment=''+slides.getActiveIndex()\"> -->\n  <div class=\"signature\" [ngSwitch]=\"category\">\n    <div *ngSwitchCase=\"'0'\">\n      <ion-list class=\"cstmWidth\">\n        <h5>Remarks *</h5>\n        <ion-textarea class=\"txtarea\" cols=\"10\" rows=\"20\" placeholder=\"Remarks\" [(ngModel)]=\"remark\"></ion-textarea>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'1'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-grid *ngFor=\"let grid of grids;let i=index;\" style=\"position: relative;\">\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Attachment</ion-label>\n            <ion-input type=\"text\" class=\"input usr attchment\" disabled=false placeholder=\"Choose file\" readonly\n              (click)=\"Attachment(i)\"></ion-input>\n            <img src=\"assets/imgs/stop.png\" class=\"stopImg\" *ngIf=\"startRecord[i]\" (click)=\"stopAudio()\" />\n          </ion-item>\n          <img src=\"assets/imgs/removeIcon.png\" class=\"removeImg\" *ngIf=\"attachedItem[i]\" (click)=\"removePic(i)\" />\n          <img src=\"data:image/jpeg;base64,{{capturedPic[i]}}\" class=\"uplodedImg\"\n            *ngIf=\"capturedPic[i] && attachedItem[i]\" />\n          <ion-range [(ngModel)]=\"progress[i]\" #range [max]=\"audioDuration[i]\" *ngIf=\"isAudio[i] && attachedItem[i]\">\n            <ion-icon slot=\"start\" size=\"small\" name=\"play\" *ngIf='!play[i]' (click)=\"playAudio(i)\"></ion-icon>\n            <ion-icon slot=\"start\" size=\"small\" name=\"pause\" *ngIf='play[i]' (click)=\"pauseAudio(i)\"></ion-icon>\n          </ion-range>\n          <!-- <audio controls *ngIf=\"isAudio[i] && attachedItem[i]\" style=\"margin: 4% 2% 0;\">\n            <source [src]=\"audioUrl[i]\" type=\"audio/mpeg\">\n          </audio> -->\n\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Comment</ion-label>\n            <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Comment\" [(ngModel)]=\"comment[i]\">\n            </ion-input>\n          </ion-item>\n        </ion-grid>\n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"5\"></ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"Btn\" (click)=\"addAttachment(i)\">Add New</ion-button>\n          </ion-col>\n          <ion-col size=\"3\" (click)=\"removeAttachment()\">\n            Remove\n          </ion-col>\n        </ion-row>\n      </ion-list>\n      <ion-row class=\"BtnRow\">\n        <ion-col size=\"12\">\n          <ion-button class=\"btnSubmit\" (click)=\"PostCloserAttachment()\">Upload</ion-button>\n        </ion-col>\n        <!-- <ion-col size=\"6\">\n          <ion-button class=\"btnClose\" routerLink=\"/ticket-detail\">Close</ion-button>\n        </ion-col> -->\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase=\"'2'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-item>\n          <ion-checkbox name=\"payColl\" slot=\"start\" [(ngModel)]=\"payColl\" (ionChange)=\"disablePayDetails($event)\">\n          </ion-checkbox>\n          <ion-label>Record Payment</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Amount</ion-label>\n          <ion-input type=\"number\" class=\"input pass\" disabled=false placeholder=\"0\" [(ngModel)]=\"amount\"\n            (ngModelChange)=\"updateTotalCost()\" [disabled]=!payColl>\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">GST(%) </h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"popover\" placeholder=\"--Select Tax--\" class=\"selectWidth\" [(ngModel)]=\"gst\"\n            (ionChange)=\"updateTotalCost()\" [disabled]=!payColl>\n            <ion-select-option value=\"\">Select Tax</ion-select-option>\n            <ion-select-option *ngFor=\"let item of taxArr\" [value]=item.TaxRate>{{item.TaxName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Total</ion-label>\n          <ion-input type=\"number\" class=\"input pass\" disabled=false placeholder=\"0\" [(ngModel)]=\"totalAmount\" readonly>\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">Payment Mode </h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"popover\" placeholder=\"-- Select Payment Mode -- \" class=\"selectWidth\"\n            [(ngModel)]=\"paymentMode\" [disabled]=!payColl>\n            <ion-select-option value=\"\">Select Payment Mode</ion-select-option>\n            <ion-select-option *ngFor=\"let item of paymentModeArr\" [value]=item.ModeName>{{item.ModeName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Amount Paid</ion-label>\n          <ion-input type=\"number\" class=\"input pass\" disabled=false placeholder=\"Amount Paid\" [(ngModel)]=\"amntPaid\"\n            [disabled]=!payColl>\n          </ion-input>\n        </ion-item>\n\n        <!-- <h5>Payment Remarks </h5> -->\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Payment Remarks</ion-label>\n          <ion-textarea class=\"txtarea\" cols=\"10\" rows=\"4\" placeholder=\"Payment Remarks\" [(ngModel)]=\"paymentRemark\"\n            [disabled]=!payColl>\n          </ion-textarea>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'3'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Engineer Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false [(ngModel)]=\"engName\" readonly>\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">Service By: </h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"action-sheet\" multiple=\"true\" placeholder=\"Select\" class=\"selectWidth\"\n            [(ngModel)]=\"serviceaBy\">\n            <ion-select-option *ngFor=\"let item of ticketTeamData.TicketTeams\" [value]=item.EngineerName>\n              {{item.EngineerName}}\n            </ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"serviceaBy?.includes('Other')\">\n          <ion-label position=\"stacked\" class=\"lbl\">Other Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Other Engineer\" [(ngModel)]=\"otherName\">\n          </ion-input>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Attention</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Enter Attention\"\n            [(ngModel)]=\"attention\">\n          </ion-input>\n        </ion-item> -->\n\n        <h5 class=\"cstmLbl\">Attention :</h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Attention\" class=\"selectWidth\"\n            [(ngModel)]=\"attention\">\n            <ion-select-option [value]=ticketTeamData.CustomerName>{{ticketTeamData.CustomerName}}\n            </ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"attention?.includes('Other')\">\n          <ion-label position=\"stacked\" class=\"lbl\">Other Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Other Attention\"\n            [(ngModel)]=\"otherAtentionName\" (ngModelChange)=\"changeAttention($event)\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Attention Email</ion-label>\n          <ion-input type=\"email\" class=\"input pass\" disabled=false placeholder=\"Attention Email\"\n            [(ngModel)]=\"attentionMail\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-checkbox name=\"tested\" slot=\"start\" [(ngModel)]=\"IsTested\"></ion-checkbox>\n          <ion-label>Tested with client</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Checked By:</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Checked By\" [(ngModel)]=\"checkBy\">\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">Terms & Condtiotns</h5>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-item>\n              <ion-checkbox name=\"terms\" [(ngModel)]=\"IsTermChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"10\" style=\"color: #8a8a8a;text-align: justify;\">\n            {{term}}\n          </ion-col>\n        </ion-row>\n        <!-- <ion-item class=\"item-trns\" style=\"border-bottom:none!important;\">\n          <ion-checkbox name=\"terms\" slot=\"start\"></ion-checkbox>\n          <ion-label style=\"color: #8a8a8a;\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in\n            laying out print, graphic or\n            web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</ion-label>\n        </ion-item> -->\n\n        <ion-item *ngIf=\"paymntShow!=false\">\n          <ion-label position=\"stacked\" class=\"lbl\">Customer Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Customer Name\" [(ngModel)]=\"cstmrName\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"paymntShow!=false\">\n          <ion-label position=\"stacked\" class=\"lbl\">I.C</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"I.C Number\" [(ngModel)]=\"icNumber\">\n          </ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'4'\">\n      <ion-list class=\"cstmWidth\">\n\n        <!-- <h5>Engineer Signature</h5> -->\n\n        <ion-grid [ngClass]=\"{'drawing-active': isDrawing}\">\n          <signature-pad #sigpad1 (onBeginEvent)=\"engnerdrawStart()\" [options]=\"signaturePadOptions1\"\n            (onEndEvent)=\"engnerdrawComplete()\">\n          </signature-pad>\n\n        </ion-grid>\n        <ion-row class=\"BtnRow\">\n\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\">Save</ion-button>\n          </ion-col>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\" (click)=\"clearEngPad('0')\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'5'\">\n      <ion-list class=\"cstmWidth\">\n        <!-- <h5>Customer Signature</h5> -->\n        <ion-grid [ngClass]=\"{'drawing-active': isDrawing}\">\n          <signature-pad #sigpad2 (onBeginEvent)=\"cstmrdrawStart()\" [options]=\"signaturePadOptions\"\n            (onEndEvent)=\"cstmrdrawComplete()\">\n          </signature-pad>\n\n        </ion-grid>\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"9\"></ion-col>\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\" (click)=\"clearCustmrPad('0')\">Clear</ion-button>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"12\">\n            <ion-button class=\"btnSubmit\" (click)=\"submitCloser()\" *ngIf=\"Designation != 1\">Submit</ion-button>\n            <ion-button class=\"btnSubmit\" (click)=\"submitCloserSupervisor()\" *ngIf=\"Designation == 1\">Submit\n            </ion-button>\n          </ion-col>\n          <!-- <ion-col size=\"6\">\n            <ion-button class=\"btnClose\" routerLink=\"/ticket-detail\">Close</ion-button>\n          </ion-col> -->\n        </ion-row>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-content class=\"ion-padding\" class=\"main\" *ngIf=\"Designation == 1\">\n \n  <ion-segment scrollable [(ngModel)]=\"category\" (ionChange)=\"segmentChanged($event)\" class=\"segment\">\n    <ion-segment-button value=\"0\">\n      Remark\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      Attachment\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      Closer <br> Details\n    </ion-segment-button>\n    <ion-segment-button value=\"4\">\n      Engineer <br> Signature\n    </ion-segment-button>\n    <ion-segment-button value=\"5\">\n      Customer <br> Signature\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class=\"signature\" [ngSwitch]=\"category\">\n    <div *ngSwitchCase=\"'0'\">\n      <ion-list class=\"cstmWidth\">\n        <h5>Remarks *</h5>\n        <ion-textarea class=\"txtarea\" cols=\"10\" rows=\"20\" placeholder=\"Remarks\" [(ngModel)]=\"remark\"></ion-textarea>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'1'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-grid *ngFor=\"let grid of grids;let i=index;\" style=\"position: relative;\">\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Attachment</ion-label>\n            <ion-input type=\"text\" class=\"input usr attchment\" disabled=false placeholder=\"Choose file\" readonly\n              (click)=\"Attachment(i)\"></ion-input>\n          </ion-item>\n          <img src=\"assets/imgs/removeIcon.png\" class=\"removeImg\" *ngIf=\"attachedItem[i]\" (click)=\"removePic(i)\" />\n          <img src=\"data:image/jpeg;base64,{{capturedPic[i]}}\" class=\"uplodedImg\" *ngIf=\"capturedPic[i]\" />\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"lbl\">Comment</ion-label>\n            <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Comment\" [(ngModel)]=\"comment[i]\">\n            </ion-input>\n          </ion-item>\n        </ion-grid>\n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"5\"></ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"Btn\" (click)=\"addAttachment(i)\">Add New</ion-button>\n          </ion-col>\n          <ion-col size=\"3\" (click)=\"removeAttachment()\">\n            Remove\n          </ion-col>\n        </ion-row>\n      </ion-list>\n      <ion-row class=\"BtnRow\">\n        <ion-col size=\"12\">\n          <ion-button class=\"btnSubmit\" (click)=\"PostCloserAttachment()\">Upload</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase=\"'3'\">\n      <ion-list class=\"cstmWidth\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Engineer Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false [(ngModel)]=\"engName\" readonly>\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">Service By: </h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"action-sheet\" multiple=\"true\" placeholder=\"Select\" class=\"selectWidth\"\n            [(ngModel)]=\"serviceaBy\">\n            <ion-select-option *ngFor=\"let item of ticketTeamData.TicketTeams\" [value]=item.EngineerName>\n              {{item.EngineerName}}\n            </ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"serviceaBy?.includes('Other')\">\n          <ion-label position=\"stacked\" class=\"lbl\">Other Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Other Engineer\" [(ngModel)]=\"otherName\">\n          </ion-input>\n        </ion-item>\n\n\n        <h5 class=\"cstmLbl\">Attention :</h5>\n        <ion-item class=\"drpdwn\">\n          <ion-label></ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Attention\" class=\"selectWidth\"\n            [(ngModel)]=\"attention\">\n            <ion-select-option [value]=ticketTeamData.CustomerName>{{ticketTeamData.CustomerName}}\n            </ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"attention?.includes('Other')\">\n          <ion-label position=\"stacked\" class=\"lbl\">Other Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Other Attention\"\n            [(ngModel)]=\"otherAtentionName\" (ngModelChange)=\"changeAttention($event)\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Attention Email</ion-label>\n          <ion-input type=\"email\" class=\"input pass\" disabled=false placeholder=\"Attention Email\"\n            [(ngModel)]=\"attentionMail\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-checkbox name=\"tested\" slot=\"start\" [(ngModel)]=\"IsTested\"></ion-checkbox>\n          <ion-label>Tested with client</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lbl\">Checked By:</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Checked By\" [(ngModel)]=\"checkBy\">\n          </ion-input>\n        </ion-item>\n\n        <h5 class=\"cstmLbl\">Terms & Condtiotns</h5>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-item>\n              <ion-checkbox name=\"terms\" [(ngModel)]=\"IsTermChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"10\" style=\"color: #8a8a8a;text-align: justify;\">\n            {{term}}\n          </ion-col>\n        </ion-row>\n\n        <ion-item *ngIf=\"paymntShow!=false\">\n          <ion-label position=\"stacked\" class=\"lbl\">Customer Name</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"Customer Name\" [(ngModel)]=\"cstmrName\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"paymntShow!=false\">\n          <ion-label position=\"stacked\" class=\"lbl\">I.C</ion-label>\n          <ion-input type=\"text\" class=\"input pass\" disabled=false placeholder=\"I.C Number\" [(ngModel)]=\"icNumber\">\n          </ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'4'\">\n      <ion-list class=\"cstmWidth\">\n\n      \n\n        <ion-grid [ngClass]=\"{'drawing-active': isDrawing}\">\n          <signature-pad #sigpad1 (onBeginEvent)=\"engnerdrawStart()\" [options]=\"signaturePadOptions1\"\n            (onEndEvent)=\"engnerdrawComplete()\">\n          </signature-pad>\n\n        </ion-grid>\n        <ion-row class=\"BtnRow\">\n\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\">Save</ion-button>\n          </ion-col>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\" (click)=\"clearEngPad('0')\">Clear</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"'5'\">\n      <ion-list class=\"cstmWidth\">\n        \n        <ion-grid [ngClass]=\"{'drawing-active': isDrawing}\">\n          <signature-pad #sigpad2 (onBeginEvent)=\"cstmrdrawStart()\" [options]=\"signaturePadOptions\"\n            (onEndEvent)=\"cstmrdrawComplete()\">\n          </signature-pad>\n\n        </ion-grid>\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"9\"></ion-col>\n          <ion-col size=\"3\">\n            <ion-button class=\"Btn\" (click)=\"clearCustmrPad('0')\">Clear</ion-button>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"BtnRow\">\n          <ion-col size=\"12\">\n            <ion-button class=\"btnSubmit\" (click)=\"submitCloserSupervisor()\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </div>\n</ion-content> -->"

/***/ }),

/***/ "./src/app/closer-detail/closer-detail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/closer-detail/closer-detail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CloserDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloserDetailPageRoutingModule", function() { return CloserDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _closer_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closer-detail.page */ "./src/app/closer-detail/closer-detail.page.ts");




var routes = [
    {
        path: '',
        component: _closer_detail_page__WEBPACK_IMPORTED_MODULE_3__["CloserDetailPage"]
    }
];
var CloserDetailPageRoutingModule = /** @class */ (function () {
    function CloserDetailPageRoutingModule() {
    }
    CloserDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CloserDetailPageRoutingModule);
    return CloserDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/closer-detail/closer-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/closer-detail/closer-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: CloserDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloserDetailPageModule", function() { return CloserDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _closer_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closer-detail-routing.module */ "./src/app/closer-detail/closer-detail-routing.module.ts");
/* harmony import */ var _closer_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closer-detail.page */ "./src/app/closer-detail/closer-detail.page.ts");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);








var CloserDetailPageModule = /** @class */ (function () {
    function CloserDetailPageModule() {
    }
    CloserDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _closer_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloserDetailPageRoutingModule"],
                angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]
            ],
            declarations: [_closer_detail_page__WEBPACK_IMPORTED_MODULE_6__["CloserDetailPage"]]
        })
    ], CloserDetailPageModule);
    return CloserDetailPageModule;
}());



/***/ }),

/***/ "./src/app/closer-detail/closer-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/closer-detail/closer-detail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".segment {\n  --background: #efefef;\n  text-align: left;\n}\n\nion-segment-button {\n  color: #4c4c4c;\n  font-weight: bold;\n}\n\n.signature {\n  height: 90%;\n  overflow: scroll;\n}\n\nion-title {\n  width: 90%;\n}\n\n.main {\n  --overflow: hidden;\n}\n\n.segment-md .segment-button.activated,\n.segment-md .segment-button.segment-activated,\n.segment-ios .segment-button.activated,\n.segment-ios .segment-button.segment-activated {\n  border-color: #4771C7 !important;\n  color: #4771C7 !important;\n  background: transparent;\n}\n\n.segment-ios .segment-button {\n  border: 0;\n}\n\n.txtarea {\n  border: 1px solid #ccc;\n  font-size: 4.5vw;\n  color: #4c4c4c;\n  border-radius: 10px;\n}\n\n.cstmWidth {\n  width: 90%;\n  text-align: left;\n  margin: 0 auto;\n}\n\n.lbl {\n  font-size: 5.5vw;\n  margin: 4% 2%;\n}\n\n.input {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 2.2% !important;\n  padding-left: 5% !important;\n  font-size: 4vw;\n}\n\n.drpdwn {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  font-size: 4vw;\n  width: 90%;\n  margin: 0% auto;\n}\n\n.cstmLbl {\n  margin-left: 6%;\n  font-size: 4vw;\n}\n\n.selectWidth {\n  min-width: 100%;\n  padding: 0;\n}\n\n.attchment {\n  background: url('attachment.png');\n  background-repeat: no-repeat;\n  background-size: 8%;\n  background-position: 95% center;\n}\n\n.BtnRow ion-col:nth-of-type(3) {\n  margin: auto;\n  text-align: center;\n  color: #4771C7;\n  font-size: 4vw;\n}\n\n.Btn {\n  --background: #4771C7;\n  text-transform: capitalize;\n  height: 2rem;\n}\n\n.cstmBorder {\n  border: 1px solid #ccc;\n  height: 18vh;\n}\n\n.btnSubmit {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 0% 10%;\n  --background: #4771C7;\n  font-size: 4.5vw;\n}\n\n.btnClose {\n  width: 80%;\n  height: 2.6rem;\n  --border-radius: 30px;\n  margin: 0% 10%;\n  --background: #fff;\n  font-size: 4.5vw;\n  color: #4771C7;\n}\n\n.btnClose button {\n  border: 2px solid;\n}\n\n.uplodedImg {\n  margin: 5% 5% 0;\n  width: 20%;\n}\n\n.removeImg {\n  position: absolute;\n  width: 5%;\n  right: 0%;\n  top: 38%;\n  z-index: 10;\n}\n\n.stopImg {\n  margin: 5% 5% 0 85%;\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2VyLWRldGFpbC9IOlxcT2ZmaWNlXFxGU00vc3JjXFxhcHBcXGNsb3Nlci1kZXRhaWxcXGNsb3Nlci1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9jbG9zZXItZGV0YWlsL2Nsb3Nlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFVBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0FDUko7O0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksVUFBQTtBQ2JKOztBRGdCQTtFQUNJLGtCQUFBO0FDYko7O0FEaUJBOzs7O0VBSUksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksU0FBQTtBQ2RKOztBRGlCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURpQkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDZEo7O0FEaUJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDZEo7O0FEaUJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2RKOztBRGlCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNkSjs7QURpQkE7RUFDSSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ2RKOztBRGlCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDZEo7O0FEaUJBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZEo7O0FEc0JBO0VBQ0ksaUJBQUE7QUNuQko7O0FEc0JBO0VBSUksZUFBQTtFQUNBLFVBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBR0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDeEJKOztBRDJCQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL2Nsb3Nlci1kZXRhaWwvY2xvc2VyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLy8gIGhlaWdodDogMTAlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAvL2ZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy8gLnNpZ25hdHVyZSBkaXZ7XHJcbi8vICAgICBtYXgtaGVpZ2h0OiA5MiU7XHJcbi8vICAgICBvdmVyZmxvdzogYXV0bztcclxuLy8gfVxyXG5cclxuLnNpZ25hdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxyXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQsXHJcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uYWN0aXZhdGVkLFxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ3NzFDNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0NzcxQzcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnR4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICBjb2xvcjogIzRjNGM0YztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jc3RtV2lkdGgge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxibCB7XHJcbiAgICBmb250LXNpemU6IDUuNXZ3O1xyXG4gICAgbWFyZ2luOiA0JSAyJTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMi4yJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuXHJcbi5kcnBkd24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuXHJcbi5jc3RtTGJsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2JTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uc2VsZWN0V2lkdGgge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmF0dGNobWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYXR0YWNobWVudC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xyXG59XHJcblxyXG4uQnRuUm93IGlvbi1jb2w6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0NzcxQzc7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLkJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NzcxQzc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmNzdG1Cb3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMTh2aDtcclxufVxyXG5cclxuLmJ0blN1Ym1pdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbn1cclxuXHJcbi5idG5DbG9zZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAlIDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICBjb2xvcjogIzQ3NzFDNztcclxufVxyXG5cclxuLy8gY2FudmFze1xyXG4vLyAgICAgaGVpZ2h0OiA1NXZoO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi5idG5DbG9zZSBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbi51cGxvZGVkSW1nIHtcclxuICAgIC8vIHdpZHRoOiA2MCU7XHJcbiAgICAvLyBtYXJnaW46IDMlIDIwJSAwO1xyXG4gICAgLy8gaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luOiA1JSA1JSAwO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnJlbW92ZUltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICAvLyByaWdodDogMTglO1xyXG4gICAgLy8gdG9wOiAzNSU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB0b3A6IDM4JTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uc3RvcEltZyB7XHJcbiAgICBtYXJnaW46IDUlIDUlIDAgODUlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxufSIsIi5zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWduYXR1cmUge1xuICBoZWlnaHQ6IDkwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLm1haW4ge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZWdtZW50LW1kIC5zZWdtZW50LWJ1dHRvbi5hY3RpdmF0ZWQsXG4uc2VnbWVudC1tZCAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQsXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCxcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xuICBib3JkZXItY29sb3I6ICM0NzcxQzcgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NzcxQzcgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IDA7XG59XG5cbi50eHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiA0LjV2dztcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jc3RtV2lkdGgge1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxibCB7XG4gIGZvbnQtc2l6ZTogNS41dnc7XG4gIG1hcmdpbjogNCUgMiU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIuMiUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA1JSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLmRycGR3biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAlIGF1dG87XG59XG5cbi5jc3RtTGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLnNlbGVjdFdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYXR0Y2htZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2F0dGFjaG1lbnQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA4JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIGNlbnRlcjtcbn1cblxuLkJ0blJvdyBpb24tY29sOm50aC1vZi10eXBlKDMpIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDc3MUM3O1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLkJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzQ3NzFDNztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmNzdG1Cb3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDE4dmg7XG59XG5cbi5idG5TdWJtaXQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDAlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjNDc3MUM3O1xuICBmb250LXNpemU6IDQuNXZ3O1xufVxuXG4uYnRuQ2xvc2Uge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDAlIDEwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDQuNXZ3O1xuICBjb2xvcjogIzQ3NzFDNztcbn1cblxuLmJ0bkNsb3NlIGJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xufVxuXG4udXBsb2RlZEltZyB7XG4gIG1hcmdpbjogNSUgNSUgMDtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnJlbW92ZUltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUlO1xuICByaWdodDogMCU7XG4gIHRvcDogMzglO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN0b3BJbWcge1xuICBtYXJnaW46IDUlIDUlIDAgODUlO1xuICB3aWR0aDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/closer-detail/closer-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/closer-detail/closer-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: CloserDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloserDetailPage", function() { return CloserDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-signaturepad/signature-pad */ "./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/rest.service */ "./src/app/provider/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _provider_json_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../provider/json-store.service */ "./src/app/provider/json-store.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");


















var CloserDetailPage = /** @class */ (function () {
    function CloserDetailPage(domSanitizer, toastController, transfer, mediaCapture, sanitizer, platform, filePicker, nativeStorage, network, jsonProvider, alertController, filePath, fileChooser, loadingController, file, base64, location, camera, actionSheetController, RestService, zone) {
        this.domSanitizer = domSanitizer;
        this.toastController = toastController;
        this.transfer = transfer;
        this.mediaCapture = mediaCapture;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.filePicker = filePicker;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.jsonProvider = jsonProvider;
        this.alertController = alertController;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.loadingController = loadingController;
        this.file = file;
        this.base64 = base64;
        this.location = location;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.RestService = RestService;
        this.zone = zone;
        this.isEngDrawing = false;
        this.iscstmrDrawing = false;
        this.category = 0;
        this.ext = [];
        this.attachedItem = [];
        this.uplodedDoc = [];
        this.capturedPic = [];
        this.grids = [0];
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasHeight': 400
        };
        this.signaturePadOptions1 = {
            'minWidth': 2,
            //'canvasWidth': 500,
            'canvasHeight': 450
        };
        this.custSignature = '';
        this.engSignature = '';
        this.comment = [];
        this.gst = 7;
        this.serviceaBy = [];
        this.docArray = [];
        this.otherName = '';
        this.amount = '';
        this.paymentMode = '';
        this.IsTested = false;
        this.payColl = true;
        this.IsTermChecked = false;
        this.taxArr = [];
        this.paymentModeArr = [];
        this.serviceArr = [];
        this.attentionArr = [];
        this.isImg = [];
        this.isAudio = [];
        this.offlineCloserArr = [];
        this.startRecord = [];
        this.play = [];
        this.audioUrl = [];
        this.progress = [];
        this.audioDuration = [];
        this.ticketTeamData = JSON.parse(localStorage.ticket);
        this.term = localStorage.termsData;
        this.checkBy = this.ticketTeamData.CustomerName;
        this.cstmrName = this.ticketTeamData.CustomerName;
        this.attention = this.ticketTeamData.CustomerName;
        this.attentionMail = this.ticketTeamData.CustomerEmail;
        this.amount = this.ticketTeamData.NetAmount;
        this.paymntShow = JSON.parse(localStorage.userData).Permissions.AllowCustomerName;
        console.log(this.paymntShow);
        this.engName = JSON.parse(localStorage.userData).FullName;
    }
    CloserDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Designation = JSON.parse(localStorage.userData).Designation;
        this.nativeStorage.getItem('closerArr').then(function (data) {
            console.log(data);
            _this.offlineCloserArr = data;
        }, function (error) { return console.error(error); });
        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
            this.nativeStorage.getItem('offlineAllData').then(function (data) {
                console.log(data);
                _this.paymentModeArr = data.Item5;
                _this.taxArr = data.Item6;
            }, function (error) { return console.error(error); });
        }
        else {
            this.getCloserId();
            this.getGSTList();
            this.getPayTypeList();
            this.updateTotalCost();
        }
    };
    CloserDetailPage.prototype.getGSTList = function () {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetTax/' + Token, '').then(function (response) {
            console.log(response);
            _this.apiResponse = response;
            if (_this.apiResponse.Message == "success") {
                _this.taxArr = _this.apiResponse.result;
            }
            else {
            }
            //  alert(response.MessageDescription);
        });
    };
    CloserDetailPage.prototype.getPayTypeList = function () {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.requestViaGet('app/EngineerTickets/GetPaymentModet/' + Token, '').then(function (response) {
            console.log(response);
            _this.apiResponse = response;
            if (_this.apiResponse.Message == "success") {
                _this.paymentModeArr = _this.apiResponse.result;
            }
            else {
            }
            //  alert(response.MessageDescription);
        });
    };
    CloserDetailPage.prototype.getCloserId = function () {
        var _this = this;
        {
            var ticketData = JSON.parse(localStorage.ticket);
            var userData = JSON.parse(localStorage.userData);
            var data = {
                "CloserID": "00000000-0000-0000-0000-000000000000",
                "TicketId": ticketData.Id,
                "EngineerId": userData.Id,
            };
            var Token = JSON.parse(localStorage.userData).Token;
            this.RestService.postServices('/app/EngineerTickets/PostCloserDetails/' + Token, data).then(function (response) {
                console.log(response);
                _this.apiResponse = response;
                if (_this.apiResponse.Message == "success") {
                    _this.closerId = _this.apiResponse.result.CloserID;
                    _this.ticketFlag = _this.apiResponse.result.TicketFlag;
                    _this.CloserPrefix = _this.apiResponse.result.CloserPrefix;
                }
                else {
                }
            });
        }
    };
    CloserDetailPage.prototype.engnerdrawComplete = function () {
        this.isEngDrawing = false;
        this.engSignature = this.signaturePad.toDataURL("image/png");
    };
    CloserDetailPage.prototype.engnerdrawStart = function () {
        this.isEngDrawing = true;
    };
    CloserDetailPage.prototype.cstmrdrawComplete = function () {
        this.iscstmrDrawing = false;
        this.custSignature = this.signaturePad1.toDataURL("image/png");
    };
    CloserDetailPage.prototype.cstmrdrawStart = function () {
        this.iscstmrDrawing = true;
    };
    CloserDetailPage.prototype.clearEngPad = function (v) {
        this.signaturePad.clear();
        this.engSignature = '';
    };
    CloserDetailPage.prototype.clearCustmrPad = function (v) {
        this.signaturePad1.clear();
        this.custSignature = '';
    };
    CloserDetailPage.prototype.addAttachment = function () {
        this.grids.push(this.grids.length);
    };
    CloserDetailPage.prototype.removeAttachment = function () {
        if (this.grids.length > 1) {
            this.grids.pop();
            this.attachedItem.pop();
        }
    };
    CloserDetailPage.prototype.removePic = function (i) {
        this.attachedItem.splice(i, 1);
        if (this.uplodedDoc[i]) {
            this.uplodedDoc.splice(i, 1);
        }
        if (this.capturedPic[i]) {
            this.capturedPic.splice(i, 1);
        }
    };
    CloserDetailPage.prototype.segmentChanged = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2, alert_3, alert_4, alert_5, alert_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Segment changed', ev);
                        if (!(this.category == 1 || this.category == 1)) return [3 /*break*/, 4];
                        if (!(this.remark == '' || this.remark == undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please enter remarks',
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
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        this.category = 0;
                        return [2 /*return*/];
                    case 3: return [3 /*break*/, 20];
                    case 4:
                        if (!(this.category == 4)) return [3 /*break*/, 14];
                        if (!(this.remark == '' || this.remark == undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please enter remarks',
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
                    case 5:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 6:
                        _a.sent();
                        this.category = 0;
                        return [2 /*return*/];
                    case 7:
                        if (this.attention == 'Other') {
                            this.cstmrName = this.otherAtentionName;
                            this.checkBy = this.otherAtentionName;
                            this.otherAtentionName = this.otherAtentionName;
                            this.attention = this.otherAtentionName;
                        }
                        else {
                            this.otherAtentionName = '';
                        }
                        if (!!this.IsTermChecked) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please accept terms and conditions',
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
                    case 8:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 9:
                        _a.sent();
                        this.category = 3;
                        return [2 /*return*/];
                    case 10:
                        if (!!this.IsTested) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please Check Tested with Clients',
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
                    case 11:
                        alert_4 = _a.sent();
                        return [4 /*yield*/, alert_4.present()];
                    case 12:
                        _a.sent();
                        this.category = 3;
                        return [2 /*return*/];
                    case 13: return [3 /*break*/, 20];
                    case 14:
                        if (!(this.category == 5)) return [3 /*break*/, 20];
                        if (!(this.remark == '' || this.remark == undefined)) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please enter remarks',
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
                    case 15:
                        alert_5 = _a.sent();
                        return [4 /*yield*/, alert_5.present()];
                    case 16:
                        _a.sent();
                        this.category = 0;
                        return [2 /*return*/];
                    case 17:
                        if (!(this.engSignature == '')) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add engineer signature',
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
                    case 18:
                        alert_6 = _a.sent();
                        return [4 /*yield*/, alert_6.present()];
                    case 19:
                        _a.sent();
                        this.category = 4;
                        return [2 /*return*/];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    CloserDetailPage.prototype.Attachment = function (i) {
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
                                        // if (this.platform.is('ios')) {
                                        //   this.uploadPicIos(i);
                                        // } else {
                                        //   this.uploadPicAndroid(i);
                                        // }
                                    }
                                },
                                {
                                    text: 'Audio',
                                    icon: 'mic',
                                    handler: function () {
                                        console.log('audio' + i);
                                        _this.audioIndex = '';
                                        _this.recordAudioStart(i);
                                    }
                                }
                            ]
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
    CloserDetailPage.prototype.uploadPic = function (i) {
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
            _this.attachedItem[i] = imageData;
            _this.capturedPic[i] = imageData;
            _this.isAudio[i] = false;
            _this.ext[i] = 'jpg';
        }, function (err) {
            // Handle error
        });
    };
    // async uploadPicIos(i) {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //   });
    //   loading.present();
    //   this.filePicker.pickFile()
    //     .then(uri => {
    //       console.log(uri)
    //       this.base64.encodeFile(uri).then((base64File: string) => {
    //         console.log(base64File);
    //         this.attachedItem[i] = base64File.split(',')[1];
    //         this.uplodedDoc[i] = this.sanitizer.bypassSecurityTrustUrl(base64File);//'data:image/jpeg;base64,' + base64File.split(',')[1];
    //         loading.dismiss();
    //       }, (err) => {
    //         console.log(err);
    //         loading.dismiss();
    //       });
    //     })
    //     .catch(err => {
    //       console.log('Error', err)
    //       loading.dismiss();
    //     });
    // }
    // async uploadPicAndroid(i) {
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
    //           this.ext[i] = fileName.split('.')[1];
    //           if (this.ext[i].toUpperCase() == 'PNG' || this.ext[i].toUpperCase() == 'JPG' || this.ext[i].toUpperCase() == 'JPEG') {
    //             this.isImg[i] = true;
    //           }
    //           //  console.log
    //           let path = filePath.substring(0, filePath.lastIndexOf("/") + 1);
    //           this.base64.encodeFile(filePath).then((base64File: string) => {
    //             console.log(base64File);
    //             this.attachedItem[i] = base64File.split(',')[1];
    //             this.uplodedDoc[i] = this.sanitizer.bypassSecurityTrustUrl(base64File);//'data:image/jpeg;base64,' + base64File.split(',')[1];
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
    CloserDetailPage.prototype.takePic = function (i) {
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
            _this.attachedItem[i] = imageData;
            _this.capturedPic[i] = imageData;
            _this.isAudio[i] = false;
            _this.ext[i] = 'png';
        }, function (err) {
            // Handle error
        });
    };
    CloserDetailPage.prototype.updateTotalCost = function () {
        this.totalAmount = this.amount + (this.amount * this.gst / 100);
    };
    CloserDetailPage.prototype.disablePayDetails = function (event) {
        // alert(this.payColl);
        console.log(event.detail.checked);
        if (this.payColl == false) {
            this.amount = 0;
        }
        else {
            this.amount = this.ticketTeamData.NetAmount;
        }
    };
    CloserDetailPage.prototype.PostCloserAttachment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_7, i, baseFileSize, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.attachedItem.length == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add attachment',
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
                    case 1:
                        alert_7 = _a.sent();
                        return [4 /*yield*/, alert_7.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
                            // save to localStorage if no netwotk
                            this.submitCloserDocOffline();
                        }
                        else {
                            for (i = 0; i < this.attachedItem.length; i++) {
                                baseFileSize = Math.round(this.attachedItem[i].length * 0.75);
                                data = {
                                    "CloserID": this.closerId,
                                    "AttachmentExtenstion": this.ext[i],
                                    "AttachmentFile": this.attachedItem[i],
                                    "AttachmentSize": baseFileSize,
                                    "Remarks": this.comment[i],
                                    "CAID": 0,
                                    "CloserAttachmentAduioList": []
                                };
                                console.log(data);
                                if (i == this.attachedItem.length - 1) {
                                    this.attachedItem = [];
                                }
                                this.submitCloserDoc(data);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CloserDetailPage.prototype.submitCloserDoc = function (data) {
        var _this = this;
        var Token = JSON.parse(localStorage.userData).Token;
        this.RestService.postServices('app/EngineerTickets/PostCloserAttachment/' + Token, data).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(response);
                        this.apiResponse = response;
                        if (!(this.apiResponse.Message == "success")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Document uploaded successfully',
                                duration: 3000,
                                position: 'bottom',
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    CloserDetailPage.prototype.submitCloserDocOffline = function () {
        var _this = this;
        for (var i = 0; i < this.attachedItem.length; i++) {
            var baseFileSize = Math.round(this.attachedItem[i].length * 0.75);
            var data = {
                "CloserID": this.closerId,
                "AttachmentExtenstion": this.ext[i],
                "AttachmentFile": this.attachedItem[i],
                "AttachmentSize": baseFileSize,
                "Remarks": this.comment[i],
                "CAID": 0,
                "CloserAttachmentAduioList": []
            };
            console.log(data);
        }
        this.docArray.push(data);
        var ticketData = JSON.parse(localStorage.ticket);
        this.nativeStorage.setItem(ticketData.Id + 'closerDoc', this.docArray)
            .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(ticketData.Id + 'doc saved offline');
                return [2 /*return*/];
            });
        }); }, function (error) { return console.error('Error storing item', error); });
    };
    CloserDetailPage.prototype.isTestedCheck = function (event) {
        this.IsTested = event.target.checked;
    };
    CloserDetailPage.prototype.changeAttention = function () {
        if (this.attention.includes('Other')) {
            this.checkBy = this.otherAtentionName;
            this.cstmrName = this.otherAtentionName;
        }
        else {
            this.checkBy = this.ticketTeamData.CustomerName;
            this.cstmrName = this.ticketTeamData.CustomerName;
        }
    };
    CloserDetailPage.prototype.submitCloser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_8, alert_9, alert_10, alert_11, alert_12, gstAmount, ticketData, userData, str, serviceaBy, offlineData, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.attention == 'Other') {
                            this.cstmrName = this.otherAtentionName;
                            this.checkBy = this.otherAtentionName;
                            this.otherAtentionName = this.otherAtentionName;
                            this.attention = this.otherAtentionName;
                        }
                        else {
                            this.otherAtentionName = '';
                        }
                        if (!!this.IsTermChecked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please accept terms and conditions for submit closer',
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
                    case 1:
                        alert_8 = _a.sent();
                        return [4 /*yield*/, alert_8.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!!this.IsTested) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please Check Tested with Clients',
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
                        alert_9 = _a.sent();
                        return [4 /*yield*/, alert_9.present()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.remark == '' || this.remark == undefined)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please enter remarks',
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
                    case 7:
                        alert_10 = _a.sent();
                        return [4 /*yield*/, alert_10.present()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9:
                        if (!(this.engSignature == '')) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add engineer signature',
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
                        alert_11 = _a.sent();
                        return [4 /*yield*/, alert_11.present()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                    case 12:
                        if (!(this.custSignature == '')) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add customer signature',
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
                    case 13:
                        alert_12 = _a.sent();
                        return [4 /*yield*/, alert_12.present()];
                    case 14:
                        _a.sent();
                        return [2 /*return*/];
                    case 15:
                        gstAmount = this.amount * this.gst / 100;
                        ticketData = JSON.parse(localStorage.ticket);
                        userData = JSON.parse(localStorage.userData);
                        if (this.otherName != '' || this.serviceaBy.includes('Other')) {
                            str = this.serviceaBy.toString() + ',' + this.otherName;
                        }
                        else {
                            str = this.serviceaBy.toString();
                        }
                        serviceaBy = str.replace(",Other", "");
                        if (localStorage.modeType == 'Offline' && this.network.type == 'none') {
                            offlineData = {
                                "CloserID": '',
                                "TicketId": ticketData.Id,
                                "EngineerId": userData.Id,
                                "CustomerSignature": this.custSignature.split(',')[1],
                                "EngineerSignature": this.engSignature.split(',')[1],
                                "Remarks": this.remark,
                                "TicketFlag": localStorage.getItem('statusFlag'),
                                "CloserPrefix": '',
                                "StartDate": "2020-03-26 13:00:00",
                                "EndDate": "2020-03-26 14:00:00",
                                "StartTime": "hh:mm",
                                "EndTime": "hh:mm",
                                "NameOfSignatory": this.cstmrName,
                                "ICNo": this.icNumber,
                                "ServiceBy": serviceaBy,
                                "attentionName": this.attention,
                                "attentionEmail": this.attentionMail,
                                "otherAttentionName": this.otherAtentionName,
                                "CheckedBy": this.checkBy,
                                "IsTested": this.IsTested,
                                "CloserAmount": this.amount,
                                "CloserGSTAmount": gstAmount,
                                "CloserTotalAmount": this.totalAmount,
                                "PaymentMode": this.paymentMode,
                                "AmountPaid": this.amntPaid,
                                "PaymentRemarks": this.paymentRemark,
                                "EngineerName": this.engName,
                                "PaymentCollected": this.payColl,
                            };
                            this.ticketId = ticketData.Id;
                            console.log(this.offlineCloserArr);
                            this.offlineCloserArr.push(offlineData);
                            console.log(this.offlineCloserArr);
                            //this.nativeStorage.setItem(this.ticketId, offlineData)
                            this.nativeStorage.setItem('closerArr', this.offlineCloserArr)
                                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertController.create({
                                                header: 'Success',
                                                message: 'Offline data saved successfully.',
                                                cssClass: 'secondary',
                                                buttons: [
                                                    {
                                                        text: 'Ok',
                                                        role: 'ok',
                                                        handler: function (blah) {
                                                            console.log('Confirm Cancel: blah');
                                                            _this.location.back();
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
                            }); }, function (error) { return console.error('Error storing item', error); });
                        }
                        else {
                            data = {
                                "CloserID": this.closerId,
                                "TicketId": ticketData.Id,
                                "EngineerId": userData.Id,
                                "CustomerSignature": this.custSignature.split(',')[1],
                                "EngineerSignature": this.engSignature.split(',')[1],
                                "Remarks": this.remark,
                                "TicketFlag": localStorage.getItem('statusFlag'),
                                "CloserPrefix": this.CloserPrefix,
                                "NameOfSignatory": this.cstmrName,
                                "ICNo": this.icNumber,
                                "ServiceBy": serviceaBy,
                                "attentionName": this.attention,
                                "attentionEmail": this.attentionMail,
                                "otherAttentionName": this.otherAtentionName,
                                "CheckedBy": this.checkBy,
                                "IsTested": this.IsTested,
                                "CloserAmount": this.amount,
                                "CloserGSTAmount": gstAmount,
                                "CloserTotalAmount": this.totalAmount,
                                "PaymentMode": this.paymentMode,
                                "AmountPaid": this.amntPaid,
                                "PaymentRemarks": this.paymentRemark,
                                "EngineerName": this.engName,
                                "PaymentCollected": this.payColl,
                            };
                            console.log(data);
                            this.RestService.putServices('app/EngineerTickets/PutCloserDetails/' + userData.Token, data).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert_13;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log(response);
                                            this.apiResponse = response;
                                            if (!(this.apiResponse.Message == "success")) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.alertController.create({
                                                    header: 'Success',
                                                    message: 'Record saved successfully.',
                                                    cssClass: 'secondary',
                                                    buttons: [
                                                        {
                                                            text: 'Ok',
                                                            role: 'ok',
                                                            handler: function (blah) {
                                                                console.log('Confirm Cancel: blah');
                                                                _this.location.back();
                                                            }
                                                        }
                                                    ]
                                                })];
                                        case 1:
                                            alert_13 = _a.sent();
                                            return [4 /*yield*/, alert_13.present()];
                                        case 2:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CloserDetailPage.prototype.submitCloserSupervisor = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_14, alert_15, alert_16, alert_17, alert_18, ticketData, userData, str, serviceaBy, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.attention == 'Other') {
                            this.cstmrName = this.otherAtentionName;
                            this.checkBy = this.otherAtentionName;
                            this.otherAtentionName = this.otherAtentionName;
                            this.attention = this.otherAtentionName;
                        }
                        else {
                            this.otherAtentionName = '';
                        }
                        if (!!this.IsTermChecked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please accept terms and conditions for submit closer',
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
                    case 1:
                        alert_14 = _a.sent();
                        return [4 /*yield*/, alert_14.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!!this.IsTested) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please Check Tested with Clients',
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
                        alert_15 = _a.sent();
                        return [4 /*yield*/, alert_15.present()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6:
                        if (!(this.remark == '' || this.remark == undefined)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please enter remarks',
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
                    case 7:
                        alert_16 = _a.sent();
                        return [4 /*yield*/, alert_16.present()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                    case 9:
                        if (!(this.engSignature == '')) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add engineer signature',
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
                        alert_17 = _a.sent();
                        return [4 /*yield*/, alert_17.present()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                    case 12:
                        if (!(this.custSignature == '')) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                message: 'Please add customer signature',
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
                    case 13:
                        alert_18 = _a.sent();
                        return [4 /*yield*/, alert_18.present()];
                    case 14:
                        _a.sent();
                        return [2 /*return*/];
                    case 15:
                        ticketData = JSON.parse(localStorage.ticket);
                        userData = JSON.parse(localStorage.userData);
                        if (this.otherName != '' || this.serviceaBy.includes('Other')) {
                            str = this.serviceaBy.toString() + ',' + this.otherName;
                        }
                        else {
                            str = this.serviceaBy.toString();
                        }
                        serviceaBy = str.replace(",Other", "");
                        data = {
                            "CloserID": this.closerId,
                            "TicketId": ticketData.Id,
                            "EngineerId": userData.Id,
                            "CustomerSignature": this.custSignature.split(',')[1],
                            "EngineerSignature": this.engSignature.split(',')[1],
                            "Remarks": this.remark,
                            "TicketFlag": localStorage.getItem('statusFlag'),
                            "CloserPrefix": this.CloserPrefix,
                            "NameOfSignatory": this.cstmrName,
                            "ICNo": this.icNumber,
                            "ServiceBy": serviceaBy,
                            "attentionName": this.attention,
                            "attentionEmail": this.attentionMail,
                            "otherAttentionName": this.otherAtentionName,
                            "CheckedBy": this.checkBy,
                            "IsTested": this.IsTested,
                            "CloserAmount": 0,
                            "CloserGSTAmount": 0,
                            "CloserTotalAmount": 0,
                            "PaymentMode": '',
                            "AmountPaid": 0,
                            "PaymentRemarks": '',
                            "EngineerName": this.engName,
                            "PaymentCollected": 0,
                        };
                        console.log(data);
                        this.RestService.putServices('app/EngineerTickets/PutCloserDetails/' + userData.Token, data).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert_19;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(response);
                                        this.apiResponse = response;
                                        if (!(this.apiResponse.Message == "success")) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Success',
                                                message: 'Record saved successfully.',
                                                cssClass: 'secondary',
                                                buttons: [
                                                    {
                                                        text: 'Ok',
                                                        role: 'ok',
                                                        handler: function (blah) {
                                                            console.log('Confirm Cancel: blah');
                                                            _this.location.back();
                                                        }
                                                    }
                                                ]
                                            })];
                                    case 1:
                                        alert_19 = _a.sent();
                                        return [4 /*yield*/, alert_19.present()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CloserDetailPage.prototype.closerDetBack = function () {
        this.ticketStatusData = localStorage.getItem('statusFlag');
        if (this.ticketStatusData == 'HOLD' || this.ticketStatusData == 'CLOSE') {
            localStorage.removeItem('statusFlag');
            this.location.back();
            //return false;
        }
        else {
            this.location.back();
        }
    };
    //audio record work---------->
    CloserDetailPage.prototype.recordAudioStart = function (i) {
        var _this = this;
        var that = this;
        this.audioIndex = i;
        // this.audioDuration[i] = 0;
        // this.getTotalDuration(i);
        // this.startRecord[i] = true;
        // return;
        if (this.platform.is('android')) {
            //var audioBase64 =
            //  this.audioIndex = i
            var status = JSInterface.recordAudio();
            if (status == 'start') {
                that.zone.run(function () {
                    _this.startRecord[i] = true;
                    _this.audioDuration[i] = 0;
                });
                this.getTotalDuration(i);
            }
        }
        else if (this.platform.is('ios')) {
            cordova.exec(function (val) {
                console.log('success', val);
                if (val == 'start') {
                    that.zone.run(function () {
                        that.startRecord[i] = true;
                        that.audioDuration[i] = 0;
                    });
                    that.getTotalDuration(i);
                }
            }, function (err) { console.log('err', err); }, "AudioViewController", "recordAudio", [i.toString()]);
        }
    };
    CloserDetailPage.prototype.stopAudio = function () {
        var _this = this;
        var that = this;
        var i = this.audioIndex;
        // this.audioUrl[i] = 'fdfs';
        // this.ext[i] = 'mp3';
        // this.isAudio[i] = true;
        // this.attachedItem[i] = 'fdfdg';
        // this.startRecord[i] = false;
        // return;
        if (this.platform.is('android')) {
            var res = JSInterface.stopRecording();
            var response = JSON.parse(res);
            this.startRecord[i] = false;
            console.log(response);
            if (response.base64) {
                that.zone.run(function () {
                    _this.audioUrl[i] = response.path;
                    _this.ext[i] = 'mp3';
                    _this.isAudio[i] = true;
                    _this.attachedItem[i] = response.base64;
                });
            }
        }
        else if (this.platform.is('ios')) {
            cordova.exec(function (val) {
                console.log('success', val);
                that.zone.run(function () {
                    that.startRecord[i] = false;
                    that.audioUrl[i] = val[0];
                    that.ext[i] = 'm4a';
                    that.isAudio[i] = true;
                    that.attachedItem[i] = val[1];
                });
            }, function (err) { console.log('err', err); }, "AudioViewController", "stopRecording", []);
        }
    };
    CloserDetailPage.prototype.getTotalDuration = function (i) {
        var _this = this;
        this.audioDuration[i] = this.audioDuration[i] + 100;
        setTimeout(function () {
            if (_this.startRecord[i]) {
                _this.getTotalDuration(i);
            }
        }, 100);
    };
    CloserDetailPage.prototype.playAudio = function (i) {
        this.progress[i] = 0;
        this.getProgress(i);
        this.play[i] = true;
        var that = this;
        if (this.platform.is('android')) {
            JSInterface.playAudio(that.audioUrl[i]);
        }
        else if (this.platform.is('ios')) {
            cordova.exec(function (val) {
                console.log('success', val);
            }, function (err) { console.log('err', err); }, "AudioViewController", "playAudio", [that.audioUrl[i]]);
        }
    };
    CloserDetailPage.prototype.pauseAudio = function (i) {
        this.progress[i] = 0;
        this.play[i] = false;
        var that = this;
        if (this.platform.is('android')) {
            JSInterface.pauseAudio(that.audioUrl[i]);
        }
        else if (this.platform.is('ios')) {
            cordova.exec(function (val) {
                console.log('success', val);
            }, function (err) { console.log('err', err); }, "AudioViewController", "pauseAudio", [that.audioUrl[i]]);
        }
    };
    CloserDetailPage.prototype.getProgress = function (i) {
        var _this = this;
        this.progress[i] = this.progress[i] + 100;
        setTimeout(function () {
            if (_this.play[i]) {
                if (_this.progress[i] >= _this.audioDuration[i]) {
                    _this.pauseAudio(i);
                }
                else {
                    _this.getProgress(i);
                }
            }
        }, 100);
    };
    CloserDetailPage.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"] },
        { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__["MediaCapture"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["IOSFilePicker"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeStorage"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] },
        { type: _provider_json_store_service__WEBPACK_IMPORTED_MODULE_12__["JsonStoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _provider_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sigpad1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"])
    ], CloserDetailPage.prototype, "signaturePad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sigpad2', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"])
    ], CloserDetailPage.prototype, "signaturePad1", void 0);
    CloserDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-closer-detail',
            template: __webpack_require__(/*! raw-loader!./closer-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/closer-detail/closer-detail.page.html"),
            styles: [__webpack_require__(/*! ./closer-detail.page.scss */ "./src/app/closer-detail/closer-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_16__["MediaCapture"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["IOSFilePicker"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeStorage"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _provider_json_store_service__WEBPACK_IMPORTED_MODULE_12__["JsonStoreService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _provider_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CloserDetailPage);
    return CloserDetailPage;
}());



/***/ }),

/***/ "./src/app/provider/json-store.service.ts":
/*!************************************************!*\
  !*** ./src/app/provider/json-store.service.ts ***!
  \************************************************/
/*! exports provided: JsonStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonStoreService", function() { return JsonStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");





var JsonStoreService = /** @class */ (function () {
    function JsonStoreService(nativeStorage, http, alertCtrl, loadingCtrl) {
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello JsonStoreProvider Provider');
    }
    JsonStoreService.prototype.jsonStoreData = function (setKey, JSONKey, jsonData, collectionName) {
        // var addOptions = {};
        // jsonData = {
        // 	collectionKey: setKey,
        // 	jsonData: jsonData,
        // 	JSONKey:JSONKey,
        // };
        // return new Promise((resolve, reject) => {
        // 	this.JSONStore.get(collectionName).add(jsonData, addOptions).then(function (numberOfDocumentsAdded) {
        // 		console.log("successfully " + setKey + " inserted..");
        // 		resolve(true);
        // 	}).fail(function (errorObject) {
        // 		console.log(errorObject);
        // 		reject(false);
        // 	});
        // });
        this.nativeStorage.setItem('myitem', { property: 'value', anotherProperty: 'anotherValue' })
            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
        this.nativeStorage.getItem('myitem')
            .then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    JsonStoreService.prototype.intiateJSONStore = function () {
        try {
            var collections = {
                AllMasterSyncData: {
                    searchFields: { collectionKey: 'string' }
                },
                oflineQuestionData: {
                    searchFields: { collectionKey: 'string' }
                }
            };
            var options = {};
            var thisJS = this;
            return new Promise(function (resolve, reject) {
                WL.JSONStore.init(collections, options).then(function (res) {
                    resolve(true);
                });
            });
        }
        catch (e) { }
    };
    JsonStoreService.prototype.jsonStoregetDataByKey = function (SearchBy, collName) {
        try {
            var collections = {
                AllMasterSyncData: {
                    searchFields: { collectionKey: 'string' }
                },
                // AllOtherData: {
                // 	searchFields: { collectionKey: 'string' }
                // },
                oflineQuestionData: {
                    searchFields: { collectionKey: 'string' }
                }
            };
            var options = {};
            var thisJS = this;
            return new Promise(function (resolve, reject) {
                WL.JSONStore.init(collections, options).then(function (res) {
                    var query;
                    query = {
                        collectionKey: SearchBy
                    };
                    var collectionName = collName;
                    var options = {
                        exact: true,
                    };
                    if (WL.JSONStore.get(collectionName) != undefined) {
                        //return new Promise((resolve, reject) => {
                        WL.JSONStore.get(collectionName).find(query, options).then(function (results) {
                            if (results.length != 0) {
                                resolve(results);
                            }
                            else {
                                resolve("");
                            }
                        });
                        /// });
                    }
                    else {
                        var collections = {
                            AllMasterSyncData: {
                                searchFields: { collectionKey: 'string' }
                            },
                            // AllOtherData: {
                            // 	searchFields: {
                            // 		collectionKey: 'string'
                            // 	}
                            // },
                            oflineQuestionData: {
                                nh: { collectionKey: 'string' }
                            }
                        };
                        var options1 = {};
                        return new Promise(function (resolve, reject) {
                            WL.JSONStore.init()(collections, options1).then(function (res) {
                                resolve("created");
                            });
                        });
                    }
                });
            });
        }
        catch (e) { }
    };
    JsonStoreService.prototype.removeDataLocaly = function (key) {
        var collectionName = 'oflineQuestionData';
        var options = {
            push: true
        };
        var query = { _id: key };
        if (key != '' && key != undefined) {
            query = { _id: key };
            console.log(query);
            // var query = {};
            // if (key != '' && key != undefined) {
            // 	query = {_id:1};
            // }
            return new Promise(function (resolve, reject) {
                WL.JSONStore.get(collectionName).remove(query, options).then(function (numberOfDocumentsRemoved) {
                    resolve(true);
                    console.log("successfully Destroyed..");
                }).fail(function (errorObject) {
                    resolve(false);
                    console.log("fail to Destroy");
                });
            });
        }
        else {
            try {
                WL.JSONStore.destroy().then(function () {
                    var collections = {
                        AllMasterSyncData: {
                            searchFields: { collectionKey: 'string' }
                        },
                        // AllOtherData: {
                        // 	searchFields: {
                        // 		collectionKey: 'string'
                        // 	}
                        // },
                        oflineQuestionData: {
                            searchFields: {
                                collectionKey: 'string'
                            }
                        }
                    };
                    var options = {};
                    WL.JSONStore.init(collections, options).then(function (res) {
                        //console.log(res);
                    });
                });
            }
            catch (e) {
                alert(e);
            }
        }
    };
    JsonStoreService.prototype.removeSyncDataLocaly = function (key) {
        var collectionName = 'AllMasterSyncData';
        var options = {
            push: true
        };
        var query = { _id: key };
        if (key != '' && key != undefined) {
            query = { _id: key };
            console.log(query);
            // var query = {};
            // if (key != '' && key != undefined) {
            // 	query = {_id:1};
            // }
            return new Promise(function (resolve, reject) {
                WL.JSONStore.get(collectionName).remove(query, options).then(function (numberOfDocumentsRemoved) {
                    resolve(true);
                    console.log("successfully Destroyed..");
                }).fail(function (errorObject) {
                    resolve(false);
                    console.log("fail to Destroy");
                });
            });
        }
        else {
            try {
                WL.JSONStore.destroy().then(function () {
                    var collections = {
                        AllMasterSyncData: {
                            searchFields: { collectionKey: 'string' }
                        },
                        // AllOtherData: {
                        // 	searchFields: {
                        // 		collectionKey: 'string'
                        // 	}
                        // },
                        oflineQuestionData: {
                            searchFields: {
                                collectionKey: 'string'
                            }
                        }
                    };
                    var options = {};
                    WL.JSONStore.init(collections, options).then(function (res) {
                        //console.log(res);
                    });
                });
            }
            catch (e) {
                alert(e);
            }
        }
    };
    // showAlert(msg) {
    // 	let alert = this.alertCtrl.create({
    // 		title: 'Alert',
    // 		subTitle: msg,
    // 		buttons: ['OK']
    // 	});
    // 	alert.present();
    // }
    // showToast(text) {
    // 	const toast = this.toastCtrl.create({
    // 		message: text,
    // 		duration: 3000,
    // 		position: 'top',
    // 		cssClass: "ToastCssClassName",
    // 	});
    // 	toast.present();
    // }
    JsonStoreService.prototype.removjsonrcd = function (id) {
        var query = { _id: 1 };
        var collectionName = 'AllOtherData';
        var options = { exact: true };
        return new Promise(function (resolve, reject) {
            WL.JSONStore.get(collectionName).remove(query, options).then(function (numberOfDocsRemoved) {
                // handle success
            }).fail(function (error) {
                // handle failure
            });
        });
    };
    JsonStoreService.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    JsonStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], JsonStoreService);
    return JsonStoreService;
}());



/***/ })

}]);
//# sourceMappingURL=closer-detail-closer-detail-module-es5.js.map