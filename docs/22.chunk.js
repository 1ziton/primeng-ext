webpackJsonp([22],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/area-demo/area-demo-basic.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { API } from \"../../../custom-components/services/api\";\n\n@Component({\n  selector: 'area-demo-basic',\n  template: `\n    <p>level属性可选值为0,1,2；分别代表省市县级别</p>\n    <div style=\"width: 200px;margin: 20px 0;\">\n      <area-select [(ngModel)]=\"areaCode\" [label]=\"defaultLabel\"></area-select>\n    </div>\n    <p style=\"margin: 40px 0 20px 0\">只选省级别level=\"0\"</p>\n    <div style=\"width: 200px;\">\n      <area-select [(ngModel)]=\"areaCode\" [label]=\"defaultLabel\" level=\"0\"></area-select>\n    </div>\n    <div style=\"margin: 20px 0;\">{{areaCode}}</div>\n    <div>   <button (click)=\"doTest()\">测试取区域Code</button></div>\n  `,\n  styles: []\n})\nexport class AreaDemoBasicComponent implements OnInit {\n  areaCode:String = \"110106000000\";\n  defaultLabel:string='请选择区域…';\n  ngOnInit() {\n  }\n  doTest():any{\n    alert(this.areaCode);\n  }\n\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/area-demo/area-demo-select.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { API } from \"../../../custom-components/services/api\";\n\n@Component({\n  selector: 'area-demo-select',\n  template: `    \n    <div>\n      <city-dropdown  [(province)]=\"provinceCode\" [(city)]=\"cityCode\" [(district)]=\"districtCode\"></city-dropdown>\n    </div>\n    <div style=\"margin-top: 20px;\">\n      <span>省：{{provinceCode}}</span>\n      <span>市：{{cityCode}}</span>\n      <span>县：{{districtCode}}</span>\n    </div>\n  `,\n  styles: []\n})\nexport class AreaDemoSelectComponent implements OnInit {\n  districtCode:String = \"\";\n  cityCode:String = \"\";\n  provinceCode:String = \"\";\n  ngOnInit() {\n  }\n\n\n\n}\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDemoBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AreaDemoBasicComponent = (function () {
    function AreaDemoBasicComponent() {
        this.areaCode = "110106000000";
        this.defaultLabel = '请选择区域…';
    }
    AreaDemoBasicComponent.prototype.ngOnInit = function () {
    };
    AreaDemoBasicComponent.prototype.doTest = function () {
        alert(this.areaCode);
    };
    return AreaDemoBasicComponent;
}());
AreaDemoBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'area-demo-basic',
        template: "\n    <p>level\u5C5E\u6027\u53EF\u9009\u503C\u4E3A0,1,2\uFF1B\u5206\u522B\u4EE3\u8868\u7701\u5E02\u53BF\u7EA7\u522B</p>\n    <div style=\"width: 200px;margin: 20px 0;\">\n      <area-select [(ngModel)]=\"areaCode\" [label]=\"defaultLabel\"></area-select>\n    </div>\n    <p style=\"margin: 40px 0 20px 0\">\u53EA\u9009\u7701\u7EA7\u522Blevel=\"0\"</p>\n    <div style=\"width: 200px;\">\n      <area-select [(ngModel)]=\"areaCode\" [label]=\"defaultLabel\" level=\"0\"></area-select>\n    </div>\n    <div style=\"margin: 20px 0;\">{{areaCode}}</div>\n    <div>   <button (click)=\"doTest()\">\u6D4B\u8BD5\u53D6\u533A\u57DFCode</button></div>\n  ",
        styles: []
    })
], AreaDemoBasicComponent);

//# sourceMappingURL=area-demo-basic.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDemoSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AreaDemoSelectComponent = (function () {
    function AreaDemoSelectComponent() {
        this.districtCode = "";
        this.cityCode = "";
        this.provinceCode = "";
    }
    AreaDemoSelectComponent.prototype.ngOnInit = function () {
    };
    return AreaDemoSelectComponent;
}());
AreaDemoSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'area-demo-select',
        template: "    \n    <div>\n      <city-dropdown  [(province)]=\"provinceCode\" [(city)]=\"cityCode\" [(district)]=\"districtCode\"></city-dropdown>\n    </div>\n    <div style=\"margin-top: 20px;\">\n      <span>\u7701\uFF1A{{provinceCode}}</span>\n      <span>\u5E02\uFF1A{{cityCode}}</span>\n      <span>\u53BF\uFF1A{{districtCode}}</span>\n    </div>\n  ",
        styles: []
    })
], AreaDemoSelectComponent);

