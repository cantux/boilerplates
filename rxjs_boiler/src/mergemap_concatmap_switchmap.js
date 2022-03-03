import Rx from 'rxjs/Rx';

export default function () {

    //bad practice
    // Rx.Observable.of('hello').subscribe(v => {
    //     Rx.Observable.of(v + 'everyone').subscribe(x => console.log(x));
    // })

    Rx.Observable.of('hello')
        .mergeMap(v => {
            return Rx.Observable.of(v + 'everyone');
        })
        .subscribe(x=> console.log(x))

    // const promise$ = Rx.Observable.interval(1000)
    //     .map(v => String.fromCharCode(v + 65)).take(5)
    //         .mergeMap(
    //             (v, i) => Rx.Observable.interval(1000).take(5).map(x => "" + x + v))
    //                 .subscribe(x => console.log('second: ', x))
    //

    // “Converts a higher-order Observable into a first-order Observable by
    // subscribing to only the most recently emitted of those inner Observables.”
    const promise$ = Rx.Observable.interval(1000)
        .map(v => String.fromCharCode(v + 65)).take(5)
        .switchMap(
            (v, i) => Rx.Observable.interval(1000).take(5).map(x => "" + x + v))
        .subscribe(x => console.log('second: ', x))
    //
    // const promise$ = Rx.Observable.interval(1000)
    //     .map(v => String.fromCharCode(v + 65)).take(5)
    //     .concatMap(
    //         (v, i) => Rx.Observable.interval(1000).take(5).map(x => "" + x + v))
    //     .subscribe(x => console.log('second: ', x))
}