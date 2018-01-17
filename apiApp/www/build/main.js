webpackJsonp([6],{

/***/ 277:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 277;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		1312,
		5
	],
	"../pages/bullet/bullet.module": [
		1313,
		4
	],
	"../pages/cards/card1/cards.module": [
		325
	],
	"../pages/cards/card2/card2.module": [
		407
	],
	"../pages/cards/target/target.module": [
		408
	],
	"../pages/detail-screens/detail-screen1/detail-screen1.module": [
		1314,
		3
	],
	"../pages/detail-screens/detail-screen2/detail-screen2.module": [
		1315,
		2
	],
	"../pages/detail-screens/target-detail/target-detail.module": [
		1316,
		1
	],
	"../pages/home/home.module": [
		321
	],
	"../pages/login/login.module": [
		409
	],
	"../pages/notification-details/notification-details.module": [
		1317,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 320;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_card1_cards_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards_card2_card2_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_target_target_module__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__cards_card1_cards_module__["CardsPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__cards_card2_card2_module__["Card2PageModule"],
            __WEBPACK_IMPORTED_MODULE_5__cards_target_target_module__["TargetPageModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(app, iab, loadingCtrl, navCtrl, navParams, peopleServiceProvider, storage, socialSharing, screenshot, menu) {
        this.app = app;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.peopleServiceProvider = peopleServiceProvider;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.menu = menu;
        this.state = false;
        // baseURL = "https://expcloudapp.adobe.com/mca/api/v1/user/";
        this.data = [];
        this.baseURL = "https://expcloudapp.adobe.com";
        this.validateTokenURL = this.baseURL + "/mca/api/v1/user/";
        this.logOutURLBase = this.baseURL + "/mca/auth/logout/";
        this.failureURLFormat = "/auth/failed/";
        this.logoutURLFormat = "/auth/logoutsuccess/";
        // this.loadPeople("assets/json/data.json");
        // this.offlineData();
        this.fetchData();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    HomePage.prototype.navigateToAbout = function () {
        // console.log(this.people[0].last_refreshed, 'home.ts about')
        this.navCtrl.push("AboutPage", this.people[0].last_refreshed);
    };
    HomePage.prototype.fetchData = function () {
        var _this = this;
        this.storage.get('IMSIToken').then(function (val) {
            _this.authToken = val;
            var APIurl = _this.validateTokenURL + _this.authToken;
            _this.loadPeople(APIurl);
        });
    };
    HomePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.length().then(function (val) {
                if (val != -1) {
                    resolve(true);
                }
            }, function (err) {
                reject(false);
            });
        });
    };
    HomePage.prototype.loadPeople = function (url) {
        var _this = this;
        this.peopleServiceProvider.load(url)
            .then(function (data) {
            _this.profile = data[0];
            _this.people = data[1];
            console.log(typeof _this.profile, 'profile');
            if (_this.profile) {
                _this.userProfileData();
            }
            console.log(data[2], 'error', typeof data[2]);
            if (typeof (data[2]) != "undefined" && data[2] !== undefined && (data[1] == undefined || typeof (data[1] == "undefined"))) {
                console.log(data[2], 'data[2]');
                _this.error = data[2];
                _this.onLogOut();
            }
        });
    };
    HomePage.prototype.userProfileData = function () {
        this.profile = Object.entries(this.profile);
        this.profileImage = Object.entries(this.profile[2]);
        this.profileImage = Object.values(this.profileImage[1])[1];
        // console.log(this.profileImage,'this.profile');
        // console.log(this.people,'this.profile');
    };
    HomePage.prototype.offlineData = function () {
        this.data = JSON.parse(window.localStorage.getItem("DMAApp"));
        //   console.log(this.data, 'local data');
        this.profile = this.data[0];
        this.people = this.data[1];
        if (this.profile) {
            this.profile = Object.entries(this.profile);
            this.profileImage = Object.entries(this.profile[2]);
            this.profileImage = Object.values(this.profileImage[1])[1];
            //   console.log(this.profileImage,'this.profile');
        }
        //   console.log(this.people,'this.profile');
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1500
        });
        loader.present();
    };
    // screnshots and share plugin function
    // reset() {
    //   setTimeout(function(){ 
    //     this.state = false;
    //   }, 200);
    // }
    // screenShotURL() {
    //   this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
    //     this.screen = res.filePath;
    //     console.log(this.screen, 'path');
    //     this.state = true;
    //     this.reset();
    //   });
    // }
    HomePage.prototype.shareSheetShare = function () {
        var _this = this;
        // this.screenShotURL() ;
        // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
        //   this.screen = res.filePath;
        this.screenshot.URI(80).then(function (res) {
            _this.screen = res.URI;
            console.log(_this.screen, 'path');
            // console.log(this.screen);
            _this.socialSharing.share(null, null, _this.screen, null).then(function () {
                console.log("shareSheetShare: Success");
            }).catch(function (Error) {
                console.error("shareSheetShare: failed" + Error);
            });
        });
        // console.log(this.screen, 'screen')
    };
    HomePage.prototype.onLogOut = function () {
        var _this = this;
        /* Logout Action */
        var logOutURL = this.logOutURLBase + this.authToken;
        var browser = this.iab.create(logOutURL, "_blank", "location=no,toolbar=no");
        // this.nav.push(LoginPage);
        browser.on('loadstop').subscribe(function (data) {
            if (data.url.indexOf(_this.logoutURLFormat) !== -1) {
                _this.storage.clear();
                _this.app.getRootNav().setRoot("LoginPage");
                browser.close();
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])('card'),
    __metadata("design:type", Object)
], HomePage.prototype, "card", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('dashboardChart'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "dashboardChart", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\pages\home\home.html"*/'<ion-header class="header-transparent">\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle class="hamburger">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title text-center>Home</ion-title> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="app-bg home">\n\n  <!-- <img src="{{ screen }}" *ngIf="state" style="position:absolute;top:88px;left:0;right:0;z-index:99999;height:90px" [hidden]="state != 1"> -->\n\n      <section>\n\n            <ion-grid class="nopadding">\n\n              <ion-row>\n\n                <ion-col col-12 class="nopadding">\n\n                      <div class="user-info-box">\n\n                            <ion-icon ios="ios-settings" md="md-settings"  class="cog-icon" (click)="navigateToAbout()"></ion-icon>\n\n                            <span class="user-pic">\n\n                              <!-- <ion-icon ios="ios-contact" md="md-contact"></ion-icon> -->\n\n                                <img src="{{this.profileImage || \'assets/images/missing.gif\'}}">  \n\n                            </span>\n\n                              <img src="assets/images/icon_msg.png"  class="home-share" (click)="shareSheetShare()">\n\n                            <!-- <ion-icon ios="ios-share" md="md-share" class="refresh-share"  (click)="shareSheetShare()"></ion-icon> -->\n\n\n\n                      </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-12 *ngFor="let item of profile let i = index;" [hidden]="i >1" style="padding-bottom:0;">\n\n                                            <div class="name" text-center>{{item[1]}}</div>\n\n                                            <!-- <div class="desig" text-center>{{profile.display_title}}</div> -->\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n      </section>\n\n            <page-target></page-target>          \n\n      <div *ngFor="let card of people let i = index; let f=first; let l=last; let e=even; let o=odd;">\n\n      <!--<h1>Length : {{card.length}}</h1>-->\n\n            <card1-design *ngIf="card.template == \'summary\' " [hero]="card" [index]="i"></card1-design>          \n\n            <card1-design *ngIf="card.template == \'conversion\'" [hero]="card" [index]="i"></card1-design>\n\n            <card2-design *ngIf="card.template == \'channels\'" [hero2]="card" [index]="i"></card2-design>          \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsPageModule = (function () {
    function CardsPageModule() {
    }
    return CardsPageModule;
}());
CardsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* Card1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* Card1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* Card1Page */]
        ]
    })
], CardsPageModule);

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card2PageModule", function() { return Card2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card2__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Card2PageModule = (function () {
    function Card2PageModule() {
    }
    return Card2PageModule;
}());
Card2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card2__["a" /* Card2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card2__["a" /* Card2Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__card2__["a" /* Card2Page */]
        ]
    })
], Card2PageModule);

