webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_screen2__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailScreen2PageModule", function() { return DetailScreen2PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailScreen2PageModule = (function () {
    function DetailScreen2PageModule() {
    }
    return DetailScreen2PageModule;
}());
DetailScreen2PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detail_screen2__["a" /* channels */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_screen2__["a" /* channels */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__detail_screen2__["a" /* channels */]
        ]
    })
], DetailScreen2PageModule);

//# sourceMappingURL=detail-screen2.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return channels; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var channels = (function () {
    function channels(navCtrl, navParams, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cdr = cdr;
        this.actualValue = [];
        this.projectedValue = [];
        this.lastWeekVisits = [];
        this.navParams.get("hero");
    }
    channels.prototype.ngAfterViewInit = function () {
        this.mapjson();
        this.processDetailBullet();
        this.lastWeekVisitsData();
        // for (var index = 0; index < this.tdyVisitsValues.length; index++) {
        //   var element = this.tdyVisitsValues[index];
        //   var divId = "#detaiBullet"+element;
        //   this.renderBulletChart(divId);
        // }
    };
    channels.prototype.mapjson = function () {
        // today
        this.data = Object.entries(this.navParams.data);
        this.cardName = Object.entries(this.data[0]);
        this.detailTrends = Object.entries(this.data[5])[1];
        // console.log(this.detailTrends, "detailTrends");
        this.collection = Object.entries(this.detailTrends[1][0])[1][1];
        this.collectionArray = Object.entries(this.collection)[2];
        this.collectionData = Object.entries(this.collectionArray[1])[1][1];
        this.collectionDataVisits = Object.entries(this.collectionData)[0][1];
        this.tdyVisits = Object.entries(this.collectionDataVisits)[0][1];
        this.tdyVisitsKeys = Object.entries(this.tdyVisits);
        // this.tdyVisitsKeys = Object.keys(this.tdyVisits);
        this.tdyVisitsValues = Object.values(this.tdyVisits);
        this.detailBulletData = Object.entries(this.collectionData);
        //last week data
        this.lstWeekCollection = Object.entries(this.detailTrends[1][0])[0][1];
        this.lstWeekCollectionArray = Object.entries(this.lstWeekCollection)[2];
        this.lastWeekData = Object.entries(this.lstWeekCollectionArray[1])[1][1];
        this.lastWeekDataVisits = Object.entries(this.lastWeekData)[0][1];
        this.lastWeekVisitsObject = Object.entries(this.lastWeekDataVisits)[0][1];
        this.lastWeekVisitsValue = Object.values(this.lastWeekVisitsObject);
        console.log(this.lastWeekVisitsValue, "lstWeekCollection");
        // console.log(this.detailBulletData, "detailBulletData");
        this.cdr.detectChanges();
    };
    channels.prototype.lastWeekVisitsData = function () {
        for (var index = 0; index < this.lastWeekVisitsValue.length; index++) {
            this.lastWeekVisits[index] = this.kFormatter(this.lastWeekVisitsValue[index]);
            // return this.lastWeekVisits;
        }
        console.log(this.lastWeekVisits, 'lastWeekVisits');
    };
    channels.prototype.processDetailBullet = function () {
        for (var i in this.detailBulletData) {
            if (this.detailBulletData.hasOwnProperty(i)) {
                var test = this.detailBulletData[i];
                var data_graph = test[1][1];
                var counter = 0;
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        // console.log(this.title,'title');
                    }
                    else {
                        // console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit in arr_object) {
                                //     console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                if (typeof (arr_object1) == 'object') {
                                    var count1 = 0;
                                    var count2 = 0;
                                    for (var new_visit1 in arr_object1) {
                                        // console.log(arr_object1[new_visit1],new_visit1,'data and key2',count1); // data points
                                        // console.log(this.title,'title444');
                                        if (this.title.indexOf('Project') != -1) {
                                            this.projectedValue[count1] = arr_object1[new_visit1];
                                            // console.log(this.title,'title444');
                                            count1++;
                                        }
                                        else {
                                            this.actualValue[count2] = arr_object1[new_visit1];
                                            // console.log(this.title,'title555');  
                                            count2++;
                                        }
                                    }
                                } //if(typeof(arr_object1)=='object' )
                            } //for(var new_visit in arr_object )
                        }
                    }
                }
            }
        }
        if (this.projectedValue.length > 0) {
            // console.log(this.actualValue,"actualValue",this.projectedValue,'projectedValue');
            for (var j = 0; j < this.actualValue.length; j++) {
                var bulletStackData1 = [{ "ranges": [0, this.projectedValue[j], 0], "measures": [this.actualValue[j]], "markers": [0] }];
                var bulletStackData2 = [{ "ranges": [0, 0, 0], "measures": [this.lastWeekVisitsValue[j]], "markers": [0] }];
                var divId1 = "#detailBullet" + this.actualValue[j];
                this.renderBulletChart(divId1, bulletStackData1);
                var divId2 = "#detailTdyBullet" + this.actualValue[j];
                this.renderBulletChart(divId2, bulletStackData1);
                var divId3 = "#lastWeekBullet" + this.actualValue[j];
                this.renderBulletChart(divId3, bulletStackData2);
            }
        } //if(this.array2.length>0){
    };
    channels.prototype.renderBulletChart = function (WhereToPut, whatToPut) {
        // Variables required for bullet chart are listed here
        var bulletParentWidth;
        var chart;
        var margin;
        var width;
        var height;
        bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        margin = { top: 0, right: 3, bottom: 0, left: 0 };
        width = bulletParentWidth - margin.left - margin.right;
        height = 30 - margin.top - margin.bottom;
        chart = d3.bullet()
            .width(width)
            .height(height);
        // .actualColor("#ff0000")
        // .targetColor("#00FF00")
        // .projectedColor("#0000FF")
        var svg = d3.select(WhereToPut).selectAll("svg")
            .data(whatToPut)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .call(chart);
        d3.selectAll("back-button").on("click", function () {
            svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
        });
    }; // end of bullet chart fun
    channels.prototype.randomize = function (d) {
        if (!d.randomizer)
            d.randomizer = this.randomizer(d);
        // d.ranges = d.ranges.map(d.randomizer);
        // d.markers = d.markers.map(d.randomizer);
        d.measures = d.measures.map(d.randomizer);
        return d;
    }; // fun required for bullet chart
    channels.prototype.randomizer = function (d) {
        var k = d3.max(d.ranges) * .2;
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }; //fun  required for bullet chart
    channels.prototype.kFormatter = function (num) {
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
    return channels;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], channels.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("bulletChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */])
], channels.prototype, "bulletCharts", void 0);
channels = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-detail-screen2',template:/*ion-inline-start:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/'\n\n<ion-header>\n\n  <ion-navbar class="detail-back-btn">\n\n    <ion-title  align="center">\n\n      <button ion-button round class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </button>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content class="app-bg">\n\n    <div *ngFor="let name of cardName; let i = index;">\n\n          <h2 *ngIf="i == 1" class="screen-title" align="center">{{name[1]}}</h2>\n\n    </div>\n\n        <div *ngIf="i == 0">\n\n\n\n        </div>\n\n    <ion-grid class="white-txt">\n\n      <div *ngFor="let keys of tdyVisitsKeys; let i = index;">\n\n        <ion-row class="pos-relative"  [ngClass]="{\'hide\': i < 0}">\n\n            <ion-col class="detail-screen-card bg-grey">\n\n                  <p class="detail-screen-card-title">Last week</p>\n\n                <!-- <div class="demo-bullet"></div> -->\n\n              <div class="card1-bullet-wraper" #bulletChart>\n\n                  <div id="lastWeekBullet{{keys[1]}}"></div>\n\n              </div>\n\n               	<div>\n\n                          		<span  class="legend-txt small-txt legend-tdy" >{{this.lastWeekVisits[i]}}</span>\n\n                          		<!-- <span  class="legend-txt small-txt legend-target" >2.02M</span> -->\n\n                          		<span  class="legend-txt small-txt legend-projected">0.00</span>\n\n        			  </div>\n\n          </ion-col>\n\n	        <span class="txt-total">Total</span>\n\n          <ion-col class="detail-screen-card bg-blue">\n\n                <p class="detail-screen-card-title">Today</p>\n\n                <!-- <div class="demo-bullet"></div> -->\n\n              <div class="card1-bullet-wraper" #bulletChart>\n\n                  <div id="detailTdyBullet{{keys[1]}}"></div>\n\n              </div>\n\n               	<div align="right">\n\n                          		<span  class="legend-txt small-txt legend-tdy" >{{keys[1]}}</span>\n\n                          		<span  class="legend-txt small-txt legend-target" >0.00</span>\n\n                          		<span  class="legend-txt small-txt legend-projected">{{this.actualValue[i] || 0.00}}</span>\n\n        			  </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="pos-relative row-gap" >\n\n      		<ion-col col-5 class="">\n\n        			<div class="left-legends">\n\n                  <span>{{keys[0]}}</span>\n\n                  <span class="left-legend-icon"><ion-icon name="arrow-dropright-circle"></ion-icon></span>\n\n              </div>\n\n      		</ion-col>\n\n      		<ion-col col-7 class="">\n\n              <div class="card1-bullet-wraper" #bulletChart>\n\n                  <div id="detailBullet{{keys[1]}}"></div>\n\n                  <!--<bullet-chart [height]="height" [colors]="colors" [actual]="actual" [target]="target" [ranges]="ranges"></bullet-chart>-->\n\n              </div>\n\n      		</ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */]])
], channels);

//# sourceMappingURL=detail-screen2.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map