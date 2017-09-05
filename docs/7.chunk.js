webpackJsonp([7],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-multipleFile.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ui-upload-demo-multipleFile',\n  template: `\n    <ui-upload type=\"file\" [(ngModel)]=\"files\" (fileChange)=\"fileChange($event)\"></ui-upload>\n    <p>{{fileChangeList}}</p>\n  `,\n  styles: []\n})\nexport class UIUploadDemoDemoMultipleFileComponent implements OnInit {\n\n  files: any[] = [];\n  fileChangeList: any;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  fileChange($event) {\n    this.fileChangeList = JSON.stringify($event);\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-picture.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ui-upload-demo-picture',\n  template: `\n    <div style=\"width: 500px;\">\n      <ui-upload [(ngModel)]=\"files\" [files]=\"testfiles\"></ui-upload>\n    </div>\n  `,\n  styles: []\n})\nexport class UIUploadDemoDemoPictureComponent implements OnInit {\n\n  testData: any[] = [{\n    \"id\": \"Vv2SR-HRJyod0OnD\",\n    \"name\": \"8676711.png\",\n    \"path\": \"Vv2SR-HRJyod0OnD.png\",\n    \"url\": \"https://yztfile.gz.bcebos.com/Vv2SR-HRJyod0OnD.png\"\n  }, {\n    \"id\": \"Vv2SS0nRJyod0OnE\",\n    \"name\": \"lhb10202226.gif\",\n    \"path\": \"Vv2SS0nRJyod0OnE.gif\",\n    \"url\": \"https://yztfile.gz.bcebos.com/Vv2SS0nRJyod0OnE.gif\"\n  }, {\n    \"id\": \"Vv2SZYHRJyod0OnF\",\n    \"name\": \"aot.png\",\n    \"path\": \"Vv2SZYHRJyod0OnF.png\",\n    \"url\": \"https://yztfile.gz.bcebos.com/Vv2SZYHRJyod0OnF.png\"\n  }, {\n    \"id\": \"Vv2SgvjRJyod0OnG\",\n    \"name\": \"aot cover.png\",\n    \"path\": \"Vv2SgvjRJyod0OnG.png\",\n    \"url\": \"https://yztfile.gz.bcebos.com/Vv2SgvjRJyod0OnG.png\"\n  }];\n\n  testfiles: any[] = [];\n\n  files: any[] = [];\n\n  constructor() { }\n\n  ngOnInit() {\n    //测试图片回显数据\n    this.testfiles = this.testData;\n    //获取id绑定ngModel（id数组）\n    this.files = _.map(this.testData, 'id');\n    //console.log(this.files)\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-singleFile.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ui-upload-demo-singleFile',\n  template: `\n    <ui-upload type=\"file\" [(ngModel)]=\"files\" (fileChange)=\"fileChange($event)\" multiple=\"single\"></ui-upload>\n    <p>{{fileChangeList}}</p>\n  `,\n  styles: []\n})\nexport class UIUploadDemoDemoSingleFileComponent implements OnInit {\n\n  files: any[] = [];\n  fileChangeList: any;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  fileChange($event) {\n    this.fileChangeList = JSON.stringify($event);\n  }\n}\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-multipleFile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIUploadDemoDemoMultipleFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIUploadDemoDemoMultipleFileComponent = (function () {
    function UIUploadDemoDemoMultipleFileComponent() {
        this.files = [];
    }
    UIUploadDemoDemoMultipleFileComponent.prototype.ngOnInit = function () {
    };
    UIUploadDemoDemoMultipleFileComponent.prototype.fileChange = function ($event) {
        this.fileChangeList = JSON.stringify($event);
    };
    return UIUploadDemoDemoMultipleFileComponent;
}());
UIUploadDemoDemoMultipleFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-upload-demo-multipleFile',
        template: "\n    <ui-upload type=\"file\" [(ngModel)]=\"files\" (fileChange)=\"fileChange($event)\"></ui-upload>\n    <p>{{fileChangeList}}</p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UIUploadDemoDemoMultipleFileComponent);

//# sourceMappingURL=ui-upload-demo-multipleFile.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIUploadDemoDemoPictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIUploadDemoDemoPictureComponent = (function () {
    function UIUploadDemoDemoPictureComponent() {
        this.testData = [{
                "id": "Vv2SR-HRJyod0OnD",
                "name": "8676711.png",
                "path": "Vv2SR-HRJyod0OnD.png",
                "url": "https://yztfile.gz.bcebos.com/Vv2SR-HRJyod0OnD.png"
            }, {
                "id": "Vv2SS0nRJyod0OnE",
                "name": "lhb10202226.gif",
                "path": "Vv2SS0nRJyod0OnE.gif",
                "url": "https://yztfile.gz.bcebos.com/Vv2SS0nRJyod0OnE.gif"
            }, {
                "id": "Vv2SZYHRJyod0OnF",
                "name": "aot.png",
                "path": "Vv2SZYHRJyod0OnF.png",
                "url": "https://yztfile.gz.bcebos.com/Vv2SZYHRJyod0OnF.png"
            }, {
                "id": "Vv2SgvjRJyod0OnG",
                "name": "aot cover.png",
                "path": "Vv2SgvjRJyod0OnG.png",
                "url": "https://yztfile.gz.bcebos.com/Vv2SgvjRJyod0OnG.png"
            }];
        this.testfiles = [];
        this.files = [];
    }
    UIUploadDemoDemoPictureComponent.prototype.ngOnInit = function () {
        //测试图片回显数据
        this.testfiles = this.testData;
        //获取id绑定ngModel（id数组）
        this.files = _.map(this.testData, 'id');
        //console.log(this.files)
    };
    return UIUploadDemoDemoPictureComponent;
}());
UIUploadDemoDemoPictureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-upload-demo-picture',
        template: "\n    <div style=\"width: 500px;\">\n      <ui-upload [(ngModel)]=\"files\" [files]=\"testfiles\"></ui-upload>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UIUploadDemoDemoPictureComponent);

