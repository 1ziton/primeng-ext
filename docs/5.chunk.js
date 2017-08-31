webpackJsonp([5],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-bar.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n\n@Component({\n  selector: 'echarts-demo-bar',\n  template: `\n  <button pButton pButton type=\"button\" (click)=\"chageDataset()\">Change dateset</button>\n  <div echarts [options]=\"chartOption\" [dataset]=\"dataset\" class=\"demo-chart\"></div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoBarComponent implements OnInit {\n\n  barChartDataset1 = [\n    [10, 52, 200, 334, 390, 330, 220]\n  ];\n\n  barChartDataset2 = [\n    [200, 32, 444, 666, 88, 352, 380]\n  ];\n\n  dataset = [\n    [10, 52, 200, 334, 390, 330, 220]\n  ];\n\n  chartOption = {\n    color: ['#3398DB'],\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {            /* 坐标轴指示器，坐标轴触发有效*/\n        type: 'shadow'          /* 默认为直线，可选为：'line' | 'shadow'*/\n      }\n    },\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n        axisTick: {\n          alignWithLabel: true\n        }\n      }\n    ],\n    yAxis: [\n      {\n        type: 'value'\n      }\n    ],\n    series: [\n      {\n        name: '直接访问',\n        type: 'bar',\n        barWidth: '60%'\n      }\n    ]\n  };\n\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  chageDataset() {\n    this.dataset = (this.dataset === this.barChartDataset2) ? this.barChartDataset1 : this.barChartDataset2;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-click.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n\n@Component({\n  selector: 'echarts-demo-click',\n  template: `\n  <div echarts class=\"demo-chart\"\n  [options]=\"chartOption\"\n  (chartClick)=\"onChartClick($event)\"\n  (chartDblClick)=\"onChartDblClick($event)\">\n</div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoClickComponent implements OnInit {\n\n  chartOption = {\n    title: {\n      text: '某地区蒸发量和降水量',\n      subtext: '纯属虚构'\n    },\n    tooltip: {\n      trigger: 'axis'\n    },\n    legend: {\n      data: ['蒸发量', '降水量']\n    },\n    toolbox: {\n      show: true,\n      feature: {\n        dataView: { show: true, readOnly: false },\n        magicType: { show: true, type: ['line', 'bar'] },\n        restore: { show: true },\n        saveAsImage: { show: true }\n      }\n    },\n    calculable: true,\n    xAxis: [\n      {\n        type: 'category',\n        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']\n      }\n    ],\n    yAxis: [\n      {\n        type: 'value'\n      }\n    ],\n    series: [\n      {\n        name: '蒸发量',\n        type: 'bar',\n        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],\n        markPoint: {\n          data: [\n            { type: 'max', name: '最大值' },\n            { type: 'min', name: '最小值' }\n          ]\n        },\n        markLine: {\n          data: [\n            { type: 'average', name: '平均值' }\n          ]\n        }\n      },\n      {\n        name: '降水量',\n        type: 'bar',\n        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],\n        markPoint: {\n          data: [\n            { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },\n            { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }\n          ]\n        },\n        markLine: {\n          data: [\n            { type: 'average', name: '平均值' }\n          ]\n        }\n      }\n    ]\n  };\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  /**\n    * 图表单击事件\n    * @param params\n    */\n  onChartClick(params) {\n    ////console.log('click event: ', params);\n    alert('你点击了' + params.seriesName)\n  }\n  /**\n   * 图表双击事件\n   * @param params\n   */\n  onChartDblClick(params) {\n    ////console.log('dblclick event: ', params);\n    alert('你双击了' + params.seriesName)\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-line.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n\n@Component({\n  selector: 'echarts-demo-line',\n  template: `\n  <div echarts [options]=\"lineStackDemoData\"class=\"demo-chart\"></div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoLineComponent implements OnInit {\n\n  lineStackDemoData = {\n    title: {\n      text: '堆叠区域图'\n    },\n    tooltip: {\n      trigger: 'axis'\n    },\n    legend: {\n      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']\n    },\n    toolbox: {\n      feature: {\n        saveAsImage: {}\n      }\n    },\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true\n    },\n    xAxis: [\n      {\n        type: 'category',\n        boundaryGap: false,\n        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']\n      }\n    ],\n    yAxis: [\n      {\n        type: 'value'\n      }\n    ],\n    series: [\n      {\n        name: '邮件营销',\n        type: 'line',\n        stack: '总量',\n        areaStyle: { normal: {} },\n        data: [120, 132, 101, 134, 90, 230, 210]\n      },\n      {\n        name: '联盟广告',\n        type: 'line',\n        stack: '总量',\n        areaStyle: { normal: {} },\n        data: [220, 182, 191, 234, 290, 330, 310]\n      },\n      {\n        name: '视频广告',\n        type: 'line',\n        stack: '总量',\n        areaStyle: { normal: {} },\n        data: [150, 232, 201, 154, 190, 330, 410]\n      },\n      {\n        name: '直接访问',\n        type: 'line',\n        stack: '总量',\n        areaStyle: { normal: {} },\n        data: [320, 332, 301, 334, 390, 330, 320]\n      },\n      {\n        name: '搜索引擎',\n        type: 'line',\n        stack: '总量',\n        label: {\n          normal: {\n            show: true,\n            position: 'top'\n          }\n        },\n        areaStyle: { normal: {} },\n        data: [820, 932, 901, 934, 1290, 1330, 1320]\n      }\n    ]\n  }\n\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-map.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'echarts-demo-map',\n  template:`\n  <div echarts [options]=\"mapDemoOption\" class=\"demo-chart\"></div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoMapComponent implements OnInit {\n\n  /* 地图统计数据 */\n  mapDemoOption: any =MapDemoOption;\n\n  constructor() { }\n\n  ngOnInit() {\n\n     \n  }\n\n}\n\n/**\n * Created by giscafer on 2017/4/18.\n */\nfunction randomData() {\n  return Math.round(Math.random()*1000);\n}\n\nexport const MapDemoOption = {\n  title: {\n      text: 'iphone销量',\n      subtext: '纯属虚构',\n      left: 'center'\n  },\n  tooltip: {\n      trigger: 'item'\n  },\n  legend: {\n      orient: 'vertical',\n      left: 'left',\n      data:['iphone3','iphone4','iphone5']\n  },\n  visualMap: {\n      min: 0,\n      max: 2500,\n      left: 'left',\n      top: 'bottom',\n      text: ['高','低'],           // 文本，默认为数值文本\n      calculable: true\n  },\n  toolbox: {\n      show: true,\n      orient: 'vertical',\n      left: 'right',\n      top: 'center',\n      feature: {\n          dataView: {readOnly: false},\n          restore: {},\n          saveAsImage: {}\n      }\n  },\n  series: [\n      {\n          name: 'iphone3',\n          type: 'map',\n          mapType: 'china',\n          roam: false,\n          label: {\n              normal: {\n                  show: true\n              },\n              emphasis: {\n                  show: true\n              }\n          },\n          data:[\n              {name: '北京',value: randomData() },\n              {name: '天津',value: randomData() },\n              {name: '上海',value: randomData() },\n              {name: '重庆',value: randomData() },\n              {name: '河北',value: randomData() },\n              {name: '河南',value: randomData() },\n              {name: '云南',value: randomData() },\n              {name: '辽宁',value: randomData() },\n              {name: '黑龙江',value: randomData() },\n              {name: '湖南',value: randomData() },\n              {name: '安徽',value: randomData() },\n              {name: '山东',value: randomData() },\n              {name: '新疆',value: randomData() },\n              {name: '江苏',value: randomData() },\n              {name: '浙江',value: randomData() },\n              {name: '江西',value: randomData() },\n              {name: '湖北',value: randomData() },\n              {name: '广西',value: randomData() },\n              {name: '甘肃',value: randomData() },\n              {name: '山西',value: randomData() },\n              {name: '内蒙古',value: randomData() },\n              {name: '陕西',value: randomData() },\n              {name: '吉林',value: randomData() },\n              {name: '福建',value: randomData() },\n              {name: '贵州',value: randomData() },\n              {name: '广东',value: randomData() },\n              {name: '青海',value: randomData() },\n              {name: '西藏',value: randomData() },\n              {name: '四川',value: randomData() },\n              {name: '宁夏',value: randomData() },\n              {name: '海南',value: randomData() },\n              {name: '台湾',value: randomData() },\n              {name: '香港',value: randomData() },\n              {name: '澳门',value: randomData() }\n          ]\n      },\n      {\n          name: 'iphone4',\n          type: 'map',\n          mapType: 'china',\n          label: {\n              normal: {\n                  show: true\n              },\n              emphasis: {\n                  show: true\n              }\n          },\n          data:[\n              {name: '北京',value: randomData() },\n              {name: '天津',value: randomData() },\n              {name: '上海',value: randomData() },\n              {name: '重庆',value: randomData() },\n              {name: '河北',value: randomData() },\n              {name: '安徽',value: randomData() },\n              {name: '新疆',value: randomData() },\n              {name: '浙江',value: randomData() },\n              {name: '江西',value: randomData() },\n              {name: '山西',value: randomData() },\n              {name: '内蒙古',value: randomData() },\n              {name: '吉林',value: randomData() },\n              {name: '福建',value: randomData() },\n              {name: '广东',value: randomData() },\n              {name: '西藏',value: randomData() },\n              {name: '四川',value: randomData() },\n              {name: '宁夏',value: randomData() },\n              {name: '香港',value: randomData() },\n              {name: '澳门',value: randomData() }\n          ]\n      },\n      {\n          name: 'iphone5',\n          type: 'map',\n          mapType: 'china',\n          label: {\n              normal: {\n                  show: true\n              },\n              emphasis: {\n                  show: true\n              }\n          },\n          data:[\n              {name: '北京',value: randomData() },\n              {name: '天津',value: randomData() },\n              {name: '上海',value: randomData() },\n              {name: '广东',value: randomData() },\n              {name: '台湾',value: randomData() },\n              {name: '香港',value: randomData() },\n              {name: '澳门',value: randomData() }\n          ]\n      }\n  ]\n};"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-options.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'echarts-demo-options',\n  template: `\n  <button class=\"btn btn-primary\" (click)=\"changeOptions()\" [disabled]=\"revert\">Change Options\n  </button>\n  <button class=\"btn btn-primary\" (click)=\"revertOptions()\" [disabled]=\"!revert\">Revert Options\n  </button>\n  <div echarts [options]=\"chartOption\" [dataset]=\"dataset\" class=\"demo-chart\"></div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoOptionsComponent implements OnInit {\n  revert = false;\n  defaultOptions = {\n    color: ['#3398DB'],\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {            /* 坐标轴指示器，坐标轴触发有效*/\n        type: 'shadow'          /* 默认为直线，可选为：'line' | 'shadow'*/\n      }\n    },\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n        axisTick: {\n          alignWithLabel: true\n        }\n      }\n    ],\n    yAxis: [\n      {\n        type: 'value'\n      }\n    ],\n    series: [\n      {\n        name: '直接访问',\n        type: 'bar',\n        barWidth: '60%',\n        markPoint:{}\n      }\n    ]\n  }\n  barChartDataset1 = [\n    [10, 52, 200, 334, 390, 330, 220]\n  ];\n\n  barChartDataset2 = [\n    [200, 32, 444, 666, 88, 352, 380]\n  ];\n\n  dataset = [\n    [10, 52, 200, 334, 390, 330, 220]\n  ];\n\n  chartOption = _.clone(this.defaultOptions);\n\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n\n  changeOptions() {\n    this.chartOption = _.clone(this.defaultOptions);\n    this.chartOption['legend'] = { show: true };\n    this.chartOption['legend'].data = [{ name: '直接访问', icon: 'circle' }];\n    this.chartOption.series[0]['type']='line';\n    this.revert = true;\n  }\n\n  revertOptions() {\n    this.chartOption = _.clone(this.defaultOptions);\n    this.chartOption.series[0]['type']='bar';\n    this.revert = false;\n  }\n\n  chageDataset() {\n    this.dataset = (this.dataset === this.barChartDataset2) ? this.barChartDataset1 : this.barChartDataset2;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-pie.component.ts":
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n\n@Component({\n  selector: 'echarts-demo-pie',\n  template: `\n  <button pButton (click)=\"toggleLoading()\">Loading状态切换-{{this.chartLoading}}</button>\n  <div echarts [options]=\"chartOption\" [loading]=\"chartLoading\"  class=\"demo-chart\"></div>\n  `,\n  styleUrls: ['./echarts-demo.css']\n})\nexport class EchartsDemoPieComponent implements OnInit {\n  chartLoading = false;\n\n  chartOption = {\n    tooltip: {\n      trigger: 'item',\n      formatter: \"{a} <br/>{b}: {c} ({d}%)\"\n    },\n    legend: {\n      orient: 'vertical',\n      x: 'left',\n      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']\n    },\n    series: [\n      {\n        name: '访问来源',\n        type: 'pie',\n        selectedMode: 'single',\n        radius: [0, '30%'],\n\n        label: {\n          normal: {\n            position: 'inner'\n          }\n        },\n        labelLine: {\n          normal: {\n            show: false\n          }\n        },\n        data: [\n          { value: 335, name: '直达', selected: true },\n          { value: 679, name: '营销广告' },\n          { value: 1548, name: '搜索引擎' }\n        ]\n      },\n      {\n        name: '访问来源',\n        type: 'pie',\n        radius: ['40%', '55%'],\n\n        data: [\n          { value: 335, name: '直达' },\n          { value: 310, name: '邮件营销' },\n          { value: 234, name: '联盟广告' },\n          { value: 135, name: '视频广告' },\n          { value: 1048, name: '百度' },\n          { value: 251, name: '谷歌' },\n          { value: 147, name: '必应' },\n          { value: 102, name: '其他' }\n        ]\n      }\n    ]\n  };\n\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n  /*\n  * 切换加载效果\n  */\n  toggleLoading() {\n    this.chartLoading = !this.chartLoading;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoBarComponent = (function () {
    function EchartsDemoBarComponent() {
        this.barChartDataset1 = [
            [10, 52, 200, 334, 390, 330, 220]
        ];
        this.barChartDataset2 = [
            [200, 32, 444, 666, 88, 352, 380]
        ];
        this.dataset = [
            [10, 52, 200, 334, 390, 330, 220]
        ];
        this.chartOption = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' /* 默认为直线，可选为：'line' | 'shadow'*/
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%'
                }
            ]
        };
    }
    EchartsDemoBarComponent.prototype.ngOnInit = function () {
    };
    EchartsDemoBarComponent.prototype.chageDataset = function () {
        this.dataset = (this.dataset === this.barChartDataset2) ? this.barChartDataset1 : this.barChartDataset2;
    };
    return EchartsDemoBarComponent;
}());
EchartsDemoBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-bar',
        template: "\n  <button pButton pButton type=\"button\" (click)=\"chageDataset()\">Change dateset</button>\n  <div echarts [options]=\"chartOption\" [dataset]=\"dataset\" class=\"demo-chart\"></div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoBarComponent);

