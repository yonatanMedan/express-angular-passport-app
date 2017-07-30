webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\n  margin-left: 260px;\n  margin-top: 65px;\n  padding-top: 10px;\n  min-height: calc(100vh - 66px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-topbar>\n\n</app-topbar>\n<app-sidebar >\n\n</app-sidebar>\n<div class=\"content\">\n  <router-outlet ></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_site_list_web_site_list_component__ = __webpack_require__("../../../../../src/app/web-site-list/web-site-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_site_detail_web_site_detail_component__ = __webpack_require__("../../../../../src/app/web-site-detail/web-site-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topbar_topbar_component__ = __webpack_require__("../../../../../src/app/topbar/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__website_service_web_sites_service__ = __webpack_require__("../../../../../src/app/website.service/web-sites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_line_chart_my_line_chart_component__ = __webpack_require__("../../../../../src/app/my-line-chart/my-line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service_user_service__ = __webpack_require__("../../../../../src/app/user.service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: "dashboard", pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'websites', component: __WEBPACK_IMPORTED_MODULE_5__web_site_list_web_site_list_component__["a" /* WebSiteListComponent */] },
    { path: 'websites/:id', component: __WEBPACK_IMPORTED_MODULE_6__web_site_detail_web_site_detail_component__["a" /* WebSiteDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__web_site_list_web_site_list_component__["a" /* WebSiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__web_site_detail_web_site_detail_component__["a" /* WebSiteDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__topbar_topbar_component__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__my_line_chart_my_line_chart_component__["a" /* MyLineChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__website_service_web_sites_service__["a" /* WebSitesService */], __WEBPACK_IMPORTED_MODULE_12__user_service_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.widgetsRow{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n\n}\n.widget{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgb(218, 209, 191);\n  border-radius: 5%;\n  width: 200px;\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n <div *ngIf=\"websites\" class=\"widgetsRow\">\n   <div class=\"widget\">\n     imppressions: {{websites.imppressions}}\n   </div>\n   <div class=\"widget\">\n     clicks: {{websites.clicks}}\n   </div>\n   <div class=\"widget\">\n     ctr: {{(websites.clicks/websites.imppressions )*100| number}}%\n   </div>\n   <div class=\"widget\">\n     eCPM: {{websites.eCPM}}\n   </div>\n </div>\n   <app-my-line-chart *ngIf=\"websites\" [data] = \"websites.revPerMonth\"></app-my-line-chart>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__ = __webpack_require__("../../../../../src/app/website.service/web-sites.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(webSitesService) {
        this.webSitesService = webSitesService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webSitesService.getWebSitesMaster().then(function (data) {
            console.log(data);
            _this.websites = data;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-line-chart/my-line-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-line-chart/my-line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"svg-containter\">\n\n  <canvas #canvas  width=\"400\" height=\"400\"></canvas>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-line-chart/my-line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_min_js__ = __webpack_require__("../../../../chart.js/dist/Chart.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyLineChartComponent = (function () {
    function MyLineChartComponent() {
    }
    MyLineChartComponent.prototype.ngAfterViewInit = function () {
        console.log("line chart data:");
        console.log(this.data);
        var canvas = this.canvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.canvas.width = 300;
        ctx.canvas.height = 300;
        var myLineChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js_dist_Chart_min_js__(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                        label: "revenue",
                        backgroundColor: "yellow",
                        borderColor: "red",
                        data: this.data,
                        fill: false,
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'revenue per month'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                    yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                }
            }
        });
        // var myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255,99,132,1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero:true
        //                 }
        //             }]
        //         }
        //     }
        // });
    };
    MyLineChartComponent.prototype.ngOnInit = function () {
    };
    return MyLineChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MyLineChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("canvas"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], MyLineChartComponent.prototype, "canvas", void 0);
MyLineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-my-line-chart',
        template: __webpack_require__("../../../../../src/app/my-line-chart/my-line-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-line-chart/my-line-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyLineChartComponent);

var _a;
//# sourceMappingURL=my-line-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0;\n}\nnav .flex-container li{\n  border-bottom: 1px black solid;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n.flex-container li:first-child{\n  padding-top: 0;\n}\n\n.sidenav{\n    position: fixed;\n    top: 65px;\n    bottom: 0;\n    left: 0;\n    padding: 0;\n    min-width: 260px;\n    background-color: #fafafa;\n    border: 1px solid black;\n    height: calc(100vh - 64px);\n}\nul{\n  list-style-type: none;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"sidenav flex-container\">\n\n      <ul>\n        <li ><a routerLink=\"/dashboard\" routerLinkActive=\"active\">dashboard</a></li>\n        <li ><a routerLink=\"/websites\" routerLinkActive=\"active\">websites</a></li>\n      </ul>\n\n   </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/topbar/topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topbar{\n  background-color: #fafafa;\n  height: 64px;\n  position: fixed;\n  top:0px;\n  left: 0px;\n  width: 100%;\n  border: 1px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topbar/topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\n  <img width=\"50px\" height=\"50px\" src=\"assets/c00c865bb8082af99598a28aa7f8331d.jpg\" />\n\n  <p *ngIf='user'>\n    logged in as {{user.email}}\n  </p>\n  <a class=\"btn btn-default\" href=\"/logout\">logout</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topbar/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("../../../../../src/app/user.service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = (function () {
    function TopbarComponent(User) {
        this.User = User;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.User.getUser().then(function (user) {
            _this.user = user.local;
        });
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-topbar',
        template: __webpack_require__("../../../../../src/app/topbar/topbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topbar/topbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */]) === "function" && _a || Object])
], TopbarComponent);

var _a;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = '../user';
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/web-site-detail/web-site-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-site-detail/web-site-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <table *ngIf=\"website\">\n    <tr>\n      <th>\n        website\n      </th>\n      <th>\n        clicks\n      </th>\n      <th>\n        immpressions\n      </th>\n\n    </tr>\n    <tr>\n      <th>\n        {{website.name}}\n      </th>\n      <th>\n        {{website.clicks}}\n      </th>\n      <th>\n        {{website.imppressions}}\n      </th>\n\n\n    </tr>\n\n  </table>\n\n  <app-my-line-chart *ngIf=\"website\" [data] = \"website.revPerMonth\"></app-my-line-chart>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/web-site-detail/web-site-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__ = __webpack_require__("../../../../../src/app/website.service/web-sites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSiteDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSiteDetailComponent = (function () {
    function WebSiteDetailComponent(webSitesService, route) {
        this.webSitesService = webSitesService;
        this.route = route;
    }
    WebSiteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.websiteId = +params['id'];
            _this.webSitesService.getWebSite(params['id']).then(function (a) { _this.website = a; });
        });
    };
    return WebSiteDetailComponent;
}());
WebSiteDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-web-site-detail',
        template: __webpack_require__("../../../../../src/app/web-site-detail/web-site-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web-site-detail/web-site-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WebSiteDetailComponent);

var _a, _b;
//# sourceMappingURL=web-site-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/web-site-list/web-site-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web-site-list/web-site-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <table>\n    <tr>\n      <th>\n        website\n      </th>\n      <th>\n        clicks\n      </th>\n      <th>\n        imppressions\n      </th>\n    </tr>\n    <tr *ngFor=\"let website of data\" [routerLink]=\"['/websites',website.id]\" >\n      <th>\n        {{website.name}}\n      </th>\n      <th>\n        {{website.imppressions}}\n      </th>\n      <th>\n        {{website.clicks}}\n      </th>\n    </tr>\n\n\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/web-site-list/web-site-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__ = __webpack_require__("../../../../../src/app/website.service/web-sites.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSiteListComponent = (function () {
    function WebSiteListComponent(webSitesService) {
        this.webSitesService = webSitesService;
    }
    WebSiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webSitesService.getWebSites().then(function (websites) {
            _this.data = websites;
        });
    };
    return WebSiteListComponent;
}());
WebSiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-web-site-list',
        template: __webpack_require__("../../../../../src/app/web-site-list/web-site-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web-site-list/web-site-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__website_service_web_sites_service__["a" /* WebSitesService */]) === "function" && _a || Object])
], WebSiteListComponent);

var _a;
//# sourceMappingURL=web-site-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/website.service/web-sites.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSitesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSitesService = (function () {
    function WebSitesService(http) {
        this.http = http;
        //
        //
        //   getUser() {
        //     return this.http.get(this.websitesUrl)
        //              .toPromise()
        //              .then(response => {
        //                console.log(response.json());
        //                return response.json()
        //
        //              })
        //              .catch(this.handleError);
        // }
        //
        // private handleError(error: any): Promise<any> {
        //   console.error('An error occurred', error); // for demo purposes only
        //   return Promise.reject(error.message || error);
        // }
        this.websitesUrl = '../websites';
    }
    WebSitesService.prototype.getWebSites = function () {
        return this.http.get(this.websitesUrl)
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    WebSitesService.prototype.getWebSitesMaster = function () {
        var _this = this;
        return this.getWebSites().then(function (websites) {
            return _this.getSum(websites);
        });
    };
    WebSitesService.prototype.getWebSite = function (id) {
        return this.http.get(this.websitesUrl + '/' + id)
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    WebSitesService.prototype.getSum = function (websites) {
        var data = {
            clicks: 0,
            imppressions: 0,
            eCPM: 0,
            revPerMonth: []
        };
        var i = 0;
        for (i; i < websites.length; i++) {
            data.clicks += websites[i].clicks;
            data.imppressions += websites[i].imppressions;
            data.eCPM += websites[i].eCPM;
            for (var j = 0; j < websites[i].revPerMonth.length; j++) {
                var arr = websites[i].revPerMonth;
                if (!data.revPerMonth[j]) {
                    data.revPerMonth.push(arr[j]);
                }
                else {
                    data.revPerMonth[j] += arr[j];
                }
            }
        }
        data.eCPM = data.eCPM / i;
        return data;
    };
    WebSitesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return WebSitesService;
}());
WebSitesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebSitesService);

var _a;
//# sourceMappingURL=web-sites.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map