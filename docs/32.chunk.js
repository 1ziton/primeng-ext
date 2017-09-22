webpackJsonp([32],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/viewer-demo/viewer-demo-basic.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n    selector: 'viewer-demo-basic',\r\n    template: `\r\n    <div id=\"galley\" viewer>\r\n        <ul class=\"pictures\" #content>\r\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-1.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-1.jpg\" alt=\"Cuo Na Lake\"></li>\r\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-2.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-2.jpg\" alt=\"Tibetan Plateau\"></li>\r\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-3.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-3.jpg\" alt=\"Jokhang Temple\"></li>\r\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-4.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-4.jpg\" alt=\"Potala Palace 1\"></li>\r\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-5.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-5.jpg\" alt=\"Potala Palace 2\"></li>\r\n        </ul>\r\n    </div>\r\n  `,\r\n    styles: [`\r\n        .pictures {\r\n            margin: 0;\r\n            padding: 0;\r\n            height: 200px;\r\n            list-style: none;\r\n          }\r\n        \r\n        .pictures > li {\r\n            float: left;\r\n            width: 150px;\r\n            height: 150px;\r\n            margin: 0 -1px -1px 0;\r\n            border: 1px solid transparent;\r\n            overflow: hidden;\r\n        }\r\n        \r\n        .pictures > li > img {\r\n            width: 100%;\r\n            cursor: -webkit-zoom-in;\r\n            cursor: zoom-in;\r\n        }\r\n    `]\r\n})\r\nexport class ViewerDemoBasicComponent {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/custom-components/viewer/viewer.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by giscafer on 2017/09/21.
 * 基于viewer.js封装
 */

var ViewerDirective = (function () {
    function ViewerDirective(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this.originalAttr = "data-original";
        this.nativeElement = this._elementRef.nativeElement;
    }
    ViewerDirective.prototype.ngOnInit = function () {
        var _this = this;
        var nativeEl = this.nativeElement;
        if (this.content) {
            nativeEl = this.content.nativeElement;
        }
        setTimeout(function () {
            var imgs = nativeEl.getElementsByTagName('img');
            if (imgs.length) {
                imgs[0].onload = function () {
                    _this.viewer = new Viewer(_this.nativeElement, {
                        url: _this.originalAttr,
                    });
                };
            }
        });
    };
    ViewerDirective.prototype.ngOnDestroy = function () {
        if (this.viewer) {
            this.viewer.destroy();
        }
    };
    return ViewerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ViewerDirective.prototype, "originalAttr", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ViewerDirective.prototype, "content", void 0);
ViewerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[viewer]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
], ViewerDirective);

var _a, _b, _c;
//# sourceMappingURL=viewer.directive.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDemoBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ViewerDemoBasicComponent = (function () {
    function ViewerDemoBasicComponent() {
    }
    return ViewerDemoBasicComponent;
}());
ViewerDemoBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewer-demo-basic',
        template: "\n    <div id=\"galley\" viewer>\n        <ul class=\"pictures\" #content>\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-1.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-1.jpg\" alt=\"Cuo Na Lake\"></li>\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-2.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-2.jpg\" alt=\"Tibetan Plateau\"></li>\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-3.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-3.jpg\" alt=\"Jokhang Temple\"></li>\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-4.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-4.jpg\" alt=\"Potala Palace 1\"></li>\n            <li><img data-original=\"./assets/showcase/images/demo/pictures/tibet-5.jpg\" src=\"./assets/showcase/images/demo/pictures/thumbnails/tibet-5.jpg\" alt=\"Potala Palace 2\"></li>\n        </ul>\n    </div>\n  ",
        styles: ["\n        .pictures {\n            margin: 0;\n            padding: 0;\n            height: 200px;\n            list-style: none;\n          }\n        \n        .pictures > li {\n            float: left;\n            width: 150px;\n            height: 150px;\n            margin: 0 -1px -1px 0;\n            border: 1px solid transparent;\n            overflow: hidden;\n        }\n        \n        .pictures > li > img {\n            width: 100%;\n            cursor: -webkit-zoom-in;\n            cursor: zoom-in;\n        }\n    "]
    })
], ViewerDemoBasicComponent);

