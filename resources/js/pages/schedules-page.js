import { el } from "redom";
import { eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";

export class SchedulesPage {
    constructor() {

        const date = new Date();
        const daysInCurrentWeek = eachDayOfInterval({ start: startOfWeek(date), end: endOfWeek(date) });

        this.dates = el('div.dates');
        this.dayNames = el('div.dayNames');

        daysInCurrentWeek.forEach(day => {
            day = new Date(day).getDate();
            this.dates.append(el('div.date',day));
        });

        const options = { weekday: 'long'};
        daysInCurrentWeek.forEach(day => {
            let dayName = new Intl.DateTimeFormat('en-US', options).format(day)
            this.dayNames.append(el('div.weekDays',dayName))
        });

        this.calender = el('div.calender',
            this.dayNames, this.dates,
            el('hr.divider')
        );

        this.el = el('div.box', this.calender);
    }

    update(data) {
        console.log(`Update function from Schedules Page`);
    }
}