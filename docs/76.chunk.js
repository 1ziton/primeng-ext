webpackJsonp([76],{

/***/ "./src/app/components/autocomplete/autocomplete.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_objectutils__ = __webpack_require__("./src/app/components/utils/objectutils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* unused harmony export AUTOCOMPLETE_VALUE_ACCESSOR */
/* unused harmony export AutoComplete */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* forwardRef */])(function () { return AutoComplete; }),
    multi: true
};
var AutoComplete = (function () {
    function AutoComplete(el, domHandler, renderer, objectUtils, cd, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.objectUtils = objectUtils;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.completeMethod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onDropdownClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onClear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onKeyUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.scrollHeight = '200px';
        this.immutable = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.panelVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
    }
    Object.defineProperty(AutoComplete.prototype, "suggestions", {
        get: function () {
            return this._suggestions;
        },
        set: function (val) {
            this._suggestions = val;
            if (this.immutable) {
                this.handleSuggestionsChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    AutoComplete.prototype.ngDoCheck = function () {
        if (!this.immutable) {
            var changes = this.differ.diff(this.suggestions);
            if (changes) {
                this.handleSuggestionsChange();
            }
        }
    };
    AutoComplete.prototype.handleSuggestionsChange = function () {
        if (this.panelEL && this.panelEL.nativeElement && this.loading) {
            this.highlightOption = null;
            if (this._suggestions && this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
        }
        this.loading = false;
    };
    AutoComplete.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    _this.selectedItemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    AutoComplete.prototype.ngAfterViewInit = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panelEL.nativeElement);
            else
                this.domHandler.appendChild(this.panelEL.nativeElement, this.appendTo);
        }
    };
    AutoComplete.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.panelEL.nativeElement && this.panelEL.nativeElement.offsetParent) {
            setTimeout(function () { return _this.align(); }, 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(function () {
                var listItem = _this.domHandler.findSingle(_this.panelEL.nativeElement, 'li.ui-state-highlight');
                if (listItem) {
                    _this.domHandler.scrollInView(_this.panelEL.nativeElement, listItem);
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    };
    AutoComplete.prototype.writeValue = function (value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
    };
    AutoComplete.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    AutoComplete.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    AutoComplete.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    AutoComplete.prototype.onInput = function (event) {
        var _this = this;
        if (!this.inputKeyDown) {
            return;
        }
        var value = event.target.value;
        if (!this.multiple) {
            this.onModelChange(value);
        }
        if (value.length === 0) {
            this.hide();
            this.onClear.emit(event);
        }
        if (value.length >= this.minLength) {
            //Cancel the search request if user types within the timeout
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () {
                _this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    };
    AutoComplete.prototype.onInputClick = function (event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    };
    AutoComplete.prototype.search = function (event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    };
    AutoComplete.prototype.selectItem = function (option) {
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option)) {
                this.value = this.value.concat([option]);
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.field ? this.objectUtils.resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.focusInput();
    };
    AutoComplete.prototype.show = function () {
        if (this.multiInputEL || this.inputEL) {
            var hasFocus = this.multiple ? document.activeElement == this.multiInputEL.nativeElement : document.activeElement == this.inputEL.nativeElement;
            if (!this.panelVisible && hasFocus) {
                this.panelVisible = true;
                this.panelEL.nativeElement.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_5__dom_domhandler__["a" /* DomHandler */].zindex;
                this.domHandler.fadeIn(this.panelEL.nativeElement, 200);
                this.bindDocumentClickListener();
            }
        }
    };
    AutoComplete.prototype.align = function () {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.panelEL.nativeElement, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            this.domHandler.relativePosition(this.panelEL.nativeElement, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    };
    AutoComplete.prototype.hide = function () {
        this.panelVisible = false;
        this.unbindDocumentClickListener();
    };
    AutoComplete.prototype.handleDropdownClick = function (event) {
        this.focusInput();
        var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
        this.onDropdownClick.emit({
            originalEvent: event,
            query: queryValue
        });
    };
    AutoComplete.prototype.focusInput = function () {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    };
    AutoComplete.prototype.removeItem = function (item) {
        var itemIndex = this.domHandler.index(item);
        var removedValue = this.value[itemIndex];
        this.value = this.value.filter(function (val, i) { return i != itemIndex; });
        this.onUnselect.emit(removedValue);
        this.onModelChange(this.value);
    };
    AutoComplete.prototype.onKeydown = function (event) {
        if (this.panelVisible) {
            var highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        var prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = this.value.slice();
                        var removedValue = this.value.pop();
                        this.onUnselect.emit(removedValue);
                        this.onModelChange(this.value);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    };
    AutoComplete.prototype.onKeyup = function (event) {
        this.onKeyUp.emit(event);
    };
    AutoComplete.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    AutoComplete.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
        if (this.forceSelection) {
            var valid = false;
            var inputValue = event.target.value.toLowerCase().trim();
            if (this.suggestions) {
                for (var _i = 0, _a = this.suggestions; _i < _a.length; _i++) {
                    var suggestion = _a[_i];
                    var itemValue = this.field ? this.objectUtils.resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.toLowerCase()) {
                        valid = true;
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onModelChange(this.value);
            }
        }
    };
    AutoComplete.prototype.isSelected = function (val) {
        var selected = false;
        if (this.value && this.value.length) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.objectUtils.equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    };
    AutoComplete.prototype.findOptionIndex = function (option) {
        var index = -1;
        if (this.suggestions) {
            for (var i = 0; i < this.suggestions.length; i++) {
                if (this.objectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    AutoComplete.prototype.updateFilledState = function () {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = this.inputFieldValue && this.inputFieldValue != '';
    };
    AutoComplete.prototype.updateInputField = function () {
        var formattedValue = this.value ? (this.field ? this.objectUtils.resolveFieldData(this.value, this.field) || '' : this.value) : '';
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    };
    AutoComplete.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (event.which === 3) {
                    return;
                }
                if (_this.inputClick)
                    _this.inputClick = false;
                else
                    _this.hide();
                _this.cd.markForCheck();
            });
        }
    };
    AutoComplete.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    AutoComplete.prototype.ngOnDestroy = function () {
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panelEL.nativeElement);
        }
    };
    return AutoComplete;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "minLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "inputStyle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "inputStyleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "readonly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "maxlength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "required", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], AutoComplete.prototype, "appendTo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "autoHighlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "forceSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], AutoComplete.prototype, "completeMethod", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], AutoComplete.prototype, "onSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _c || Object)
], AutoComplete.prototype, "onUnselect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
], AutoComplete.prototype, "onFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _e || Object)
], AutoComplete.prototype, "onBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _f || Object)
], AutoComplete.prototype, "onDropdownClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _g || Object)
], AutoComplete.prototype, "onClear", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _h || Object)
], AutoComplete.prototype, "onKeyUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "scrollHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "multiple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], AutoComplete.prototype, "tabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "dataKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AutoComplete.prototype, "emptyMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], AutoComplete.prototype, "immutable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])('in'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _j || Object)
], AutoComplete.prototype, "inputEL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])('multiIn'),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _k || Object)
], AutoComplete.prototype, "multiInputEL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])('panel'),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _l || Object)
], AutoComplete.prototype, "panelEL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ViewChild */])('multiContainer'),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _m || Object)
], AutoComplete.prototype, "multiContainerEL", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__common_shared__["a" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _o || Object)
], AutoComplete.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AutoComplete.prototype, "suggestions", null);
AutoComplete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-autoComplete',
        template: "\n        <span [ngClass]=\"{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in [attr.type]=\"type\" [attr.id]=\"inputId\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" autocomplete=\"off\" [attr.required]=\"required\"\n            [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input'\" [value]=\"value ? (field ? objectUtils.resolveFieldData(value,field)||value : value) : null\"\n            (click)=\"onInputClick($event)\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\"\n            ><ul *ngIf=\"multiple\" #multiContainer class=\"ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-disabled':disabled,'ui-state-focus':focus}\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"ui-autocomplete-token ui-state-highlight ui-corner-all\">\n                    <span class=\"ui-autocomplete-token-icon fa fa-fw fa-close\" (click)=\"removeItem(token)\" *ngIf=\"!disabled\"></span>\n                    <span *ngIf=\"!selectedItemTemplate\" class=\"ui-autocomplete-token-label\">{{field ? val[field] : val}}</span>\n                    <ng-template *ngIf=\"selectedItemTemplate\" [pTemplateWrapper]=\"selectedItemTemplate\" [item]=\"val\"></ng-template>\n                </li>\n                <li class=\"ui-autocomplete-input-token\">\n                    <input #multiIn [attr.type]=\"type\" [attr.id]=\"inputId\" [disabled]=\"disabled\" [attr.placeholder]=\"(value&&value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" (input)=\"onInput($event)\"  (click)=\"onInputClick($event)\"\n                            (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" autocomplete=\"off\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul\n            ><i *ngIf=\"loading\" class=\"ui-autocomplete-loader fa fa-circle-o-notch fa-spin fa-fw\"></i><button type=\"button\" pButton icon=\"fa-fw fa-caret-down\" class=\"ui-autocomplete-dropdown\" [disabled]=\"disabled\"\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\"></button>\n            <div #panel class=\"ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow\" [style.display]=\"panelVisible ? 'block' : 'none'\" [style.width]=\"appendTo ? 'auto' : '100%'\" [style.max-height]=\"scrollHeight\">\n                <ul class=\"ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" *ngIf=\"panelVisible\">\n                    <li *ngFor=\"let option of suggestions; let idx = index\" [ngClass]=\"{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}\"\n                        (mouseenter)=\"highlightOption=option\" (mouseleave)=\"highlightOption=null\" (click)=\"selectItem(option)\">\n                        <span *ngIf=\"!itemTemplate\">{{field ? option[field] : option}}</span>\n                        <ng-template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\" [index]=\"idx\"></ng-template>\n                    </li>\n                    <li *ngIf=\"noResults && emptyMessage\" class=\"ui-autocomplete-list-item ui-corner-all\">{{emptyMessage}}</li>\n                </ul>\n            </div>\n        </span>\n    ",
        host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus'
        },
        providers: [__WEBPACK_IMPORTED_MODULE_5__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_6__utils_objectutils__["a" /* ObjectUtils */], AUTOCOMPLETE_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dom_domhandler__["a" /* DomHandler */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_6__utils_objectutils__["a" /* ObjectUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utils_objectutils__["a" /* ObjectUtils */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */]) === "function" && _u || Object])
], AutoComplete);

