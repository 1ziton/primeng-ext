webpackJsonp([37],{

/***/ "./src/app/components/codehighlighter/codehighlighter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* unused harmony export CodeHighlighter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeHighlighter = (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngOnInit = function () {
        Prism.highlightElement(this.el.nativeElement);
    };
    return CodeHighlighter;
}());
CodeHighlighter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[pCode]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CodeHighlighter);

var CodeHighlighterModule = (function () {
    function CodeHighlighterModule() {
    }
    return CodeHighlighterModule;
}());
CodeHighlighterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [CodeHighlighter],
        declarations: [CodeHighlighter]
    })
], CodeHighlighterModule);

var _a;
//# sourceMappingURL=codehighlighter.js.map

/***/ }),

/***/ "./src/app/components/inputtext/inputtext.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* unused harmony export InputText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputText = (function () {
    function InputText(el) {
        this.el = el;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    };
    return InputText;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InputText.prototype, "onInput", null);
InputText = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[pInputText]',
        host: {
            '[class.ui-inputtext]': 'true',
            '[class.ui-corner-all]': 'true',
            '[class.ui-state-default]': 'true',
            '[class.ui-widget]': 'true',
            '[class.ui-state-filled]': 'filled'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], InputText);

var InputTextModule = (function () {
    function InputTextModule() {
    }
    return InputTextModule;
}());
InputTextModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [InputText],
        declarations: [InputText]
    })
], InputTextModule);

var _a;
//# sourceMappingURL=inputtext.js.map

/***/ }),

