webpackJsonp([43],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/meta-select-demo/meta-select-demo-basic.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'meta-demo-basic',\n  template: `\n\n    <h3 style=\"margin-bottom: 30px\">字典组件可以通过filterOptions数组来过滤不想要的选项</h3>\n    <div>\n      <div style=\"float: left\">\n        <h3 style=\"margin-bottom: 10px\">字典组件--多选</h3>\n        <p style=\"margin-bottom: 10px\">multiSelect=\"true\" 属性控制多选</p>\n        <meta-select width=\"150px\" multiSelect=\"true\" defaultLabel=\"请选择…\" [(ngModel)]=\"metaCode1\"\n                     type=\"riskReason\" [filterOptions]=\"filterOptions\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode1}}</span>\n        <br>\n        <button style=\"margin-top: 10px\" (click)=\"doTest2()\">测试取字典Code</button>\n      </div>\n      <div style=\"float: left;margin: 0 140px\">\n        <h3 style=\"margin-bottom: 41px\">字典组件--单选</h3>\n        <meta-select width=\"150px\" defaultLabel=\"请选择…\" [(ngModel)]=\"metaCode2\" type=\"abnormalDuty\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode2}}</span>\n        <br>\n        <button style=\"margin-top: 10px\" (click)=\"doTest22()\">测试取字典Code</button>\n      </div>\n      <div style=\"float: left\">\n        <h3 style=\"margin-bottom: 22px\">字典组件-带onChange等事件</h3><br>\n        <meta-select width=\"150px\" defaultLabel=\"请选择…\"\n                     [(ngModel)]=\"metaCode2\"\n                     (onChange)=\"onChangeHandler($event)\"\n                     (onFocus)=\"onFocusHandler($event)\"\n                     (onBlur)=\"onBlurHandler($event)\"\n                     type=\"repair\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode2}}</span>\n        <br>\n        <button  style=\"margin-top: 10px\" (click)=\"doTest22()\">测试取字典Code</button>\n      </div>\n    </div>\n    <div class=\"content-right\" style=\"margin-top: 215px\">\n      <h3>字典类型type</h3>\n      <ul>\n        <li>service-服务类型</li>\n        <li> repair-维修类型</li>\n        <li>\n          fhreturn-返货类型\n        </li>\n        <li>\n          riskReason-出险原因\n        </li>\n        <li>\n          specifyLogistics-指定物流\n        </li>\n        <li>\n          abnormalDuty-异常责任方\n        </li>\n        <li>\n          complement-补件-任务类型\n        </li>\n        <li>\n          transportCompany-物流公司\n        </li>\n        <li>\n          goodsunit-商品单位\n        </li>\n        <li>\n          abnormalHandleWay-异常处理方式\n        </li>\n      </ul>\n    </div>\n  `,\n  styles: []\n})\nexport class MetaDemoBasicComponent implements OnInit {\n  areaCode: String = \"110106000000\";\n  metaCode1: String;\n  metaCode2: String = \"serviceProvider\";\n  //过滤字典\n  filterOptions: any[] = ['逗比'];\n\n  constructor() {\n\n  }\n\n  ngOnInit() {\n  }\n\n  doTest(): any {\n    alert(this.areaCode);\n  }\n\n  doTest2(): any {\n    alert(this.metaCode1);\n  }\n\n  doTest22(): any {\n    alert(this.metaCode2);\n  }\n\n  onChangeHandler(event) {\n    //console.info('onChangeHandler',event)\n    // alert('你选中了：'+event.value);\n\n  }\n\n  onFocusHandler(event) {\n    //console.info('onFocusHandler')\n  }\n\n  onBlurHandler(event) {\n    //console.info('onBlurHandler')\n  }\n}\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaDemoBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetaDemoBasicComponent = (function () {
    function MetaDemoBasicComponent() {
        this.areaCode = "110106000000";
        this.metaCode2 = "serviceProvider";
        //过滤字典
        this.filterOptions = ['逗比'];
    }
    MetaDemoBasicComponent.prototype.ngOnInit = function () {
    };
    MetaDemoBasicComponent.prototype.doTest = function () {
        alert(this.areaCode);
    };
    MetaDemoBasicComponent.prototype.doTest2 = function () {
        alert(this.metaCode1);
    };
    MetaDemoBasicComponent.prototype.doTest22 = function () {
        alert(this.metaCode2);
    };
    MetaDemoBasicComponent.prototype.onChangeHandler = function (event) {
        //console.info('onChangeHandler',event)
        // alert('你选中了：'+event.value);
    };
    MetaDemoBasicComponent.prototype.onFocusHandler = function (event) {
        //console.info('onFocusHandler')
    };
    MetaDemoBasicComponent.prototype.onBlurHandler = function (event) {
        //console.info('onBlurHandler')
    };
    return MetaDemoBasicComponent;
}());
MetaDemoBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'meta-demo-basic',
        template: "\n\n    <h3 style=\"margin-bottom: 30px\">\u5B57\u5178\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7filterOptions\u6570\u7EC4\u6765\u8FC7\u6EE4\u4E0D\u60F3\u8981\u7684\u9009\u9879</h3>\n    <div>\n      <div style=\"float: left\">\n        <h3 style=\"margin-bottom: 10px\">\u5B57\u5178\u7EC4\u4EF6--\u591A\u9009</h3>\n        <p style=\"margin-bottom: 10px\">multiSelect=\"true\" \u5C5E\u6027\u63A7\u5236\u591A\u9009</p>\n        <meta-select width=\"150px\" multiSelect=\"true\" defaultLabel=\"\u8BF7\u9009\u62E9\u2026\" [(ngModel)]=\"metaCode1\"\n                     type=\"riskReason\" [filterOptions]=\"filterOptions\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode1}}</span>\n        <br>\n        <button style=\"margin-top: 10px\" (click)=\"doTest2()\">\u6D4B\u8BD5\u53D6\u5B57\u5178Code</button>\n      </div>\n      <div style=\"float: left;margin: 0 140px\">\n        <h3 style=\"margin-bottom: 41px\">\u5B57\u5178\u7EC4\u4EF6--\u5355\u9009</h3>\n        <meta-select width=\"150px\" defaultLabel=\"\u8BF7\u9009\u62E9\u2026\" [(ngModel)]=\"metaCode2\" type=\"abnormalDuty\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode2}}</span>\n        <br>\n        <button style=\"margin-top: 10px\" (click)=\"doTest22()\">\u6D4B\u8BD5\u53D6\u5B57\u5178Code</button>\n      </div>\n      <div style=\"float: left\">\n        <h3 style=\"margin-bottom: 22px\">\u5B57\u5178\u7EC4\u4EF6-\u5E26onChange\u7B49\u4E8B\u4EF6</h3><br>\n        <meta-select width=\"150px\" defaultLabel=\"\u8BF7\u9009\u62E9\u2026\"\n                     [(ngModel)]=\"metaCode2\"\n                     (onChange)=\"onChangeHandler($event)\"\n                     (onFocus)=\"onFocusHandler($event)\"\n                     (onBlur)=\"onBlurHandler($event)\"\n                     type=\"repair\"></meta-select>\n        <span style=\"margin-left: 25px\">{{metaCode2}}</span>\n        <br>\n        <button  style=\"margin-top: 10px\" (click)=\"doTest22()\">\u6D4B\u8BD5\u53D6\u5B57\u5178Code</button>\n      </div>\n    </div>\n    <div class=\"content-right\" style=\"margin-top: 215px\">\n      <h3>\u5B57\u5178\u7C7B\u578Btype</h3>\n      <ul>\n        <li>service-\u670D\u52A1\u7C7B\u578B</li>\n        <li> repair-\u7EF4\u4FEE\u7C7B\u578B</li>\n        <li>\n          fhreturn-\u8FD4\u8D27\u7C7B\u578B\n        </li>\n        <li>\n          riskReason-\u51FA\u9669\u539F\u56E0\n        </li>\n        <li>\n          specifyLogistics-\u6307\u5B9A\u7269\u6D41\n        </li>\n        <li>\n          abnormalDuty-\u5F02\u5E38\u8D23\u4EFB\u65B9\n        </li>\n        <li>\n          complement-\u8865\u4EF6-\u4EFB\u52A1\u7C7B\u578B\n        </li>\n        <li>\n          transportCompany-\u7269\u6D41\u516C\u53F8\n        </li>\n        <li>\n          goodsunit-\u5546\u54C1\u5355\u4F4D\n        </li>\n        <li>\n          abnormalHandleWay-\u5F02\u5E38\u5904\u7406\u65B9\u5F0F\n        </li>\n      </ul>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], MetaDemoBasicComponent);

