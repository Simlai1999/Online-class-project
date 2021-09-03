import { el } from "redom";

export class SchedulesPage {
    constructor() {
        this.el = el('h1', 'schedules-page');
    }

    update(data) {
        console.log(`Update function from Schedules Page`);
    }
}