//# sourceMappingURL=echarts-demo-bar.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-click.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoClickComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoClickComponent = (function () {
    function EchartsDemoClickComponent() {
        this.chartOption = {
            title: {
                text: '某地区蒸发量和降水量',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸发量', '降水量']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                            { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        };
    }
    EchartsDemoClickComponent.prototype.ngOnInit = function () {
    };
    /**
      * 图表单击事件
      * @param params
      */
    EchartsDemoClickComponent.prototype.onChartClick = function (params) {
        ////console.log('click event: ', params);
        alert('你点击了' + params.seriesName);
    };
    /**
     * 图表双击事件
     * @param params
     */
    EchartsDemoClickComponent.prototype.onChartDblClick = function (params) {
        ////console.log('dblclick event: ', params);
        alert('你双击了' + params.seriesName);
    };
    return EchartsDemoClickComponent;
}());
EchartsDemoClickComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-click',
        template: "\n  <div echarts class=\"demo-chart\"\n  [options]=\"chartOption\"\n  (chartClick)=\"onChartClick($event)\"\n  (chartDblClick)=\"onChartDblClick($event)\">\n</div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoClickComponent);

//# sourceMappingURL=echarts-demo-click.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoLineComponent = (function () {
    function EchartsDemoLineComponent() {
        this.lineStackDemoData = {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    }
    EchartsDemoLineComponent.prototype.ngOnInit = function () {
    };
    return EchartsDemoLineComponent;
}());
EchartsDemoLineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-line',
        template: "\n  <div echarts [options]=\"lineStackDemoData\"class=\"demo-chart\"></div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoLineComponent);