//# sourceMappingURL=meta-select-demo-basic.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"markdown\"><h1>字典组件</h1>\n    <section class=\"markdown\"><p>通过选择框选定字典。</p>\n      <h2 id=\"何时使用\"><span>何时使用</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <ul>\n        <li><p>选择字典的时候。</p></li>\n      </ul>\n    </section>\n    <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n  </section>\n  <div nz-row [nzGutter]=\"8\">\n    <div nz-col [nzSpan]=\"24\">\n      <nz-code-box [nzTitle]=\"'基本'\" id=\"components-alert-demo-basic\" [nzCode]=\"MetaDemoSelectBasicComponent\">\n        <meta-demo-basic demo></meta-demo-basic>\n        <div intro>\n          <p>最简单的用法。</p>\n        </div>\n      </nz-code-box>\n    </div>\n  </div>\n  <section class=\"markdown api-container\">\n    <h2 id=\"API\"><span>API</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h2>\n    <h3 id=\"Rate\"><span>meta-select</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n      <tr>\n        <th>参数</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>defaultLabel</td>\n        <td>可选参数，placeholder字样</td>\n        <td>String</td>\n        <td><code>请选择…</code></td>\n      </tr>\n      <tr>\n        <td>type</td>\n        <td>\n          查询类型 字典类型type\n        </td>\n        <td>String</td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>multiSelect</td>\n        <td>\n          是否多选\n        </td>\n        <td>boolean</td>\n        <td><code>false</code></td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td>输入框宽度</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>height</td>\n        <td>输入框高度</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>onChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>onFocus</td>\n        <td>聚焦事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>onBlur</td>\n        <td>失去焦点事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>styleClass</td>\n        <td>样式类</td>\n        <td>String</td>\n        <td> -</td>\n      </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaSelectDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetaSelectDemoComponent = (function () {
    function MetaSelectDemoComponent() {
        this.MetaDemoSelectBasicComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/meta-select-demo/meta-select-demo-basic.component.ts");
    }
    MetaSelectDemoComponent.prototype.ngOnInit = function () {
    };
    return MetaSelectDemoComponent;
}());
MetaSelectDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'meta-demo',
        template: __webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.component.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], MetaSelectDemoComponent);

