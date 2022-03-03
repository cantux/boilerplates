"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs/Rx");
function default_1() {
    // const source0$ = Rx.Observable.interval(1000);
    // source0$.subscribe( x => console.log(x));
    var source1$ = Rx.Observable.interval(100)
        .take(5);
    source1$.subscribe(function (x) { return console.log('interval take 5: ', x); });
    // start time 5000
    // runs every 2 secs
    var source2$ = Rx.Observable.timer(5000, 2000)
        .take(5);
    source2$.subscribe(function (x) { return console.log('timer() 5 secs later every 2 secs take 5: ', x); });
    // start from 25
    // increment 100 times
    var source3$ = Rx.Observable.range(25, 100)
        .take(5);
    source3$.subscribe(function (x) { return console.log('range() from 25 to 125 take 5: ', x); });
}
exports.default = default_1;
