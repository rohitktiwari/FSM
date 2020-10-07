(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ticket-detail-ticket-detail-module~ticket-ticket-module"],{

/***/ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js ***!
  \***************************************************************************/
/*! exports provided: TooltipComponent, TooltipDirective, TooltipModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TooltipOptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype.transitionEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show) {
            this.events.emit({
                type: 'shown'
            });
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "show", {
        get: /**
         * @return {?}
         */
        function () {
            return this._show;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.setPosition();
            }
            this._show = this.hostClassShow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "placement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options.placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "autoPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options.autoPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "elementPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.elementPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "tooltipOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return Number(this.data.options.offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "isThemeLight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options['theme'] === 'light';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPlacementClass();
        this.setCustomClass();
        this.setStyles();
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.setHostStyle(this.placement) || !this.autoPlacement) {
            this.setPlacementClass(this.placement);
            return;
        }
        else {
            /** @type {?} */
            var placements = ['top', 'right', 'bottom', 'left'];
            try {
                for (var placements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(placements), placements_1_1 = placements_1.next(); !placements_1_1.done; placements_1_1 = placements_1.next()) {
                    var placement = placements_1_1.value;
                    if (this.setHostStyle(placement)) {
                        this.setPlacementClass(placement);
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (placements_1_1 && !placements_1_1.done && (_a = placements_1.return)) _a.call(placements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?=} placement
     * @return {?}
     */
    TooltipComponent.prototype.setPlacementClass = /**
     * @param {?=} placement
     * @return {?}
     */
    function (placement) {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + placement);
    };
    /**
     * @param {?} placement
     * @return {?}
     */
    TooltipComponent.prototype.setHostStyle = /**
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        /** @type {?} */
        var isSvg = this.element instanceof SVGElement;
        /** @type {?} */
        var tooltip = this.elementRef.nativeElement;
        /** @type {?} */
        var isCustomPosition = !this.elementPosition.right;
        /** @type {?} */
        var elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
        /** @type {?} */
        var elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
        /** @type {?} */
        var tooltipHeight = tooltip.clientHeight;
        /** @type {?} */
        var tooltipWidth = tooltip.clientWidth;
        /** @type {?} */
        var scrollY = window.pageYOffset;
        if (isCustomPosition) {
            elementHeight = 0;
            elementWidth = 0;
        }
        /** @type {?} */
        var topStyle;
        /** @type {?} */
        var leftStyle;
        if (placement === 'top') {
            topStyle = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset);
        }
        if (placement === 'bottom') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset;
        }
        if (placement === 'top' || placement === 'bottom') {
            leftStyle = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2;
        }
        if (placement === 'left') {
            leftStyle = this.elementPosition.left - tooltipWidth - this.tooltipOffset;
        }
        if (placement === 'right') {
            leftStyle = this.elementPosition.left + elementWidth + this.tooltipOffset;
        }
        if (placement === 'left' || placement === 'right') {
            topStyle = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2;
        }
        /** @type {?} */
        var topEdge = topStyle;
        /** @type {?} */
        var bottomEdge = topStyle + tooltipHeight;
        /** @type {?} */
        var leftEdge = leftStyle;
        /** @type {?} */
        var rightEdge = leftStyle + tooltipWidth;
        if ((topEdge < 0 || bottomEdge > document.body.clientHeight || leftEdge < 0 || rightEdge > document.body.clientWidth) && this.autoPlacement) {
            return false;
        }
        this.hostStyleTop = topStyle + 'px';
        this.hostStyleLeft = leftStyle + 'px';
        return true;
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setZIndex = /**
     * @return {?}
     */
    function () {
        if (this.options['zIndex'] !== 0) {
            this.hostStyleZIndex = this.options['zIndex'];
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPointerEvents = /**
     * @return {?}
     */
    function () {
        if (this.options['pointerEvents']) {
            this.hostStylePointerEvents = this.options['pointerEvents'];
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setCustomClass = /**
     * @return {?}
     */
    function () {
        if (this.options['tooltipClass']) {
            this.renderer.addClass(this.elementRef.nativeElement, this.options['tooltipClass']);
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setAnimationDuration = /**
     * @return {?}
     */
    function () {
        if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
            this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setStyles = /**
     * @return {?}
     */
    function () {
        this.setZIndex();
        this.setPointerEvents();
        this.setAnimationDuration();
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['maxWidth'] + "px";
        this.hostStyleWidth = this.options['width'] ? this.options['width'] + "px" : '';
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'tooltip',
                    template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['contentType'] === 'template' else htmlOrStringTemplate\" \r\n    [ngClass]=\"{'tooltip-arrow': isThemeLight }\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                    host: {
                        'class': 'tooltip'
                    },
                    styles: [":host{max-width:200px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 8px;position:absolute;pointer-events:none;z-index:1000;display:block;opacity:0;transition:opacity .3s;top:0;left:0}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip::after{content:\"\";position:absolute;border-style:solid}:host.tooltip-top::after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}:host.tooltip-bottom::after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}:host.tooltip-left::after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}:host.tooltip-right::after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}:host.tooltip-light::after{display:none}:host.tooltip-light{border:1px solid rgba(0,0,0,.06);background-color:#fff;color:#000}:host.tooltip-light .tooltip-arrow{position:absolute;width:10px;height:10px;-webkit-transform:rotate(135deg);transform:rotate(135deg);background-color:rgba(0,0,0,.07)}:host.tooltip-light .tooltip-arrow::after{background-color:#fff;content:'';display:block;position:absolute;width:10px;height:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{top:100%;left:50%;margin-top:-4px;margin-left:-5px;background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-top.tooltip-light .tooltip-arrow::after{top:1px;right:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px;background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 50%)}:host.tooltip-bottom.tooltip-light .tooltip-arrow::after{top:-1px;right:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{top:50%;left:100%;margin-top:-5px;margin-left:-4px;background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-left.tooltip-light .tooltip-arrow::after{top:1px;right:-1px}:host.tooltip-right.tooltip-light .tooltip-arrow{top:50%;right:100%;margin-top:-5px;margin-right:-4px;background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-right.tooltip-light .tooltip-arrow::after{top:-1px;right:1px}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    TooltipComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hostStyleTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.top',] }],
        hostStyleLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.left',] }],
        hostStyleZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.z-index',] }],
        hostStyleTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.transition',] }],
        hostStyleWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.width',] }],
        hostStyleMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.max-width',] }],
        hostStylePointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.pointer-events',] }],
        hostClassShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.tooltip-show',] }],
        hostClassShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.tooltip-shadow',] }],
        hostClassLight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.tooltip-light',] }],
        transitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['transitionend', ['$event'],] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config (initOptions) object, provided from the outside
 * @type {?}
 */
var TooltipOptionsService = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TooltipOptions');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultOptions = {
    'placement': 'top',
    'autoPlacement': true,
    'contentType': 'string',
    'showDelay': 0,
    'hideDelay': 300,
    'hideDelayMobile': 0,
    'hideDelayTouchscreen': 0,
    'zIndex': 0,
    'animationDuration': 300,
    'animationDurationDefault': 300,
    'trigger': 'hover',
    'tooltipClass': '',
    'display': true,
    'displayMobile': true,
    'displayTouchscreen': true,
    'shadow': true,
    'theme': 'dark',
    'offset': 8,
    'maxWidth': '',
    'id': false,
    'hideDelayAfterClick': 2000
};
/** @type {?} */
var backwardCompatibilityOptions = {
    'delay': 'showDelay',
    'show-delay': 'showDelay',
    'hide-delay': 'hideDelay',
    'hide-delay-mobile': 'hideDelayTouchscreen',
    'hideDelayMobile': 'hideDelayTouchscreen',
    'z-index': 'zIndex',
    'animation-duration': 'animationDuration',
    'animation-duration-default': 'animationDurationDefault',
    'tooltip-class': 'tooltipClass',
    'display-mobile': 'displayTouchscreen',
    'displayMobile': 'displayTouchscreen',
    'max-width': 'maxWidth'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
        this.initOptions = initOptions;
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(TooltipDirective.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && defaultOptions) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isTooltipDestroyed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef && this.componentRef.hostView.destroyed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "destroyDelay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._destroyDelay) {
                return this._destroyDelay;
            }
            else {
                return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._destroyDelay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "tooltipPosition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['position']) {
                return this.options['position'];
            }
            else {
                return this.elementPosition;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.destroyTooltip();
        }), this.options['hideDelayAfterClick']);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.initOptions = this.renameProperties(this.initOptions);
        /** @type {?} */
        var changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultOptions, changedOptions);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip({
            fast: true
        });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getShowDelay = /**
     * @return {?}
     */
    function () {
        return this.options['showDelay'];
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getHideDelay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hideDelay = this.options['hideDelay'];
        /** @type {?} */
        var hideDelayTouchscreen = this.options['hideDelayTouchscreen'];
        return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.getProperties = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var properties = {};
        for (var prop in changes) {
            if (prop !== 'options' && prop !== 'tooltipValue') {
                properties[prop] = changes[prop].currentValue;
            }
            if (prop === 'options') {
                properties = changes[prop].currentValue;
            }
        }
        return properties;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    TooltipDirective.prototype.renameProperties = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var prop in options) {
            if (backwardCompatibilityOptions[prop]) {
                options[backwardCompatibilityOptions[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getElementPosition = /**
     * @return {?}
     */
    function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.createTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.appendComponentToBody(TooltipComponent);
        }), this.getShowDelay());
        this.showTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.showTooltipElem();
        }), this.getShowDelay());
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TooltipDirective.prototype.destroyTooltip = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (options === void 0) { options = {
            fast: false
        }; }
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                _this.hideTooltip();
            }), options.fast ? 0 : this.getHideDelay());
            this.destroyTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.componentRef || _this.isTooltipDestroyed) {
                    return;
                }
                _this.appRef.detachView(_this.componentRef.hostView);
                _this.componentRef.destroy();
                _this.events.emit({
                    type: 'hidden',
                    position: _this.tooltipPosition
                });
            }), options.fast ? 0 : this.destroyDelay);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.showTooltipElem = /**
     * @return {?}
     */
    function () {
        this.clearTimeouts();
        ((/** @type {?} */ (this.componentRef.instance))).show = true;
        this.events.emit({
            type: 'show',
            position: this.tooltipPosition
        });
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hideTooltip = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ((/** @type {?} */ (this.componentRef.instance))).show = false;
        this.events.emit({
            type: 'hide',
            position: this.tooltipPosition
        });
    };
    /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    TooltipDirective.prototype.appendComponentToBody = /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    function (component, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        ((/** @type {?} */ (this.componentRef.instance))).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.tooltipPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.componentSubscribe = ((/** @type {?} */ (this.componentRef.instance))).events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.handleEvents(event);
        }));
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.clearTimeouts = /**
     * @return {?}
     */
    function () {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnHover", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
                return false;
            }
            if (this.options['trigger'] !== 'hover') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnClick", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
                return false;
            }
            if (this.options['trigger'] != 'click') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isTouchScreen", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            /** @type {?} */
            var mq = (/**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                return window.matchMedia(query).matches;
            });
            if (('ontouchstart' in window)) {
                return true;
            }
            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            /** @type {?} */
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    TooltipDirective.prototype.applyOptionsDefault = /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    function (defaultOptions$$1, options) {
        this.options = Object.assign({}, defaultOptions$$1, this.initOptions || {}, options);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.handleEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'shown') {
            this.events.emit({
                type: 'shown',
                position: this.tooltipPosition
            });
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[tooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TooltipOptionsService,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TooltipDirective.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['options',] }],
        tooltipValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['tooltip',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['placement',] }],
        autoPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['autoPlacement',] }],
        contentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['content-type',] }],
        hideDelayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hide-delay-mobile',] }],
        hideDelayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hideDelayTouchscreen',] }],
        zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['z-index',] }],
        animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['animation-duration',] }],
        trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['trigger',] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['tooltip-class',] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['display',] }],
        displayMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['display-mobile',] }],
        displayTouchscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['displayTouchscreen',] }],
        shadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['shadow',] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['theme',] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['offset',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['width',] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['max-width',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }],
        showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['show-delay',] }],
        hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hide-delay',] }],
        hideDelayAfterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hideDelayAfterClick',] }],
        pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['pointerEvents',] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['position',] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focusin',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseenter',] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focusout',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @param {?} initOptions
     * @return {?}
     */
    TooltipModule.forRoot = /**
     * @param {?} initOptions
     * @return {?}
     */
    function (initOptions) {
        return {
            ngModule: TooltipModule,
            providers: [
                {
                    provide: TooltipOptionsService,
                    useValue: initOptions
                }
            ]
        };
    };
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        TooltipDirective
                    ],
                    entryComponents: [
                        TooltipComponent
                    ]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng2-tooltip-directive.js.map

/***/ })

}]);
//# sourceMappingURL=default~ticket-detail-ticket-detail-module~ticket-ticket-module-es5.js.map