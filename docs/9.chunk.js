webpackJsonp([9],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-basic.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { testData } from \"app/showcase/custom-components/ui-grid-demo/data\";\n\n@Component({\n  selector: 'ui-grid-demo-basic',\n  template: `\n  <ui-grid\n      [columns]=\"columns\"\n      [data]=\"data\"\n      (load)=\"load($event)\"\n      (cellClick)=\"cellClick($event)\"\n      [selections]=\"selections\"\n      (rowSelect)=\"rowSelect($event)\"\n  ></ui-grid>\n  `,\n  styles: []\n})\nexport class UIGridDemoBasicComponent implements OnInit {\n\n  columns: any[] = [];\n  selections: any = [];\n  data = {};\n\n  selectedRow:any[];\n\n  constructor() { }\n\n  ngOnInit() {\n    this.initColumns();\n    \n  }\n\n  load($event){\n    /**\n     *  test getting data\n     */\n    this.data=testData;\n  }\n\n  rowSelect($event){\n    this.selectedRow=$event;\n  }\n\n  cellClick($event){\n    alert(JSON.stringify($event))\n  }\n\n  initColumns() {\n    this.columns = [{\n      field: \"id\",\n      header: \"ID\",\n      filter: true\n    }, {\n      field: \"picture\",\n      header: \"缩略图\",\n      width: '80px',\n      thumbnail: true /**控制缩略图字段 */\n    }, {\n      field: \"code\",\n      header: \"代号\",\n      width: \"100px\",\n    }, {\n      field: \"name\",\n      header: \"名称\",\n      hidden: false,\n      isWarn: true /* 判断字段是否为0，一般仅用在金额为0时，变成红色，配合下面rowSelect方法可以使金额为0的行不可选中*/\n    }, {\n      field: \"hidden\",\n      header: \"隐藏的列\",\n      hidden: true,\n      filter: true\n    }, {\n      field: \"fullName\",\n      header: \"全称\",\n      textLength: 11 /*该字段鼠标移动会有悬浮显示隐藏文字*/\n    }, {\n      field: \"userJzts[0].accountName\",\n      header: \"子VO列\",\n      link:true, /*该字段有点击交互*/\n      sortable: true\n    }];\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-object.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { testData } from \"app/showcase/custom-components/ui-grid-demo/data\";\n\n@Component({\n  selector: 'ui-grid-demo-object',\n  template: `\n  <ui-grid\n      [columns]=\"columns\"\n      [data]=\"data\"\n      (load)=\"load($event)\"\n      [selections]=\"selections\"\n      [enableExport]=\"enableExport\"\n      [showEditColumn]=\"showEditColumn\"\n      (cellMouseEnter)=\"cellMouseEnter($event,op,op2,op3)\"\n      (cellMouseLeave)=\"cellMouseLeave($event,op,op2,op3)\"\n      (rowSelect)=\"rowSelect($event)\"\n  ></ui-grid>\n  \n<!--使用p-dataTabel组件定义内容-->\n<p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<h3>使用prime-ng组件p-dataTable自定义表格展示</h3>\n<p-dataTable [value]=\"op2Data\" [style]=\"{'width':'500px'}\">\n    <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n    <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n    <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</p-overlayPanel>\n\n<!--自定义浮动窗口的时候必须像以下格式-->\n<p-overlayPanel #op [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<div style=\"width: 300px;\">\n    <h3>自定义弹出内容</h3>\n    <div style=\"word-wrap:break-word;\">\n        {{cellOverEvent}}\n    </div>\n</div>\n</p-overlayPanel>\n<!--使用ui-grid组件定义内容-->\n<p-overlayPanel #op3 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<div style=\"width: 500px;overflow: scroll\">\n    <h3>使用ui-grid组件自定义表格展示</h3>\n    <ui-grid [columns]=\"overTableColumns\"\n             [data]=\"overTableData\"\n             [enableExport]=\"enableExport\"\n             [showEditColumn]=\"showEditColumn\"\n             (load)=\"overTableload($event)\"\n    ></ui-grid>\n</div>\n</p-overlayPanel>\n  `,\n  // styles: [\n  //   `:host ::ng-deep .ui-overlaypanel {\n  //     position: fixed;\n  // }`\n  // ]\n})\nexport class UIGridDemoObjectComponent implements OnInit {\n  columns: any[] = [];\n  selections: any = [];\n  data = {};\n\n  selectedRow: any[];\n\n  //overflow win\n  op2Data: any = [];\n  overTableColumns: any[] = [];\n  overTableData: any;\n  cellOverEvent: any;\n  enableExport: boolean = false;\n  showEditColumn: boolean = false;\n\n  constructor() { }\n\n  ngOnInit() {\n    this.initColumns();\n    this.initOverTableColumns();\n    this.overTableload();\n  }\n\n  load($event) {\n    /**\n     *  test getting data\n     */\n    this.data = testData;\n  }\n\n  rowSelect($event) {\n    this.selectedRow = $event;\n  }\n  /**\n       * 表格字段鼠标进入表格cell事件触发回调方法\n       * @param $event\n       * @param restObj 浮动窗口对象，根据窗口数量传参自己定义，因为此处举例三个弹窗\n       */\n  cellMouseEnter($event, ...restObj: any[]): any {\n    this.cellOverEvent = JSON.stringify($event);\n    overlayPanelShow($event, restObj, ['id', \"code\", \"name\"]);\n\n  }\n\n  /**\n   * 鼠标从自定义悬浮框上移走触发\n   * @param restObj\n   */\n  cellMouseLeave($event, ...restObj: any[]) {\n\n    overlayPanelHide($event, restObj, ['id', \"code\", \"name\"]);\n\n  }\n  /**\n     * 浮动弹出表格\n     */\n  initOverTableColumns() {\n    let columns = [\n      {\n        field: \"id\",\n        header: \"ID\",\n        sortable: true\n      },\n      {\n        field: \"product\",\n        header: \"产品\",\n        sortable: true\n      },\n      {\n        field: \"installCount\",\n        header: \"安装数量\",\n        sortable: true\n      },\n      {\n        field: \"packageCount\",\n        header: \"打包数量\",\n        sortable: true\n      }, {\n        field: \"weight\",\n        header: \"总重量\",\n        sortable: true\n      }\n    ]\n    this.overTableColumns = columns;\n  }\n\n  overTableload($event?) {\n    //测试数据\n    this.overTableData = {\n      content: [{\n        \"id\": 1,\n        \"product\": '沙发',\n        \"installCount\": '12',\n        \"packageCount\": '12',\n        \"weight\": '23kg'\n\n      }, {\n        \"id\": 2,\n        \"product\": '玻璃门',\n        \"installCount\": '3',\n        \"packageCount\": '3',\n        \"weight\": '50kg'\n\n      }],\n      first: true,\n      last: true,\n      number: 0,\n      numberOfElements: 4,\n      size: 20,\n      totalElements: 4,\n      totalPages: 1\n    }\n\n\n    this.op2Data = [\n      { \"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\" },\n      { \"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\" },\n      { \"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\" },\n      { \"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\" },\n      { \"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\" },\n      { \"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\" },\n      { \"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\" },\n      { \"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\" },\n      { \"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\" },\n      { \"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\" }\n    ];\n  }\n  initColumns() {\n    this.columns = [{\n      field: \"id\",\n      header: \"ID\",\n      filter: true\n    }, {\n      field: \"picture\",\n      header: \"缩略图\",\n      width: '80px',\n      thumbnail: true /**控制缩略图字段 */\n    }, {\n      field: \"code\",\n      header: \"代号\",\n      width: \"100px\",\n      defaultTipsHidden: true\n    }, {\n      field: \"name\",\n      header: \"名称\",\n      hidden: false,\n      isWarn: true /* 判断字段是否为0，一般仅用在金额为0时，变成红色，配合下面rowSelect方法可以使金额为0的行不可选中*/\n    }, {\n      field: \"hidden\",\n      header: \"隐藏的列\",\n      hidden: true,\n      filter: true\n    }, {\n      field: \"fullName\",\n      header: \"全称\",\n      textLength: 11 /*该字段鼠标移动会有悬浮显示隐藏文字*/\n    }, {\n      field: \"userJzts[0].accountName\",\n      header: \"子VO列\",\n      sortable: true\n    }];\n  }\n\n}\n\n\n/**\n * Created by giscafer on 2017-05-16.\n */\n\n/**\n * 表格字段鼠标进入表格cell事件触发回调方法\n * @param $event\n * @param layArr p-overlayPanel对象数组，浮动窗口对象，根据窗口数量传参自己定义，因为此处举例三个弹窗\n * @param fieldNames 元素值的位置要和layArr对应元素一致\n */\nexport function overlayPanelShow($event, layArr: any[], fieldNames: string[]): any {\n\n  let field = $event.field;\n  let index = fieldNames.indexOf(field);\n  if (index !== -1) {\n    layArr[index].show($event.originalEvent);\n  }\n}\n\n/**\n * 鼠标从自定义悬浮框上移走触发\n * @param layArr  p-overlayPanel对象数组\n */\nexport function overlayPanelHide($event, layArr: any[], fieldNames: any[]) {\n  let field = $event.field;\n  let index = fieldNames.indexOf(field);\n  let relatedTarget = $event.originalEvent.relatedTarget || {};\n  if (index !== -1 && !containsOverLayer(relatedTarget.className)) {\n    layArr[index].hide();\n  } else if (index !== -1) {\n    //离开弹窗自动隐藏\n    let nativeEle = layArr[index].el.nativeElement;\n    if (!nativeEle.children[0]) return;\n    nativeEle.children[0].onmouseleave = function () {\n      layArr[index].hide();\n    }\n  }\n}\n\n/**\n * 判断类名是否存在浮动框，控制鼠标在overlay之上不隐藏弹窗\n * @param className\n * @returns {any}\n */\nfunction containsOverLayer(className) {\n  if (!className) return false;\n  return className.includes('ui-overlaypanel');\n}\n\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testData; });
var testData = {
    content: [{
            "userJzts": [{
                    "accountName": "accountName"
                }],
            "picture": ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495706432&di=55282e63736e5c564610c2a2799406af&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fastro%2Fpics%2Fhv1%2F114%2F65%2F1859%2F120898164.jpg'],
            "fullName": 'fullName46464352123213',
            "name": 'test',
            "id": 12,
            "code": '1346464352123213'
        }, {
            "userJzts": [{
                    "accountName": "测试数据"
                }],
            "picture": ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495706432&di=55282e63736e5c564610c2a2799406af&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fastro%2Fpics%2Fhv1%2F114%2F65%2F1859%2F120898164.jpg'],
            "fullName": '测试  数据fullName',
            "name": '测试数据',
            "id": 199,
            "code": '1231234'
        }, {
            "userJzts": [{
                    "accountName": "测试数据"
                }],
            "picture": ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495111717741&di=8203dba1d997f770b568492bd83b2156&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fanimal%2FDogs_Summer_and_Winter%2Fwallpapers%2F1920x1200%2FDogsB10_Lucy.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495111717741&di=8203dba1d997f770b568492bd83b2156&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fanimal%2FDogs_Summer_and_Winter%2Fwallpapers%2F1920x1200%2FDogsB10_Lucy.jpg'],
            "fullName": '测试数据fullName',
            "name": '测试数据',
            "id": '11',
            "code": '1231234TDSFFASDTKYUK67'
        }, {
            "userJzts": [{
                    "accountName": "测试数据"
                }],
            "fullName": '测试数据fullName法师打发第三方干撒的阿斯顿发送到发送到发顺丰打算防',
            "name": '测试数据',
            "id": '11',
            "code": '他说的'
        }, {
            "userJzts": [{
                    "accountName": "测试数据"
                }],
            "picture": ['http://pic2.ooopic.com/11/98/31/31bOOOPIC12_1024.jpg'],
            "fullName": '测试数据fullName',
            "name": 0,
            "id": '11',
            "code": 'zxdgergfui;ojtyrt'
        }, {
            "userJzts": [{
                    "accountName": "测试数据"
                }],
            "fullName": '测试数据fullName是大非隔离开关和vdsfvdfsvdfsvsdfvdfs爱的发大水发热管听日呢教育科技大非隔离开关和vdsfvdfsvdfsvsdfvdfs爱的发大水发热管听日呢教育科技大非隔离开关和vdsfvdfsvdfsvsdfvdfs爱的发大水发热管听日呢教育科技',
            "name": '测试数据',
            "id": '11',
            "code": 'dasfv大'
        }],
    first: true,
    last: true,
    number: 0,
    numberOfElements: 4,
    size: 20,
    totalElements: 4,
    totalPages: 1
};
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_showcase_custom_components_ui_grid_demo_data__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIGridDemoBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UIGridDemoBasicComponent = (function () {
    function UIGridDemoBasicComponent() {
        this.columns = [];
        this.selections = [];
        this.data = {};
    }
    UIGridDemoBasicComponent.prototype.ngOnInit = function () {
        this.initColumns();
    };
    UIGridDemoBasicComponent.prototype.load = function ($event) {
        /**
         *  test getting data
         */
        this.data = __WEBPACK_IMPORTED_MODULE_1_app_showcase_custom_components_ui_grid_demo_data__["a" /* testData */];
    };
    UIGridDemoBasicComponent.prototype.rowSelect = function ($event) {
        this.selectedRow = $event;
    };
    UIGridDemoBasicComponent.prototype.cellClick = function ($event) {
        alert(JSON.stringify($event));
    };
    UIGridDemoBasicComponent.prototype.initColumns = function () {
        this.columns = [{
                field: "id",
                header: "ID",
                filter: true
            }, {
                field: "picture",
                header: "缩略图",
                width: '80px',
                thumbnail: true /**控制缩略图字段 */
            }, {
                field: "code",
                header: "代号",
                width: "100px",
            }, {
                field: "name",
                header: "名称",
                hidden: false,
                isWarn: true /* 判断字段是否为0，一般仅用在金额为0时，变成红色，配合下面rowSelect方法可以使金额为0的行不可选中*/
            }, {
                field: "hidden",
                header: "隐藏的列",
                hidden: true,
                filter: true
            }, {
                field: "fullName",
                header: "全称",
                textLength: 11 /*该字段鼠标移动会有悬浮显示隐藏文字*/
            }, {
                field: "userJzts[0].accountName",
                header: "子VO列",
                link: true,
                sortable: true
            }];
    };
    return UIGridDemoBasicComponent;
}());
UIGridDemoBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-grid-demo-basic',
        template: "\n  <ui-grid\n      [columns]=\"columns\"\n      [data]=\"data\"\n      (load)=\"load($event)\"\n      (cellClick)=\"cellClick($event)\"\n      [selections]=\"selections\"\n      (rowSelect)=\"rowSelect($event)\"\n  ></ui-grid>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UIGridDemoBasicComponent);

//# sourceMappingURL=ui-grid-demo-basic.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_showcase_custom_components_ui_grid_demo_data__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIGridDemoObjectComponent; });
/* unused harmony export overlayPanelShow */
/* unused harmony export overlayPanelHide */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UIGridDemoObjectComponent = (function () {
    function UIGridDemoObjectComponent() {
        this.columns = [];
        this.selections = [];
        this.data = {};
        //overflow win
        this.op2Data = [];
        this.overTableColumns = [];
        this.enableExport = false;
        this.showEditColumn = false;
    }
    UIGridDemoObjectComponent.prototype.ngOnInit = function () {
        this.initColumns();
        this.initOverTableColumns();
        this.overTableload();
    };
    UIGridDemoObjectComponent.prototype.load = function ($event) {
        /**
         *  test getting data
         */
        this.data = __WEBPACK_IMPORTED_MODULE_1_app_showcase_custom_components_ui_grid_demo_data__["a" /* testData */];
    };
    UIGridDemoObjectComponent.prototype.rowSelect = function ($event) {
        this.selectedRow = $event;
    };
    /**
         * 表格字段鼠标进入表格cell事件触发回调方法
         * @param $event
         * @param restObj 浮动窗口对象，根据窗口数量传参自己定义，因为此处举例三个弹窗
         */
    UIGridDemoObjectComponent.prototype.cellMouseEnter = function ($event) {
        var restObj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restObj[_i - 1] = arguments[_i];
        }
        this.cellOverEvent = JSON.stringify($event);
        overlayPanelShow($event, restObj, ['id', "code", "name"]);
    };
    /**
     * 鼠标从自定义悬浮框上移走触发
     * @param restObj
     */
    UIGridDemoObjectComponent.prototype.cellMouseLeave = function ($event) {
        var restObj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restObj[_i - 1] = arguments[_i];
        }
        overlayPanelHide($event, restObj, ['id', "code", "name"]);
    };
    /**
       * 浮动弹出表格
       */
    UIGridDemoObjectComponent.prototype.initOverTableColumns = function () {
        var columns = [
            {
                field: "id",
                header: "ID",
                sortable: true
            },
            {
                field: "product",
                header: "产品",
                sortable: true
            },
            {
                field: "installCount",
                header: "安装数量",
                sortable: true
            },
            {
                field: "packageCount",
                header: "打包数量",
                sortable: true
            }, {
                field: "weight",
                header: "总重量",
                sortable: true
            }
        ];
        this.overTableColumns = columns;
    };
    UIGridDemoObjectComponent.prototype.overTableload = function ($event) {
        //测试数据
        this.overTableData = {
            content: [{
                    "id": 1,
                    "product": '沙发',
                    "installCount": '12',
                    "packageCount": '12',
                    "weight": '23kg'
                }, {
                    "id": 2,
                    "product": '玻璃门',
                    "installCount": '3',
                    "packageCount": '3',
                    "weight": '50kg'
                }],
            first: true,
            last: true,
            number: 0,
            numberOfElements: 4,
            size: 20,
            totalElements: 4,
            totalPages: 1
        };
        this.op2Data = [
            { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
        ];
    };
    UIGridDemoObjectComponent.prototype.initColumns = function () {
        this.columns = [{
                field: "id",
                header: "ID",
                filter: true
            }, {
                field: "picture",
                header: "缩略图",
                width: '80px',
                thumbnail: true /**控制缩略图字段 */
            }, {
                field: "code",
                header: "代号",
                width: "100px",
                defaultTipsHidden: true
            }, {
                field: "name",
                header: "名称",
                hidden: false,
                isWarn: true /* 判断字段是否为0，一般仅用在金额为0时，变成红色，配合下面rowSelect方法可以使金额为0的行不可选中*/
            }, {
                field: "hidden",
                header: "隐藏的列",
                hidden: true,
                filter: true
            }, {
                field: "fullName",
                header: "全称",
                textLength: 11 /*该字段鼠标移动会有悬浮显示隐藏文字*/
            }, {
                field: "userJzts[0].accountName",
                header: "子VO列",
                sortable: true
            }];
    };
    return UIGridDemoObjectComponent;
}());
UIGridDemoObjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-grid-demo-object',
        template: "\n  <ui-grid\n      [columns]=\"columns\"\n      [data]=\"data\"\n      (load)=\"load($event)\"\n      [selections]=\"selections\"\n      [enableExport]=\"enableExport\"\n      [showEditColumn]=\"showEditColumn\"\n      (cellMouseEnter)=\"cellMouseEnter($event,op,op2,op3)\"\n      (cellMouseLeave)=\"cellMouseLeave($event,op,op2,op3)\"\n      (rowSelect)=\"rowSelect($event)\"\n  ></ui-grid>\n  \n<!--\u4F7F\u7528p-dataTabel\u7EC4\u4EF6\u5B9A\u4E49\u5185\u5BB9-->\n<p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<h3>\u4F7F\u7528prime-ng\u7EC4\u4EF6p-dataTable\u81EA\u5B9A\u4E49\u8868\u683C\u5C55\u793A</h3>\n<p-dataTable [value]=\"op2Data\" [style]=\"{'width':'500px'}\">\n    <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n    <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n    <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n    <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</p-overlayPanel>\n\n<!--\u81EA\u5B9A\u4E49\u6D6E\u52A8\u7A97\u53E3\u7684\u65F6\u5019\u5FC5\u987B\u50CF\u4EE5\u4E0B\u683C\u5F0F-->\n<p-overlayPanel #op [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<div style=\"width: 300px;\">\n    <h3>\u81EA\u5B9A\u4E49\u5F39\u51FA\u5185\u5BB9</h3>\n    <div style=\"word-wrap:break-word;\">\n        {{cellOverEvent}}\n    </div>\n</div>\n</p-overlayPanel>\n<!--\u4F7F\u7528ui-grid\u7EC4\u4EF6\u5B9A\u4E49\u5185\u5BB9-->\n<p-overlayPanel #op3 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n<div style=\"width: 500px;overflow: scroll\">\n    <h3>\u4F7F\u7528ui-grid\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u8868\u683C\u5C55\u793A</h3>\n    <ui-grid [columns]=\"overTableColumns\"\n             [data]=\"overTableData\"\n             [enableExport]=\"enableExport\"\n             [showEditColumn]=\"showEditColumn\"\n             (load)=\"overTableload($event)\"\n    ></ui-grid>\n</div>\n</p-overlayPanel>\n  ",
    }),
    __metadata("design:paramtypes", [])
], UIGridDemoObjectComponent);