//# sourceMappingURL=viewer-demo-basic.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewerDemoComponent = (function () {
    function ViewerDemoComponent() {
        this.ViewerDemoBasicComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/viewer-demo/viewer-demo-basic.component.ts");
    }
    ViewerDemoComponent.prototype.ngOnInit = function () {
    };
    return ViewerDemoComponent;
}());
ViewerDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewer-demo',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewerDemoComponent);

//# sourceMappingURL=viewer-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-content{\r\n    margin:30px 0 0 30px;\r\n}\r\n.meta-select{\r\n    width: 100px;\r\n}\r\n.component{\r\n    margin-top:50px;\r\n}\r\n.test-content a.back{\r\n    color: #0b7dd8;\r\n    font-size: 16px;\r\n    margin-left: 280px;\r\n    text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"markdown\">\n    <h1>Viewer</h1>\n    <section class=\"markdown\">\n      <p>基于 <a href=\"https://github.com/fengyuanchen/viewerjs\" target=\"_black\">viewer.js</a>  封装的指令</p>\n      <p>使用之前需要将viewer.js和viewer.css引入工程为全局文件</p>\n      <h2 id=\"何时使用\"><span>何时使用</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <ul>\n        <li>\n          <p>图片预览</p>\n        </li>\n      </ul>\n    </section>\n    <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n  </section>\n  <div nz-row [nzGutter]=\"8\">\n    <div nz-col [nzSpan]=\"24\">\n      <nz-code-box [nzTitle]=\"'基本'\" id=\"components-viewer-demo-basic\" [nzCode]=\"ViewerDemoBasicComponent\">\n        <viewer-demo-basic demo></viewer-demo-basic>\n        <div intro>\n          <p>用法举例，data-original 为原图路径，src为缩略图路径。</p>\n        </div>\n      </nz-code-box>\n    </div>\n  </div>\n  <section class=\"markdown api-container\">\n    <h2 id=\"API\"><span>API</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h2>\n    <h3 id=\"Rate\"><span>[viewer]</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>默认值</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>#content</td>\n          <td>图片内容标识，如果图标使用ngFor方式循环数组展示，请在父级元素加上#content （ngFor模板初始化比ngOnInit晚）</td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>originalAttr</td>\n          <td>原图路径属性，非必须</td>\n          <td>String</td>\n          <td>data-original</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>"

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_viewer_demo_viewer_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_custom_components_viewer_demo_viewer_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_custom_components_viewer_viewer_directive__ = __webpack_require__("./src/app/custom-components/viewer/viewer.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_viewer_demo_viewer_demo_basic_component__ = __webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo-basic.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerDemoModule", function() { return ViewerDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ViewerDemoModule = (function () {
    function ViewerDemoModule() {
    }
    return ViewerDemoModule;
}());
ViewerDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8_app_custom_components_viewer_viewer_directive__["a" /* ViewerDirective */],
            __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_viewer_demo_viewer_demo_basic_component__["a" /* ViewerDemoBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_viewer_demo_viewer_demo_component__["a" /* ViewerDemoComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_custom_components_viewer_demo_viewer_demo_routing_module__["a" /* ViewerDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */]
        ]
    })
], ViewerDemoModule);

//# sourceMappingURL=viewer-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/viewer-demo/viewer-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_viewer_demo_viewer_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/viewer-demo/viewer-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewerDemoRoutingModule = (function () {
    function ViewerDemoRoutingModule() {
    }
    return ViewerDemoRoutingModule;
}());
ViewerDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_viewer_demo_viewer_demo_component__["a" /* ViewerDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ViewerDemoRoutingModule);

//# sourceMappingURL=viewer-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=32.chunk.js.map