//# sourceMappingURL=echarts-demo-line.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoMapComponent; });
/* unused harmony export MapDemoOption */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoMapComponent = (function () {
    function EchartsDemoMapComponent() {
        /* 地图统计数据 */
        this.mapDemoOption = MapDemoOption;
    }
    EchartsDemoMapComponent.prototype.ngOnInit = function () {
    };
    return EchartsDemoMapComponent;
}());
EchartsDemoMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-map',
        template: "\n  <div echarts [options]=\"mapDemoOption\" class=\"demo-chart\"></div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoMapComponent);

/**
 * Created by giscafer on 2017/4/18.
 */
function randomData() {
    return Math.round(Math.random() * 1000);
}
var MapDemoOption = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3', 'iphone4', 'iphone5']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { name: '北京', value: randomData() },
                { name: '天津', value: randomData() },
                { name: '上海', value: randomData() },
                { name: '重庆', value: randomData() },
                { name: '河北', value: randomData() },
                { name: '河南', value: randomData() },
                { name: '云南', value: randomData() },
                { name: '辽宁', value: randomData() },
                { name: '黑龙江', value: randomData() },
                { name: '湖南', value: randomData() },
                { name: '安徽', value: randomData() },
                { name: '山东', value: randomData() },
                { name: '新疆', value: randomData() },
                { name: '江苏', value: randomData() },
                { name: '浙江', value: randomData() },
                { name: '江西', value: randomData() },
                { name: '湖北', value: randomData() },
                { name: '广西', value: randomData() },
                { name: '甘肃', value: randomData() },
                { name: '山西', value: randomData() },
                { name: '内蒙古', value: randomData() },
                { name: '陕西', value: randomData() },
                { name: '吉林', value: randomData() },
                { name: '福建', value: randomData() },
                { name: '贵州', value: randomData() },
                { name: '广东', value: randomData() },
                { name: '青海', value: randomData() },
                { name: '西藏', value: randomData() },
                { name: '四川', value: randomData() },
                { name: '宁夏', value: randomData() },
                { name: '海南', value: randomData() },
                { name: '台湾', value: randomData() },
                { name: '香港', value: randomData() },
                { name: '澳门', value: randomData() }
            ]
        },
        {
            name: 'iphone4',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { name: '北京', value: randomData() },
                { name: '天津', value: randomData() },
                { name: '上海', value: randomData() },
                { name: '重庆', value: randomData() },
                { name: '河北', value: randomData() },
                { name: '安徽', value: randomData() },
                { name: '新疆', value: randomData() },
                { name: '浙江', value: randomData() },
                { name: '江西', value: randomData() },
                { name: '山西', value: randomData() },
                { name: '内蒙古', value: randomData() },
                { name: '吉林', value: randomData() },
                { name: '福建', value: randomData() },
                { name: '广东', value: randomData() },
                { name: '西藏', value: randomData() },
                { name: '四川', value: randomData() },
                { name: '宁夏', value: randomData() },
                { name: '香港', value: randomData() },
                { name: '澳门', value: randomData() }
            ]
        },
        {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { name: '北京', value: randomData() },
                { name: '天津', value: randomData() },
                { name: '上海', value: randomData() },
                { name: '广东', value: randomData() },
                { name: '台湾', value: randomData() },
                { name: '香港', value: randomData() },
                { name: '澳门', value: randomData() }
            ]
        }
    ]
};
//# sourceMappingURL=echarts-demo-map.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoOptionsComponent = (function () {
    function EchartsDemoOptionsComponent() {
        this.revert = false;
        this.defaultOptions = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' /* 默认为直线，可选为：'line' | 'shadow'*/
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    markPoint: {}
                }
            ]
        };
        this.barChartDataset1 = [
            [10, 52, 200, 334, 390, 330, 220]
        ];
        this.barChartDataset2 = [
            [200, 32, 444, 666, 88, 352, 380]
        ];
        this.dataset = [
            [10, 52, 200, 334, 390, 330, 220]
        ];
        this.chartOption = _.clone(this.defaultOptions);
    }
    EchartsDemoOptionsComponent.prototype.ngOnInit = function () {
    };
    EchartsDemoOptionsComponent.prototype.changeOptions = function () {
        this.chartOption = _.clone(this.defaultOptions);
        this.chartOption['legend'] = { show: true };
        this.chartOption['legend'].data = [{ name: '直接访问', icon: 'circle' }];
        this.chartOption.series[0]['type'] = 'line';
        this.revert = true;
    };
    EchartsDemoOptionsComponent.prototype.revertOptions = function () {
        this.chartOption = _.clone(this.defaultOptions);
        this.chartOption.series[0]['type'] = 'bar';
        this.revert = false;
    };
    EchartsDemoOptionsComponent.prototype.chageDataset = function () {
        this.dataset = (this.dataset === this.barChartDataset2) ? this.barChartDataset1 : this.barChartDataset2;
    };
    return EchartsDemoOptionsComponent;
}());
EchartsDemoOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-options',
        template: "\n  <button class=\"btn btn-primary\" (click)=\"changeOptions()\" [disabled]=\"revert\">Change Options\n  </button>\n  <button class=\"btn btn-primary\" (click)=\"revertOptions()\" [disabled]=\"!revert\">Revert Options\n  </button>\n  <div echarts [options]=\"chartOption\" [dataset]=\"dataset\" class=\"demo-chart\"></div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoOptionsComponent);