/**
 * Created by giscafer on 2017-05-16.
 */
/**
 * 表格字段鼠标进入表格cell事件触发回调方法
 * @param $event
 * @param layArr p-overlayPanel对象数组，浮动窗口对象，根据窗口数量传参自己定义，因为此处举例三个弹窗
 * @param fieldNames 元素值的位置要和layArr对应元素一致
 */
function overlayPanelShow($event, layArr, fieldNames) {
    var field = $event.field;
    var index = fieldNames.indexOf(field);
    if (index !== -1) {
        layArr[index].show($event.originalEvent);
    }
}
/**
 * 鼠标从自定义悬浮框上移走触发
 * @param layArr  p-overlayPanel对象数组
 */
function overlayPanelHide($event, layArr, fieldNames) {
    var field = $event.field;
    var index = fieldNames.indexOf(field);
    var relatedTarget = $event.originalEvent.relatedTarget || {};
    if (index !== -1 && !containsOverLayer(relatedTarget.className)) {
        layArr[index].hide();
    }
    else if (index !== -1) {
        //离开弹窗自动隐藏
        var nativeEle = layArr[index].el.nativeElement;
        if (!nativeEle.children[0])
            return;
        nativeEle.children[0].onmouseleave = function () {
            layArr[index].hide();
        };
    }
}
/**
 * 判断类名是否存在浮动框，控制鼠标在overlay之上不隐藏弹窗
 * @param className
 * @returns {any}
 */