//# sourceMappingURL=meta-select-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-content{\r\n  margin:30px 0 0 30px;\r\n}\r\n.meta-select{\r\n  width: 100px;\r\n}\r\n.component{\r\n  margin-top:50px;\r\n}\r\n.test-content a.back{\r\n  color: #0b7dd8;\r\n  font-size: 16px;\r\n  margin-left: 280px;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meta_select_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meta_select_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__meta_select_demo_basic_component__ = __webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_components_custom_components_module__ = __webpack_require__("./src/app/custom-components/custom-components.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDemoModule", function() { return MetaDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MetaDemoModule = (function () {
    function MetaDemoModule() {
    }
    return MetaDemoModule;
}());
MetaDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_6__meta_select_demo_routing_module__["a" /* MetaDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__custom_components_custom_components_module__["a" /* CustomComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__meta_select_demo_component__["a" /* MetaSelectDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__meta_select_demo_basic_component__["a" /* MetaDemoBasicComponent */]
        ]
    })
], MetaDemoModule);

//# sourceMappingURL=meta-select-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meta_select_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/meta-select-demo/meta-select-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MetaDemoRoutingModule = (function () {
    function MetaDemoRoutingModule() {
    }
    return MetaDemoRoutingModule;
}());
MetaDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__meta_select_demo_component__["a" /* MetaSelectDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], MetaDemoRoutingModule);

//# sourceMappingURL=meta-select-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=43.chunk.js.map