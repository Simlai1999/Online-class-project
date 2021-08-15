import { el } from "redom";

export class HomePage {
    constructor() {
        this.el = el('div', [
            el('h1', 'Home Page'),
        ]);
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}