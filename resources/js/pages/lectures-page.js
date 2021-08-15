import { el } from "redom";

export class LecturesPage {
    constructor() {
        this.el = el('h1', 'Lectures Page');
    }

    update(data) {
        console.log(`Update function from lectures page`);
    }
}