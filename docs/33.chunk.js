webpackJsonp([33],{

/***/ "./src/app/components/common/messageservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = (function () {
    function MessageService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
    }
    MessageService.prototype.add = function (message) {
        if (message) {
            this.messageSource.next(message);
        }
    };
    MessageService.prototype.addAll = function (messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MessageService);

//# sourceMappingURL=messageservice.js.map

/***/ }),

/***/ "./src/app/components/growl/growl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_messageservice__ = __webpack_require__("./src/app/components/common/messageservice.ts");
/* unused harmony export Growl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Growl = (function () {
    function Growl(el, domHandler, differs, messageService) {
        var _this = this;
        this.el = el;
        this.domHandler = domHandler;
        this.differs = differs;
        this.messageService = messageService;
        this.life = 3000;
        this.immutable = true;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.zIndex = __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.differ = differs.find([]).create(null);
        if (messageService) {
            this.subscription = messageService.messageObserver.subscribe(function (messages) {
                if (messages instanceof Array)
                    _this.value = messages;
                else
                    _this.value = [messages];
            });
        }
    }
    Growl.prototype.ngAfterViewInit = function () {
        this.container = this.containerViewChild.nativeElement;
        if (!this.sticky) {
            this.initTimeout();
        }
    };
    Object.defineProperty(Growl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.container && this.immutable) {
                this.handleValueChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Growl.prototype.ngDoCheck = function () {
        if (!this.immutable && this.container) {
            var changes = this.differ.diff(this.value);
            if (changes) {
                this.handleValueChange();
            }
        }
    };
    Growl.prototype.handleValueChange = function () {
        if (this.preventRerender) {
            this.preventRerender = false;
            return;
        }
        this.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.domHandler.fadeIn(this.container, 250);
        if (!this.sticky) {
            this.initTimeout();
        }
    };
    Growl.prototype.initTimeout = function () {
        var _this = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.removeAll();
        }, this.life);
    };
    Growl.prototype.remove = function (index, msgel) {
        var _this = this;
        this.closeIconClick = true;
        this.domHandler.fadeOut(msgel, 250);
        setTimeout(function () {
            _this.preventRerender = true;
            _this.onClose.emit({ message: _this.value[index] });
            if (_this.immutable) {
                _this._value = _this.value.filter(function (val, i) { return i != index; });
                _this.valueChange.emit(_this._value);
            }
            else {
                _this._value.splice(index, 1);
            }
        }, 250);
    };
    Growl.prototype.removeAll = function () {
        var _this = this;
        if (this.value && this.value.length) {
            this.domHandler.fadeOut(this.container, 250);
            setTimeout(function () {
                _this.value.forEach(function (msg, index) { return _this.onClose.emit({ message: _this.value[index] }); });
                if (_this.immutable) {
                    _this.value = [];
                    _this.valueChange.emit(_this.value);
                }
                else {
                    _this.value.splice(0, _this.value.length);
                }
            }, 250);
        }
    };
    Growl.prototype.onMessageClick = function (i) {
        if (this.closeIconClick)
            this.closeIconClick = false;
        else
            this.onClick.emit({ message: this.value[i] });
    };
    Growl.prototype.ngOnDestroy = function () {
        if (!this.sticky) {
            clearTimeout(this.timeout);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return Growl;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Growl.prototype, "sticky", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Growl.prototype, "life", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Growl.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Growl.prototype, "styleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Growl.prototype, "immutable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], Growl.prototype, "onClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], Growl.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], Growl.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], Growl.prototype, "containerViewChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Growl.prototype, "value", null);
Growl = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'p-growl',
        template: "\n        <div #container [ngClass]=\"'ui-growl ui-widget'\" [style.zIndex]=\"zIndex\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div #msgel *ngFor=\"let msg of value;let i = index\" class=\"ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow\" aria-live=\"polite\"\n                [ngClass]=\"{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',\n                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}\" (click)=\"onMessageClick(i)\">\n                <div class=\"ui-growl-item\">\n                     <div class=\"ui-growl-icon-close fa fa-close\" (click)=\"remove(i,msgel)\"></div>\n                     <span class=\"ui-growl-image fa fa-2x\"\n                        [ngClass]=\"{'fa-info-circle':msg.severity == 'info','fa-exclamation-circle':msg.severity == 'warn',\n                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}\"></span>\n                     <div class=\"ui-growl-message\">\n                        <span class=\"ui-growl-title\">{{msg.summary}}</span>\n                        <p [innerHTML]=\"msg.detail\"></p>\n                     </div>\n                     <div style=\"clear: both;\"></div>\n                </div>\n            </div>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__common_messageservice__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_messageservice__["a" /* MessageService */]) === "function" && _h || Object])
], Growl);