//# sourceMappingURL=ui-upload-demo-picture.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-singleFile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIUploadDemoDemoSingleFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIUploadDemoDemoSingleFileComponent = (function () {
    function UIUploadDemoDemoSingleFileComponent() {
        this.files = [];
    }
    UIUploadDemoDemoSingleFileComponent.prototype.ngOnInit = function () {
    };
    UIUploadDemoDemoSingleFileComponent.prototype.fileChange = function ($event) {
        this.fileChangeList = JSON.stringify($event);
    };
    return UIUploadDemoDemoSingleFileComponent;
}());
UIUploadDemoDemoSingleFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-upload-demo-singleFile',
        template: "\n    <ui-upload type=\"file\" [(ngModel)]=\"files\" (fileChange)=\"fileChange($event)\" multiple=\"single\"></ui-upload>\n    <p>{{fileChangeList}}</p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UIUploadDemoDemoSingleFileComponent);

//# sourceMappingURL=ui-upload-demo-singleFile.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIUploadDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIUploadDemoComponent = (function () {
    function UIUploadDemoComponent() {
        this.UIUploadDemoDemoPictureComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-picture.component.ts");
        this.UIUploadDemoDemoSingleFileComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-singleFile.component.ts");
        this.UIUploadDemoDemoMultipleFileComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-multipleFile.component.ts");
    }
    UIUploadDemoComponent.prototype.ngOnInit = function () {
    };
    return UIUploadDemoComponent;
}());
UIUploadDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-upload-demo',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewEncapsulation */].None,
        template: __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], UIUploadDemoComponent);