//# sourceMappingURL=card2.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetPageModule", function() { return TargetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__target__ = __webpack_require__(991);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TargetPageModule = (function () {
    function TargetPageModule() {
    }
    return TargetPageModule;
}());
TargetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__target__["a" /* TargetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__target__["a" /* TargetPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__target__["a" /* TargetPage */]
        ]
    })
], TargetPageModule);

//# sourceMappingURL=target.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '_DMAAPP',
                driverOrder: ['indexeddb', 'sqlite', 'websql'] })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(events, navCtrl, navParams, iab, push, http, storage) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.push = push;
        this.http = http;
        this.storage = storage;
        /* URLs */
        this.baseURLProd = "https://expcloudapp.adobe.com";
        this.baseURL = this.baseURLProd;
        /* Developement options */
        // baseURLDev = "https://or1010050204078.corp.adobe.com";
        //"DMADevEnv"
        this.DMADev = false;
        this.tokenURLFormat = "/auth/success/#usertoken=";
        this.failureURLFormat = "/auth/failed/";
        this.logoutURLFormat = "/auth/logoutsuccess/";
        this.validateTokenURL = this.baseURL + "/mca/api/v1/user/";
        this.setDeviceIDURL = this.baseURL + "/mca/api/v1/user/";
        this.logOutURLBase = this.baseURL + "/mca/auth/logout/";
        // this.output = this.gettKey(this.DMADev);
    }
    LoginPage.prototype.getDataAfterLogin = function (token) {
        console.log('User created!');
        this.events.publish('user:created', token);
    };
    /*ionViewDidLoad is similar to onInit*/
    LoginPage.prototype.ionViewDidLoad = function () {
        /* Check for dev environment and set base URL */
        if (!this.gettKey(this.DMADev)) {
            this.baseURL = this.baseURLProd;
        }
        else {
            this.baseURL = this.baseURLProd;
        }
        this.authURL = this.baseURL + "/mca/auth/";
        // set base url in storage
    };
    LoginPage.prototype.gettKey = function (key) {
        // return this.storage.getItem(key);
    };
    LoginPage.prototype.DMAAppAuth = function () {
        var _this = this;
        console.log('AuthURL', this.authURL);
        // let value: any;
        var browser = this.iab.create(this.authURL, "_blank", "location=no,toolbar=no");
        browser.on('loadstop').subscribe(function (data) {
            if (data.url.indexOf(_this.tokenURLFormat) !== -1) {
                // set a key/value
                _this.storage.set('IMSIToken', data.url.split(_this.tokenURLFormat)[1]);
                _this.registerNotification(data.url.split(_this.tokenURLFormat)[1]);
                _this.navCtrl.setRoot("HomePage");
                _this.IMSIToken = data.url.split(_this.tokenURLFormat)[1];
                browser.close();
                _this.getDataAfterLogin(_this.IMSIToken);
            }
        });
    };
    LoginPage.prototype.registerNotification = function (passIMSIToken) {
        var _this = this;
        this.push.register().then(function (t) {
            return _this.push.saveToken(t);
        }).then(function (t) {
            console.log('Token saved on Login:', t.token);
            // post method for sending Device_Id
            var url = "https://expcloudapp.adobe.com/mca/api/v1/user/" + passIMSIToken + "/setDeviceDetails";
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = 'device_id=' + t.token;
            return new Promise(function (resolve, reject) {
                _this.http.post(url, body, options)
                    .toPromise()
                    .then(function (response) {
                    console.log('API Response : ', response.json());
                    resolve(response.json());
                })
                    .catch(function (error) {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\pages\login\login.html"*/'\n\n<ion-content padding>\n\n  <h3 ion-text color="white">\n\n    Experience Cloud App\n\n  </h3>\n\n  <span ion-text color="white" style="margin-bottom: 22px;">\n\n    Business Intelligence & Actions\n\n  </span>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="light" block type="submit" (click)="DMAAppAuth()">\n\n        Login\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="white-transparent" text-center>\n\n      <small ion-text color="white">You will be re-directed to the Adobe ID authentication portal for login</small>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["b" /* Push */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PeopleServiceProvider = (function () {
    function PeopleServiceProvider(http) {
        this.http = http;
        // console.log('Hello PeopleServiceProvider Provider');
    }
    PeopleServiceProvider.prototype.load = function (url) {
        var _this = this;
        // console.log('service 1', typeof(this.data), this.data );
        if (this.data) {
            if (typeof (this.data[0]) !== 'undefined' && typeof (this.data[1] !== 'undefined')) {
                // already loaded data
                // console.log('service 2', typeof(this.data), this.data );
                return Promise.resolve(this.data);
            }
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // console.log('service 3', typeof(this.data), this.data );
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.profile = data.profile;
                _this.cards = data.cards;
                _this.error = data.error;
                _this.data = [_this.profile, _this.cards, _this.error];
                // console.log(typeof this.data, this.data, "data undef");
                if (_this.data != null && typeof (_this.data[0]) != "undefined" && typeof (_this.data[1]) != "undefined") {
                    // console.log(this.data, 'data set');
                    window.localStorage.setItem("DMAApp", JSON.stringify(_this.data));
                }
                resolve(_this.data);
            });
        });
    };
    return PeopleServiceProvider;
}());
PeopleServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PeopleServiceProvider);

//# sourceMappingURL=people-service.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NotificationProvider = (function () {
    function NotificationProvider(http) {
        this.http = http;
        console.log('Hello NotificationProvider Provider');
    }
    NotificationProvider.prototype.load = function (url) {
        var _this = this;
        if (this.alertsData) {
            // already loaded data
            return Promise.resolve(this.alertsData);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.alertsData = data;
                console.log(data, 'data');
                resolve(_this.alertsData);
            });
        });
    };
    return NotificationProvider;
}());
NotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NotificationProvider);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_people_service_people_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(app, platform, statusBar, splashScreen, push, events, peopleServiceProvider, alertCtrl, iab, storage) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.events = events;
        this.peopleServiceProvider = peopleServiceProvider;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.storage = storage;
        this.DMAAppDebug = true;
        this.baseURL = "https://expcloudapp.adobe.com";
        this.validateTokenURL = this.baseURL + "/mca/api/v1/user/";
        this.logOutURLBase = this.baseURL + "/mca/auth/logout/";
        this.failureURLFormat = "/auth/failed/";
        this.logoutURLFormat = "/auth/logoutsuccess/";
        // this.loadPeople("assets/json/data.json"); //for testing this is local data
        this.fetchData(null); // after userToken ckeck it will frtch data
        this.initializeApp();
        this.events.subscribe('user:created', function (token) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.fetchData(token); // after userToken ckeck it will frtch data			
            console.log('Welcome', token, 'at');
        });
        this.checkingUserTokenForLogin(); // check user token then redirect to Home or Login
    } // constructor
    MyApp.prototype.checkingUserTokenForLogin = function () {
        var _this = this;
        this.storage.length().then(function (val) {
            _this.tokenLength = val;
            // console.log('len=='+ this.tokenLength);
            // alert('length'+this.tokenLength);
            if (_this.tokenLength > 0) {
                // alert("You are logged in ");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
            }
            else {
                // alert("Need To Login");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
        });
        this.storage.get('IMSIToken').then(function (val) {
            _this.authToken = val;
            // console.log("tokenval=="+val +" "+ this.authToken);
        });
    };
    MyApp.prototype.fetchData = function (emittToken) {
        var _this = this;
        this.storage.get('IMSIToken').then(function (val) {
            var APIurl = _this.validateTokenURL + val;
            console.log(val, 'val1');
            if (val === null) {
                console.log(val, 'val2');
                APIurl = _this.validateTokenURL + emittToken;
            }
            _this.loadPeople(APIurl);
        });
    };
    MyApp.prototype.openPage = function (page, data) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // console.log('test', page, data);
        this.nav.push(page, data);
    };
    MyApp.prototype.loadPeople = function (url) {
        var _this = this;
        // call back data from provider
        console.log("load people", url);
        this.peopleServiceProvider.load(url)
            .then(function (data) {
            _this.people = data[1];
            //  console.log(this.people,'this.people',data,'data');
        });
    };
    MyApp.prototype.notification = function () {
        var _this = this;
        this.push.rx.notification()
            .subscribe(function (msg) {
            //  console.log('Push Notification Received: ' + msg);
            var alert = _this.alertCtrl.create({
                title: msg.title,
                subTitle: msg.text,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    MyApp.prototype.onLogOut = function () {
        var _this = this;
        /* Logout Action */
        var logOutURL = this.logOutURLBase + this.authToken;
        var browser = this.iab.create(logOutURL, "_blank", "location=no,toolbar=no");
        // this.nav.push(LoginPage);
        browser.on('loadstop').subscribe(function (data) {
            if (data.url.indexOf(_this.logoutURLFormat) !== -1) {
                _this.storage.clear();
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
                browser.close();
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.notification(); // notification alert
            _this.statusBar.styleDefault();
            // this.splashScreen.hide();			
            _this.storage.length().then(function (val) {
                _this.tokenLength = val;
                if (_this.tokenLength > 0) {
                    setTimeout(function () {
                        _this.splashScreen.hide();
                    }, 200);
                }
                else {
                    _this.splashScreen.hide();
                }
            });
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\app\app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n<ion-menu [content]="content" class="side-menu">\n\n  <ion-header>\n\n    <ion-toolbar class="sidemenu-tool">\n\n      <ion-title class="sidemenu-title">MENU</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="app-content">\n\n    <div class="sidemenu-container">\n\n      <ion-list>\n\n        <button class="sidemenu-btns" menuClose ion-item *ngFor="let p of people; let i=index" (click)="openPage(p.template,p)">\n\n            {{p.name}}\n\n        </button>\n\n        <button class="sidemenu-btns" menuClose ion-item (click)="openPage(\'NotificationDetailsPage\',\'\')">\n\n          Notification\n\n        </button>  \n\n        <button class="sidemenu-btns" menuClose ion-item (click)="onLogOut()">\n\n            Log Out\n\n        </button>  \n\n          <!--<button menuClose ion-item>\n\n              <ion-item>Test2</ion-item>\n\n          </button>-->\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<!--{{people}}-->\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_people_service_people_service__["a" /* PeopleServiceProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["b" /* Push */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__providers_people_service_people_service__["a" /* PeopleServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(669);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_people_service_people_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_cloud_angular__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_notification_notification__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var cloudSettings = {
    'core': {
        'app_id': 'e33b9ce9 '
    },
    'push': {
        'sender_id': '488908667368',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/card1/cards.module#CardsPageModule', name: 'Card1Page', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/card2/card2.module#Card2PageModule', name: 'Card2Page', segment: 'card2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/target/target.module#TargetPageModule', name: 'TargetPage', segment: 'target', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bullet/bullet.module#BulletPageModule', name: 'BulletPage', segment: 'bullet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail-screens/detail-screen1/detail-screen1.module#DetailScreen1PageModule', name: 'summary', segment: 'detail-screen1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail-screens/detail-screen2/detail-screen2.module#DetailScreen2PageModule', name: 'channels', segment: 'detail-screen2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail-screens/target-detail/target-detail.module#TargetDetailPageModule', name: 'TargetDetailPage', segment: 'target-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification-details/notification-details.module#NotificationPageModule', name: 'NotificationDetailsPage', segment: 'notification-details', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '_DMAAPP',
                driverOrder: ['indexeddb', 'sqlite', 'websql'] })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_0__providers_people_service_people_service__["a" /* PeopleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot__["a" /* Screenshot */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c3__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Card1Page = (function () {
    function Card1Page(el, navCtrl, navParams, screenshot, cdr, socialSharing, peopleServiceProvider) {
        this.el = el;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.cdr = cdr;
        this.socialSharing = socialSharing;
        this.peopleServiceProvider = peopleServiceProvider;
        this.hero = __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */];
        this.targetValue = [];
        this.actualValue = [];
        this.projectedValue = [];
        this.targetValueL = [];
        this.actualValueL = [];
        this.projectedValueL = [];
        this.barActualValue = [];
        this.barTargetValue = [];
        this.barProjectedValue = [];
        this.barDataDate = [];
        this.count11 = 0;
        this.count21 = 0;
        this.count31 = 0;
        this.count1 = 0;
        this.count2 = 0;
        this.count3 = 0;
        this.card1tdyP = [];
        this.card1tdyT = [];
        this.card1tdyA = [];
        this.lastWeekA = [];
        this.lastWeekT = [];
    }
    Card1Page.prototype.navigateToDetailPage = function (hero) {
        this.navCtrl.push("summary", hero);
        console.log(this.hero, "hero");
    };
    Card1Page.prototype.shareSheetShare = function () {
        var _this = this;
        // this.screenShotURL() ;
        // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
        //   this.screen = res.filePath;
        var screen;
        this.screenshot.URI(80).then(function (res) {
            screen = res.URI;
            // console.log(screen, 'path');
            _this.socialSharing.share(null, null, screen, null).then(function () {
                console.log("shareSheetShare: Success");
            }).catch(function (Error) {
                console.error("shareSheetShare: failed" + Error);
            });
        });
    };
    Card1Page.prototype.ngAfterViewInit = function () {
        //  console.log('after view');
        this.mapjson();
        this.processBarChart();
        // console.log("#bulletTdy" + this.card_index, this.tdy, this.projectedValue, this.targetValue, this.actualValue, 'valllles');
        this.processBulletChart("#bulletTdy" + this.card_index, this.tdy, this.projectedValue, this.targetValue, this.actualValue);
        this.processBulletChart("#bulletLstWeek" + this.card_index, this.lstWeekData, this.projectedValueL, this.targetValueL, this.actualValueL);
    }; // fun ngafterViewInit ends here
    // fun for mapping the json data starts here, the variables are decleard at top
    Card1Page.prototype.mapjson = function () {
        // today
        this.data = Object.entries(this.hero.collection[0]);
        this.tdy = Object.entries(this.data[2][1]);
        this.cardData = Object.entries(this.tdy[0][1]);
        // console.log(this.cardData, 'cardData  tdy  ');
        this.cardDataArray = Object.entries(this.cardData);
        this.cardTargetProjected = Object.entries(this.data[2][1]);
        // this.cardTargetData = Object.entries(this.cardTargetProjected[1][1])[0][1];
        // this.cardProjectedData = Object.entries(this.cardTargetProjected[2][1])[0][1];
        // this.areaGraphData = Object.keys(this.dataObject);
        // console.log(this.cardTargetProjected, 'cardProjected');
        //todays data with Kformatter, this is used in html only.
        this.tdyAndLastWeekDataForHtmOnlyl(this.cardTargetProjected, this.card1tdyP, this.card1tdyT, this.card1tdyA);
        //last week lebel and data
        this.jsonData = Object.entries(this.hero);
        this.mainArray = Object.entries(this.jsonData[4]);
        this.collectionArray = Object.entries(this.mainArray[1][1]);
        this.lastWeek = Object.entries(this.collectionArray[1][1])[0];
        this.dataArray = Object.entries(this.collectionArray[1][1])[2];
        this.lstWeekData = Object.entries(this.dataArray[1]); // for bullet last week data only in HTML Template summary
        // this.dataArrayValue = Object.entries(this.dataArray[1])[0][1];
        // this.lastWeekData = Object.entries(this.dataArrayValue);
        // console.log(this.lstWeekData, 'lastWeekData');
        this.tdyAndLastWeekDataForHtmOnlyl(this.lstWeekData, null, this.lastWeekT, this.lastWeekA);
        // bar chart data
        this.barDataArray = Object.entries(this.collectionArray[2])[1];
        this.barData = Object.entries(this.barDataArray[1])[2];
        this.barDataObject = Object.entries(this.barDataArray[1])[2][1];
        this.barDataObject = Object.entries(this.barDataObject);
        this.barDataTarget = Object.entries(this.barData[1])[0][1];
        this.barGraphTarget = Object.entries(this.barDataTarget);
        // console.log(this.barDataObject, "dataTarget");
        // console.log(this.barGraphTarget,'barGraphTarget');
        this.barDataVisits = Object.entries(this.barData[1])[0][1];
        this.barGraphVisits = Object.entries(this.barDataVisits);
        // console.log(this.barGraphVisits, 'Visits');
        this.cdr.detectChanges();
    }; // end of fun json mapping
    // used for templete summary for today and last week data in Html(cards) not for any graph
    Card1Page.prototype.tdyAndLastWeekDataForHtmOnlyl = function (whichWeekData, projectedValue, targetValue, actualValue) {
        //lastWeek data with Kformatter, this is used in html only.
        for (var i in whichWeekData) {
            if (this.cardTargetProjected.hasOwnProperty(i) || typeof (whichWeekData[i]) != 'object') {
                var test = whichWeekData[i];
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        var title = test[test_val]; // prints title
                        // console.log(title,'titlettt');
                    }
                    else {
                        // console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit1 in arr_object) {
                                // console.log(title,'title444');
                                if (title.indexOf('Projected') !== -1) {
                                    var tdyP = arr_object[new_visit1];
                                    if (typeof tdyP == 'number') {
                                        projectedValue.push(this.kFormatter(tdyP));
                                    }
                                    else {
                                        projectedValue.push(tdyP);
                                    }
                                }
                                else if (title.indexOf('Target') !== -1) {
                                    var tdyT = arr_object[new_visit1];
                                    if (typeof tdyT == 'number') {
                                        targetValue.push(this.kFormatter(tdyT));
                                    }
                                    else {
                                        targetValue.push(tdyT);
                                    }
                                }
                                else {
                                    var tdyA = arr_object[new_visit1];
                                    if (typeof tdyA == 'number') {
                                        actualValue.push(this.kFormatter(tdyA));
                                    }
                                    else {
                                        actualValue.push(tdyA);
                                    }
                                }
                            }
                            // console.log(this.card1tdyA,"aray1",this.card1tdyT,'Array2', this.card1tdyP, "array3"); // data points
                        }
                    }
                }
            }
        }
    };
    //bullet data is being processed here and calling renderBulletChart() fun. here only
    Card1Page.prototype.processBulletChart = function (whereToPut, whichWeekData, projectedValue, targetValue, actualValue) {
        for (var i in whichWeekData) {
            // console.log(whichWeekData, 'tdy');
            if (whichWeekData.hasOwnProperty(i) || typeof (whichWeekData[i]) != 'object') {
                var test = whichWeekData[i];
                // console.log(test, 'test')
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title = test[test_val]; // prints title
                        // console.log(this.title,'titlettt');
                    }
                    else {
                        //  console.log(test[test_val],'test[test_val]');                       
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit in arr_object) {
                                // console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                //  console.log(arr_object1,'arr_object12',typeof arr_object1);
                                if (typeof (arr_object1) != 'object') {
                                    //  console.log(arr_object1, 'abc');
                                    if (typeof arr_object1 == 'string') {
                                        arr_object1 = arr_object1.slice(0, -1);
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                    else if (typeof arr_object1 == 'number') {
                                        //  console.log(this.title,'title45');
                                        this.renderCardData(arr_object1, projectedValue, targetValue, actualValue);
                                    }
                                    //     console.log(this.title,'title444',typeof this.title);
                                } //if(typeof(arr_object1)=='object' )
                            } //for(var new_visit in arr_object )
                        }
                    }
                } //for(var test_val in test)
            }
        }
        if (actualValue.length > 0) {
            console.log(actualValue, targetValue, projectedValue, 'array output3');
            for (var j = 0; j < actualValue.length; j++) {
                var bulletStackData = [{ "ranges": [0, projectedValue[j], 0], "measures": [actualValue[j]], "markers": [targetValue[j]] }];
                this.renderBulletChart(whereToPut, bulletStackData);
                //   if (condition) {
                //   }
            }
        } //if(this.array2.length>0){
    };
    Card1Page.prototype.renderCardData = function (objectArray, outputProjected, outputTarget, outputActual) {
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        if (this.title.indexOf('Project') != -1) {
            outputProjected[count1] = objectArray;
            // console.log(objectArray, 'test')
            count1++;
            // console.log(count1, 'count');
        }
        else if (this.title.indexOf('Target') != -1) {
            outputTarget[count2] = objectArray;
            count2++;
        }
        else {
            outputActual[count3] = objectArray;
            count3++;
            // console.log(this.barActualValue.length, 'this.actualValue.length');                      
        }
        // console.log(count1, count2, count3, 'count');                  
    };
    //creating bullet chart
    Card1Page.prototype.renderBulletChart = function (WhereToPut, WhatDataToPut) {
        var bulletParentWidth;
        var bulletchart;
        var bulletmargin;
        var bulletwidth;
        var bulletHeight;
        bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        bulletmargin = { top: 0, right: 3, bottom: 0, left: 0 };
        bulletwidth = bulletParentWidth - bulletmargin.left - bulletmargin.right;
        bulletHeight = 20 - bulletmargin.top - bulletmargin.bottom;
        bulletchart = d3.bullet()
            .width(bulletwidth)
            .height(bulletHeight);
        d3.select(WhereToPut).selectAll("svg")
            .data(WhatDataToPut)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", bulletwidth + bulletmargin.left + bulletmargin.right)
            .attr("height", bulletHeight + bulletmargin.top + bulletmargin.bottom)
            .append("g")
            .call(bulletchart);
        d3.selectAll('.bullet .measure.s0').attr('rx', 4);
        d3.selectAll('.bullet .measure.s0').attr('ry', 4);
        d3.selectAll('.bullet .range.s0').attr('rx', 10);
        d3.selectAll('.bullet .range.s0').attr('ry', 10);
    }; // end of bullet chart fun
    Card1Page.prototype.randomize = function (d) {
        if (!d.randomizer)
            d.randomizer = this.randomizer(d);
        d.ranges = d.ranges.map(d.randomizer);
        d.markers = d.markers.map(d.randomizer);
        d.measures = d.measures.map(d.randomizer);
        return d;
    }; // fun required for bullet chart
    Card1Page.prototype.randomizer = function (d) {
        var k = d3.max(d.ranges) * .2;
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }; //fun  required for bullet chart
    //processing bar chart data and calling barChart fun here only
    Card1Page.prototype.processBarChart = function () {
        for (var i in this.barDataObject) {
            // console.log(this.barDataObject, "dataTarget");     
            if (this.barDataObject.hasOwnProperty(i)) {
                var test = this.barDataObject[i];
                // console.log(test);
                // var data_graph=test[1][1];
                // var counter =0
                for (var test_val in test) {
                    if (typeof (test[test_val]) != 'object') {
                        this.title1 = test[test_val]; // prints title
                        // console.log(this.title,'title1');
                    }
                    else {
                        //  console.log(test[test_val],'test[test_val]');
                        var arr_object = test[test_val];
                        if (typeof (arr_object) == 'object') {
                            for (var new_visit in arr_object) {
                                //  console.log(arr_object[new_visit],new_visit,'data and key');
                                var arr_object1 = arr_object[new_visit];
                                //  console.log(arr_object1,'arr_object12',typeof arr_object1);   
                                if (typeof (arr_object1) != 'object') {
                                    // console.log(arr_object1, 'abc');
                                    //  var count1=0; var count2 =0; var count3 = 0;
                                    if (typeof arr_object1 == 'string') {
                                        arr_object1 = arr_object1.slice(0, -1);
                                        //  this.renderCardData(arr_object1, this.barProjectedValue, this.barTargetValue, this.barActualValue );
                                        // var count11=0; var count21=0; var count31 =0;                             
                                        if (this.title1.indexOf('Project') != -1) {
                                            this.barProjectedValue[this.count11] = arr_object1;
                                            this.count11++;
                                            // console.log(this.count11, 'count');
                                        }
                                        else if (this.title1.indexOf('Target') != -1) {
                                            this.barTargetValue[this.count21] = arr_object1;
                                            this.count21++;
                                        }
                                        else {
                                            this.barActualValue[this.count31] = arr_object1;
                                            this.barDataDate[this.count31] = new_visit;
                                            this.count31++;
                                            // console.log(this.barActualValue.length, 'this.actualValue.length');
                                            // console.log(new_visit, 'this.actualValue.length');                      
                                        }
                                    }
                                    else if (typeof arr_object1 == 'number') {
                                        // console.log(this.title1,'title45');
                                        //  this.renderCardData(arr_object1, this.barProjectedValue, this.barTargetValue, this.barActualValue );
                                        var count1 = 0;
                                        if (this.title1.indexOf('Project') != -1) {
                                            this.barProjectedValue[count1] = arr_object1;
                                            count1++;
                                            // console.log(count1, 'count');
                                        }
                                        else if (this.title1.indexOf('Target') != -1) {
                                            this.barTargetValue[this.count2] = arr_object1;
                                            this.count2++;
                                        }
                                        else {
                                            this.barActualValue[this.count3] = arr_object1;
                                            this.barDataDate[this.count3] = new_visit;
                                            this.count3++;
                                            // console.log(this.actualValue.length, 'this.actualValue.length');                      
                                        }
                                    }
                                } //if(typeof(arr_object1)=='object' )
                                // console.log(this.barActualValue.length, 'this.actualValue.length');                        
                            } //for(var new_visit in arr_object )
                        }
                    }
                }
            }
        }
        // console.log(this.barActualValue,"actualValue",this.barProjectedValue,'projectedValue',this.barTargetValue, 'barTargetValue' );
        // this.barActualValue.unshift('data1');
        // this.barTargetValue.unshift('data2');
        this.barActualValue[0] = 'data1';
        this.barTargetValue[0] = 'data2';
        // console.log(this.barActualValue, 'bar data');
        var barStackData = [this.barActualValue, this.barTargetValue];
        this.barChart("#barChart" + this.card_index, barStackData, this.card_index);
        // console.log('date',this.barDataDate);
    };
    // fun for barChart starts here for home page card
    Card1Page.prototype.barChart = function (whereToPut, whatToPut, cardIndex) {
        var indexToRemove = 0;
        var numberToRemove = 1;
        this.barDataDate.splice(indexToRemove, numberToRemove);
        // console.log('date removed',this.barDataDate);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_c3__["generate"]({
            bindto: whereToPut,
            data: {
                // type: 'bar',
                types: {
                    data1: 'bar',
                    data2: 'line'
                },
                columns: whatToPut,
                labels: {
                    format: function (v, id, i, j) {
                        switch (self.hero.type) {
                            case 'formatter':
                                v = self.kFormatter(v);
                                break;
                            case 'percentage':
                                v = v + '%';
                                break;
                            case 'INR':
                                v = '₹' + self.kFormatter(v);
                                break;
                            case 'USD':
                                v = '$' + self.kFormatter(v);
                                break;
                        }
                        return v;
                    }
                },
                colors: {
                    data1: '#F68B24',
                    data2: '#00ff00',
                }
            },
            legend: {
                show: false
            },
            size: {
                height: 100
            },
            axis: {
                x: {
                    show: true,
                    type: 'category',
                    categories: this.barDataDate,
                    tick: {
                        centered: true
                    },
                },
                y: {
                    // label: 'Y Label',
                    show: false
                }
            },
            bar: {
                width: {
                    ratio: 0.9 // this makes bar width 50% of length between ticks
                }
            },
            tooltip: {
                show: false
            }
        });
        var element = d3.select('.c3-event-rect');
        var yvalue = element.node().getBBox().height;
        d3.selectAll('.c3-texts text').attr('y', yvalue - 10);
        d3.selectAll('.c3-axis-x').attr("transform", "translate(0,0)");
        d3.selectAll('.c3-chart').attr("transform", "translate(0, " + ((yvalue / 2) - 10) + ")");
    }; // fun barChart end here
    Card1Page.prototype.kFormatter = function (num) {
        if (isNaN(num))
            return 0;
        //	console.log(num);
        if (num > 999999) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        else {
            return num > 999 ? (num / 1000).toFixed(2) + 'k' : num.toFixed(2);
        }
    };
    return Card1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Card1Page.prototype, "hero", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('index'),
    __metadata("design:type", String)
], Card1Page.prototype, "card_index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("bulletChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Card1Page.prototype, "bulletCharts", void 0);
Card1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'card1-design',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\pages\cards\card1\cards.html"*/'<div class="mail-icon-container">\n\n    <h2 class="card-name">{{hero.name}}</h2>\n\n    <!-- <ion-icon name="mail" class="mail-icon"  (click)="shareSheetShare()"></ion-icon> -->\n\n    <img src="assets/images/email.png" class="mail-icon" (click)="shareSheetShare()">\n\n</div>\n\n<!--<div *ngFor="let m of [\'1\',\'2\',\'3\']"   (click)="show()">{{m}}-click me</div>-->\n\n<ion-card class="border-radius" color="greys" (click)="navigateToDetailPage(this.hero)">\n\n    <ion-card-content no-padding>\n\n        <ion-grid class="nopadding">\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <div class="mask1"></div>\n\n                    <ion-grid no-padding>\n\n                        <ion-row class="small-txt" style="margin-bottom:6px;">\n\n                            <ion-col col-4  no-padding>\n\n                                <span *ngFor="let item of data; let i = index">\n\n                                            <span class="legend-txt legend-tdy bold" *ngIf="i == 0">{{item[1]}}</span>\n\n                                            <span class="small-txt" *ngIf="i == 0">{{card1tdyA}}</span>\n\n                                </span>\n\n                            </ion-col>\n\n                            <ion-col col-4  no-padding>\n\n                                <span class="small-txt" *ngFor="let items of cardTargetProjected; let i = index">\n\n                                    <span *ngIf="i == 1 && card1tdyT != 0 && card1tdyT != null">\n\n                                        <span class="legend-txt legend-target bold">{{items[0]}}</span>\n\n                                        <span>{{card1tdyT}}</span>\n\n                                    </span>\n\n                                </span>\n\n                            </ion-col>\n\n\n\n                            <ion-col col-4  no-padding>\n\n                                <span class="small-txt" *ngFor="let items of cardTargetProjected; let i = index">\n\n                                        <span *ngIf="i == 2 && card1tdyP != 0 && card1tdyP != null">\n\n                                            <span class="legend-projected legend-txt bold">{{items[0]}}</span>\n\n                                            <span>{{card1tdyP}}</span>\n\n                                        </span>\n\n                                </span>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n\n\n                    <div class="card1-bullet-wraper" #bulletChart>\n\n                        <div id="bulletTdy{{card_index}}"></div>\n\n                        <!--<bullet-chart [height]="height" [colors]="colors" [actual]="actual" [target]="target" [ranges]="ranges"></bullet-chart>-->\n\n                    </div>\n\n                    <div class="card1-bullet-wraper last-year-bullet" #bulletChart>\n\n                        <div id="bulletLstWeek{{card_index}}"></div>\n\n                    </div>\n\n                    <!--<page-bullet [index] = "i" #bulletChart></page-bullet>-->\n\n                    <ion-grid no-padding>\n\n                        <ion-row class="small-txt" >\n\n                            <ion-col col-4  no-padding>\n\n                                <span *ngFor="let item of lastWeek; let i = index">\n\n                                        <span *ngIf="i == 1">\n\n                                                    <span class="legend-txt legend-last bold"  *ngIf="i == 1">{{item}}</span>\n\n                                                    <span>{{lastWeekA}}</span>\n\n                                        </span>\n\n                                </span>\n\n                            </ion-col>\n\n                            <ion-col col-4  no-padding>\n\n                                <span *ngFor="let item of lastWeek; let i = index">\n\n                                        <span *ngIf="i == 1 && lastWeekT != 0 && lastWeekT != null">\n\n                                                    <span class="legend-target legend-txt bold">Target</span>\n\n                                                    <span>{{lastWeekT}}</span>\n\n                                        </span>\n\n                                </span>\n\n                            </ion-col>\n\n                            <ion-col col-4>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </ion-col>\n\n                <ion-col col-12 class="bar-graph-bg">\n\n                    <div>\n\n                        <div id="barChart{{card_index}}" #dashboardChart class="bar-chart"></div>\n\n                    </div>\n\n                    <!--<p>1. Template : {{hero.template}}</p>\n\n                      <p>2. Target_column_name : {{hero.target_column_name}}</p>\n\n                      <p>3. Source_metric : {{hero.source_metric}}</p>\n\n                      <p>4. Counter : {{hero.counter}}</p>-->\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<!--<ion-card>\n\n\n\n  <ion-card-header>\n\n    Card Header\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    \Dummy Data\n\n  </ion-card-content>\n\n\n\n</ion-card>-->'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\pages\cards\card1\cards.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]])
], Card1Page);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c3__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// declare var nv: any;
var Card2Page = (function () {
    function Card2Page(navCtrl, navParams, screenshot, socialSharing, peopleServiceProvider, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.peopleServiceProvider = peopleServiceProvider;
        this.cdr = cdr;
        this.hero2 = __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */];
        this.projectedValue = [];
        this.actualValue = [];
        this.targetValue = [];
    }
    Card2Page.prototype.ngOnInit = function () {
        // this.kFormatter(this.bulletCardDataArray);
    };
    Card2Page.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mapjson();
            _this.donutChart();
            _this.processBulletChart();
            _this.donutPerentHeight = _this.donutParentDiv.nativeElement.offsetHeight - 21;
            // console.log(this.donutPerentHeight, 'height');
        }, 1);
    };
    Card2Page.prototype.navigateToDetailPage = function () {
        this.navCtrl.push("channels", this.hero2);
    };
    Card2Page.prototype.shareSheetShare = function () {
        var _this = this;
        // this.screenShotURL() ;
        // this.screenshot.save('jpg', 100, "pic" +this.screenCount).then(res => {
        //   this.screen = res.filePath;
        var screen;
        this.screenshot.URI(80).then(function (res) {
            screen = res.URI;
            console.log(screen, 'path');
            //   console.log(screen);
            _this.socialSharing.share(null, null, screen, null).then(function () {
                console.log("shareSheetShare: Success");
            }).catch(function (Error) {
                console.error("shareSheetShare: failed" + Error);
            });
        });
        // console.log(this.screen, 'screen')
    };
    Card2Page.prototype.mapjson = function () {
        //donut data
        this.data = Object.entries(this.hero2.collection[0]);
        this.temp = Object.entries(this.data[2][1]);
        this.cardData = Object.entries(this.temp[0][1])[0][1]; //returns object
        this.donutDataArray = Object.entries(this.cardData); // converting object to array and assigning to variable.
        //bullet Visits data
        this.bulletData = Object.entries(this.hero2.collection[1]);
        this.bulletTemp = Object.entries(this.bulletData[2][1])[0];
        this.bulletCardData = Object.entries(this.bulletTemp[1]);
        this.bulletCardDataArray = Object.entries(this.bulletCardData[0][1]);
        // console.log(this.bulletCardDataArray, 'bulletCardDataArrayValues');
        //bullet projected data
        this.bulletTempProjected = Object.entries(this.bulletData[2][1]);
        // console.log(this.bulletTempProjected,"bulletTempProjected");
        // this.bulletProjectedData = Object.entries(this.bulletTempProjected[1]);
        // // console.log(this.bulletProjectedData,'bulletProjectedData');
        // this.bulletProjectedDataArray = Object.entries(this.bulletProjectedData[0][1]);
        // console.log(this.bulletProjectedDataArray);
        //bullet projected data
        this.cdr.detectChanges();
    };
    //rendering bullet data and calling data variable and bullet function here
    Card2Page.prototype.processBulletChart = function () {
        for (var val in this.bulletTempProjected) {
            if (this.bulletTempProjected.hasOwnProperty(val)) {
                var test = this.bulletTempProjected[val];
                // var data_graph=test[1][1];
                // var counter =0
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
                                    // var  projectedValue=[];
                                    var count1 = 0;
                                    var count2 = 0;
                                    for (var new_visit1 in arr_object1) {
                                        // console.log(arr_object1[new_visit1],new_visit1,'data and key2',count1); // data points
                                        // console.log(this.title,'title444');
                                        if (this.title.indexOf('Project') != -1) {
                                            this.projectedValue[count1] = arr_object1[new_visit1];
                                            count1++;
                                        }
                                        else if (this.title.indexOf('Target') != -1) {
                                            this.targetValue[count2] = arr_object1[new_visit1];
                                            count2++;
                                        }
                                        else {
                                            this.actualValue[count2] = arr_object1[new_visit1];
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
        if (this.actualValue.length > 0) {
            // console.log( this.targetValue, 'targetValue',this.projectedValue, 'projectedValue',this.actualValue,'actualValue');
            for (var i = 0; i < this.actualValue.length; i++) {
                var bulletStackData = [{ "ranges": [this.projectedValue[i], 0, 0], "measures": [this.actualValue[i]], "markers": [270] }];
                this.renderBulletChart("#bulletChart" + this.card_index + i, bulletStackData);
                // console.log( this.targetValue, 'targetValue',this.projectedValue, 'projectedValue',this.actualValue,'actualValue');
                // console.log( bulletStackData,'bulletStackData');
            }
        } //if(this.actualValue.length>0){
    };
    Card2Page.prototype.renderBulletChart = function (whereToPut, WhatToPut) {
        this.bulletParentWidth = this.bulletCharts.nativeElement.offsetWidth;
        this.margin = { top: 0, right: 3, bottom: 0, left: 0 };
        this.width = this.bulletParentWidth - this.margin.left - this.margin.right;
        this.bulletHeight = 20 - this.margin.top - this.margin.bottom;
        this.chart = d3.bullet()
            .width(this.width)
            .height(this.bulletHeight);
        d3.select(whereToPut).selectAll("svg")
            .data(WhatToPut)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.bulletHeight + this.margin.top + this.margin.bottom)
            .append("g")
            .call(this.chart);
        d3.selectAll('.bullet .measure.s0').attr('rx', 4);
        d3.selectAll('.bullet .measure.s0').attr('ry', 4);
        d3.selectAll('.bullet .range.s0').attr('rx', 4);
        d3.selectAll('.bullet .range.s0').attr('ry', 4);
        d3.selectAll('.hide-target .bullet .marker').style('stroke', "transparent");
    }; // end of bullet chart fun
    Card2Page.prototype.randomize = function (d) {
        if (!d.randomizer)
            d.randomizer = this.randomizer(d);
        d.ranges = d.ranges.map(d.randomizer);
        d.markers = d.markers.map(d.randomizer);
        d.measures = d.measures.map(d.randomizer);
        return d;
    }; // fun required for bullet chart
    Card2Page.prototype.randomizer = function (d) {
        var k = d3.max(d.ranges) * .2;
        return function (d) {
            return Math.max(0, d + k * (Math.random() - .5));
        };
    }; //fun  required for bullet chart
    Card2Page.prototype.donutChart = function () {
        __WEBPACK_IMPORTED_MODULE_5_c3__["generate"]({
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            bindto: "#donutChartId" + this.card_index,
            data: {
                type: 'donut',
                columns: this.donutDataArray,
                order: null //desc,asc,null
            },
            legend: {
                show: false
            },
            size: {
                // height: this.donutPerentHeight
                height: 150
            },
            donut: {
                label: {
                    threshold: 0.065
                },
                width: 15,
                expand: false
            },
            tooltip: {
                show: false
            },
            color: {
                pattern: ['#d5406a', '#0d6580', '#21daa0', '#D3885F', '#0B94FF', '#6a47eb', '#ffb300', '#ff9896']
            },
        });
    };
    /**
   * Formats data for Charts/legends and ticks
   *
   * @param {any} num
   * @returns
   */
    Card2Page.prototype.kFormatter = function (num) {
        if (isNaN(num))
            return 0;
        //	console.log(num);
        if (num > 999999) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        else {
            return num > 999 ? (num / 1000).toFixed(2) + 'k' : num.toFixed(2);
        }
    };
    return Card2Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Card2Page.prototype, "hero2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('index'),
    __metadata("design:type", Object)
], Card2Page.prototype, "card_index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('#donut'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Card2Page.prototype, "donutRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('parentDiv'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Card2Page.prototype, "donutParentDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("cardBullet"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Card2Page.prototype, "bulletCharts", void 0);
Card2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'card2-design',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\pages\cards\card2\card2.html"*/'    <div class="mail-icon-container">\n\n        <h2 class="card-name">{{hero2.name}}</h2>\n\n        <!-- <ion-icon name="mail" class="mail-icon"  (click)="shareSheetShare()"></ion-icon> -->\n\n            <img src="assets/images/email.png" class="mail-icon" (click)="shareSheetShare()">\n\n\n\n    </div> \n\n    <ion-card class="border-radius"  color="wheat1" (click)="navigateToDetailPage()" >\n\n        <ion-card-content>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-5   #parentDiv no-padding>\n\n                        <p class="bold center-txt" no-margin>{{hero2.collection[0].name}}</p>\n\n                        <div id="donutChartId{{card_index}}" #donut class="donut-chart"></div>\n\n                    </ion-col>\n\n                    \n\n                    <ion-col col-7 no-padding>\n\n                        <p class="bold center-txt" no-margin>{{hero2.collection[0].name}}</p>\n\n                        <div *ngFor="let array of bulletCardDataArray; let i = index">\n\n                              <!-- {{array | json}}   -->\n\n                            <ion-grid no-padding  *ngIf="i < 3">\n\n                                <ion-row>\n\n                                        <ion-col col-6 no-padding>\n\n                                            <span class="truncate small-txt bold">{{array[0]}}</span>\n\n                                        </ion-col>\n\n                                        <ion-col col-6 no-padding text-right>\n\n                                            <span class="small-txt legend-txt" [ngClass]="{\'legend-paid\': i == 0, \'legend-affiliate\': i == 1,\'legend-organic\': i == 2}">{{this.kFormatter(array[1])}}</span>\n\n                                             <span   *ngIf="this.projectedValue[i] > 0" class="small-txt legend-txt legend-projected">{{this.kFormatter(this.projectedValue[i])}}</span>\n\n                                        </ion-col>\n\n                                        <ion-col col-12   *ngIf="i < 3" no-padding>\n\n<!--<div [ngClass]="{\'paid-search\': i == 0, \'affilates\': i == 1,\'organic\': i == 2}" class="inner-div"></div>-->\n\n<!--<bullet-chart [height]="height" [colors]="colors" [actual]="actual" [target]="target" [ranges]="ranges"></bullet-chart>-->\n\n                                            <div class="hide-target" #cardBullet>\n\n                                                <div class="mask2"></div>\n\n                                                <div  id="bulletChart{{card_index}}{{i}}"\n\n                                                [ngClass]="{\'bullet-first\': i == 0, \'bullet-sec\': i == 1,\'bullet-thrd\': i == 2, \'bullet-frth\': i == 3, \'bullet-fifth\': i == 4,\'bullet-sixth\': i == 5}"\n\n                                                ></div>\n\n                                            </div>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                            </ion-grid>\n\n                        </div>\n\n                    </ion-col>\n\n\n\n                    <ion-col col-12 no-padding>\n\n                         <div text-center>\n\n                            <!-- <ion-item no-padding>  -->\n\n                                    <span *ngFor="let array of donutDataArray; let i=index">\n\n                                        <span  class="legend-txt small-txt" \n\n                                            [ngClass]="{\'legend-paid\': i == 0, \'legend-affiliate\': i == 1,\'legend-organic\': i == 2, \'legend-display\': i == 3, \'legend-others\': i == 4,\'legend-purple\': i == 5,\'legend-yellow\': i == 6,\'legend-light-pink\': i == 7}">\n\n                                            {{array[0]}}</span>\n\n                                    </span>\n\n                             <!-- </ion-item> -->\n\n                        </div> \n\n                    </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n        </ion-card-content>\n\n    </ion-card>\n\n'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\pages\cards\card2\card2.html"*/,
        // styleUrls: [    '../../node_modules/nvd3/build/nv.d3.css'  ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], Card2Page);

//# sourceMappingURL=card2.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(64);
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
 * Generated class for the TargetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TargetPage = (function () {
    function TargetPage(navCtrl, navParams, peopleServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.peopleServiceProvider = peopleServiceProvider;
        this.hero2 = __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */];
    }
    TargetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TargetPage');
    };
    TargetPage.prototype.navigateToDetailPage = function () {
        this.navCtrl.push("TargetDetailPage");
        // this.navCtrl.push("summary", hero);
        // console.log(this.hero, "hero");
    };
    return TargetPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TargetPage.prototype, "hero2", void 0);
TargetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-target',template:/*ion-inline-start:"C:\Users\ranandan\Documents\Experience\src\pages\cards\target\target.html"*/'    <div class="mail-icon-container">\n        <h2 class="card-name">Target Test Performance</h2>\n        <!-- <ion-icon name="mail" class="mail-icon"  (click)="shareSheetShare()"></ion-icon> -->\n            <img src="assets/images/email.png" class="mail-icon" (click)="shareSheetShare()">\n\n    </div> \n    <ion-card class="border-radius"  color="wheat1" (click)="navigateToDetailPage()" >\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-5   #parentDiv no-padding>\n                        <p class="bold center-txt" no-margin>Target Card</p>\n                    </ion-col>\n\n\n                </ion-row>\n              </ion-grid>\n        </ion-card-content>\n    </ion-card>\n'/*ion-inline-end:"C:\Users\ranandan\Documents\Experience\src\pages\cards\target\target.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]])
], TargetPage);

//# sourceMappingURL=target.js.map

/***/ })

},[664]);
//# sourceMappingURL=main.js.map