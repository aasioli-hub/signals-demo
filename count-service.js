import { signal } from "./signal.js";


export default class CountService {

    constructor() {
        this.count = signal(0);
    }

    increment() {
        this.count.update(value => value + 1);
    }

    getCount() {
        return this.count;
    }

    reset() {
        this.count.set(0);
    }
}