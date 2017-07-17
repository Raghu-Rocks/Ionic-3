webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_screen1__ = __webpack_require__(273);
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__(99);
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


// import { HomePage } from '../../home/home';

/**
 * Generated class for the DetailScreen1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var summary = (function () {
    function summary(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ngOnInit(){
    summary.prototype.ngAfterViewInit = function () {
        this.hero = this.navParams.get("hero");
        __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
            bindto: "#dashboardChart",
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 0],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'area',
                    data2: 'area'
                },
                // type: 'area',
                colors: {
                    data1: '#ff0000', data2: '#ff9900'
                }
            },
            legend: {
                show: false
            }
        });
    };
    // goBack() {
    //     this.navCtrl.pop();
    // }
    summary.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailScreen1Page');
    };
    return summary;
}());
summary = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-detail-screen1',template:/*ion-inline-start:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="detail-back-btn">\n\n    <ion-title  align="center">\n\n      <button ion-button round class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </button>\n\n      <!--<span class="date-btn">\n\n        <ion-icon  md="md-time" ios="ios-time-outline"></ion-icon>{{navParams.data.date_today}}\n\n      </span>-->\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  <ion-content class="app-bg">\n\n    <div  *ngFor="let item of navParams.data.detail_trends; let i = index; let f = first;">\n\n        <div *ngIf="f">\n\n        	<h2 class="screen-title" align="center">{{item[0].name}}</h2>\n\n<ion-grid class="white-txt">\n\n  <ion-row class="pos-relative">\n\n    <ion-col class="detail-screen-card bg-grey">\n\n                  	<p class="detail-screen-card-title">Last week</p>\n\n      				<div class="demo-bullet"></div>\n\n               		<div>\n\n                          		<span  class="legend-txt small-txt" >2.02M</span>\n\n                          		<span  class="legend-txt small-txt" >0.00</span>\n\n        			</div>\n\n    </ion-col>\n\n	<span class="txt-total">Total</span>\n\n    <ion-col class="detail-screen-card bg-blue">\n\n                  	<p class="detail-screen-card-title">Today</p>\n\n      				<div class="demo-bullet"></div>\n\n               		<div align="right">\n\n                          		<span  class="legend-txt small-txt" >2.02M</span>\n\n                          		<span  class="legend-txt small-txt" >0.00</span>\n\n        			</div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n        	<div> \n\n         		<div id="dashboardChart" #dashboardChart class="donut-chart"></div>\n\n         	</div>\n\n      	</div>         \n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], summary);

//# sourceMappingURL=detail-screen1.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map