var AutoCompleteModule = (function () {
    function AutoCompleteModule() {
    }
    return AutoCompleteModule;
}());
AutoCompleteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__inputtext_inputtext__["a" /* InputTextModule */], __WEBPACK_IMPORTED_MODULE_3__button_button__["a" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_4__common_shared__["b" /* SharedModule */]],
        exports: [AutoComplete, __WEBPACK_IMPORTED_MODULE_4__common_shared__["b" /* SharedModule */]],
        declarations: [AutoComplete]
    })
], AutoCompleteModule);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
//# sourceMappingURL=autocomplete.js.map

/***/ }),

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[pCode]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], CodeHighlighter);

var CodeHighlighterModule = (function () {
    function CodeHighlighterModule() {
    }
    return CodeHighlighterModule;
}());
CodeHighlighterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [CodeHighlighter],
        declarations: [CodeHighlighter]
    })
], CodeHighlighterModule);

var _a;
//# sourceMappingURL=codehighlighter.js.map

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
        this.onTabClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onTabCloseClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], TabViewNav.prototype, "tabs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabViewNav.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], TabViewNav.prototype, "onTabClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], TabViewNav.prototype, "onTabCloseClick", void 0);
TabViewNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TabPanel.prototype, "headerStyle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "headerStyleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "leftIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabPanel.prototype, "rightIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabPanel.prototype, "cache", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["a" /* PrimeTemplate */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _c || Object)
], TabPanel.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabPanel.prototype, "selected", null);
TabPanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-tabPanel',
        template: "\n        <div class=\"ui-tabview-panel ui-widget-content\" [style.display]=\"selected ? 'block' : 'none'\" \n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" *ngIf=\"!closed\">\n            <ng-content></ng-content>\n            <p-templateLoader [template]=\"contentTemplate\" *ngIf=\"contentTemplate&&(cache ? loaded : selected)\"></p-templateLoader>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ViewContainerRef */]) === "function" && _d || Object])
], TabPanel);

