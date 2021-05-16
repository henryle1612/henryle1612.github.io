(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\henry\TestDeploy\Test\src\main.ts */"zUnb");


/***/ }),

/***/ "32hX":
/*!**********************************!*\
  !*** ./src/app/classes/board.ts ***!
  \**********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
class Board {
    constructor(title, value, compareValue) {
        this.title = title;
        this.value = value;
        this.compareValue = compareValue;
    }
}


/***/ }),

/***/ "4hPz":
/*!********************************!*\
  !*** ./src/app/classes/tip.ts ***!
  \********************************/
/*! exports provided: Tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tip", function() { return Tip; });
class Tip {
    constructor(source, hteam, ateam, tip, hconfidence, margin) {
        this.source = source;
        this.hteam = hteam;
        this.ateam = ateam;
        this.tip = tip;
        this.hconfidence = hconfidence;
        this.aconfidence = (100.0 - parseFloat(hconfidence)).toFixed(2);
        this.margin = margin;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 286, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://resources.afl.com.au/photo-resources/2021/03/11/f1a0101f-4b41-4f52-b1cc-8f4190f4bb17/Mock-Teams-R1-2021.jpg?width=952&height=592", "width", "600", "height", "500", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://i.ytimg.com/vi/OJoMk3jqIDA/maxresdefault.jpg", "width", "600", "height", "500", "alt", "...", 1, "d-block", "w-100"], ["src", "https://www3.pictures.zimbio.com/gi/AFL+Rd+17+West+Coast+v+Sydney+iquh9aSGWXQx.jpg", "width", "600", "height", "500", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["href", "#top"], ["src", "https://usafl.com/image/Australia_map.png", "align", "right"], ["src", "https://usafl.com/image/Field-view-from-directly-above.png", "align", "right"], ["src", "https://usafl.com/image/USFooty_Guide_Positions-02.png", "align", "right"], [1, "Note"], ["href", "https://usafl.com/intro#top"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is ALF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome to AFL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Introduction to Australian Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "What is Australian Rules Football?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Australian Rules Football (also \"Aussie Rules\" or \" footy\") is a physical contact sport. It is a form of football with roots traceable from early forms of Rugby and Gaelic football, but it is uniquely Australian. Its rules were codified in 1858, and probably predate all other modern forms of football, such as American, Canadian, Rugby Union and League, Association (Soccer) and Gaelic football. Today it is a multi-million dollar business, with a National Competition and numerous smaller leagues. Interest in the game is generally at an all time high within and outside Australia, yet despite this, some parts of Australia are still lukewarm in support of their team in the AFL, and the game has yet to take a firm hold overseas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Where in the World is Aussie Rules played?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Australia is divided into 6 states and 2 territories. Aussie Rules is the main code of football in Victoria, Western Australia, South Australia, Tasmania, and the Northern Territory and has a strong following in the Australian Capital Territory. Although played in the States of Queensland and New South Wales, it runs second string to Rugby League in terms of popularity in those states. The AFL provides financial or practical assistance to leagues all over the world including Great Britain, Canada, Denmark, Japan, New Zealand, and here in the USA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "When is the Australian Football League (AFL) season?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Games usually start for the Premiership season in the last weekend of March, and continue through until the end of August. The Finals then start, culminating in the Grand Final on the last Saturday (Friday for the U.S.) in September. A pre-season tournament (the NAB Cup) with the majority of games being played at night, is played from late February to the last week before the regular season begins. Exhibition games are sometimes played overseas between seasons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Saturday afternoon is the traditional game time, but AFL games are played on Friday nights, Saturday afternoons and evenings and Sunday afternoons and evenings. Games are occasionally scheduled on Monday nights and on public holidays.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Rules Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "The team scoring the most points wins the game. The match is considered drawn if points are equal. A game is divided into 4 quarters of 20 minutes playing time. Time is kept on the field by the umpires. When play is unduly delayed, such as the ball going out of the playing area, time is added on to the playing time of the quarter as it is in soccer. This is referred to as 'time on'. The teams change ends at the end of each quarter. A maximum interval of minutes is allowed between the first and second quarters for the teams to change ends, and five minutes are allowed between the third and fourth quarters. Half-time is a maximum of 20 minutes long, with players being allowed to leave the ground for not more than 15 minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Aussie Rules is played on cricket ovals; thus, there are no standard dimensions for a football field (usually called \"ground\" or \"paddock\"). The field should be an oval between 135 and 185 meters in length and 110 and 155 meters in width. (The Melbourne Cricket Ground is considered an ideal surface; its dimensions are 165m length by 135m width.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "The boundary is marked with a white line drawn a few meters from the stands. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The goals are two sets of posts erected at the far ends of the oval. The inner set of posts is the goal posts, 6.4 meters (roughly 7 yards) apart on the boundary line, and at least 6 meters tall.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Two behind posts are set 6.4 meters from either side of the goal posts on the boundary line, and must be at least 3 meters tall. All posts must be padded to a height of 2 meters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "A goal square (actually a rectangle) extends 9 meters into the ground from the goal posts, and is 6.4 meters in width.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "A radius is drawn on the oval 50 meters from each goal. This merely serves as a range finder; any AFL player should be able to kick a goal from this line, and perhaps beyond.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "The center circle is marked at the precise center of the oval, 3 meters in diameter, bisected by a lateral line extending 2 meters either side of the diameter, and dividing the field in half. A center square is centered on this, 45 meters on each side. These markings control the conduct of center bounces, as will be seen later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Players and Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "A team consists of 18 players; three interchange players (substitutes) are allowed on the bench. Free substitutions are allowed at any time during the match, through a \"gate\" in front of either bench. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Players are deployed in five lines of three across the oval, with the remaining three assigned to the ball.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "The players in each line are usually designated as being in either the left, center or right position in each line, relative to the direction of attack:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Full Forwards: Left Forward Pocket Full Forward Right Forward Pocket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Half Forwards: Left Half Forward Center Half Forward Right Half Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Center Line: Left Wing, Center, Right Wing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Half Backs: Left Half Back, Center Half Back, Right Half Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Full Backs: Left Back Pocket, Full Back, Right Back Pocket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "The three assigned to the ball are referred to as \"followers.\" Their positions are referred to as Ruckman, Rover and Ruck-Rover. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Although the players have designated positions, they are free to move anywhere on the ground when play is in progress. There is no \"goalie\" in Aussie Rules.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Purposes Of Players Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "All players should contest the ball when its within their vicinity (unless playing to alternative coaching instructions). Other general purposes of player positions according to line are: Full Forward: Attack the goal, Trap the ball in the area Half Forward: Attack the goal, Set up scoring shots, Trap the ball further forward - then hold, Trap the ball in the area Centre Line: Attack the goal, Set up scoring shots, Recover the ball from the backline, Trap the ball further forward - then hold, Trap the ball in the area Half Back: Hold the ball in the area, Attack - clear ball forwards, Recover ball from backline Full back: Hold the ball in the area, Attack - clear ball forwards No padding is worn. Mouthguards, soft protective headgear and shin guards are permitted. Other protection or medical appliances require prior approval; generally, you can't play in a cast or heavy knee braces as you can in the NFL. Jewelry is prohibited as a health hazard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Scoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "If the ball passes between the behind posts by any other means, then it is a behind, and it scores 1 point. If the ball hits the goal post, a behind is scored. This is regardless of where the ball goes after hitting the goal post, e.g., back into the field of play, through the goals or whatever. If the ball is forced, or carried, but not kicked over the scoring line anywhere between the goal posts, a behind is scored. The ball is kicked back into play from within the goal square, usually by the opposing fullback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "f the ball hits a behind post without bouncing it is deemed \"out on the full\" and the opposing team takes a free kick from next to the behind post. If the ball bounces and hits the behind post then the ball is thrown into play again by the boundary umpire from next to the behind post (see (b) under \"Starting and Restarting Play\" below). In either case, no points are scored.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Starting and Restarting Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Teams determine the initial choice of goal by coin toss. The field umpire starts play by blowing his whistle and bouncing the ball in the center circle so that it rebounds vertically to be contested by the players in the center square. If ground conditions won't allow the ball to bounce, the umpire simply tosses the ball into the air as if it were a \"jump ball.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " At a center bounce, no player may enter the center circle or cross the center line into the opponent's side of the ground, and only four players from each team are permitted in the center square, until after the ball has been bounced.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "After a goal is scored, play is restarted in the center of the ground in the manner described above.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "The other common situations when play is restarted are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "- After a behind has scored. Any player of the defending team kicks the ball from within the kick-off 'square' in front of goal, but only after the goal umpire has finished waving his flags. The player must kick the ball out to restart play. You may observe, however, that there is no rule preventing him from kicking the ball to himself.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " - After the ball has gone out of bounds (outside the boundary line). If the ball bounced, then the boundary umpire restarts play by throwing it backwards over his head towards the center of the ground. If the ball did not bounce and went over the boundary line as a result of a kick that was not touched, it is \"out on the full\" (on the fly), and the opposing team receives a free-kick from the spot at which the ball went out. The closest player from the opposing team takes the free kick. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "- When a pack of players prevents either team from gaining clear possession, or a player being tackled or held fails to dispose of the ball (\"holding the ball;\" see \"Possession\" below). The umpire bounces the ball at the spot where play came to a halt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Each quarter runs for 20 minutes of playing time -- when the ball is in play. The ball is considered out of play in the following situations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "- A goal is scored. Time is stopped from when the goal umpire finishes waving his flags to when the ball is bounced. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "- A behind is scored. Time is stopped from when the goal umpire finishes waving his flag to when the ball is kicked in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "- The ball goes out of bounds. Time is stopped from when the ball goes over the boundary line until the boundary umpire throws the ball back into play. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "- Whenever the field umpire signals to the time-keeper that time is to be stopped by raising his arm and blowing his whistle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Out of Bounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "A ball that has gone completely over the boundary line is considered out of bounds. If any portion of the ball is on or over the boundary line, the ball is still in play, as it is in soccer. A player can be over the boundary line and in possession of the ball without the ball being considered \"out of bounds\" if part of the ball is still in play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Possession and Disposal of the Ball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "- A player may hold the ball for unlimited time when he is not being held by an opponent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "- A player lying on or over the ball is considered to be in possession. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "- A player running with the ball must bounce the ball or touch it to the ground once every 15 meters. (The distance is usually not strictly enforced, especially if the runner is challenged.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "- A player in possession of the ball and held by an opponent must dispose of the ball immediately by kicking or handballing the ball. (Tackling is permitted, but only between shoulders and knees.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "To handball correctly, a player must hold the ball in one hand and hit it with the clenched fist of the other hand. The hand holding must not move relative to the player's body. (Correct technique is sometimes more honored in the breach than in the observance.) Overhand passing is not permitted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "A mark is allowed when the ball is caught from a kick which has traveled a minimum distance of 10 meters, and the ball has traveled in the air without being touched by another player. (The ball usually doesn't have to be held for very long, especially in a physical marking contest; and yes, anything goes as long as both contestants are going for the ball.) The player taking the mark may play on immediately, or go back and kick over the position where he took the mark.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Shepherding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "A player may impede the movement of an opposition player towards that of the ball, however it may only be done within 5 metres of the ball. Shepherding allows the opposition player to be pushed in the chest or side, or for the player to place his body between the opposition and the ball (when the player himself is not in possession of the ball.) Comparable to screens in basketball or blocking in American Football.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Free Kicks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Free kicks may be given against players either with or without the ball. A free kick is generally taken at the spot where the infringement occurred. (Exceptions see \"Play On\" and \"Relayed Free Kicks\" below.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "A free kick is given against the player in possession of the ball for the following infringements of the rules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "- Not disposing of the ball within a reasonable time when held by an opponent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "- Not disposing of the ball correctly by using a handball or a kick. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "- Kicking the ball over the boundary line without it bouncing first or being touched by another player. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "- Deliberately forcing or taking the ball over the boundary line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "- Running more than 15 meters without bouncing the ball or touching the ball on the ground.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "A free kick is given against any player who:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "- Grabs the opponent with the ball above the shoulder or below the knees. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "- Pushes an opponent in the back. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "- Trips or attempts to trip an opponent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "- Charges an opponent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "- Interferes with an opponent attempting to mark in the air by punching or bumping. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "- Shepherds an opponent when the ball is more than 5 meters away. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "- Enters the center square before the ball is bounced at the restart of play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Following a free kick or mark, a 50 meter penalty is given against a player standing on the mark who:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "- Refuses to stand on the mark at the point indicated by the umpire. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "- Deliberately wastes time in returning the ball to the player who is to take the kick. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "- Holds the player who is to take the kick thereby preventing play continuing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "- Runs over the mark before or as the ball is kicked. (Any player in the opposing team can give this penalty).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Kick-in After Behind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "If a ball is kicked back into play from the goalsquare, following the scoring of a behind, and subsequently goes \"out of bounds\" without being touched by a player of either team despite bouncing, it is treated as if having gone out of bounds on the full. The attacking team is awarded a free kick.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Play On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "An umpire need not hold up play by awarding a free kick to a player who has been infringed. Where the player or a team-mate has possession and is in an advantageous position, the umpire calls 'play-on' and allows play to continue. This is referred to as 'paying the advantage'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Relayed Free Kicks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "A player who is infringed upon, immediately following the disposal of the ball, may have a fellow teammate take the free kick from the spot where the ball landed after being disposed of. This is at the umpires adjudication.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Back to Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Note!:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " References From\nUNITED STATES AUSTRALIAN FOOTBALL LEAGUE (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "A", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "AFL References link here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, ". All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcblxyXG5cclxuIl19 */", "h1[_ngcontent-%COMP%] {\n    font-size:80px;\n    width: 100%;\n    text-align:center;\n  }\n\n  .Note[_ngcontent-%COMP%] {\n    background-color: #e7f3fe;\n    border-left: 6px solid #2196F3;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    text-align: center;\n    background-color:#808080;\n    color: #fff;\n    padding: 40px;\n    bottom:0;\n    width:100%;\n}"] });


/***/ }),