var GrowlModule = (function () {
    function GrowlModule() {
    }
    return GrowlModule;
}());
GrowlModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [Growl],
        declarations: [Growl]
    })
], GrowlModule);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=growl.js.map

/***/ }),

/***/ "./src/app/showcase/security/page/login/security-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content1\">\n    <div class=\"content1_in\">\n        <div class=\"top_cun\">\n            <div class=\"j_currtun\">\n                <h1 class=\"logo\">\n                    <a href=\"javascript:void(0)\"></a>\n                </h1>\n            </div>\n        </div>\n\n        <div class=\"bottom_cun\">\n            <div class=\"right_cun\">\n                <span class=\"cun_titl\">用户登录</span>\n                <span [hidden]=\"!errorFlag\" class=\"error-text\">{{errorInfo}}</span>\n                <span class=\"cun_user\">\n\t\t\t\t\t\t\t<label><i class=\"iconfont yonhu\" title=\"账户\"></i></label>\n                            <label><i class=\"zhanghao\">账号</i></label>\n\t\t\t\t\t\t\t<input id=\"user_name\" [(ngModel)]=\"loginUser.mobile\" class=\"User_name\" type=\"text\"\n                                   maxlength=\"11\" placeholder=\"输入手机号\" onkeyup=\"value=this.value.replace(/\\D+/g,'')\"\n                                   (focus)=\"inputFocus($event)\"/>\n\t\t\t\t\t\t\t<span id=\"clear_name\" class=\"xi guan_bi\"></span>\n                </span>\n                <span class=\"cun_user\">\n\t\t\t\t\t\t\t<label><i class=\"iconfont mima\" title=\"mima\"></i></label>\n\t\t\t\t\t\t\t<label><i class=\"zhanghao\">密码</i></label>\n\t\t\t\t\t\t\t<input class=\"User_name\" [(ngModel)]=\"loginUser.password\" type=\"password\" maxlength=\"16\"\n                                   placeholder=\"请输入登录密码\" (focus)=\"inputFocus($event)\" (keyup.enter)=\"doLogin()\"/>\n\t\t\t\t\t\t\t<span id=\"show_password\" class=\"xi cha_kan\"></span>\n                </span>\n                <span class=\"cun_user forget\">\n\t\t\t\t\t\t\t<span class=\"left\"><label><input type=\"checkbox\" name=\"check\"\n                                                             checked=\"checked\">14天内自动登录</label></span>\n                </span>\n                <span class=\"cun_user Signin\">\n\t\t\t\t\t\t\t<!--<a  href=\"javascript:void(0)\" class=\"cun_Signin\" (click)=\"doLogin()\">{{loginText}}</a>-->\n                    <button  (click)=\"doLogin()\" class=\"{{login ?'cun_Signin_no':'cun_Signin_yes'}}\" [disabled]=\"login\">{{loginText}}</button>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n"

/***/ }),