var TabView = (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabView.prototype, "orientation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TabView.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], TabView.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], TabView.prototype, "controlClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ContentChildren */])(TabPanel),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* QueryList */]) === "function" && _e || Object)
], TabView.prototype, "tabPanels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _f || Object)
], TabView.prototype, "onChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _g || Object)
], TabView.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TabView.prototype, "lazy", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TabView.prototype, "activeIndex", null);
TabView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'p-tabView',
        template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\" \n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _h || Object])
], TabView);

var TabViewModule = (function () {
    function TabViewModule() {
    }
    return TabViewModule;
}());
TabViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* SharedModule */]],
        exports: [TabView, TabPanel, TabViewNav, __WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* SharedModule */]],
        declarations: [TabView, TabPanel, TabViewNav]
    })
], TabViewModule);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=tabview.js.map

/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocompletedemo__ = __webpack_require__("./src/app/showcase/components/autocomplete/autocompletedemo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoCompleteDemoRoutingModule = (function () {
    function AutoCompleteDemoRoutingModule() {
    }
    return AutoCompleteDemoRoutingModule;
}());
AutoCompleteDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__autocompletedemo__["a" /* AutoCompleteDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AutoCompleteDemoRoutingModule);

//# sourceMappingURL=autocompletedemo-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">AutoComplete</span>\r\n        <span>AutoComplete is an input component that provides real-time suggestions when being typed.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\r\n    <span style=\"margin-left:10px\">Country: {{country ? country.name||country : 'none'}}</span>\r\n    \r\n    <h3>Advanced</h3>\r\n    <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\r\n        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleDropdownClick()\">\r\n        <ng-template let-brand pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                <img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\r\n                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </p-autoComplete>\r\n    <span style=\"margin-left:50px\">Brand: {{brand||'none'}}</span>\r\n    \r\n    <h3>Multiple</h3>\r\n    <span class=\"ui-fluid\">\r\n        <p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\r\n            [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\">\r\n        </p-autoComplete>\r\n    </span>\r\n    <ul>\r\n        <li *ngFor=\"let c of countries\">{{c.name}}</li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;AutoCompleteModule&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod\r\n            gets the query text as event.query property and should update the suggestions with the search results.</p>     \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n    \r\n    text: string;\r\n    \r\n    results: string[];\r\n    \r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>AutoComplete either uses setter based checking or ngDoCheck to realize if the suggestions has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your changes such as adding or removing a record \r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference.\r\n            </p>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>AutoComplete can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete formControlName=\"city\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Dropdown</h3>\r\n            <p>Enabling dropdown property displays a button next to the input field, implementation by default does nothing and you can use\r\n                the dropdown for cases like displaying all results. onDropdownClick is triggered when the button is clicked.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" \r\n            [dropdown]=\"true\" (onDropdownClick)=\"handleDropdown(event)\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n    \r\n    text: string;\r\n    \r\n    results: string[];\r\n    \r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n    \r\n    handleDropdown(event) &#123;\r\n        //event.query = current value in input field\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Multiple Selection</h3>\r\n            <p>Multiple mode is used to select more than one value from the autocomplete. In this case, model reference should be an array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n    \r\n    texts: string[];\r\n    \r\n    results: string[];\r\n    \r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Objects</h3>\r\n            <p>AutoComplete can also work with objects using the field property that defines the label to display as a suggestion. The value passed to the model would still be the\r\n            object instance of a suggestion. Here is an example with a Country object that has name and code fields such as &#123;name:\"United States\",code:\"USA\"&#125;.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" field=\"name\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n    \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n    \r\n    val: country;\r\n    \r\n    results: country[];\r\n    \r\n    search(event) &#123;\r\n        this.countrylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Force Selection</h3>\r\n            <p>ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared\r\n            to make sure the value passed to the model is always one of the suggestions.</p>\r\n            <pre>\r\n            <code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" forceSelection=\"true\"&gt;&lt;/p-autoComplete&gt;\r\n            </code>\r\n            </pre>\r\n    \r\n            <h3>Templating</h3>\r\n            <p>Item ng-template allows displaying custom content inside the suggestions panel. The local ng-template variable passed to the ng-template is an object in the suggestions array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\"&gt;\r\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\r\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;&#123;&#123;brand&#125;&#125;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In multiple mode, selected item can be customized using selectedItem ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;\r\n    &lt;ng-template let-value pTemplate=\"selectedItem\"&gt;\r\n        &lt;span style=\"font-size:18px\"&gt;&gt;&#123;&#123;value&#125;&#125;&lt;&lt;/span&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>suggestions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of suggestions to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Field of a suggested object to resolve and display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>200px</td>\r\n                            <td>Maximum height of the suggestions panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdown</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a button next to the input field when enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies if multiple values can be selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>minLength</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Minimum number of characters to initiate a search.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>delay</td>\r\n                            <td>number</td>\r\n                            <td>300</td>\r\n                            <td>Delay between keystrokes to wait before sending a query.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Hint text for the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the input cannot be typed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxlength</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of character allows in the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>size</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Size of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a value in options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoHighlight</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, highlights the first item in the list by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>text</td>\r\n                            <td>Type of the input, defaults to \"text\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Message to display when there are no results for a query.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the suggestions should be manipulated.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>required</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>forceSelection</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only\r\n                                accepting values from the suggestions.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>completeMethod</td>\r\n                            <td>\r\n                                event.originalEvent: browser event <br>\r\n                                event.query: Value to search with\r\n                            </td>\r\n                            <td>Callback to invoke to search for suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when autocomplete gets focus.</td>\r\n                        </tr>   \r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when autocomplete loses focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onKeyUp</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when a user releases a key.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelect</td>\r\n                            <td>\r\n                                value: Selected value\r\n                            </td>\r\n                            <td>Callback to invoke when a suggestion is selected.</td>\r\n                        </tr>                     \r\n                        <tr>\r\n                            <td>onSelect</td>\r\n                            <td>\r\n                                value: Selected value\r\n                            </td>\r\n                            <td>Callback to invoke when a suggestion is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onUnselect</td>\r\n                            <td>\r\n                                value: Unselected value in multiple mode\r\n                            </td>\r\n                            <td>Callback to invoke when a selected value is removed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDropdownClick</td>\r\n                            <td>\r\n                                event.originalEvent: browser event <br>\r\n                                event.query: Current value of the input field\r\n                            </td>\r\n                            <td>Callback to invoke to when dropdown button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClear</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Callback to invoke to when inpu field is cleared.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-autocomplete</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-panel</td>\r\n                            <td>Overlay panel of suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-items</td>\r\n                            <td>List container of suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-item</td>\r\n                            <td>List item of a suggestion.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token</td>\r\n                            <td>Element of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token-icon</td>\r\n                            <td>Close icon element of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token-label</td>\r\n                            <td>Label of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-loader</td>\r\n                            <td>Loader icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autocomplete\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n    placeholder=\"Countries\" [minLength]=\"1\"&gt;&lt;/p-autoComplete&gt;\r\n&lt;span style=\"margin-left:10px\"&gt;Country: {{country ? country.name||country : 'none'}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;Advanced&lt;/h3&gt;\r\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\r\n    [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleDropdownClick($event)\"&gt;\r\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\r\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;{{brand}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n&lt;span style=\"margin-left:50px\"&gt;Brand: {{brand||'none'}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;span class=\"ui-fluid\"&gt;\r\n    &lt;p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\r\n        [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\"&gt;\r\n    &lt;/p-autoComplete &gt;\r\n&lt;/span&gt;\r\n&lt;ul&gt;\r\n    &lt;li *ngFor=\"let c of countries\"&gt;{{c.name}}&lt;/li&gt;\r\n&lt;/ul&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    country: any;\r\n    \r\n    countries: any[];\r\n        \r\n    filteredCountriesSingle: any[];\r\n    \r\n    filteredCountriesMultiple: any[];\r\n    \r\n    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];\r\n    \r\n    filteredBrands: any[];\r\n    \r\n    brand: string;\r\n    \r\n    constructor(private countryService: CountryService) &#123; &#125;\r\n    \r\n    filterCountrySingle(event) &#123;\r\n        let query = event.query;        \r\n        this.countryService.getCountries().then(countries => &#123;\r\n            this.filteredCountriesSingle = this.filterCountry(query, countries);\r\n        &#125;);\r\n    &#125;\r\n    \r\n    filterCountryMultiple(event) &#123;\r\n        let query = event.query;\r\n        this.countryService.getCountries().then(countries => &#123;\r\n            this.filteredCountriesMultiple = this.filterCountry(query, countries);\r\n        &#125;);\r\n    &#125;\r\n    \r\n    filterCountry(query, countries: any[]):any[] &#123;\r\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\r\n        let filtered : any[] = [];\r\n        for(let i = 0; i < countries.length; i++) &#123;\r\n            let country = countries[i];\r\n            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) &#123;\r\n                filtered.push(country);\r\n            &#125;\r\n        &#125;\r\n        return filtered;\r\n    &#125;\r\n        \r\n    filterBrands(event) &#123;\r\n        this.filteredBrands = [];\r\n        for(let i = 0; i < this.brands.length; i++) &#123;\r\n            let brand = this.brands[i];\r\n            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) &#123;\r\n                this.filteredBrands.push(brand);\r\n            &#125;\r\n        &#125;\r\n    &#125;\r\n    \r\n    handleDropdownClick() &#123;\r\n        this.filteredBrands = [];\r\n        \r\n        //mimic remote call\r\n        setTimeout(() => &#123;\r\n            this.filteredBrands = this.brands;\r\n        &#125;, 100)\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class CountryService &#123;\r\n    \r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCountries() &#123;\r\n        return this.http.get('showcase/resources/data/countries.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;any[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocompletedemo__ = __webpack_require__("./src/app/showcase/components/autocomplete/autocompletedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocompletedemo_routing_module__ = __webpack_require__("./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_autocomplete_autocomplete__ = __webpack_require__("./src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteDemoModule", function() { return AutoCompleteDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AutoCompleteDemoModule = (function () {
    function AutoCompleteDemoModule() {
    }
    return AutoCompleteDemoModule;
}());
AutoCompleteDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__autocompletedemo_routing_module__["a" /* AutoCompleteDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_autocomplete_autocomplete__["a" /* AutoCompleteModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__autocompletedemo__["a" /* AutoCompleteDemo */]
        ]
    })
], AutoCompleteDemoModule);

//# sourceMappingURL=autocompletedemo.module.js.map

/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_countryservice__ = __webpack_require__("./src/app/showcase/service/countryservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoCompleteDemo = (function () {
    function AutoCompleteDemo(countryService) {
        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
    }
    AutoCompleteDemo.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesSingle = _this.filterCountry(query, countries);
        });
    };
    AutoCompleteDemo.prototype.filterCountryMultiple = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesMultiple = _this.filterCountry(query, countries);
        });
    };
    AutoCompleteDemo.prototype.filterCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    AutoCompleteDemo.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    AutoCompleteDemo.prototype.handleDropdownClick = function () {
        var _this = this;
        this.filteredBrands = [];
        //mimic remote call
        setTimeout(function () {
            _this.filteredBrands = _this.brands;
        }, 100);
    };
    return AutoCompleteDemo;
}());
AutoCompleteDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/showcase/components/autocomplete/autocompletedemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */]) === "function" && _a || Object])
], AutoCompleteDemo);

var _a;
//# sourceMappingURL=autocompletedemo.js.map

/***/ })

});
//# sourceMappingURL=76.chunk.js.map