/***/ "./src/app/components/slider/slider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* unused harmony export SLIDER_VALUE_ACCESSOR */
/* unused harmony export Slider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SLIDER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Slider; }),
    multi: true
};
var Slider = (function () {
    function Slider(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSlideEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.handleValues = [];
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Slider.prototype.onMouseDown = function (event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        this.handleIndex = index;
        event.preventDefault();
    };
    Slider.prototype.onTouchStart = function (event, index) {
        var touchobj = event.changedTouches[0];
        this.startHandleValue = (this.range) ? this.handleValues[index] : this.handleValue;
        this.dragging = true;
        this.handleIndex = index;
        if (this.orientation === 'horizontal') {
            this.startx = parseInt(touchobj.clientX, 10);
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        }
        else {
            this.starty = parseInt(touchobj.clientY, 10);
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        }
        event.preventDefault();
    };
    Slider.prototype.onTouchMove = function (event, index) {
        var touchobj = event.changedTouches[0], handleValue = 0;
        if (this.orientation === 'horizontal') {
            handleValue = Math.floor(((parseInt(touchobj.clientX, 10) - this.startx) * 100) / (this.barWidth)) + this.startHandleValue;
        }
        else {
            handleValue = Math.floor(((this.starty - parseInt(touchobj.clientY, 10)) * 100) / (this.barHeight)) + this.startHandleValue;
        }
        this.setValueFromHandle(event, handleValue);
        event.preventDefault();
    };
    Slider.prototype.onBarClick = function (event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    };
    Slider.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.dragListener = this.renderer.listen('document', 'mousemove', function (event) {
            if (_this.dragging) {
                _this.handleChange(event);
            }
        });
        this.mouseupListener = this.renderer.listen('document', 'mouseup', function (event) {
            if (_this.dragging) {
                _this.dragging = false;
                if (_this.range) {
                    _this.onSlideEnd.emit({ originalEvent: event, values: _this.values });
                }
                else {
                    _this.onSlideEnd.emit({ originalEvent: event, value: _this.value });
                }
            }
        });
    };
    Slider.prototype.handleChange = function (event) {
        var handleValue = this.calculateHandleValue(event);
        this.setValueFromHandle(event, handleValue);
    };
    Slider.prototype.setValueFromHandle = function (event, handleValue) {
        var newValue = this.getValueFromHandle(handleValue);
        if (this.range) {
            if (this.step) {
                this.handleStepChange(newValue, this.values[this.handleIndex]);
            }
            else {
                this.handleValues[this.handleIndex] = handleValue;
                this.updateValue(newValue, event);
            }
        }
        else {
            if (this.step) {
                this.handleStepChange(newValue, this.value);
            }
            else {
                this.handleValue = handleValue;
                this.updateValue(newValue, event);
            }
        }
    };
    Slider.prototype.handleStepChange = function (newValue, oldValue) {
        var diff = (newValue - oldValue);
        if (diff < 0 && (-1 * diff) >= this.step / 2) {
            newValue = oldValue - this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
        else if (diff > 0 && diff >= this.step / 2) {
            newValue = oldValue + this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
    };
    Slider.prototype.writeValue = function (value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
    };
    Slider.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Slider.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Slider.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Object.defineProperty(Slider.prototype, "rangeStartLeft", {
        get: function () {
            return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeStartBottom", {
        get: function () {
            return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeEndLeft", {
        get: function () {
            return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "rangeEndBottom", {
        get: function () {
            return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.isVertical = function () {
        return this.orientation === 'vertical';
    };
    Slider.prototype.updateDomData = function () {
        var rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + this.domHandler.getWindowScrollLeft();
        this.initY = rect.top + this.domHandler.getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    };
    Slider.prototype.calculateHandleValue = function (event) {
        if (this.orientation === 'horizontal')
            return Math.floor(((event.pageX - this.initX) * 100) / (this.barWidth));
        else
            return Math.floor((((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight));
    };
    Slider.prototype.updateHandleValue = function () {
        if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
        }
        else {
            if (this.value < this.min)
                this.handleValue = 0;
            else if (this.value > this.max)
                this.handleValue = 100;
            else
                this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
        }
    };
    Slider.prototype.updateValue = function (val, event) {
        if (this.range) {
            var value = val;
            if (this.handleIndex == 0) {
                if (value < this.min) {
                    value = this.min;
                    this.handleValues[0] = 0;
                }
                else if (value > this.values[1]) {
                    value = this.values[1];
                    this.handleValues[0] = this.handleValues[1];
                }
            }
            else {
                if (value > this.max) {
                    value = this.max;
                    this.handleValues[1] = 100;
                }
                else if (value < this.values[0]) {
                    value = this.values[0];
                    this.handleValues[1] = this.handleValues[0];
                }
            }
            this.values[this.handleIndex] = Math.floor(value);
            this.onModelChange(this.values);
            this.onChange.emit({ event: event, values: this.values });
        }
        else {
            if (val < this.min) {
                val = this.min;
                this.handleValue = 0;
            }
            else if (val > this.max) {
                val = this.max;
                this.handleValue = 100;
            }
            this.value = Math.floor(val);
            this.onModelChange(this.value);
            this.onChange.emit({ event: event, value: this.value });
        }
    };
    Slider.prototype.getValueFromHandle = function (handleValue) {
        return (this.max - this.min) * (handleValue / 100) + this.min;
    };
    Slider.prototype.ngOnDestroy = function () {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    };
    return Slider;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Slider.prototype, "animate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Slider.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Slider.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Slider.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Slider.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Slider.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Slider.prototype, "range", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Slider.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Slider.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], Slider.prototype, "onChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], Slider.prototype, "onSlideEnd", void 0);
Slider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'p-slider',
        template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,\n            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}\"\n            (click)=\"onBarClick($event)\">\n            <span *ngIf=\"range && orientation == 'horizontal'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"range && orientation == 'vertical'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"!range && orientation=='vertical'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'height': handleValue + '%'}\"></span>\n            <span *ngIf=\"!range\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" (mousedown)=\"onMouseDown($event)\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"dragging=false\"\n                [style.transition]=\"dragging ? 'none': null\" [ngStyle]=\"{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}\"></span>\n            <span *ngIf=\"range\" (mousedown)=\"onMouseDown($event,0)\" (touchstart)=\"onTouchStart($event,0)\" (touchmove)=\"onTouchMove($event,0)\" (touchend)=\"dragging=false\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeStartLeft, 'bottom': rangeStartBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==0}\"></span>\n            <span *ngIf=\"range\" (mousedown)=\"onMouseDown($event,1)\" (touchstart)=\"onTouchStart($event,1)\" (touchmove)=\"onTouchMove($event,1)\" (touchend)=\"dragging=false\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeEndLeft, 'bottom': rangeEndBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==1}\"></span>\n        </div>\n    ",
        providers: [SLIDER_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _e || Object])
], Slider);

var SliderModule = (function () {
    function SliderModule() {
    }
    return SliderModule;
}());
SliderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [Slider],
        declarations: [Slider]
    })
], SliderModule);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./src/app/components/tabview/tabview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* unused harmony export TabViewNav */
/* unused harmony export TabPanel */
/* unused harmony export TabView */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabViewNav = (function () {
    function TabViewNav() {
        this.orientation = 'top';
        this.onTabClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTabCloseClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TabViewNav.prototype.getDefaultHeaderClass = function (tab) {
        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    };
    TabViewNav.prototype.clickTab = function (event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    TabViewNav.prototype.clickClose = function (event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    return TabViewNav;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TabViewNav.prototype, "tabs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabViewNav.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TabViewNav.prototype, "onTabClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TabViewNav.prototype, "onTabCloseClick", void 0);
TabViewNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[p-tabViewNav]',
        host: {
            '[class.ui-tabview-nav]': 'true',
            '[class.ui-helper-reset]': 'true',
            '[class.ui-helper-clearfix]': 'true',
            '[class.ui-widget-header]': 'true',
            '[class.ui-corner-all]': 'true'
        },
        template: "\n        <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n            <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"tab\"\n                [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}\"\n                (click)=\"clickTab($event,tab)\" *ngIf=\"!tab.closed\"\n                [attr.aria-expanded]=\"tab.selected\" [attr.aria-selected]=\"tab.selected\">\n                <a href=\"#\">\n                    <span class=\"ui-tabview-left-icon fa\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                    <span class=\"ui-tabview-title\">{{tab.header}}</span>\n                    <span class=\"ui-tabview-right-icon fa\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                </a>\n                <span *ngIf=\"tab.closable\" class=\"ui-tabview-close fa fa-close\" (click)=\"clickClose($event,tab)\"></span>\n            </li>\n        </ng-template>\n    ",
    })
], TabViewNav);

