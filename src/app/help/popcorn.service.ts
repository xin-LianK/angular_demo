import { Injectable } from '@angular/core';

@Injectable()
export class PopcornService {

    constructor() {
        console.log("Popcorn has been injected!");
    }
    cookPopcorn(qty) {
        console.log(qty, "bags of popcorn cooked!");
    }

}