/***/ "./src/app/showcase/security/page/login/security-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*登录*/\n.content1 {\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n  position: static;\n  top: 0;\n  left: 0; }\n  .content1 > .content1_in {\n    position: absolute;\n    width: 1000px;\n    height: 560px;\n    top: 50%;\n    left: 50%;\n    margin-left: -500px;\n    margin-top: -295px; }\n    .content1 > .content1_in > .top_cun {\n      width: 100%;\n      height: 120px;\n      text-align: center; }\n\n.content1_in .top_cun > .j_currtun {\n  display: inline-block;\n  width: 220px;\n  height: 80px; }\n  .content1_in .top_cun > .j_currtun .logo {\n    width: 100%;\n    height: 56px; }\n    .content1_in .top_cun > .j_currtun .logo a {\n      display: block;\n      width: 100%;\n      height: 100%; }\n  .content1_in .top_cun > .j_currtun > p {\n    font-size: 22px;\n    color: #858585;\n    letter-spacing: 5px;\n    margin-top: 10px; }\n\n.content1_in .bottom_cun {\n  float: left;\n  width: 100%;\n  height: 380px; }\n  .content1_in .bottom_cun .right_cun {\n    margin: 0 auto;\n    width: 400px;\n    height: 360px;\n    box-shadow: 0 0 10px #ccc;\n    border-radius: 5px;\n    background: #F2F2F5;\n    padding: 50px;\n    box-sizing: border-box; }\n    .content1_in .bottom_cun .right_cun .cun_titl {\n      font-size: 20px;\n      color: #444444; }\n\n.bottom_cun .right_cun .cun_user {\n  float: left;\n  width: 300px;\n  height: 41px;\n  border-bottom: 1px solid #ccc;\n  margin-top: 24px;\n  position: relative; }\n\n.bottom_cun .right_cun .cun_user > label {\n  float: left;\n  width: 40px;\n  height: 40px; }\n\n.bottom_cun .right_cun .cun_user .zhanghao {\n  height: 40px;\n  line-height: 40px; }\n\n.bottom_cun .right_cun .cun_user > label > i {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.bottom_cun .right_cun .cun_user > input {\n  font-size: 12px;\n  float: left;\n  width: 215px;\n  height: 40px;\n  line-height: 40px;\n  padding: 2px 26px 2px 2px;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: #F2F2F5; }\n\n.bottom_cun .right_cun .cun_user .xi {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer; }\n\n.bottom_cun .right_cun .cun_user .guan_bi {\n  visibility: hidden; }\n\n.bottom_cun .right_cun .cun_user .cha_kan {\n  visibility: hidden; }\n\n.bottom_cun .right_cun .cun_user.forget {\n  margin: 15px 0;\n  height: auto;\n  border: none; }\n\n.bottom_cun .right_cun .cun_user.forget .left {\n  float: left;\n  line-height: 14px; }\n\n.bottom_cun .right_cun .cun_user.forget .left input {\n  float: left;\n  width: 15px;\n  height: 15px;\n  border: 1px solid #ccc;\n  margin-right: 3px;\n  cursor: pointer; }\n\n.bottom_cun .right_cun .cun_user.forget .right {\n  float: right; }\n\n.bottom_cun .right_cun .cun_user.forget .right > a:link,\n.bottom_cun .right_cun .cun_user.forget .right > a:visited {\n  color: blue; }\n\n.bottom_cun .right_cun .cun_user.forget .right > a:hover,\n.bottom_cun .right_cun .cun_user.forget .right > a:active {\n  color: red; }\n\n.bottom_cun .right_cun .cun_user.Signin {\n  border: none;\n  margin-top: 0px; }\n\n.bottom_cun .right_cun .cun_user > .cun_Signin_yes {\n  display: block;\n  width: 100%;\n  height: 100%;\n  line-height: 36px;\n  text-align: center;\n  color: #fff;\n  background: #373B4F;\n  font-size: 18px;\n  margin-top: 20px;\n  border: none;\n  cursor: pointer; }\n\n.bottom_cun .right_cun .cun_user > .cun_Signin_no {\n  display: block;\n  width: 100%;\n  height: 100%;\n  line-height: 36px;\n  text-align: center;\n  color: #fff;\n  background: #7a94c7;\n  font-size: 18px;\n  margin-top: 20px;\n  border: none;\n  cursor: not-allowed; }\n\n.error-text {\n  color: red;\n  margin-left: 10px; }\n\n.footer {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 30px;\n  color: #7C7C7C;\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/security/page/login/security-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_config__ = __webpack_require__("./src/app/showcase/custom-components/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_custom_components_services_api__ = __webpack_require__("./src/app/custom-components/services/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecurityLoginComponent = (function () {
    function SecurityLoginComponent(http, api, router) {
        this.http = http;
        this.api = api;
        this.router = router;
        this.loginUser = { source: "boss", mobile: '', password: '' };
        this.errorFlag = false;
        this.errorInfo = '';
        this.logining = false;
        this.login = false;
        this.isLoggedIn = false;
        this.loginText = "登录";
        this.msgs = [];
        this.copyrightYear = new Date().getFullYear();
        this.phoneReg = /^(((13[0-9]{1})|(12[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    }
    SecurityLoginComponent.prototype.ngOnInit = function () {
    };
    SecurityLoginComponent.prototype.inputFocus = function ($event) {
        this.errorFlag = false;
    };
    SecurityLoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.loginText = "登录中...";
        this.login = true;
        this.errorFlag = false;
        if (!this.valid()) {
            setTimeout(function () {
                _this.login = false;
                _this.loginText = "登录";
            }, 100);
            return;
        }
        ;
        if (this.logining) {
            return;
        }
        ; //正在登录中
        this.logining = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_config__["a" /* BASEURL */] + "/login", this.loginUser).map(function (res) {
            return res.json();
        }).subscribe(function (json) {
            if (json && json.jwt) {
                _this.show();
                localStorage.setItem("jwt", json.jwt);
                setTimeout(function () {
                    _this.getUserInfo();
                    _this.login = false;
                    _this.loginText = "登录";
                    // this.router.navigate(['/modules'])
                }, 300);
            }
            else {
                _this.error();
            }
            _this.logining = false;
        }, function (error) {
            _this.login = false;
            _this.loginText = "登录";
            _this.errorFlag = true;
            if (error && error['_body']) {
                try {
                    var body = JSON.parse(error._body);
                    if (body['code'] === -1) {
                        _this.errorInfo = body['error'];
                    }
                    else {
                        _this.errorInfo = '登录失败，请检查账号和密码';
                    }
                }
                catch (e) {
                    _this.errorInfo = '服务器出错';
                }
            }
            else {
                _this.errorInfo = '登录失败，请检查账号和密码';
            }
            _this.logining = false;
        });
    };
    /**
     * 登录验证
     * @returns {boolean}
     */
    SecurityLoginComponent.prototype.valid = function () {
        if (!this.loginUser.mobile) {
            this.errorFlag = true;
            this.errorInfo = '用户名不能为空';
            return false;
        }
        else if (!this.phoneReg.test(this.loginUser.mobile)) {
            this.errorFlag = true;
            this.errorInfo = '请输入正确的手机号码';
            return;
        }
        else if (!this.loginUser.password) {
            this.errorFlag = true;
            this.errorInfo = '密码不能为空';
            return false;
        }
        return true;
    };
    /**
     * 获取用户信息
     */
    SecurityLoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.checkUserLogin().then(function (isLogin) {
            if (isLogin) {
                _this.router.navigateByUrl("/");
            }
            else {
                localStorage.removeItem("jwt");
            }
        }).catch(function (err) {
            _this.errorFlag = true;
            _this.errorInfo = '获取用户信息失败';
        });
    };
    /**
    * 获取用户信息
    * @returns {boolean}
    */
    SecurityLoginComponent.prototype.checkUserLogin = function () {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.api.call("SecurityController.currentUser").ok(function (json) {
                    if (json.result) {
                        localStorage.setItem('currentUser', JSON.stringify(json.result.attributes));
                        // localStorage.setItem('permissions', JSON.stringify(json.result.permissions));
                        _this.isLoggedIn = true;
                        resolve(_this.isLoggedIn);
                    }
                    else {
                        _this.isLoggedIn = false;
                        resolve(_this.isLoggedIn);
                    }
                }).fail(function (err) {
                    localStorage.clear();
                    _this.isLoggedIn = false;
                    _this.router.navigate(['/security/login']);
                    reject(err);
                });
            });
        }
        catch (e) {
            localStorage.clear();
            this.isLoggedIn = false;
        }
    };
    SecurityLoginComponent.prototype.show = function (msg) {
        msg = msg ? msg : '登录成功！';
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: msg });
    };
    SecurityLoginComponent.prototype.error = function (msg) {
        msg = msg ? msg : '登录失败！';
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: '提示', detail: msg });
    };
    SecurityLoginComponent.prototype.warning = function (msg) {
        msg = msg ? msg : '登录失败！';
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: '提示', detail: msg });
    };
    return SecurityLoginComponent;
}());
SecurityLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/app/showcase/security/page/login/security-login.component.html"),
        styles: [__webpack_require__("./src/app/showcase/security/page/login/security-login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_custom_components_services_api__["a" /* API */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_custom_components_services_api__["a" /* API */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SecurityLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=security-login.component.js.map

/***/ }),

