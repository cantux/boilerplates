import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function () {
    Rx.Observable.of('Hello')
        .merge(Rx.Observable.of('Everyone'))
        .subscribe(x=> console.log(x));

    Rx.Observable.interval(2000).merge(Rx.Observable.interval(200).map(v => 'merge0: ' + v)).map(v => 'merge1: ' + v)
        .take(25).subscribe(x => console.log(x));

    const source0$ = Rx.Observable.interval(2000).map(v => 'merge2: ' + v).take(25);
    const source1$ = Rx.Observable.interval(200).map(v => 'merge3: ' + v).take(25);

    Rx.Observable.merge(source0$, source1$).take(5).subscribe(x => console.log(x));

    const source2$ = Rx.Observable.range(0,5).map(v => 'concat0: ' + v);
    const source3$ = Rx.Observable.range(6,5).map(v => 'concat1: ' + v);

    Rx.Observable.concat(source2$, source3$)
        .subscribe(x => console.log(x));
}