var TabPanel = (function () {
    function TabPanel(viewContainer) {
        this.viewContainer = viewContainer;
        this.cache = true;
    }
    TabPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(TabPanel.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            this.loaded = true;
        },
        enumerable: true,
        configurable: true
    });
    TabPanel.prototype.ngOnDestroy = function () {
        this.view = null;
    };
    return TabPanel;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabPanel.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabPanel.prototype, "headerStyle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabPanel.prototype, "headerStyleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabPanel.prototype, "leftIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabPanel.prototype, "rightIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "cache", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["a" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _c || Object)
], TabPanel.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabPanel.prototype, "selected", null);
TabPanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'p-tabPanel',
        template: "\n        <div class=\"ui-tabview-panel ui-widget-content\" [style.display]=\"selected ? 'block' : 'none'\" \n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" *ngIf=\"!closed\">\n            <ng-content></ng-content>\n            <p-templateLoader [template]=\"contentTemplate\" *ngIf=\"contentTemplate&&(cache ? loaded : selected)\"></p-templateLoader>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], TabPanel);

var TabView = (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TabView.prototype, "lazy", {
        get: function () {
            return this._lazy;
        },
        set: function (val) {
            this._lazy = val;
            console.log('Lazy property of TabView is deprecated, use an ngTemplate inside a TabPanel instead for Lazy Loading');
        },
        enumerable: true,
        configurable: true
    });
    TabView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabPanels.changes.subscribe(function (_) {
            _this.initTabs();
        });
    };
    TabView.prototype.initTabs = function () {
        this.tabs = this.tabPanels.toArray();
        var selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    };
    TabView.prototype.open = function (event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            var selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
        }
        if (event) {
            event.preventDefault();
        }
    };
    TabView.prototype.close = function (event, tab) {
        var _this = this;
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: function () {
                    _this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    };
    TabView.prototype.closeTab = function (tab) {
        if (tab.selected) {
            tab.selected = false;
            for (var i = 0; i < this.tabs.length; i++) {
                var tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    };
    TabView.prototype.findSelectedTab = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    };
    TabView.prototype.findTabIndex = function (tab) {
        var index = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    };
    TabView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(TabView.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
                this.findSelectedTab().selected = false;
                this.tabs[this._activeIndex].selected = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TabView;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabView.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabView.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabView.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabView.prototype, "controlClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(TabPanel),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _e || Object)
], TabView.prototype, "tabPanels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], TabView.prototype, "onChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], TabView.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabView.prototype, "lazy", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TabView.prototype, "activeIndex", null);
TabView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'p-tabView',
        template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\" \n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object])
], TabView);

var TabViewModule = (function () {
    function TabViewModule() {
    }
    return TabViewModule;
}());
TabViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* SharedModule */]],
        exports: [TabView, TabPanel, TabViewNav, __WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* SharedModule */]],
        declarations: [TabView, TabPanel, TabViewNav]
    })
], TabViewModule);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=tabview.js.map

/***/ }),

