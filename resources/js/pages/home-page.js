import { el } from "redom";

export class HomePage {
    constructor() {
        this.el = el('div.columns',
            el('div.column',
                el('div.box',
                    el('h1', 'Your Classes')
                ),
                el('div.box.two', 
                    el('h1', 'Your Assignments')
                )
            ), [
            el('h1', 'Home Page'),
        ]);
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}