webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_screen1__ = __webpack_require__(271);
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
            __WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* DetailScreen1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* DetailScreen1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__detail_screen1__["a" /* DetailScreen1Page */]
        ]
    })
], DetailScreen1PageModule);

//# sourceMappingURL=detail-screen1.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailScreen1Page; });
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
 * Generated class for the DetailScreen1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DetailScreen1Page = (function () {
    function DetailScreen1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ngOnInit(){
    DetailScreen1Page.prototype.ngAfterViewInit = function () {
        this.slides.freeMode = true;
        this.hero = this.navParams.get("hero");
    };
    DetailScreen1Page.prototype.goToPrevSlide = function () {
        this.slides.slidePrev();
    };
    DetailScreen1Page.prototype.goToNextSlide = function () {
        this.slides.slideNext();
    };
    // goBack() {
    //     this.navCtrl.pop();
    // }
    DetailScreen1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailScreen1Page', this.hero);
    };
    return DetailScreen1Page;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], DetailScreen1Page.prototype, "slides", void 0);
DetailScreen1Page = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-detail-screen1',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Sample.git\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail-screen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content class="app-bg">\n    <!--<p>{{navParams.data.detail_trends}}</p>-->\n<ion-slides pager>\n\n  <ion-slide  *ngFor="let item of navParams.data.detail_trends; let i = index">\n    <h2>Slide</h2>\n      <button ion-button block (click)="goToPrevSlide()">Navigate Back</button>\n        <h2>{{item[0].detail}}</h2>\n        <h2>{{item[0].name}}</h2>\n        <h2>{{item[0].template}}</h2>\n      <button ion-button block (click)="goToNextSlide()">Navigate Forward</button>\n  </ion-slide>\n</ion-slides>\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\ranandan\Documents\Sample.git\apiApp\src\pages\detail-screens\detail-screen1\detail-screen1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DetailScreen1Page);

//# sourceMappingURL=detail-screen1.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map