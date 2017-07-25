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


/**
 * Generated class for the DetailScreen2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var channels = (function () {
    function channels(navCtrl, navParams, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cdr = cdr;
        this.navParams.get("hero");
    }
    channels.prototype.ngAfterViewInit = function () {
        this.mapjson();
        this.bulletChart();
    };
    channels.prototype.mapjson = function () {
        // today
        this.data = Object.entries(this.navParams.data);
        this.cardName = Object.entries(this.data[0]);
        console.log(this.data, "data");
        console.log(this.cardName[1][1], "cardName");
        this.cdr.detectChanges();
    };
    channels.prototype.bulletChart = function () {
        var _this = this;
        this.bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        this.margin = { top: 0, right: 3, bottom: 0, left: 0 };
        this.width = this.bulletParentWidth - this.margin.left - this.margin.right;
        this.height = 30 - this.margin.top - this.margin.bottom;
        console.log("width", this.bulletParentWidth);
        this.chart = d3.bullet()
            .width(this.width)
            .height(this.height);
        // .actualColor("#ff0000")
        // .targetColor("#00FF00")
        // .projectedColor("#0000FF")
        this.something = d3.json("https://api.myjson.com/bins/rdlfz", function (error, data) {
            if (error)
                throw error;
            var svg = d3.select("#bulletChart").selectAll("svg")
                .data(data)
                .enter().append("svg")
                .attr("class", "bullet")
                .attr("width", _this.width + _this.margin.left + _this.margin.right)
                .attr("height", _this.height + _this.margin.top + _this.margin.bottom)
                .append("g")
                .call(_this.chart);
            //   var title = svg.append("g")
            //       .style("text-anchor", "end")
            //       .attr("transform", "translate(-6," + this.height / 2 + ")");
            //   title.append("text")
            //       .attr("class", "title")
            //       .text(function(d) { return d.title; });
            //   title.append("text")
            //       .attr("class", "subtitle")
            //       .attr("dy", "1em")
            //       .text(function(d) { return d.subtitle; });
            d3.selectAll("back-button").on("click", function () {
                svg.datum(this.randomize).call(this.chart.duration(1000)); // TODO automatic transition
            });
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
    return channels;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], channels.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])('index'),
    __metadata("design:type", Object)
], channels.prototype, "card_index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("bulletChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */])
], channels.prototype, "bulletCharts", void 0);
channels = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-detail-screen2',template:/*ion-inline-start:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/'\n\n<ion-header>\n\n  <ion-navbar class="detail-back-btn">\n\n    <ion-title  align="center">\n\n      <button ion-button round class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </button>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content class="app-bg">\n\n    <div *ngFor="let item of cardName; let i = index;">\n\n          <h2 *ngIf="i == 1" class="screen-title" align="center">{{item[1]}}</h2>\n\n    </div>\n\n    <div *ngFor="let item of navParams.data.detail_trends; let i = index;">\n\n          <div *ngIf="i == 0">\n\n            <ion-grid class="white-txt">\n\n              <ion-row class="pos-relative">\n\n                  <ion-col class="detail-screen-card bg-grey">\n\n                  	<p class="detail-screen-card-title">Last week</p>\n\n      				      <div class="demo-bullet"></div>\n\n               		  <div>\n\n                          		<span  class="legend-txt small-txt" >2.02M</span>\n\n                          		<span  class="legend-txt small-txt" >0.00</span>\n\n        			      </div>\n\n                </ion-col>\n\n	              <span class="txt-total">Total</span>\n\n                <ion-col class="detail-screen-card bg-blue">\n\n                  	<p class="detail-screen-card-title">Today</p>\n\n      				      <div class="demo-bullet"></div>\n\n               		  <div align="right">\n\n                          		<span  class="legend-txt small-txt" >2.02M</span>\n\n                          		<span  class="legend-txt small-txt" >0.00</span>\n\n        			      </div>\n\n                </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n    </div>\n\n    <ion-grid class="white-txt">\n\n      <ion-row class="pos-relative">\n\n      		<ion-col col-5 class="detail-screen-card bg-grey">\n\n        			<div>\n\nstgsjv        			</div>\n\n      		</ion-col>\n\n      		<ion-col col-7 class="detail-screen-card bg-grey">\n\n        			<div>\n\n         				<div id="bulletChart" #bulletChart class="donut-chart"></div>\n\n        			</div>\n\n      		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */]])
], channels);

//# sourceMappingURL=detail-screen2.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map