//# sourceMappingURL=echarts-demo-options.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoPieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoPieComponent = (function () {
    function EchartsDemoPieComponent() {
        this.chartLoading = false;
        this.chartOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' }
                    ]
                }
            ]
        };
    }
    EchartsDemoPieComponent.prototype.ngOnInit = function () {
    };
    /*
    * 切换加载效果
    */
    EchartsDemoPieComponent.prototype.toggleLoading = function () {
        this.chartLoading = !this.chartLoading;
    };
    return EchartsDemoPieComponent;
}());
EchartsDemoPieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo-pie',
        template: "\n  <button pButton (click)=\"toggleLoading()\">Loading\u72B6\u6001\u5207\u6362-{{this.chartLoading}}</button>\n  <div echarts [options]=\"chartOption\" [loading]=\"chartLoading\"  class=\"demo-chart\"></div>\n  ",
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoPieComponent);

//# sourceMappingURL=echarts-demo-pie.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartsDemoComponent = (function () {
    function EchartsDemoComponent() {
        this.EchartsDemoMapComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-map.component.ts");
        this.EchartsDemoBarComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-bar.component.ts");
        this.EchartsDemoOptionsComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-options.component.ts");
        this.EchartsDemoPieComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-pie.component.ts");
        this.EchartsDemoClickComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-click.component.ts");
        this.EchartsDemoLineComponent = __webpack_require__("./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/echarts-demo/echarts-demo-line.component.ts");
    }
    EchartsDemoComponent.prototype.ngOnInit = function () {
    };
    return EchartsDemoComponent;
}());
EchartsDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'echarts-demo',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewEncapsulation */].None,
        template: __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.html"),
        styles: [__webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.css")]
    }),
    __metadata("design:paramtypes", [])
], EchartsDemoComponent);