function containsOverLayer(className) {
    if (!className)
        return false;
    return className.includes('ui-overlaypanel');
}
//# sourceMappingURL=ui-grid-demo-object.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIGridDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UIGridDemoComponent = (function () {
    function UIGridDemoComponent() {
        this.UIGridDemoBasicComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-basic.component.ts");
        this.UIGridDemoObjectComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-object.component.ts");
        this.customStyle = 'static';
    }
    UIGridDemoComponent.prototype.ngOnInit = function () {
    };
    return UIGridDemoComponent;
}());
UIGridDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ui-grid-demo',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewEncapsulation */].None,
        template: __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], UIGridDemoComponent);

//# sourceMappingURL=ui-grid-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-content{\r\n    margin:30px 0 0 30px;\r\n}\r\n.meta-select{\r\n    width: 100px;\r\n}\r\n.component{\r\n    margin-top:50px;\r\n}\r\n.test-content a.back{\r\n    color: #0b7dd8;\r\n    font-size: 16px;\r\n    margin-left: 280px;\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.html":
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"markdown\"><h1>数据表格组件</h1>\n    <section class=\"markdown\"><p>基于<code>p-dataTable</code> 扩展</p>\n      <h2 id=\"何时使用\"><span>何时使用</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <ul>\n        <li><p>非编辑或合并表头的情况都推荐使用</p></li>\n        <li><p>编辑列前端记忆功能</p></li>\n        <li><p>前端导出功能</p></li>\n        <li><p>扩展的悬浮框和点击事件</p></li>\n      </ul>\n    </section>\n    <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n  </section>\n  <div nz-row [nzGutter]=\"8\" style=\"position: static;\">\n    <div nz-col [nzSpan]=\"24\" style=\"position: static;\">\n      <nz-code-box [nzTitle]=\"'基本'\" id=\"components-ui-grid-demo-basic\" [nzCode]=\"UIGridDemoBasicComponent\">\n        <ui-grid-demo-basic demo></ui-grid-demo-basic>\n        <div intro>\n          <p> <code>textLength</code>字段属性控制超过限制字数，...替代，鼠标浮动展示详细</p>\n          <p><code>thumbnail</code> 字段属性控制是否为图片缩略图，点击预览大图</p>\n          <p><code>link</code> 字段属性控制是否为超链接点击</p>\n        </div>\n      </nz-code-box>\n      <nz-code-box [nzTitle]=\"'绑定值为对象'\" id=\"components-ui-grid-demo-object\" [nzCode]=\"UIGridDemoObjectComponent\" [customStyle]=\"customStyle\">\n        <ui-grid-demo-object demo></ui-grid-demo-object>\n        <div intro>\n          <p>鼠标悬浮‘代号’、‘名称’、‘全称’ 字段记录单元格查看悬浮框效果</p>\n        </div>\n      </nz-code-box>\n    </div>\n  </div>\n  <section class=\"markdown api-container\">\n    <h2 id=\"API\"><span>API</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h2>\n    <h3 id=\"Rate\"><span>columns</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <p>下边只列举 ui-grid 对column 扩展的属性，其他columns属性参考<code>p-dataTable</code></p>\n    <table>\n      <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>默认值</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>textLength</td>\n          <td>字段属性控制超过限制字数，...替代，鼠标浮动展示详细</td>\n          <td>Number | String</td>\n          <td>20</td>\n        </tr>\n        <tr>\n          <td>thumbnail</td>\n          <td>字段属性控制是否为图片缩略图，点击预览大图</td>\n          <td>Boolean</td>\n          <td> <code>false</code> </td>\n        </tr>\n        <tr>\n          <td>link</td>\n          <td>字段属性控制是否为超链接点击</td>\n          <td>Boolean</td>\n          <td> false </td>\n        </tr>\n        <tr>\n          <td>isWarn</td>\n          <td>判断字段是否为0，一般仅用在金额为0时，变成红色，配合rowSelect方法可以使金额为0的行不可选中</td>\n          <td>Boolean</td>\n          <td> false </td>\n        </tr>\n        <tr>\n          <td>defaultTipsHidden</td>\n          <td>当有自定义表格的时候要手动开启这个属性,如果 defaultTipsHidden=true 则默认悬浮框则无效（指textLength控制的默认悬浮框）</td>\n          <td>Boolean</td>\n          <td> false </td>\n        </tr>\n      </tbody>\n    </table>\n    <h3 id=\"Rate\"><span>shipper-select</span>\n      <!-- <a class=\"anchor\">#</a> -->\n    </h3>\n    <table>\n      <thead>\n        <tr>\n          <th>参数</th>\n          <th>说明</th>\n          <th>类型</th>\n          <th>默认值</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td>表格数据</td>\n          <td>Object</td>\n          <td>''</td>\n        </tr>\n        <tr>\n          <td>title</td>\n          <td>表格标题</td>\n          <td>String</td>\n          <td>''</td>\n        </tr>\n        <tr>\n          <td>enableExport</td>\n          <td>可选参数，是否显示默认导出按钮</td>\n          <td>Boolean</td>\n          <td>true</td>\n        </tr>\n        <tr>\n          <td>showEditColumn</td>\n          <td>可选参数，是否显示默认编辑列按钮</td>\n          <td>Boolean</td>\n          <td>true</td>\n        </tr>\n        <tr>\n          <td>pageRow</td>\n          <td>每页行数</td>\n          <td>String | Number</td>\n          <td> <code>10</code> </td>\n        </tr>\n        <tr>\n          <td>pageRows</td>\n          <td>表格可选页数组</td>\n          <td>Array&lt;Number&gt; </td>\n          <td> <code>[10, 20, 30, 50]</code> </td>\n        </tr>\n        <tr>\n          <td>paginator</td>\n          <td>是否显示分页</td>\n          <td>Boolean</td>\n          <td> <code>true</code> </td>\n        </tr>\n        <tr>\n          <td>selectionMode</td>\n          <td>单选还是多选模式 multiple | single</td>\n          <td>String</td>\n          <td> <code>multiple</code> </td>\n        </tr>\n        <tr>\n          <td>selections</td>\n          <td>选中的记录赋值</td>\n          <td>Array</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>load</td>\n          <td>接口请求方法，调用api都写在此方法中，参数$event带有分页信息</td>\n          <td>Function</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>rowSelect</td>\n          <td>行选中事件，$event带有选中行记录数据</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>cellClick</td>\n          <td>单元格点击事件，$event带有选中行记录数据</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>cellOver</td>\n          <td>单元格鼠标mouseover事件，$event带有选中行记录数据</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>cellMouseEnter</td>\n          <td>单元格鼠标mouseenter事件，$event带有选中行记录数据</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>cellMouseLeave</td>\n          <td>单元格鼠标mouseleave事件，$event带有选中行记录数据</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n        <tr>\n          <td>exportCSV</td>\n          <td>导出回调方法</td>\n          <td>EventEmitter</td>\n          <td> - </td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_basic_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_object_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_custom_components_custom_components_module__ = __webpack_require__("./src/app/custom-components/custom-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_overlaypanel_overlaypanel__ = __webpack_require__("./src/app/components/overlaypanel/overlaypanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_datatable_datatable__ = __webpack_require__("./src/app/components/datatable/datatable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIGridDemoModule", function() { return UIGridDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UIGridDemoModule = (function () {
    function UIGridDemoModule() {
    }
    return UIGridDemoModule;
}());
UIGridDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_component__["a" /* UIGridDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_basic_component__["a" /* UIGridDemoBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_object_component__["a" /* UIGridDemoObjectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_routing_module__["a" /* UIGridDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_10_app_custom_components_custom_components_module__["e" /* UIGridModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_components_overlaypanel_overlaypanel__["a" /* OverlayPanelModule */],
            __WEBPACK_IMPORTED_MODULE_12_app_components_datatable_datatable__["a" /* DataTableModule */]
        ]
    })
], UIGridDemoModule);

//# sourceMappingURL=ui-grid-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/ui-grid-demo/ui-grid-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIGridDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UIGridDemoRoutingModule = (function () {
    function UIGridDemoRoutingModule() {
    }
    return UIGridDemoRoutingModule;
}());
UIGridDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_ui_grid_demo_ui_grid_demo_component__["a" /* UIGridDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], UIGridDemoRoutingModule);

//# sourceMappingURL=ui-grid-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map