/***/ "./src/app/showcase/components/slider/sliderdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliderdemo__ = __webpack_require__("./src/app/showcase/components/slider/sliderdemo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderDemoRoutingModule = (function () {
    function SliderDemoRoutingModule() {
    }
    return SliderDemoRoutingModule;
}());
SliderDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sliderdemo__["a" /* SliderDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], SliderDemoRoutingModule);

//# sourceMappingURL=sliderdemo-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/slider/sliderdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Slider</span>\r\n        <span>Slider is a component to provide input using dragging of a handle.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic: {{val1}}</h3>\r\n    <p-slider [(ngModel)]=\"val1\" [style]=\"{'width':'200px'}\"></p-slider>\r\n\r\n    <h3>Input: {{val2}}</h3>\r\n    <input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\" readonly/>\r\n    <p-slider [(ngModel)]=\"val2\" [style]=\"{'width':'200px'}\"></p-slider>\r\n\r\n    <h3>Animate: {{val3}}</h3>\r\n    <p-slider [(ngModel)]=\"val3\" [style]=\"{'width':'200px'}\" [animate]=\"true\"></p-slider>\r\n\r\n    <h3>Step: {{val4}}</h3>\r\n    <p-slider [(ngModel)]=\"val4\" [style]=\"{'width':'200px'}\" [step]=\"20\"></p-slider>\r\n\r\n    <h3>Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}</h3>\r\n    <p-slider [(ngModel)]=\"rangeValues\" [style]=\"{'width':'200px'}\" [range]=\"true\"></p-slider>\r\n\r\n    <h3>Vertical: {{val5}}</h3>\r\n    <p-slider [(ngModel)]=\"val5\" [style]=\"{'height':'200px'}\" orientation=\"vertical\"></p-slider>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SliderModule&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way binding is defined using the standard ngModel directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    val: number;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Slider can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider formControlName=\"age\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Min-Max</h3>\r\n            <p>Boundaries are specified with min and max attributes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Step</h3>\r\n            <p>Step factor is 1 by default and can be customized with step option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" [step]=\"10\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Range</h3>\r\n            <p>Range slider provides two handles to define two values. In this case, value binding should refer to an array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    rangeValues: number[];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Orientation</h3>\r\n            <p>Sliders supports two orientations, horizontal is the default and other alternative is vertical.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>animate</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, displays an animation on click of the slider bar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>min</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Mininum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>max</td>\r\n                            <td>number</td>\r\n                            <td>100</td>\r\n                            <td>Maximum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>orientation</td>\r\n                            <td>string</td>\r\n                            <td>horizontal</td>\r\n                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>step</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Step factor to increment/decrement the value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>range</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When speficed, allows two boundary values to be picked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>\r\n                                event.originalEvent: Slide event <br />\r\n                                event.value: New value <br />\r\n                                event.values: Values in range mode <br />\r\n                            </td>\r\n                            <td>Callback to invoke on value change via slide.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSlideEnd</td>\r\n                            <td>\r\n                                event.originalEvent: Mouseup event<br />\r\n                                event.value: New value \r\n                            </td>\r\n                            <td>Callback to invoke when slide stops.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" (onChange)=\"handleChange($event)\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nhandleChange(e) &#123;\r\n    //e.value is the new value\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-slider</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-slider-handle</td>\r\n                            <td>Handle element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slider\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic: {{val1}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val1\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Input: {{val2}}&lt;/h3&gt;\r\n&lt;input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\"/&gt;\r\n&lt;p-slider [(ngModel)]=\"val2\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Animate: {{val3}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val3\" [style]=\"&#123;'width':'200px'&#125;\" [animate]=\"true\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Step: {{val4}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val4\" [style]=\"&#123;'width':'200px'&#125;\" [step]=\"20\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"rangeValues\" [style]=\"&#123;'width':'200px'&#125;\" [range]=\"true\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Vertical: {{val5}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val5\" [style]=\"&#123;'height':'200px'&#125;\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SliderDemo &#123;\r\n\r\n    val1: number;\r\n\r\n    val2: number = 50;\r\n\r\n    val3: number;\r\n\r\n    val4: number;\r\n\r\n    val5: number;\r\n\r\n    rangeValues: number[] = [20,80];\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/slider/sliderdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliderdemo__ = __webpack_require__("./src/app/showcase/components/slider/sliderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/slider/sliderdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__ = __webpack_require__("./src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemoModule", function() { return SliderDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SliderDemoModule = (function () {
    function SliderDemoModule() {
    }
    return SliderDemoModule;
}());
SliderDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__["a" /* SliderDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__["a" /* SliderModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__["a" /* InputTextModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sliderdemo__["a" /* SliderDemo */]
        ]
    })
], SliderDemoModule);

//# sourceMappingURL=sliderdemo.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/slider/sliderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderDemo = (function () {
    function SliderDemo() {
        this.val2 = 50;
        this.rangeValues = [20, 80];
    }
    return SliderDemo;
}());
SliderDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/app/showcase/components/slider/sliderdemo.html")
    })
], SliderDemo);

//# sourceMappingURL=sliderdemo.js.map

/***/ })

});
//# sourceMappingURL=37.chunk.js.map