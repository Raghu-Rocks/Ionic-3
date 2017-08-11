webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_screen1__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailScreen1PageModule", function() { return DetailScreen1PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailScreen1PageModule = (function () {
    function DetailScreen1PageModule() {
    }
    return DetailScreen1PageModule;
}());
DetailScreen1PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* summary */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* summary */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* summary */]
        ]
    })
], DetailScreen1PageModule);

//# sourceMappingURL=detail-screen1.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return summary; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var summary = (function () {
    function summary(navCtrl, navParams, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cdr = cdr;
        this.tdyBulletA = [];
        this.tdyBulletT = [];
        this.tdyBulletP = [];
        this.lastBulletA = [];
        this.lastBulletT = [];
        this.lastBulletP = [];
        this.areaActualValue = [];
        this.areaTargetValue = [];
        this.users = [];
        this.values = [];
        this.navParams.get("hero");
    }
    summary.prototype.ngAfterViewInit = function () {
        this.mapjson();
        // console.log(this.lastBulletP,'test');
        this.processBulletGraph("#bulletLast" + this.lastBulletA, this.lstWekData, this.lastBulletP, this.lastBulletT, this.lastBulletA, "lastWeek");
        this.processBulletGraph("#bulletTdy" + this.tdyBulletA, this.tdyData, this.tdyBulletP, this.tdyBulletT, this.tdyBulletA, "");
        this.renderLastWeekData();
        this.renderTdyWeekData();
        this.processAreaChart("#dashboardChart");
    };
    summary.prototype.mapjson = function () {
        // today
        this.data = Object.entries(this.navParams.data);
        this.detailTrends = Object.entries(this.data[5][1][0]);
        this.lastWeek = Object.entries(this.detailTrends[0][1])[2];
        this.lastWeekCollection = Object.entries(this.lastWeek[1]);
        this.lstWekData = Object.entries(this.lastWeekCollection[1][1]);
        this.tdy = Object.entries(this.detailTrends[1][1])[2];
        this.tdyCollection = Object.entries(this.tdy[1]);
        this.tdyData = Object.entries(this.tdyCollection[1][1]);
        this.graphArea = Object.entries(this.detailTrends[2][1])[2];
        this.graphCollection = Object.entries(this.graphArea[1]);
        this.areaGraphData = Object.entries(this.graphCollection[1][1]);
        // this.areaGraphData = Object.keys(this.dataObject);
        //  console.log(this.areaGraphData, "areaGraphData");
        // console.log(this.lstWekData, "lstWekShoppers");
        // console.log(this.tdyData, "tdy");
        this.cardName = Object.entries(this.data[0]);
        // console.log(this.cardName[1][1], "cardName");    
        this.cdr.detectChanges();
    };
    summary.prototype.processAreaChart = function (whereToPut) {
        for (var i in this.areaGraphData) {
            // console.log(this.tdy, 'tdy');
            if (this.areaGraphData.hasOwnProperty(i) || typeof (this.areaGraphData[i]) != 'object') {
                var test = this.areaGraphData[i];
                // console.log(test, 'test')
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        // console.log(this.title,'titlettt');
                    }
                    else {
                        //    console.log(test[test_val],'test[test_val]');
                        this.users = Object.keys(test[test_val]);
                        this.values = Object.values(test[test_val]);
                        // console.log(this.users,'value', this.values);
                        var bulletStackData = [this.users, this.values]; //this.areaActualValue;                            
                        this.renderAreaGraph(whereToPut, bulletStackData);
                    }
                } //for(var test_val in test)
            }
        }
    };
    summary.prototype.renderAreaGraph = function (whereToPut, whatToPut) {
        __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
            bindto: whereToPut,
            data: {
                columns: whatToPut,
                types: {
                    data1: 'area',
                    data2: 'area-spline'
                },
            },
            legend: {
                show: false
            }
        });
    };
    summary.prototype.processBulletGraph = function (whereToPut, whichWeekData, projectedValue, targetValue, actualValue, lastweek) {
        // console.log(whichWeekData,'whichWeekData');
        for (var i in whichWeekData) {
            if (whichWeekData.hasOwnProperty(i)) {
                var test = whichWeekData[i];
                // console.log(test, "test");
                var data_graph = test[1][1];
                var counter = 0;
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        //   console.log(this.title,'title');
                    }
                    else {
                        // console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit in arr_object) {
                                // console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                // console.log(arr_object1,'arr_object12',typeof arr_object1);
                                if (typeof (arr_object1) != 'object') {
                                    var count1 = 0;
                                    var count2 = 0;
                                    if (typeof arr_object1 == 'string') {
                                        //  console.log(this.title,'title44');                                    
                                        arr_object1 = arr_object1.slice(0, -1);
                                        // console.log(arr_object1,'arr_object12',typeof arr_object1);
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                    else if (typeof arr_object1 == 'number') {
                                        // console.log(this.title,'title45');
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                }
                                //    console.log(this.title,'title444',typeof this.title);
                            }
                        } //if(typeof(arr_object1)=='object' )
                    }
                }
            }
        }
        if (lastweek == "lastWeek") {
            if (targetValue.length > 0) {
                for (var j = 0; j < targetValue.length; j++) {
                    var bulletStackData1 = [{ "ranges": [0, 0, 0], "measures": [actualValue[j]], "markers": [targetValue] }];
                    //  console.log(whereToPut,'whereToPut');
                    if (whereToPut == '#bulletLast') {
                        var graphLen = document.getElementsByClassName('bulletLastGraph').length;
                        whereToPut = document.getElementsByClassName('bulletLastGraph')[graphLen - 1];
                    }
                    this.renderBulletChart(whereToPut, bulletStackData1);
                }
            }
        }
        if (projectedValue.length > 0) {
            for (var j = 0; j < projectedValue.length; j++) {
                var bulletStackData = [{ "ranges": [0, projectedValue[j], 0], "measures": [actualValue[j]], "markers": [targetValue] }];
                // console.log(whereToPut,'whereToPut');
                if (whereToPut == '#bulletLast') {
                    var graphLen = document.getElementsByClassName('bulletLastGraph').length;
                    whereToPut = document.getElementsByClassName('bulletLastGraph')[graphLen - 1];
                }
                this.renderBulletChart(whereToPut, bulletStackData);
            }
        } //if(this.array2.length>0){ 
        //   console.log('testedEnd');
    };
    summary.prototype.renderCardData = function (objectArray, outputProjected, outputTarget, outputActual) {
        var count1 = 0;
        var count3 = 0;
        var count2 = 0;
        if (this.title.indexOf('Project') != -1) {
            outputProjected[count1] = objectArray;
            count1++;
        }
        else if (this.title.indexOf('Target') != -1) {
            outputTarget[count2] = objectArray;
            count2++;
        }
        else {
            outputActual[count3] = objectArray;
            count3++;
        }
    };
    summary.prototype.renderTdyWeekData = function () {
        for (var i in this.tdyData) {
            if (this.tdyData.hasOwnProperty(i)) {
                var test = this.tdyData[i];
                // console.log(test, "test");
                var data_graph = test[1][1];
                var counter = 0;
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        //   console.log(this.title,'title');
                    }
                    else {
                        // console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit1 in arr_object) {
                                // console.log(this.title,'title444');
                                if (this.title.indexOf('Projected') !== -1) {
                                    this.tdyArray1 = arr_object[new_visit1];
                                    if (typeof this.tdyArray1 == 'number') {
                                        this.tdyArray1 = this.kFormatter(this.tdyArray1);
                                    }
                                }
                                else if (this.title.indexOf('Target') !== -1) {
                                    this.tdyArray2 = arr_object[new_visit1];
                                    if (typeof this.tdyArray2 == 'number') {
                                        this.tdyArray2 = this.kFormatter(this.tdyArray2);
                                    }
                                }
                                else {
                                    this.tdyArray3 = arr_object[new_visit1];
                                    if (typeof this.tdyArray3 == 'number') {
                                        this.tdyArray3 = this.kFormatter(this.tdyArray3);
                                    }
                                }
                                // console.log(arr_object[new_visit1],new_visit1,'data and key2',count1); // data points   
                            }
                            // console.log(this.tdyArray1,"aray1",this.tdyArray2,'Array2', this.tdyArray3, "array3"); // data points
                        }
                    }
                }
            }
        }
    };
    summary.prototype.renderLastWeekData = function () {
        for (var i in this.lstWekData) {
            if (this.lstWekData.hasOwnProperty(i)) {
                var test = this.lstWekData[i];
                // console.log(test, "test");
                var data_graph = test[1][1];
                var counter = 0;
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        //   console.log(this.title,'title');
                    }
                    else {
                        // console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit1 in arr_object) {
                                // console.log(this.title,'title444');
                                if (this.title.indexOf('Projected') !== -1) {
                                    this.lstArray1 = arr_object[new_visit1];
                                    if (typeof this.lstArray1 == 'number') {
                                        this.lstArray1 = this.kFormatter(this.lstArray1);
                                    }
                                }
                                else if (this.title.indexOf('Target') !== -1) {
                                    this.lstArray2 = arr_object[new_visit1];
                                    if (typeof this.lstArray2 == 'number') {
                                        this.lstArray2 = this.kFormatter(this.lstArray2);
                                    }
                                }
                                else {
                                    this.lstArray3 = arr_object[new_visit1];
                                    if (typeof this.lstArray3 == 'number') {
                                        this.lstArray3 = this.kFormatter(this.lstArray3);
                                    }
                                }
                                // console.log(arr_object[new_visit1],new_visit1,'data and key2',count1); // data points   
                            }
                            // console.log(this.lstArray1,"aray1",this.lstArray2,'this.array2'); // data points
                        }
                    }
                }
            }
        }
    };
    summary.prototype.renderBulletChart = function (WhereToPut, WhatDataToPut) {
        var bulletParentWidth;
        var bulletchart;
        var bulletmargin;
        var bulletwidth;
        var bulletHeight;
        bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        bulletmargin = { top: 0, right: 3, bottom: 0, left: 0 };
        bulletwidth = bulletParentWidth - bulletmargin.left - bulletmargin.right;
        bulletHeight = 30 - bulletmargin.top - bulletmargin.bottom;
        bulletchart = d3.bullet()
            .width(bulletwidth)
            .height(bulletHeight);
        var svg = d3.select(WhereToPut).selectAll("svg")
            .data(WhatDataToPut)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", bulletwidth + bulletmargin.left + bulletmargin.right)
            .attr("height", bulletHeight + bulletmargin.top + bulletmargin.bottom)
            .append("g")
            .call(bulletchart);
    }; // end of bullet chart fun
    summary.prototype.randomize = function (d) {
        if (!d.randomizer)
            d.randomizer = this.randomizer(d);
        d.ranges = d.ranges.map(d.randomizer);
        d.markers = d.markers.map(d.randomizer);
        d.measures = d.measures.map(d.randomizer);
        return d;
    }; // fun required for bullet chart
    summary.prototype.randomizer = function (d) {
        var k = d3.max(d.ranges) * .2;
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }; //fun  required for bullet chart
    summary.prototype.kFormatter = function (num) {
        if (isNaN(num))
            return 0;
        //	console.log(num);
        if (num > 99999) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        else {
            return num > 999 ? (num / 1000).toFixed(2) + 'k' : num.toFixed(2);
        }
    };
    return summary;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("bulletChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */])
], summary.prototype, "bulletCharts", void 0);
summary = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-detail-screen1',template:/*ion-inline-start:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="detail-back-btn">\n\n    <ion-title  align="center">\n\n      <button ion-button round class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </button>\n\n      <!--<span class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </span>-->\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  <ion-content class="app-bg">\n\n        {{array2}}   {{array1}}\n\n        <div *ngFor="let item of cardName; let i = index;">\n\n          <h2 *ngIf="i == 1" class="screen-title" align="center">{{item[1]}}</h2>\n\n        </div>\n\n    <div  *ngFor="let item of cardName; let i = index; let f = first;">\n\n      <div *ngIf="i == 0">\n\n        <ion-grid class="white-txt">\n\n          <ion-row class="pos-relative">\n\n              <ion-col class="detail-screen-card bg-grey">\n\n                <p class="detail-screen-card-title">Last week</p>\n\n                <!-- <div class="demo-bullet"></div> -->\n\n                <div class="card1-bullet-wraper" #bulletChart>\n\n                      <div id="bulletLast{{lastBulletA}}" class="bulletLastGraph"></div>\n\n                  <!--<bullet-chart [height]="height" [colors]="colors" [actual]="actual" [target]="target" [ranges]="ranges"></bullet-chart>-->\n\n                </div>\n\n               		<div>\n\n                          <span  class="legend-txt legend-tdy small-txt" >{{lstArray3 || "0.00"}}</span>\n\n                          <span  class="legend-txt legend-target small-txt" >{{lstArray2 || "0.00"}}</span>\n\n                          <span  class="legend-txt legend-projected small-txt" >{{lstArray1 || "0.00"}}</span>\n\n        			    </div>\n\n              </ion-col>\n\n	            <span class="txt-total">Total</span>\n\n              <ion-col class="detail-screen-card bg-blue">\n\n                  	<p class="detail-screen-card-title">Today</p>\n\n                <!-- <div class="demo-bullet"></div> -->\n\n                <div class="card1-bullet-wraper" #bulletChart>\n\n                      <div id="bulletTdy{{tdyBulletA}}"></div>\n\n                  <!--<bullet-chart [height]="height" [colors]="colors" [actual]="actual" [target]="target" [ranges]="ranges"></bullet-chart>-->\n\n                </div>\n\n               		<div align="right">\n\n                          		<span  class="legend-txt legend-tdy small-txt" >{{tdyArray3 || "0.00"}}</span>\n\n                              <span  class="legend-txt legend-target small-txt" >{{tdyArray2 || "0.00"}}</span>\n\n                              <span  class="legend-txt legend-projected small-txt" >{{tdyArray1 || "0.00"}}</span>\n\n        			    </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        	<div> \n\n         		<div id="dashboardChart" #dashboardChart class="donut-chart"></div>\n\n         	</div>\n\n      	</div>         \n\n      </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */]])
], summary);

//# sourceMappingURL=detail-screen1.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map