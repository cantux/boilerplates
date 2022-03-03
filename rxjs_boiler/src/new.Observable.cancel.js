import { Observable } from "rxjs/Observable"

// creating a Promise

let p = new Promise((resolve, reject) => {
    Observable.from(setTimeout(()=> "asdf", 1000))
})