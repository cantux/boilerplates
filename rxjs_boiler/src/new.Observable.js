/**
 * Created by cantu on 19-Sep-17.
 */

import Rx from 'rxjs/Rx';

export default function () {
    "use strict";
    const source$ = new Rx.Observable((observer) => {
        observer.next('message');
        observer.next('second message')

        observer.error(new Error('Smt went wrong'))

        setTimeout(function () {
            observer.next('third message');
            observer.complete();
        }, 3000)
    });

    source$
        .subscribe((message) => {
            console.log('message is: ', message);
        },
        (error) => {
            console.log('error: ', error);
        },
        completed => {
            console.log('completed', completed);
        });
}