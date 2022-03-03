import * as Rx from 'rxjs/Rx';

export default function () {
    // const source0$ = Rx.Observable.interval(1000);
    // source0$.subscribe( x => console.log(x));

    const source1$ = Rx.Observable.interval(100)
        .take(5);
    source1$.subscribe( x => console.log('interval take 5: ', x));

    // start time 5000
    // runs every 2 secs
    const source2$ = Rx.Observable.timer(5000, 2000)
        .take(5);
    source2$.subscribe( x => console.log('timer() 5 secs later every 2 secs take 5: ', x));

    // start from 25
    // increment 100 times
    const source3$ = Rx.Observable.range(25, 100)
        .take(5);
    source3$.subscribe( x => console.log('range() from 25 to 125 take 5: ', x));
}