/***/ "./src/app/showcase/security/security-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_component__ = __webpack_require__("./src/app/showcase/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_security_page_login_security_login_component__ = __webpack_require__("./src/app/showcase/security/page/login/security-login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__security_component__["a" /* SecurityComponent */],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3_app_showcase_security_page_login_security_login_component__["a" /* SecurityLoginComponent */]
            }
        ]
    }
];
var SecurityRoutingModule = (function () {
    function SecurityRoutingModule() {
    }
    return SecurityRoutingModule;
}());
SecurityRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: [],
        providers: [],
    })
], SecurityRoutingModule);

//# sourceMappingURL=security-routing.module.js.map

/***/ }),

/***/ "./src/app/showcase/security/security.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecurityComponent = (function () {
    function SecurityComponent() {
    }
    return SecurityComponent;
}());
SecurityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "<router-outlet></router-outlet>"
    })
], SecurityComponent);

//# sourceMappingURL=security.component.js.map

/***/ }),

/***/ "./src/app/showcase/security/security.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_component__ = __webpack_require__("./src/app/showcase/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_routing_module__ = __webpack_require__("./src/app/showcase/security/security-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_growl_growl__ = __webpack_require__("./src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_showcase_security_page_login_security_login_component__ = __webpack_require__("./src/app/showcase/security/page/login/security-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_custom_components_services_api__ = __webpack_require__("./src/app/custom-components/services/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SecurityModule = (function () {
    function SecurityModule() {
    }
    return SecurityModule;
}());
SecurityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__security_routing_module__["a" /* SecurityRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_components_growl_growl__["a" /* GrowlModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__security_component__["a" /* SecurityComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_showcase_security_page_login_security_login_component__["a" /* SecurityLoginComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_app_custom_components_services_api__["a" /* API */]
        ],
    })
], SecurityModule);

//# sourceMappingURL=security.module.js.map

/***/ })

});
//# sourceMappingURL=33.chunk.js.map