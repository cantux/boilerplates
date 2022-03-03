/**
 * Created by cantu on 19-Sep-17.
 */

import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function() {
    const btn = $('#btn1');
    const inp = $('#inp1');

    const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

    btnStream$.subscribe(function (data) {
            console.log('btnStream$ clicked!', data);
        },
        function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed');
        });

    const inpStream$ = Rx.Observable.fromEvent(inp, 'keyup');

    inpStream$.subscribe(function (data) {
            console.log('inpStream$ clicked!', data);
        },
        function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed');
        });

    const numbers = [1, 2, 3, 4];

    const numbers$ = Rx.Observable.from(numbers);

    numbers$.subscribe((number) => {
            console.log('numbers: ', number);
        }, function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed numbers');
        });

    const set = new Set([33, 'can']);

    const set$ = Rx.Observable.from(set);

    set$.subscribe((number) => {
            console.log('elements: ', number);
        }, function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed set');
        });

    const myPromise = new Promise((resolve, reject) => {
        "use strict";
        console.log('creating promise');
        resolve('hello from promise');
    })

    const promise$ = Rx.Observable.fromPromise(myPromise);

    promise$.subscribe((messasge) => {
            console.log('promise message: ', messasge);
        }, function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed set');
        })
}