/***/ "Byjh":
/*!*************************************!*\
  !*** ./src/app/classes/standing.ts ***!
  \*************************************/
/*! exports provided: Standing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standing", function() { return Standing; });
class Standing {
    constructor(draws, wins, rank, behinds_against, played, behinds_for, against, id, losses, percentage, pts, goals_for, goals_against, name) {
        this.draws = draws;
        this.wins = wins;
        this.rank = rank;
        this.behinds_against = behinds_against;
        this.played = played;
        this.behinds_for = behinds_for;
        this.against = against;
        this.id = id;
        this.losses = losses;
        this.percentage = percentage;
        this.pts = pts;
        this.goals_for = goals_for;
        this.goals_against = goals_against;
        this.name = name;
    }
}


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/game */ "LYyA");
/* harmony import */ var _classes_tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/tip */ "4hPz");
/* harmony import */ var _classes_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/team */ "W2TK");
/* harmony import */ var _classes_standing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/standing */ "Byjh");
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/player */ "dGWY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class DataService {
    constructor(http) {
        this.http = http;
    }
    getTeam() {
        return this.http
            .get('https://api.squiggle.com.au/?q=teams;year=2021')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.teams.map((item) => new _classes_team__WEBPACK_IMPORTED_MODULE_3__["Team"](item.name, item.logo, item.id, item.abbrev))));
    }
    getGame() {
        return this.http
            .get('https://api.squiggle.com.au/?q=games;year=2021')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.games.map((item) => new _classes_game__WEBPACK_IMPORTED_MODULE_1__["Game"](item.hteamid, item.ateamid, item.hteam, item.ateam, item.winner, item.hscore, item.ascore, item.roundname, item.winnerteamid, item.complete, item.year, item.venue, item.localtime, item.date, item.id, item.round))));
    }
    getTip(game = 1, year = '2021', round = 20) {
        return this.http
            .get(`https://api.squiggle.com.au/?q=tips&game=${game}&year=${year}&round=${round}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.tips.map((item) => new _classes_tip__WEBPACK_IMPORTED_MODULE_2__["Tip"](item.source, item.hteam, item.ateam, item.tip, item.hconfidence, item.margin))));
    }
    getPlayers() {
        return this.http
            .get(`https://api.squiggle.com.au/?q=pav`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.pav.map((item) => new _classes_player__WEBPACK_IMPORTED_MODULE_5__["Player"](item.PAV_def, item.year, item.PAV_total_rank, item.PAV_off, item.mPAV_def, item.pavid, item.team, item.PAV_mid, item.PAV_mid_rank, item.surname, item.mPAV_rank, item.PAV_def_rank, item.mPAV_total, item.PAV_total, item.firstname, item.PAV_off_rank, item.mPAV_mid, item.mPAV_off, item.name, item.games))));
    }
    getStanding(year = '2021', round = 20) {
        return this.http
            .get(`https://api.squiggle.com.au/?q=standings&&year=${year}&round=${round}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.standings.map((item) => new _classes_standing__WEBPACK_IMPORTED_MODULE_4__["Standing"](item.draws, item.wins, item.rank, item.behinds_against, item.played, item.behinds_for, item.against, item.id, item.losses, item.percentage, item.pts, item.goals_for, item.goals_against, item.name))));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H139":
/*!*******************************************************************!*\
  !*** ./src/app/components/league-table/league-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeagueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueTableComponent", function() { return LeagueTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LeagueTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeagueTableComponent.ɵfac = function LeagueTableComponent_Factory(t) { return new (t || LeagueTableComponent)(); };
LeagueTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeagueTableComponent, selectors: [["app-league-table"]], decls: 2, vars: 0, template: function LeagueTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "league-table works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFndWUtdGFibGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "L6j+":
/*!*****************************************************************!*\
  !*** ./src/app/components/team-result/team-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamResultComponent", function() { return TeamResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function TeamResultComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamResultComponent_ul_6_li_3_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Won ", ctx_r10.getTeamDefeated(game_r8), " At ", game_r8.venue, " ");
} }
function TeamResultComponent_ul_6_li_3_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" At ", game_r8.venue, " ");
} }
function TeamResultComponent_ul_6_li_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamResultComponent_ul_6_li_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getDate(game_r8.localtime));
} }
function TeamResultComponent_ul_6_li_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", game_r8.hscore, " - ", game_r8.ascore, "");
} }
function TeamResultComponent_ul_6_li_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r17.getLogo(game_r8.hteamid), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r17.getLogo(game_r8.ateamid), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamResultComponent_ul_6_li_3_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamResultComponent_ul_6_li_3_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamResultComponent_ul_6_li_3_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 37);
} }
function TeamResultComponent_ul_6_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamResultComponent_ul_6_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const game_r8 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.getItem(game_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamResultComponent_ul_6_li_3_p_3_Template, 2, 2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamResultComponent_ul_6_li_3_p_4_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamResultComponent_ul_6_li_3_p_7_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamResultComponent_ul_6_li_3_ng_template_8_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamResultComponent_ul_6_li_3_div_14_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamResultComponent_ul_6_li_3_ng_template_15_Template, 4, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamResultComponent_ul_6_li_3_p_20_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TeamResultComponent_ul_6_li_3_p_21_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeamResultComponent_ul_6_li_3_p_22_Template, 1, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", i_r9 > ctx_r2.roundNum - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", game_r8.roundname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.complete == 100 && game_r8.winnerteamid === ctx_r2.team.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.complete == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card ", game_r8.complete == 100 ? "card-complete" : "card-in-complete", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.complete == 100)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r8.hteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.complete == 100)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r8.ateam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.winnerteamid === ctx_r2.team.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r8.winnerteamid && game_r8.winnerteamid !== ctx_r2.team.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !game_r8.winnerteamid);
} }
function TeamResultComponent_ul_6_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is venues where ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r3.team.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.team.name, " has won this season so far");
} }
function TeamResultComponent_ul_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r28.hteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r28.ateam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r28.venue);
} }
function TeamResultComponent_ul_6_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is pav of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r5.team.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.team.name, "");
} }
function TeamResultComponent_ul_6_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.PAV_def);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.PAV_off);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.PAV_mid);
} }
function TeamResultComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamResultComponent_ul_6_li_3_Template, 23, 16, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamResultComponent_ul_6_p_4_Template, 4, 2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Away Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Venue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamResultComponent_ul_6_div_13_Template, 7, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamResultComponent_ul_6_p_14_Template, 4, 2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamResultComponent_ul_6_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Player Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pav Def");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pav Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pav Mid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TeamResultComponent_ul_6_div_27_Template, 9, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.games);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getWonGame());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getPav());
} }
class TeamResultComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.isLoading = false;
        this.search = '';
    }
    ngOnChanges(changes) {
        if (changes['team']) {
            this.isLoading = true;
            this.getGame();
        }
    }
    ngOnInit() {
    }
    getGame() {
        this.dataService.getGame().subscribe(temp => {
            let tempArr = [];
            let currentYear = new Date().getFullYear();
            temp.forEach((item) => {
                const { hteamid, ateamid, complete, year, round, id } = item;
                if (this.team && (hteamid == this.team.id || ateamid === this.team.id)) {
                    if (complete == 100 && year == currentYear)
                        tempArr.push(item);
                    else if (complete == 0) {
                        item.setTip(this.getTip(id, year.toString(), round));
                        tempArr.push(item);
                    }
                }
            });
            this.games = tempArr;
            this.isLoading = false;
            this.roundNum = this.games.filter(game => game.complete == 100).length + 4;
        });
    }
    getTip(game = 1, year = '2021', round = 20) {
        let tips = [];
        this.dataService.getTip(game, year, round).subscribe(temp => {
            temp.forEach((item) => {
                tips.push(item);
            });
        });
        return tips;
    }
    getWonGame() {
        return this.games.filter(x => x.complete == 100 && x.winnerteamid == this.team.id);
    }
    getItem(data) {
        console.log(this.search);
    }
    getPav() {
        return this.team.player.filter(x => x.firstname.toLowerCase().includes(this.search.toLowerCase())
            || x.surname.toLowerCase().includes(this.search.toLowerCase()));
    }
    getTeamDefeated(data) {
        const { ateamid, hteam, ateam } = data;
        return ateamid == this.team.id ? hteam : ateam;
    }
    getLogo(id) {
        var _a, _b;
        return (_b = (_a = this.teams.find(x => x.id == id)) === null || _a === void 0 ? void 0 : _a.logo) !== null && _b !== void 0 ? _b : '';
    }
    getDate(data) {
        let date = new Date(data);
        return `${date.getDate()}-${date.getMonth()}`;
    }
    ngOnDestroy() {
        console.log("finished work on component!");
    }
}
TeamResultComponent.ɵfac = function TeamResultComponent_Factory(t) { return new (t || TeamResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TeamResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamResultComponent, selectors: [["app-team-result"]], inputs: { team: "team", teams: "teams" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 4, consts: [[1, "team-info"], [3, "src"], ["class", "loading", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "loading"], ["xmlns", "http://www.w3.org/2000/svg", "width", "3rem", "height", "3rem", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-repeat"], ["d", "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"], ["fill-rule", "evenodd", "d", "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"], [1, "content"], ["class", "card-container full-width", 3, "hidden", "click", 4, "ngFor", "ngForOf"], ["class", "team-result___title", 4, "ngIf"], [1, "team-result___table"], [1, "team-result___header"], [1, "team-result___item"], ["class", "team-result___row", 4, "ngFor", "ngForOf"], ["placeholder", "Player name", "type", "text", 1, "", 3, "ngModel", "ngModelChange"], ["ctrl", "ngModel"], [1, "team-result___list"], [1, "card-container", "full-width", 3, "hidden", "click"], [1, "card-title"], ["class", "card-title", 4, "ngIf"], [1, "card-info"], ["class", "card-status ft", 4, "ngIf", "ngIfElse"], ["elseStatus", ""], [1, "card-content"], [1, "card-name"], ["class", "card-score", 4, "ngIf", "ngIfElse"], ["elseScore", ""], ["class", "card-match win", 4, "ngIf"], ["class", "card-match lose", 4, "ngIf"], ["class", "card-match", 4, "ngIf"], [1, "card-status", "ft"], [1, "card-status"], [1, "card-score"], ["width", "26rem", "height", "26rem", 3, "src"], [1, "card-match", "win"], [1, "card-match", "lose"], [1, "card-match"], [1, "team-result___title"], ["width", "30rem", "height", "30rem", 3, "src"], [1, "team-result___row"]], template: function TeamResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamResultComponent_div_5_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamResultComponent_ul_6_Template, 28, 6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx.team.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.team.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid grey;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n.content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.team-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0;\n  width: 100%;\n  text-align: left;\n}\n.card[_ngcontent-%COMP%] {\n  height: 75px;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-match[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.1em 0.5em;\n  color: #fff;\n  align-self: center;\n  min-width: 3rem;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%]:not(.ft), .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-match.win[_ngcontent-%COMP%] {\n  background-color: #00ac77;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-status.ft[_ngcontent-%COMP%] {\n  background-color: #081f2c;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-match.lose[_ngcontent-%COMP%] {\n  background-color: #d01725;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 50% 30%;\n  width: clamp(200px, 50%, 300px);\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-score[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%] {\n  margin: 0;\n  align-self: center;\n  flex-wrap: wrap;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-score[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%] {\n  float: left;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%]:last-child   p[_ngcontent-%COMP%] {\n  float: right;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-score[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-score[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n}\n.team-result___title[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.team-result___table[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin: 0.5rem 1.5rem;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%], .team-result___table[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 35% 35% 30%;\n  padding: 0.5em;\n  margin: 0 0.25em;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  border-bottom: none;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n  color: #ffff;\n  border-radius: 0.35em 0.35rem 0 0;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%]   .team-result___item[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%]   .team-result___item[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%]:last-child, .team-result___list[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  border-radius: 0 0 0.35em 0.35rem;\n}\n.team-result___table[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%]:hover, .team-result___list[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(20, 20, 20, 0.2);\n}\n.team-result___list[_ngcontent-%COMP%]   .team-result___header[_ngcontent-%COMP%], .team-result___list[_ngcontent-%COMP%]   .team-result___row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40% 20% 20% 20%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.venues[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.venues[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.5em;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  margin: 0.5em 0.25em;\n  border-radius: 0.35em;\n}\n.venues[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  transition: all 0.2s ease-in-out;\n}\n@media screen and (min-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 522px) {\n  .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .card-match[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLXJlc3VsdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUFEWjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0FBRUo7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREE7RUFDSSxZQUFBO0FBSUo7QUFISTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUtSO0FBSlE7O0VBRUksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTVo7QUFMUTs7RUFFSSx5QkFBQTtBQU9aO0FBTlE7RUFDSSx5QkFBQTtBQVFaO0FBUFE7RUFDSSx5QkFBQTtBQVNaO0FBUlE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtBQVVaO0FBVFk7O0VBRUksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBV2hCO0FBVmdCOztFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQWFwQjtBQVZvQjtFQUNJLFdBQUE7QUFZeEI7QUFWb0I7RUFDSSxZQUFBO0FBWXhCO0FBVmdCO0VBQ0ksa0JBQUE7QUFZcEI7QUFYZ0I7RUFDSSxpQkFBQTtBQWFwQjtBQVhBO0VBRUksWUFBQTtBQWFKO0FBWEE7O0VBR0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFhSjtBQVhJOzs7O0VBR0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQWNSO0FBWkk7O0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFjUjtBQVpROztFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQWNaO0FBWkk7O0VBRUksc0JBQUE7QUFjUjtBQVpROztFQUVJLDRDQUFBO0VBQ0EsaUNBQUE7QUFjWjtBQVpROztFQUVJLHVDQUFBO0FBY1o7QUFWSTs7RUFHSSxhQUFBO0VBQ0Esc0NBQUE7QUFZUjtBQVRBO0VBQ0ksV0FBQTtBQVlKO0FBVkE7RUFDSSxXQUFBO0FBYUo7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWNKO0FBYkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWVSO0FBZEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7QUFnQlI7QUFkQTtFQUNJO0lBQ0ksV0FBQTtFQWlCTjtBQUNGO0FBaEJBO0VBR1k7O0lBR0ksZUFBQTtFQWVkO0FBQ0YiLCJmaWxlIjoidGVhbS1yZXN1bHQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG4gICAgdHJcclxuICAgICAgICB0aFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXlcclxuICAgICAgICB0ZFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtXHJcblxyXG4uY29udGVudFxyXG4gICAgbWFyZ2luLXRvcDogMXJlbVxyXG5cclxuLnRlYW0taW5mb1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4uY2FyZC10aXRsZVxyXG4gICAgbWFyZ2luOiAwLjI1cmVtIDBcclxuICAgIHBhZGRpbmc6IDBcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcblxyXG4uY2FyZFxyXG4gICAgaGVpZ2h0OiA3NXB4XHJcbiAgICAuY2FyZC1pbmZvXHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgICAgICAuY2FyZC1zdGF0dXMsXHJcbiAgICAgICAgLmNhcmQtbWF0Y2hcclxuICAgICAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuNWVtXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDNyZW1cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgLmNhcmQtc3RhdHVzOm5vdCguZnQpLFxyXG4gICAgICAgIC5jYXJkLW1hdGNoLndpblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYzc3XHJcbiAgICAgICAgLmNhcmQtc3RhdHVzLmZ0XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmNcclxuICAgICAgICAuY2FyZC1tYXRjaC5sb3NlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMDE3MjVcclxuICAgICAgICAuY2FyZC1jb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWRcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNTAlIDMwJVxyXG4gICAgICAgICAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDUwJSwgMzAwcHgpXHJcbiAgICAgICAgICAgIC5jYXJkLXNjb3JlLFxyXG4gICAgICAgICAgICAuY2FyZC1uYW1lXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZVxyXG4gICAgICAgICAgICAuY2FyZC1uYW1lXHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcclxuICAgICAgICAgICAgLmNhcmQtc2NvcmVcclxuICAgICAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtXHJcblxyXG4udGVhbS1yZXN1bHRfX190aXRsZVxyXG5cclxuICAgIG1hcmdpbjogMXJlbVxyXG5cclxuLnRlYW0tcmVzdWx0X19fdGFibGUsXHJcbi50ZWFtLXJlc3VsdF9fX2xpc3RcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIG1hcmdpbjogMC41cmVtIDEuNXJlbVxyXG5cclxuICAgIC50ZWFtLXJlc3VsdF9fX2hlYWRlcixcclxuICAgIC50ZWFtLXJlc3VsdF9fX3Jvd1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBncmlkXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgMzUlIDMwJVxyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtXHJcbiAgICAgICAgbWFyZ2luOiAwIDAuMjVlbVxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lXHJcblxyXG4gICAgLnRlYW0tcmVzdWx0X19faGVhZGVyXHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDBcclxuICAgICAgICBjb2xvcjogI2ZmZmZcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM1ZW0gMC4zNXJlbSAwIDBcclxuXHJcbiAgICAgICAgLnRlYW0tcmVzdWx0X19faXRlbVxyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuXHJcbiAgICAudGVhbS1yZXN1bHRfX19yb3dcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGRcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjM1ZW0gMC4zNXJlbVxyXG5cclxuICAgICAgICAmOmhvdmVyXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLDIwLDIwLDAuMilcclxuXHJcbi50ZWFtLXJlc3VsdF9fX2xpc3RcclxuXHJcbiAgICAudGVhbS1yZXN1bHRfX19oZWFkZXIsXHJcbiAgICAudGVhbS1yZXN1bHRfX19yb3dcclxuXHJcbiAgICAgICAgZGlzcGxheTogZ3JpZFxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDIwJSAyMCUgMjAlXHJcblxyXG5cclxuLmZ1bGwtd2lkdGhcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG4uZmxvYXQtbGVmdFxyXG4gICAgZmxvYXQ6IGxlZnRcclxuXHJcbi52ZW51ZXNcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgIHBhZGRpbmctbGVmdDogMFxyXG4gICAgbGlcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbVxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuICAgICAgICBtYXJnaW46IDAuNWVtIDAuMjVlbVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzVlbVxyXG4gICAgbGk6aG92ZXJcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweClcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6IDc2N3B4IClcclxuICAgIC5jYXJkXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA1MjJweCApXHJcbiAgICAuY2FyZFxyXG4gICAgICAgIC5jYXJkLWluZm9cclxuICAgICAgICAgICAgLmNhcmQtc3RhdHVzLFxyXG4gICAgICAgICAgICAuY2FyZC1tYXRjaFxyXG5cclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0b1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ "LYyA":
/*!*********************************!*\
  !*** ./src/app/classes/game.ts ***!
  \*********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor(hteamid, ateamid, hteam, ateam, winner, hscore, ascore, roundname, winnerteamid, complete, year, venue, localtime, date, id, round) {
        this.ateamid = ateamid;
        this.hteamid = hteamid;
        this.hteam = hteam;
        this.ateam = ateam;
        this.winner = winner;
        this.hscore = hscore;
        this.ascore = ascore;
        this.roundname = roundname;
        this.winnerteamid = winnerteamid;
        this.complete = complete;
        this.year = year;
        this.venue = venue;
        this.localtime = localtime;
        this.date = date;
        this.id = id;
        this.round = round;
    }
    setTip(tip) {
        this.tip = tip;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'squiggle-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 0, consts: [[1, "main-content"], [1, "main-content___navbar"], [1, "navbar___container"], ["routerLink", "/Home", 1, "navbar___item"], [1, "navbar___title"], [1, "bi", "bi-house-door"], ["routerLink", "/Team", 1, "navbar___item"], [1, "bi", "bi-view-list"], ["routerLink", "/Prediction", 1, "navbar___item"], [1, "bi", "bi-file-earmark-text"], ["routerLink", "/RivalMatch", 1, "navbar___item"], [1, "bi", "bi-file-post"], [1, "main-content___container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rival Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 3.5rem;\n  z-index: 1030;\n  transition: all 0.8s ease;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]:hover {\n  width: 15rem;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]:hover   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%] {\n  list-style: none;\n  width: auto;\n  margin: 1rem 0;\n  padding: 0 1rem;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3rem;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  font-weight: 700;\n  opacity: 0.75;\n  cursor: pointer;\n  color: #ffff;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateY(-5%);\n  font-size: 3rem;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  transition: all 0.2s ease-in-out;\n}\n.main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0 0 0 1rem;\n}\n.main-content___container[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n}\n@media screen and (max-width: 522px) {\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%] {\n    bottom: 0px;\n    top: auto;\n    width: 100%;\n    height: 3rem;\n    position: fixed;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]:hover {\n    height: 3rem;\n    width: 100%;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]:hover   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    justify-items: center;\n    list-style: none;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n  .main-content[_ngcontent-%COMP%]   .main-content___navbar[_ngcontent-%COMP%]   .navbar___container[_ngcontent-%COMP%]   .navbar___item[_ngcontent-%COMP%]   .navbar___title[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .main-content___container[_ngcontent-%COMP%] {\n    margin: 0 0 4rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUkseUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRlI7QUFJUTtFQUVJLFlBQUE7QUFIWjtBQVF3QjtFQUVJLGNBQUE7QUFQNUI7QUFTUTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUlo7QUFVWTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQVRoQjtBQVdnQjtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVZwQjtBQVlvQjtFQUVJLFVBQUE7QUFYeEI7QUFhd0I7RUFFSSwwQkFBQTtFQUNBLGVBQUE7QUFaNUI7QUFjb0I7RUFFSSxrQkFBQTtFQUNBLGdDQUFBO0FBYnhCO0FBZW9CO0VBRUksYUFBQTtFQUNBLGtCQUFBO0FBZHhCO0FBa0JBO0VBRUksaUJBQUE7QUFoQko7QUFtQkE7RUFHUTtJQUVJLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBbkJWO0VBcUJVO0lBRUksWUFBQTtJQUNBLFdBQUE7RUFwQmQ7RUEyQjBCO0lBRUksYUFBQTtFQTFCOUI7RUE0QlU7SUFFSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUEzQmQ7RUE2QmM7SUFFSSxTQUFBO0VBNUJsQjtFQWdDc0I7SUFFSSxVQUFBO0VBL0IxQjtFQWlDMEI7SUFFSSxlQUFBO0VBaEM5Qjs7RUFrQ0U7SUFFSSxrQkFBQTtFQWhDTjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnRcclxuXHJcbiAgICAubWFpbi1jb250ZW50X19fbmF2YmFyXHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDBcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgICB3aWR0aDogMy41cmVtXHJcbiAgICAgICAgei1pbmRleDogMTAzMFxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2VcclxuXHJcbiAgICAgICAgJjpob3ZlclxyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDE1cmVtXHJcblxyXG4gICAgICAgICAgICAubmF2YmFyX19fY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyX19faXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJfX190aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcclxuXHJcbiAgICAgICAgLm5hdmJhcl9fX2NvbnRhaW5lclxyXG5cclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4gICAgICAgICAgICB3aWR0aDogYXV0b1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXJfX19pdGVtXHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXJfX190aXRsZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzVcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtXHJcblxyXG5cclxuXHJcbi5tYWluLWNvbnRlbnRfX19jb250YWluZXJcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogNHJlbVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA1MjJweCApXHJcbiAgICAubWFpbi1jb250ZW50XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnRfX19uYXZiYXJcclxuXHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4XHJcbiAgICAgICAgICAgIHRvcDogYXV0b1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW1cclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkXHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyXHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXJfX19jb250YWluZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcl9fX2l0ZW1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJfX190aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcblxyXG4gICAgICAgICAgICAubmF2YmFyX19fY29udGFpbmVyXHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyX19faXRlbVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcl9fX3RpdGxlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtXHJcblxyXG4gICAgLm1haW4tY29udGVudF9fX2NvbnRhaW5lclxyXG5cclxuICAgICAgICBtYXJnaW46IDAgMCA0cmVtIDBcclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "V7kG":
/*!*****************************************************************************!*\
  !*** ./src/app/components/view-league-table/view-league-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewLeagueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLeagueTableComponent", function() { return ViewLeagueTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ViewLeagueTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r3.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ViewLeagueTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r4.ateam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r4.hteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", game_r4.ascore, "-", game_r4.hscore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r4.winner);
} }
function ViewLeagueTableComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r5.ateam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r5.hteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r5.tip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r5.source);
} }
class ViewLeagueTableComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.getAFLTeams();
        this.getAFLGames();
        this.getAFLTips();
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => { this.teams = temp; });
    }
    getAFLGames() {
        this.dataService.getGame().subscribe(temp => {
            temp.sort((firstEl, secondEl) => {
                let firstScore = this.getScoreofWinner(firstEl);
                let secondScore = this.getScoreofWinner(secondEl);
                return secondScore - firstScore;
            });
            this.games = temp;
        });
    }
    getScoreofWinner(data) {
        const { ateamid, hteamid, winnerteamid, ascore, hscore } = data;
        switch (winnerteamid) {
            case hteamid:
                return hscore;
            case ateamid:
                return ascore;
            default:
                return ascore;
        }
    }
    getAFLTips() {
        this.dataService.getTip().subscribe(temp => { this.tips = temp; });
    }
}
ViewLeagueTableComponent.ɵfac = function ViewLeagueTableComponent_Factory(t) { return new (t || ViewLeagueTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ViewLeagueTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewLeagueTableComponent, selectors: [["app-view-league-table"]], decls: 34, vars: 3, consts: [[2, "border-style", "solid"], [4, "ngFor", "ngForOf"], [3, "src"]], template: function ViewLeagueTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewLeagueTableComponent_tr_7_Template, 5, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Away");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Winner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewLeagueTableComponent_tr_21_Template, 9, 5, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Away");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ViewLeagueTableComponent_tr_33_Template, 9, 4, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tips);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LWxlYWd1ZS10YWJsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGtCQUFBO0FBRFoiLCJmaWxlIjoidmlldy1sZWFndWUtdGFibGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG4gICAgdHJcclxuICAgICAgICB0ZFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIiXX0= */"] });


/***/ }),

/***/ "W2TK":
/*!*********************************!*\
  !*** ./src/app/classes/team.ts ***!
  \*********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
class Team {
    constructor(name, logo, id, abbrev) {
        this.logo = logo;
        this.id = id;
        this.name = name;
        this.abbrev = abbrev;
    }
    setStanding(standing) {
        this.standing = standing;
    }
    setPlayer(player) {
        this.player = player;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_league_table_league_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/league-table/league-table.component */ "H139");
/* harmony import */ var _components_team_data_team_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/team-data/team-data.component */ "xOwh");
/* harmony import */ var _components_view_league_table_view_league_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-league-table/view-league-table.component */ "V7kG");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
/* harmony import */ var _components_team_result_team_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/team-result/team-result.component */ "L6j+");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "xb5Q");
/* harmony import */ var _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/rival-match/rival-match.component */ "y+Pz");
/* harmony import */ var _components_rival_match_board_rival_match_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rival-match-board/rival-match-board.component */ "eLjJ");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_league_table_league_table_component__WEBPACK_IMPORTED_MODULE_4__["LeagueTableComponent"],
        _components_team_data_team_data_component__WEBPACK_IMPORTED_MODULE_5__["TeamDataComponent"],
        _components_view_league_table_view_league_table_component__WEBPACK_IMPORTED_MODULE_6__["ViewLeagueTableComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
        _components_team_result_team_result_component__WEBPACK_IMPORTED_MODULE_8__["TeamResultComponent"],
        _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__["PredictionComponent"],
        _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_10__["RivalMatchComponent"],
        _components_rival_match_board_rival_match_board_component__WEBPACK_IMPORTED_MODULE_11__["RivalMatchBoardComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]] }); })();


/***/ }),

/***/ "dGWY":
/*!***********************************!*\
  !*** ./src/app/classes/player.ts ***!
  \***********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(PAV_def, year, PAV_total_rank, PAV_off, mPAV_def, pavid, team, PAV_mid, PAV_mid_rank, surname, mPAV_rank, PAV_def_rank, mPAV_total, PAV_total, firstname, PAV_off_rank, mPAV_mid, mPAV_off, name, games) {
        this.PAV_def = PAV_def;
        this.year = year;
        this.PAV_total_rank = PAV_total_rank;
        this.PAV_off = PAV_off;
        this.mPAV_def = mPAV_def;
        this.pavid = pavid;
        this.team = team;
        this.PAV_mid = PAV_mid;
        this.PAV_mid_rank = PAV_mid_rank;
        this.surname = surname;
        this.mPAV_rank = mPAV_rank;
        this.PAV_def_rank = PAV_def_rank;
        this.mPAV_total = mPAV_total;
        this.PAV_total = PAV_total;
        this.firstname = firstname;
        this.PAV_off_rank = PAV_off_rank;
        this.mPAV_mid = mPAV_mid;
        this.mPAV_off = mPAV_off;
        this.name = name;
        this.games = games;
    }
}


/***/ }),

/***/ "eLjJ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/rival-match-board/rival-match-board.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RivalMatchBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RivalMatchBoardComponent", function() { return RivalMatchBoardComponent; });
/* harmony import */ var src_app_classes_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/board */ "32hX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RivalMatchBoardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](board_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](board_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](board_r1.compareValue);
} }
const types = ['played', 'wins', 'losses', 'rank', 'percentage'];
class RivalMatchBoardComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes) {
            this.boards = [];
            types.forEach(x => {
                let value = this.fData[x];
                let cValue = this.rData[x];
                x.charAt(0).toLocaleUpperCase();
                let board = new src_app_classes_board__WEBPACK_IMPORTED_MODULE_0__["Board"](this.upperFirstChar(x), value, cValue);
                this.boards = [...this.boards, board];
            });
        }
    }
    upperFirstChar(data) {
        let newValue = '';
        let isFirst = true;
        for (let char of data) {
            newValue += isFirst ? char.toUpperCase() : char;
            isFirst = isFirst ? false : false;
        }
        return newValue;
    }
}
RivalMatchBoardComponent.ɵfac = function RivalMatchBoardComponent_Factory(t) { return new (t || RivalMatchBoardComponent)(); };
RivalMatchBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RivalMatchBoardComponent, selectors: [["app-rival-match-board"]], inputs: { fData: "fData", rData: "rData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "rival-match-board", 4, "ngFor", "ngForOf"], [1, "rival-match-board"], [1, "rival-match-board___item"]], template: function RivalMatchBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RivalMatchBoardComponent_div_0_Template, 9, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.boards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".rival-match-board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n.rival-match-board[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .rival-match-board[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.rival-match-board[_ngcontent-%COMP%]   .rival-match-board___item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.rival-match-board[_ngcontent-%COMP%]   .rival-match-board___item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.rival-match-board[_ngcontent-%COMP%]   .rival-match-board___item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n  width: 20%;\n  text-align: center;\n}\n.rival-match-board[_ngcontent-%COMP%]   .rival-match-board___item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyaXZhbC1tYXRjaC1ib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJOztFQUdJLFNBQUE7QUFEUjtBQUdJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBRUksY0FBQTtFQUNBLGFBQUE7QUFIWjtBQUtRO0VBRUksaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKWjtBQU1RO0VBRUksU0FBQTtBQUxaIiwiZmlsZSI6InJpdmFsLW1hdGNoLWJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpdmFsLW1hdGNoLWJvYXJkXHJcblxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtXHJcbiAgICAgICAgXHJcbiAgICBoNSxcclxuICAgIGg2XHJcblxyXG4gICAgICAgIG1hcmdpbjogMFxyXG5cclxuICAgIC5yaXZhbC1tYXRjaC1ib2FyZF9fX2l0ZW1cclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcblxyXG4gICAgICAgIGltZ1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW1cclxuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbVxyXG5cclxuICAgICAgICBoM1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW1cclxuICAgICAgICAgICAgd2lkdGg6IDIwJVxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbiAgICAgICAgcFxyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAwXHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "xb5Q");
/* harmony import */ var _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rival-match/rival-match.component */ "y+Pz");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'Home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'Team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"] },
    { path: 'Prediction', component: _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_2__["PredictionComponent"] },
    { path: 'RivalMatch', component: _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_3__["RivalMatchComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xOwh":
/*!*************************************************************!*\
  !*** ./src/app/components/team-data/team-data.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDataComponent", function() { return TeamDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TeamDataComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamDataComponent_div_0_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const team_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSelect(team_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r5.name, " ");
} }
function TeamDataComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The total list is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamDataComponent_div_0_li_4_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.teams);
} }
function TeamDataComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My favourite team is ", ctx_r1.selectedTeam.name, "");
} }
function TeamDataComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "No favourite team");
} }
class TeamDataComponent {
    constructor() { }
    ngOnInit() {
    }
    onSelect(team) {
        this.selectedTeam = team;
    }
}
TeamDataComponent.ɵfac = function TeamDataComponent_Factory(t) { return new (t || TeamDataComponent)(); };
TeamDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamDataComponent, selectors: [["app-team-data"]], decls: 5, vars: 3, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TeamDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeamDataComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamDataComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamDataComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTeam)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLWRhdGEuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "xb5Q":
/*!***************************************************************!*\
  !*** ./src/app/components/prediction/prediction.component.ts ***!
  \***************************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PredictionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r0.selectedTeam.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedTeam.name);
} }
function PredictionComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_div_6_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const team_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onSelect(team_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r5.selectedTeam && team_r6.id == ctx_r5.selectedTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r6.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r6.name, "");
} }
function PredictionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select your favourite team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PredictionComponent_div_6_li_6_Template, 4, 5, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teams);
} }
function PredictionComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This is the prediction for next Game with ", ctx_r2.game.ateamid == ctx_r2.selectedTeam.id ? ctx_r2.game.hteam : ctx_r2.game.ateam, "");
} }
function PredictionComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tip_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tip_r10.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getConfidence(tip_r10));
} }
function PredictionComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PredictionComponent_div_15_div_1_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tips);
} }
class PredictionComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.isLoading = false;
        this.tips = [];
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    ngOnInit() {
        this.getAFLTeams();
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => { this.teams = temp; });
    }
    getTip(game = 1, year = '2021', round = 20) {
        this.dataService.getTip(game, year, round).subscribe(temp => {
            this.tips = temp;
            this.isLoading = false;
        });
    }
    onSelect(team) {
        this.isLoading = true;
        this.selectedTeam = team;
        this.getGame();
    }
    getGame() {
        this.dataService.getGame().subscribe(temp => {
            let nxtGame;
            let currentYear = new Date().getFullYear();
            nxtGame = temp.find((x) => x.complete == 0
                && x.year === currentYear
                && (x.ateamid == this.selectedTeam.id
                    || x.hteamid == this.selectedTeam.id));
            this.game = nxtGame;
            this.getTip(this.game.id, currentYear.toString(), this.game.round);
        });
    }
    getConfidence(data) {
        const { hteamid } = this.game;
        const { id } = this.selectedTeam;
        return hteamid == id ? data.hconfidence : data.aconfidence;
    }
}
PredictionComponent.ɵfac = function PredictionComponent_Factory(t) { return new (t || PredictionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
PredictionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictionComponent, selectors: [["app-prediction"]], inputs: { tips: "tips", selectedTeam: "selectedTeam" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 5, consts: [[1, "prediction"], [1, "prediction___title"], [2, "text-align", "center"], ["class", "prediction___logo", 4, "ngIf"], ["class", "prediction___dropdowns", 4, "ngIf"], ["class", "prediction___title", 4, "ngIf"], [1, "prediction___table"], [1, "prediction___header"], [1, "prediction___item"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "prediction___logo"], [3, "src"], [1, "prediction___dropdowns"], [1, "dropdown"], ["id", "prediction___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "prediction___dropdownselectteam", 1, "dropdown-menu"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["width", "25rem", "height", "25rem", 3, "src"], [1, "loading"], ["xmlns", "http://www.w3.org/2000/svg", "width", "3rem", "height", "3rem", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-repeat"], ["d", "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"], ["fill-rule", "evenodd", "d", "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"], ["class", "prediction___row", 4, "ngFor", "ngForOf"], [1, "prediction___row"]], template: function PredictionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click on dropdown below to View the Prediction of your teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PredictionComponent_div_5_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PredictionComponent_div_6_Template, 7, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PredictionComponent_p_7_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PredictionComponent_div_14_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PredictionComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTeam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tips.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".prediction[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___title[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 0;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin: 0.5rem 1.5rem;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___header[_ngcontent-%COMP%], .prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  padding: 0.5em;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  margin: 0 0.25em;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___header[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n  color: #fff;\n  border-bottom: none;\n  border-radius: 0.35em 0.35rem 0 0;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___header[_ngcontent-%COMP%]   .prediction___item[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___row[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: none;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  border-radius: 0 0 0.35em 0.35rem;\n}\n.prediction[_ngcontent-%COMP%]   .prediction___table[_ngcontent-%COMP%]   .prediction___row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(20, 20, 20, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmVkaWN0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURSO0FBR0k7RUFFSSxjQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSUk7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBSFI7QUFPWTtFQUVJLFlBQUE7QUFOaEI7QUFVZ0I7RUFFSSxnQ0FBQTtFQUNBLGVBQUE7QUFUcEI7QUFXb0I7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FBVHhCO0FBV0k7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVZSO0FBWVE7O0VBR0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFYWjtBQWFRO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQVpaO0FBY1k7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUFiaEI7QUFlUTtFQUVJLHNCQUFBO0VBQ0EsbUJBQUE7QUFkWjtBQWdCWTtFQUVJLDRDQUFBO0VBQ0EsaUNBQUE7QUFmaEI7QUFpQlk7RUFFSSx1Q0FBQTtBQWhCaEIiLCJmaWxlIjoicHJlZGljdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVkaWN0aW9uXHJcblxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgcGFkZGluZzogMXJlbVxyXG5cclxuICAgIC5wcmVkaWN0aW9uX19fbG9nb1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICBtYXJnaW46IDFyZW1cclxuXHJcbiAgICAucHJlZGljdGlvbl9fX3RpdGxlXHJcblxyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwXHJcbiAgICAgICAgcGFkZGluZzogMFxyXG5cclxuICAgIC5wcmVkaWN0aW9uX19fZHJvcGRvd25zXHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgICAgIC5kcm9wZG93blxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnVcclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuXHJcbiAgICAucHJlZGljdGlvbl9fX3RhYmxlXHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDEuNXJlbVxyXG5cclxuICAgICAgICAucHJlZGljdGlvbl9fX2hlYWRlcixcclxuICAgICAgICAucHJlZGljdGlvbl9fX3Jvd1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZFxyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCVcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW1cclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KVxyXG4gICAgICAgICAgICBtYXJnaW46IDAgMC4yNWVtXHJcblxyXG4gICAgICAgIC5wcmVkaWN0aW9uX19faGVhZGVyXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNWVtIDAuMzVyZW0gMCAwXHJcblxyXG4gICAgICAgICAgICAucHJlZGljdGlvbl9fX2l0ZW1cclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW1cclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuXHJcbiAgICAgICAgLnByZWRpY3Rpb25fX19yb3dcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkXHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjM1ZW0gMC4zNXJlbVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlclxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsMjAsMjAsMC4yKVxyXG4iXX0= */"] });


/***/ }),

/***/ "y+Pz":
/*!*****************************************************************!*\
  !*** ./src/app/components/rival-match/rival-match.component.ts ***!
  \*****************************************************************/
/*! exports provided: RivalMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RivalMatchComponent", function() { return RivalMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rival_match_board_rival_match_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rival-match-board/rival-match-board.component */ "eLjJ");




function RivalMatchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RivalMatchComponent_div_1_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RivalMatchComponent_div_1_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const team_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSelect(team_r5, "favourite"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r2.favouriteTeam && team_r5.id == ctx_r2.favouriteTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.disableFavourite(team_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r5.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r5.name, "");
} }
function RivalMatchComponent_div_1_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RivalMatchComponent_div_1_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const team_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onSelect(team_r8, "rival"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r3.rivalTeam && team_r8.id == ctx_r3.rivalTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.disableRival(team_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r8.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r8.name, "");
} }
function RivalMatchComponent_div_1_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r11.favouriteTeam.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.favouriteTeam.name);
} }
function RivalMatchComponent_div_1_div_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.rivalTeam.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx_r12.rivalTeam.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RivalMatchComponent_div_1_div_18_div_26_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RivalMatchComponent_div_1_div_18_div_26_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RivalMatchComponent_div_1_div_18_div_26_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 37);
} }
function RivalMatchComponent_div_1_div_18_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RivalMatchComponent_div_1_div_18_div_26_p_6_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RivalMatchComponent_div_1_div_18_div_26_p_7_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RivalMatchComponent_div_1_div_18_div_26_p_8_Template, 1, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r14.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", game_r14.hscore, " - ", game_r14.ascore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r14.winnerteamid === ctx_r13.favouriteTeam.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r14.winnerteamid && game_r14.winnerteamid !== ctx_r13.favouriteTeam.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !game_r14.winnerteamid);
} }
function RivalMatchComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is result comparision of this season");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RivalMatchComponent_div_1_div_18_div_4_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RivalMatchComponent_div_1_div_18_div_7_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-rival-match-board", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This is result last five games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "WINS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DRAW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LOSSES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RivalMatchComponent_div_1_div_18_div_26_Template, 9, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.favouriteTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.rivalTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fData", ctx_r4.favouriteTeam.standing)("rData", ctx_r4.rivalTeam.standing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.gameWons(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.gameDraw(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.gameLosses(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.fiveGame);
} }
function RivalMatchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rival Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select your favourite team and rival team by clicking on the dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select your favourite team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RivalMatchComponent_div_1_li_11_Template, 4, 6, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select a rival team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RivalMatchComponent_div_1_li_17_Template, 4, 6, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RivalMatchComponent_div_1_div_18_Template, 27, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.favouriteTeam && ctx_r1.rivalTeam);
} }
class RivalMatchComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.isLoading = false;
        this.gameWons = () => this.fiveGame.filter(x => x.winnerteamid == this.favouriteTeam.id).length;
        this.gameDraw = () => this.fiveGame.filter(x => !x.winnerteamid).length;
        this.gameLosses = () => this.fiveGame.filter(x => x.winnerteamid != this.favouriteTeam.id).length;
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAFLTeams();
        this.getGame();
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => {
            this.teams = temp;
        });
    }
    onSelect(data, type) {
        console.log(data);
        switch (type) {
            case 'favourite':
                this.favouriteTeam = data;
                break;
            case 'rival':
            default:
                this.rivalTeam = data;
                break;
        }
        if (this.favouriteTeam && this.rivalTeam)
            this.getFiveGame();
    }
    getFiveGame() {
        let numOfGame = 0;
        this.fiveGame = [];
        this.games.forEach(game => {
            const { hteamid, ateamid, complete } = game;
            if (numOfGame >= 5)
                return;
            if (complete == 100
                && ((hteamid == this.favouriteTeam.id && ateamid == this.rivalTeam.id)
                    || (ateamid == this.favouriteTeam.id && hteamid == this.rivalTeam.id))) {
                this.fiveGame = [...this.fiveGame, game];
                console.log(this.fiveGame);
                numOfGame++;
            }
        });
    }
    getGame() {
        this.dataService.getGame().subscribe((temp) => {
            var _a, _b;
            let year = new Date().getFullYear();
            let lastRound = (_b = (_a = temp.reverse().find(x => x.complete == 100 && x.year == year)) === null || _a === void 0 ? void 0 : _a.round) !== null && _b !== void 0 ? _b : 0;
            this.games = temp;
            this.getStanding(year.toString(), lastRound);
        });
    }
    getStanding(year = '2021', round = 20) {
        this.dataService.getStanding(year, round).subscribe((temp) => {
            temp.forEach((item) => {
                this.teams.forEach(team => {
                    if (team.id == item.id)
                        team.setStanding(item);
                });
            });
            this.isLoading = false;
        });
    }
    disableFavourite(data) {
        return this.rivalTeam && this.rivalTeam.id == data.id;
    }
    disableRival(data) {
        return this.favouriteTeam && this.favouriteTeam.id == data.id;
    }
}
RivalMatchComponent.ɵfac = function RivalMatchComponent_Factory(t) { return new (t || RivalMatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
RivalMatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RivalMatchComponent, selectors: [["app-rival-match"]], decls: 2, vars: 2, consts: [["class", "loading", 4, "ngIf"], ["class", "rival-match", 4, "ngIf"], [1, "loading"], ["xmlns", "http://www.w3.org/2000/svg", "width", "3rem", "height", "3rem", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-repeat"], ["d", "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"], ["fill-rule", "evenodd", "d", "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"], [1, "rival-match"], [1, "rival-match___title"], [2, "text-align", "center"], [1, "rival-match___dropdowns"], [1, "dropdown"], ["id", "rival-match___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "rival-match___dropdownselectteam", 1, "dropdown-menu"], [3, "class", "hidden", "click", 4, "ngFor", "ngForOf"], ["id", "rival-match___dropdownrivalteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "rival-match___dropdownrivalteam", 1, "dropdown-menu"], ["style", "width: 100%", 4, "ngIf"], [3, "hidden", "click"], ["width", "25rem", "height", "25rem", 3, "src"], [2, "width", "100%"], [2, "align-items", "center", "text-align", "center"], [1, "rival-match___logo"], ["class", "rival-match___item", 4, "ngIf"], [3, "fData", "rData"], [1, "rival-match___table"], [1, "rival-match___table-header"], [1, "rival-match___table-item"], ["class", "rival-match___table-row", 4, "ngFor", "ngForOf"], [1, "rival-match___item"], [3, "src"], [1, "rival-match___table-row"], ["class", "card-match win", 4, "ngIf"], ["class", "card-match lose", 4, "ngIf"], ["class", "card-match", 4, "ngIf"], [1, "card-match", "win"], [1, "card-match", "lose"], [1, "card-match"]], template: function RivalMatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RivalMatchComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RivalMatchComponent_div_1_Template, 19, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _rival_match_board_rival_match_board_component__WEBPACK_IMPORTED_MODULE_3__["RivalMatchBoardComponent"]], styles: [".rival-match[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin: 1rem;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40% 20% 40%;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   .rival-match___item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   .rival-match___item[_ngcontent-%COMP%]:last-child {\n  justify-content: flex-end;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   .rival-match___item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   .rival-match___item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___logo[_ngcontent-%COMP%]   .rival-match___item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%] {\n  margin: 2rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-header[_ngcontent-%COMP%], .rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  align-items: center;\n  width: 100%;\n  padding: 0.5em;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  border-bottom: none;\n  margin: 0 0.25em;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-header[_ngcontent-%COMP%] {\n  background-color: #FF0000;\n  color: #fff;\n  border-bottom: none;\n  border-radius: 0.35em 0.35rem 0 0;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]:last-child {\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(20, 20, 20, 0.2);\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]   .rival-match___table-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]   .rival-match___table-item[_ngcontent-%COMP%]   .card-match[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]   .rival-match___table-item[_ngcontent-%COMP%]   .card-match.win[_ngcontent-%COMP%] {\n  background-color: #00ac77;\n}\n.rival-match[_ngcontent-%COMP%]   .rival-match___table[_ngcontent-%COMP%]   .rival-match___table-row[_ngcontent-%COMP%]   .rival-match___table-item[_ngcontent-%COMP%]   .card-match.lose[_ngcontent-%COMP%] {\n  background-color: #d01725;\n}\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n}\napp-rival-match-board[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 522px) {\n  .rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .rival-match[_ngcontent-%COMP%]   .rival-match___dropdowns[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyaXZhbC1tYXRjaC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFLWTtFQUVJLFlBQUE7QUFKaEI7QUFRZ0I7RUFFSSxnQ0FBQTtFQUNBLGVBQUE7QUFQcEI7QUFTb0I7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FBUHhCO0FBU0k7RUFFSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVJSO0FBVVE7O0VBR0ksa0JBQUE7RUFDQSxTQUFBO0FBVFo7QUFZUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBWFo7QUFhWTtFQUVJLHlCQUFBO0FBWmhCO0FBY1k7RUFFSSxjQUFBO0VBQ0EsYUFBQTtBQWJoQjtBQWVZO0VBRUksaUJBQUE7QUFkaEI7QUFnQlk7RUFFSSxTQUFBO0FBZmhCO0FBaUJJO0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBaEJSO0FBa0JROztFQUdJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqQlo7QUFtQlE7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBbEJaO0FBc0JZO0VBRUkscUNBQUE7QUFyQmhCO0FBdUJZO0VBRUksdUNBQUE7QUF0QmhCO0FBd0JZO0VBRUksYUFBQTtFQUNBLHVCQUFBO0FBdkJoQjtBQXlCZ0I7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXhCcEI7QUEwQm9CO0VBRUkseUJBQUE7QUF6QnhCO0FBMkJvQjtFQUVJLHlCQUFBO0FBMUJ4QjtBQTZCQTtFQUNJLFdBQUE7QUExQko7QUE0QkE7RUFDSSxXQUFBO0FBekJKO0FBMkJBO0VBRVE7SUFFSSxhQUFBO0lBQ0Esc0JBQUE7RUExQlY7RUE0QlU7SUFFSSxZQUFBO0VBM0JkO0FBQ0YiLCJmaWxlIjoicml2YWwtbWF0Y2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucml2YWwtbWF0Y2hcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBtYXJnaW46IDFyZW1cclxuXHJcbiAgICAucml2YWwtbWF0Y2hfX19kcm9wZG93bnNcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgbWFyZ2luOiAxcmVtXHJcblxyXG4gICAgICAgIC5kcm9wZG93blxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnVcclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuXHJcbiAgICAucml2YWwtbWF0Y2hfX19sb2dvXHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWRcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAyMCUgNDAlXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbVxyXG5cclxuICAgICAgICBoNSxcclxuICAgICAgICBoNlxyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgICAgIG1hcmdpbjogMFxyXG5cclxuXHJcbiAgICAgICAgLnJpdmFsLW1hdGNoX19faXRlbVxyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZFxyXG5cclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcclxuXHJcbiAgICAgICAgICAgIGltZ1xyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtXHJcblxyXG4gICAgICAgICAgICBoM1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtXHJcblxyXG4gICAgICAgICAgICBwXHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXHJcblxyXG4gICAgLnJpdmFsLW1hdGNoX19fdGFibGVcclxuXHJcbiAgICAgICAgbWFyZ2luOiAycmVtXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHJcbiAgICAgICAgLnJpdmFsLW1hdGNoX19fdGFibGUtaGVhZGVyLFxyXG4gICAgICAgIC5yaXZhbC1tYXRjaF9fX3RhYmxlLXJvd1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZFxyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW1cclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KVxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lXHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1ZW1cclxuXHJcbiAgICAgICAgLnJpdmFsLW1hdGNoX19fdGFibGUtaGVhZGVyXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNWVtIDAuMzVyZW0gMCAwXHJcblxyXG4gICAgICAgIC5yaXZhbC1tYXRjaF9fX3RhYmxlLXJvd1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkXHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlclxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsMjAsMjAsMC4yKVxyXG5cclxuICAgICAgICAgICAgLnJpdmFsLW1hdGNoX19fdGFibGUtaXRlbVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmQtbWF0Y2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi53aW5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjNzdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5sb3NlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDAxNzI1XHJcblxyXG5cclxuaHJcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG5hcHAtcml2YWwtbWF0Y2gtYm9hcmRcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNTIycHggKVxyXG4gICAgLnJpdmFsLW1hdGNoXHJcbiAgICAgICAgLnJpdmFsLW1hdGNoX19fZHJvcGRvd25zXHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHJcbiAgICAgICAgICAgIC5kcm9wZG93blxyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbVxyXG4iXX0= */"] });


/***/ }),

/***/ "yoyL":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _team_result_team_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team-result/team-result.component */ "L6j+");




function TeamComponent_div_5_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_div_5_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const team_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onSelect(team_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r2.selectedTeam && team_r3.id == ctx_r2.selectedTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r3.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r3.name, "");
} }
function TeamComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select your favourite team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamComponent_div_5_li_5_Template, 4, 5, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.teams);
} }
function TeamComponent_app_team_result_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-result", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("team", ctx_r1.selectedTeam)("teams", ctx_r1.teams);
} }
class TeamComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.getAFLTeams();
    }
    onSelect(team) {
        this.selectedTeam = team;
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => {
            this.teams = temp;
            this.getPlayers();
        });
    }
    getPlayers() {
        this.dataService.getPlayers().subscribe((temp) => {
            this.teams.forEach((team) => {
                let pav;
                pav = temp.filter((player) => player.team == team.id);
                team.setPlayer(pav);
            });
        });
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 8, vars: 2, consts: [[2, "font-size", "50px", "width", "100%", "text-align", "center"], [2, "text-align", "center"], ["id", "TeamDiv"], ["class", "dropdown", 4, "ngIf"], [1, "search-content"], [3, "team", "teams", 4, "ngIf"], [1, "dropdown"], ["id", "dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownselectteam", 1, "dropdown-menu"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["width", "25rem", "height", "25rem", 3, "src"], [3, "team", "teams"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Game page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click on dropdown below to View the games details of your teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamComponent_div_5_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamComponent_app_team_result_7_Template, 1, 2, "app-team-result", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTeam);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _team_result_team_result_component__WEBPACK_IMPORTED_MODULE_3__["TeamResultComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#TeamDiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n#TeamDiv[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 1rem;\n  right: 1rem;\n}\n\n#TeamDiv[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#TeamDiv[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\n#TeamDiv[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n#TeamDiv[_ngcontent-%COMP%]   .search-content[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQVlBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0FBVko7O0FBWUk7RUFFSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFYUjs7QUFhUTtFQUVJLFlBQUE7QUFaWjs7QUFnQlk7RUFFSSxnQ0FBQTtBQWZoQjs7QUFpQmdCO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBQWZwQjs7QUFpQkk7RUFFSSxnQkFBQTtBQWhCUiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsidWxcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4vLyAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwXHJcbi8vICAgICBsaVxyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAuNWVtXHJcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KVxyXG4vLyAgICAgICAgIG1hcmdpbjogMC41ZW0gMC4yNWVtXHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNWVtXHJcbi8vICAgICBsaTpob3ZlciBcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweClcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSkgICAgXHJcbi8vICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcclxuI1RlYW1EaXZcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcblxyXG4gICAgLmRyb3Bkb3duXHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdG9wOiAxcmVtXHJcbiAgICAgICAgcmlnaHQ6IDFyZW1cclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZVxyXG5cclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XHJcblxyXG4gICAgICAgIC5kcm9wZG93bi1tZW51XHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweClcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSlcclxuXHJcbiAgICAuc2VhcmNoLWNvbnRlbnRcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map