//# sourceMappingURL=ui-upload-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-content{\r\n    margin:30px 30px 0 30px;\r\n}\r\n.meta-select{\r\n    width: 100px;\r\n}\r\n.component{\r\n    margin-top:50px;\r\n}\r\n.test-content a.back{\r\n    color: #0b7dd8;\r\n    font-size: 16px;\r\n    margin-left: 280px;\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"markdown\"><h1>图片&文件上传组件</h1>\n    <section class=\"markdown\"><p>基于p-fileUpload扩展文件上传。</p>\n      <h2 id=\"何时使用\"><span>何时使用</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <ul>\n        <li><p>选择图片和文件上传到服务器。</p></li>\n      </ul>\n    </section>\n    <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n  </section>\n  <div nz-row [nzGutter]=\"8\">\n    <div nz-col [nzSpan]=\"24\">\n      <nz-code-box [nzTitle]=\"'图片上传'\" id=\"components-alert-demo-picture\" [nzCode]=\"UIUploadDemoDemoPictureComponent\">\n        <ui-upload-demo-picture demo></ui-upload-demo-picture>\n        <div intro>\n          <p>图片上传用法。</p>\n        </div>\n      </nz-code-box>\n      <nz-code-box [nzTitle]=\"'上传多个文件并在选中时上传服务器'\" id=\"components-alert-demo-multipleFile\" [nzCode]=\"UIUploadDemoDemoMultipleFileComponent\">\n        <ui-upload-demo-multipleFile demo></ui-upload-demo-multipleFile>\n        <div intro>\n          <p>属性type绑定值为 <code>type=\"file\"</code> 默认文件选择为多选</p>\n        </div>\n      </nz-code-box>\n      <nz-code-box [nzTitle]=\"'上传单个文件并在选中时上传服务器'\" id=\"components-alert-demo-singleFile\" [nzCode]=\"UIUploadDemoDemoSingleFileComponent\">\n        <ui-upload-demo-singleFile demo></ui-upload-demo-singleFile>\n        <div intro>\n          <p>属性type绑定值为 <code>type=\"file\"</code> 属性multiple绑定值为 <code>multiple=\"single\"</code></p>\n        </div>\n      </nz-code-box>\n    </div>\n  </div>\n  <section class=\"markdown api-container\">\n    <h2 id=\"API\"><span>API</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h2>\n    <h3 id=\"Rate\"><span>ui-upload</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>默认值</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>files</td>\n          <td>可选参数，赋值回显默认图片,数组内容必须为对象且属性为</td>\n          <td>Array</td>\n          <td>无</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td>可选参数，如果设置值为<code>file</code>，选择文件后自动上传服务器</td>\n          <td>String</td>\n          <td>无</td>\n        </tr>\n        <tr>\n          <td>fileMaxNum</td>\n          <td>最大上传数量</td>\n          <td>Number</td>\n          <td> <code>20</code> </td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td>是否支持多选文件，如果设置值为<code>single</code>，只能选择单个文件上传</td>\n          <td>String</td>\n          <td> <code>multiple</code> </td>\n        </tr>\n        <tr>\n          <td>fileChange</td>\n          <td>选择文件或者上传文件后回调事件，返回文件数组</td>\n          <td>EventEmitter</td>\n          <td>无</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_custom_components_custom_components_module__ = __webpack_require__("./src/app/custom-components/custom-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_picture_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_singleFile_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-singleFile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_multipleFile_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo-multipleFile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIUploadDemoModule", function() { return UIUploadDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UIUploadDemoModule = (function () {
    function UIUploadDemoModule() {
    }
    return UIUploadDemoModule;
}());
UIUploadDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_component__["a" /* UIUploadDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_picture_component__["a" /* UIUploadDemoDemoPictureComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_singleFile_component__["a" /* UIUploadDemoDemoSingleFileComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_multipleFile_component__["a" /* UIUploadDemoDemoMultipleFileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_routing_module__["a" /* UIUploadDemo1RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_custom_components_custom_components_module__["b" /* UIUploadModule */]
        ]
    })
], UIUploadDemoModule);

//# sourceMappingURL=ui-upload-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-upload-demo/ui-upload-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIUploadDemo1RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UIUploadDemo1RoutingModule = (function () {
    function UIUploadDemo1RoutingModule() {
    }
    return UIUploadDemo1RoutingModule;
}());
UIUploadDemo1RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_ui_upload_demo_ui_upload_demo_component__["a" /* UIUploadDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], UIUploadDemo1RoutingModule);

//# sourceMappingURL=ui-upload-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map