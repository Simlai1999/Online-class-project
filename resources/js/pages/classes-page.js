import { el } from "redom";

export class ClassesPage {
    constructor() {
        this.el = el('h1', 'Classes Page');
    }

    update(data) {
        console.log(`Update function from Classes page`);
    }
}