//# sourceMappingURL=area-demo-select.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"markdown\"><h1>区域选择组件</h1>\n    <section class=\"markdown\"><p>通过选择框选定区域。</p>\n      <h2 id=\"何时使用\"><span>何时使用</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <ul>\n        <li><p>通过选择框选定区域。</p></li>\n      </ul>\n    </section>\n    <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n  </section>\n  <div nz-row [nzGutter]=\"8\">\n    <div nz-col [nzSpan]=\"24\">\n      <nz-code-box [nzTitle]=\"'基本'\" id=\"components-alert-demo-basic\" [nzCode]=\"areaDemoBasicComponent\">\n        <area-demo-basic demo></area-demo-basic>\n        <div intro>\n          <p>最简单的用法。</p>\n        </div>\n      </nz-code-box>\n      <nz-code-box [nzTitle]=\"'下拉级联'\" id=\"components-alert-demo-object\" [nzCode]=\"areaDemoSelectComponent\">\n        <area-demo-select demo></area-demo-select>\n        <div intro>\n          <p>绑定值为省市区三个字段</p>\n        </div>\n      </nz-code-box>\n    </div>\n  </div>\n  <section class=\"markdown api-container\">\n    <h2 id=\"API\"><span>API</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h2>\n    <h3 id=\"Rate\"><span>area-demo-basic</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n      <tr>\n        <th>参数</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>defaultLabel</td>\n        <td>可选参数，placeholder字样</td>\n        <td>String</td>\n        <td><code>请选择…</code></td>\n      </tr>\n      <tr>\n        <td>level</td>\n        <td>可选参数，0 代表省 1 代表市 2 代表 区/县</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td>输入框宽度</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>border</td>\n        <td>边框</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>onChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      </tbody>\n    </table>\n    <h3><span>area-demo-select</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n      <tr>\n        <th>参数</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>provinceLabel , cityLabel , districtLabel</td>\n        <td>可选参数，placeholder字样</td>\n        <td>String</td>\n        <td><code>\"省/直辖市\" , \"市/市辖区\" , \"区县\"</code></td>\n      </tr>\n      <tr>\n        <td>province</td>\n        <td>双向绑定 省</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>city</td>\n        <td>双向绑定 市</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>district</td>\n        <td>双向绑定 区/县</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td>输入框宽度</td>\n        <td>String</td>\n        <td><code>\"150px\"</code></td>\n      </tr>\n      <tr>\n        <td>height</td>\n        <td>边框</td>\n        <td>String</td>\n        <td><code></code></td>\n      </tr>\n      <tr>\n        <td>onChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>provinceChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>cityChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n      <tr>\n        <td>districtChange</td>\n        <td>值改变事件</td>\n        <td>EventEmitter</td>\n        <td> -</td>\n      </tr>\n\n      </tbody>\n    </table>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AreaDemoComponent = (function () {
    function AreaDemoComponent() {
        this.areaDemoBasicComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/area-demo/area-demo-basic.component.ts");
        this.areaDemoSelectComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/area-demo/area-demo-select.component.ts");
    }
    AreaDemoComponent.prototype.ngOnInit = function () {
    };
    return AreaDemoComponent;
}());
AreaDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'area-demo',
        template: __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo.component.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], AreaDemoComponent);

//# sourceMappingURL=area-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-content{\r\n  margin:30px 0 0 30px;\r\n}\r\n.meta-select{\r\n  width: 100px;\r\n}\r\n.component{\r\n  margin-top:50px;\r\n}\r\n.test-content a.back{\r\n  color: #0b7dd8;\r\n  font-size: 16px;\r\n  margin-left: 280px;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_demo_basic_component__ = __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_components_custom_components_module__ = __webpack_require__("./src/app/custom-components/custom-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_demo_select_component__ = __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo-select.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaDemoModule", function() { return AreaDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AreaDemoModule = (function () {
    function AreaDemoModule() {
    }
    return AreaDemoModule;
}());
AreaDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_8__area_demo_routing_module__["a" /* AreaDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__custom_components_custom_components_module__["a" /* CustomComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__area_demo_component__["a" /* AreaDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__area_demo_basic_component__["a" /* AreaDemoBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_10__area_demo_select_component__["a" /* AreaDemoSelectComponent */]
        ]
    })
], AreaDemoModule);

//# sourceMappingURL=area-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/area-demo/area-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/area-demo/area-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AreaDemoRoutingModule = (function () {
    function AreaDemoRoutingModule() {
    }
    return AreaDemoRoutingModule;
}());
AreaDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__area_demo_component__["a" /* AreaDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AreaDemoRoutingModule);

//# sourceMappingURL=area-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=22.chunk.js.map