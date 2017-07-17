webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_screen2__ = __webpack_require__(274);
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
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
    function channels(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ngOnInit(){
    channels.prototype.ngAfterViewInit = function () {
        this.slides.freeMode = true;
        this.hero = this.navParams.get("hero");
        //   console.log(this.card_index,'card_index1');
        // let dashboardChartArea = this.dashboardChart.nativeElement;
        //    console.log(this.card_index, "Card Index")
        __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
            bindto: "#dashboardChart",
            data: {
                type: 'line',
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            },
            legend: {
                show: false
            },
            size: {
                height: 120
            },
            donut: {
                title: "Age"
            }
        });
    };
    channels.prototype.goToPrevSlide = function () {
        this.slides.slidePrev();
    };
    channels.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    channels.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailScreen2Page');
    };
    return channels;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], channels.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])('index'),
    __metadata("design:type", Object)
], channels.prototype, "card_index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('#dashboardCharts'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* ElementRef */])
], channels.prototype, "dashboardChart", void 0);
channels = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-detail-screen2',template:/*ion-inline-start:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>detail-screen2</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  <ion-content class="app-bg">\n\n         <div> \n\n            <span>Graph</span>\n\n         <div id="dashboardChart" #dashboardChart class="donut-chart"></div>\n\n         </div>\n\n<ion-slides pager>\n\n\n\n  <ion-slide *ngFor="let item of navParams.data.detail_trends; let i = index">\n\n    <h2>Slide</h2>\n\n      <button ion-button block (click)="goToPrevSlide()">Navigate Back</button>\n\n        <h2>{{item[0].detail}}</h2>\n\n        <h2>{{item[0].name}}</h2>\n\n        <h2>{{item[0].template}}</h2>\n\n      <button ion-button block (click)="goToNextSlide()">Navigate Forward</button>\n\n  </ion-slide>\n\n</ion-slides>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\My-Work\ionic\ionic_3\apiApp\src\pages\detail-screens\detail-screen2\detail-screen2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], channels);

//# sourceMappingURL=detail-screen2.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map