//# sourceMappingURL=echarts-demo.component.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-chart {\r\n    height: 400px;\r\n}\r\n\r\n.test-content {\r\n    margin: 20px 50px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n}\r\n.test-content a.back{\r\n    color: #0b7dd8;\r\n    font-size: 16px;\r\n    margin-left: 280px;\r\n    text-decoration: underline;\r\n}\r\n.row {\r\n    margin-left: -15px;\r\n    margin-right: -15px\r\n}\r\n\r\n.row:after, .row:before {\r\n    content: \" \";\r\n    display: table\r\n}\r\n\r\n.row:after {\r\n    clear: both\r\n}\r\n\r\n.col-md-6 {\r\n    width: 45%;\r\n    float:left\r\n}\r\n\r\n.col-md-6 {\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-left: 15px;\r\n    padding-right: 15px\r\n}\r\n\r\n\r\n.panel {\r\n    margin-bottom: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,.05)\r\n}\r\n\r\n.panel-body {\r\n    padding: 15px\r\n}\r\n\r\n.panel-body:after,.panel-body:before {\r\n    content: \" \";\r\n    display: table\r\n}\r\n\r\n.panel-body:after {\r\n    clear: both\r\n}\r\n\r\n.panel-heading {\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-right-radius: 3px;\r\n    border-top-left-radius: 3px\r\n}\r\n\r\n.panel-heading>.dropdown .dropdown-toggle,.panel-title {\r\n    color: inherit\r\n}\r\n\r\n.panel-title {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 16px\r\n}\r\n\r\n.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a {\r\n    color: inherit\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #f5f5f5;\r\n    border-top: 1px solid #ddd;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo.html":
/***/ (function(module, exports) {

module.exports = "<article>\n    <section class=\"markdown\"><h1>Echarts 指令</h1>\n      <section class=\"markdown\">\n        <p>基于echarts3扩展的ng指令，统计图表，地图，折线图、柱状图、饼图等，只要是echarts支持的图都可以实现。</p>\n        <p>基于开源组件修改：https://github.com/xieziyu/ngx-echarts/</p>\n        <p>options属 性配置请到 Echarts官网看文档：<a href=\"http://echarts.baidu.com/\" target=\"_blank\">http://echarts.baidu.com/</a></p>\n        <h2 id=\"何时使用\"><span>何时使用</span>\n          <!-- <a class=\"anchor\">#</a> -->\n        </h2>\n        <ul>\n          <li><p>通过统计数据，进行绘制统计图表。</p></li>\n        </ul>\n      </section>\n      <h2>代码演示<i class=\"code-box-expand-trigger anticon anticon-appstore\" title=\"展开全部代码\"></i></h2>\n    </section>\n    <div nz-row [nzGutter]=\"8\">\n      <div nz-col [nzSpan]=\"11\">\n        <nz-code-box [nzTitle]=\"'地图'\" id=\"components-echarts-demo-map\" [nzCode]=\"EchartsDemoMapComponent\">\n          <echarts-demo-map demo></echarts-demo-map>\n          <div intro>\n            <p>地图统计</p>\n          </div>\n        </nz-code-box>\n        <nz-code-box [nzTitle]=\"'柱状图'\" id=\"components-echarts-demo-bar\" [nzCode]=\"EchartsDemoBarComponent\">\n          <echarts-demo-bar demo></echarts-demo-bar>\n          <div intro>\n            <p>使用 <code>dataset</code>  更容易更新图表数据</p>\n          </div>\n        </nz-code-box>\n        <nz-code-box [nzTitle]=\"'图表切换'\" id=\"components-echarts-demo-options\" [nzCode]=\"EchartsDemoOptionsComponent\">\n            <echarts-demo-options demo></echarts-demo-options>\n            <div intro>\n              <p>如何更新 \"options\" 来改变图表</p>\n            </div>\n          </nz-code-box>\n      </div>\n      <div nz-col [nzSpan]=\"12\">\n          <nz-code-box [nzTitle]=\"'嵌套饼图'\" id=\"components-echarts-demo-pie\" [nzCode]=\"EchartsDemoPieComponent\">\n            <echarts-demo-pie demo></echarts-demo-pie>\n            <div intro>\n              <p>多个饼图，中心，半径设置，文本标签显示</p>\n            </div>\n          </nz-code-box>\n          <nz-code-box [nzTitle]=\"'点击事件'\" id=\"components-echarts-demo-click\" [nzCode]=\"EchartsDemoClickComponent\">\n            <echarts-demo-click demo></echarts-demo-click>\n            <div intro>\n              <p>绑定鼠标 单击 和 双击 事件，单击图表查看效果，打开console可以查看输出信息</p>\n            </div>\n          </nz-code-box>\n          <nz-code-box [nzTitle]=\"'堆叠区域图'\" id=\"components-echarts-demo-line\" [nzCode]=\"EchartsDemoLineComponent\">\n              <echarts-demo-line demo></echarts-demo-line>\n              <div intro>\n                <p>堆叠区域图 示例</p>\n              </div>\n            </nz-code-box>\n        </div>\n    </div>\n    <section class=\"markdown api-container\">\n      <h2 id=\"API\"><span>API</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h2>\n      <h3 id=\"Rate\"><span>[echarts]</span>\n        <!-- <a class=\"anchor\">#</a> -->\n      </h3>\n      <table>\n        <thead>\n          <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>options</td>\n            <td>必填参数，Echarts的options参数，详情参看 http://echarts.baidu.com/ </td>\n            <td>Object</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>dataset</td>\n            <td>可选参数，可通过dataset快速改变统计数据 </td>\n            <td> Array </td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>theme</td>\n            <td>主题颜色</td>\n            <td>String</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>loading</td>\n            <td>图标加载动画效果，数据渲染慢的时候可以提升交互体验</td>\n            <td>Boolean</td>\n            <td> false </td>\n          </tr>\n          <tr>\n            <td>chartClick</td>\n            <td>图表点击事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartDblClick</td>\n            <td>图表双击事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartMouseDown</td>\n            <td>图表鼠标按下事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartMouseUp</td>\n            <td>图表鼠标释放事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartMouseOver</td>\n            <td>图表mouseover事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartMouseOut</td>\n            <td>图表mouseout事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n          <tr>\n            <td>chartGlobalOut</td>\n            <td>图表全图mouseout事件</td>\n            <td>EventEmitter</td>\n            <td> - </td>\n          </tr>\n        </tbody>\n      </table>\n    </section>\n  </article>\n  "

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_codebox_nz_codebox_module__ = __webpack_require__("./src/app/showcase/share/nz-codebox/nz-codebox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_showcase_custom_components_echarts_demo_echarts_demo_routing_module__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_grid_nz_grid_module__ = __webpack_require__("./src/app/showcase/share/nz-grid/nz-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_tooltip_nz_tooltip_module__ = __webpack_require__("./src/app/showcase/share/nz-tooltip/nz-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_showcase_custom_components_echarts_demo_echarts_demo_map_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_echarts_demo_echarts_demo_bar_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_echarts_demo_echarts_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_custom_components_echarts_echarts__ = __webpack_require__("./src/app/custom-components/echarts/echarts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_showcase_custom_components_echarts_demo_echarts_demo_line_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_showcase_custom_components_echarts_demo_echarts_demo_options_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_showcase_custom_components_echarts_demo_echarts_demo_pie_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_showcase_custom_components_echarts_demo_echarts_demo_click_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo-click.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsDemoModule", function() { return EchartsDemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var EchartsDemoModule = (function () {
    function EchartsDemoModule() {
    }
    return EchartsDemoModule;
}());
EchartsDemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9_app_showcase_custom_components_echarts_demo_echarts_demo_component__["a" /* EchartsDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_showcase_custom_components_echarts_demo_echarts_demo_map_component__["a" /* EchartsDemoMapComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_showcase_custom_components_echarts_demo_echarts_demo_bar_component__["a" /* EchartsDemoBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_showcase_custom_components_echarts_demo_echarts_demo_options_component__["a" /* EchartsDemoOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_showcase_custom_components_echarts_demo_echarts_demo_pie_component__["a" /* EchartsDemoPieComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_showcase_custom_components_echarts_demo_echarts_demo_click_component__["a" /* EchartsDemoClickComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_showcase_custom_components_echarts_demo_echarts_demo_line_component__["a" /* EchartsDemoLineComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_app_showcase_custom_components_echarts_demo_echarts_demo_routing_module__["a" /* EchartsDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_showcase_share_nz_grid_nz_grid_module__["a" /* NzGridModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_showcase_share_nz_tooltip_nz_tooltip_module__["a" /* NzToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_showcase_share_nz_codebox_nz_codebox_module__["a" /* NzCodeBoxModule */],
            __WEBPACK_IMPORTED_MODULE_10_app_custom_components_echarts_echarts__["a" /* EchartsModule */]
        ]
    })
], EchartsDemoModule);

//# sourceMappingURL=echarts-demo.module.js.map

/***/ }),

/***/ "./src/app/showcase/custom-components/echarts-demo/echarts-demo.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_echarts_demo_echarts_demo_component__ = __webpack_require__("./src/app/showcase/custom-components/echarts-demo/echarts-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsDemoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EchartsDemoRoutingModule = (function () {
    function EchartsDemoRoutingModule() {
    }
    return EchartsDemoRoutingModule;
}());
EchartsDemoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_showcase_custom_components_echarts_demo_echarts_demo_component__["a" /* EchartsDemoComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EchartsDemoRoutingModule);

//# sourceMappingURL=echarts-demo.routing.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map