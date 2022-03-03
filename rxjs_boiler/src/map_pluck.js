import $ from 'jquery';
import Rx from 'rxjs/Rx';

export default function () {
    const source0$ = Rx.Observable.interval(100)
        .take(10)
        .map(v => v*v);
    source0$.subscribe( x => console.log('map v^2: ', x));


    const names$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
        .map(v => v.toUpperCase())
        .map(v => 'I am ' + v);

    names$.subscribe((name) => {
            console.log('name: ', name);
        }, function (error) {
            console.log('error: ', error);
        },
        function () {
            console.log('completed names');
        });

    const users = [
        {name: 'tux', age: 28},
        {name: 'murat', age: 29}
    ]

    const users$ = Rx.Observable.from(users);
    const pluckedUsers$ = users$.pluck('name')
    users$.subscribe(x => console.log('user: ', x));
    pluckedUsers$.subscribe(x => console.log('plucked user: ', x));
}