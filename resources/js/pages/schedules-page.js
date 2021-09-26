import { el } from "redom";
import { getWeekOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";

export class SchedulesPage {
    constructor() {

        const date = new Date();
        const daysInCurrentWeek = eachDayOfInterval({ start: startOfWeek(date), end: endOfWeek(date) });
        // console.log(daysInCurrentWeek);

        for(const day of daysInCurrentWeek){
            
        }

        this.dayNames = el('div.names',
            el('div.weekdays', 'Sunday'),
            el('div.weekdays', 'Monday'),
            el('div.weekdays', 'Tuesday'),
            el('div.weekdays', 'Wednesday'),
            el('div.weekdays', 'Thursday'),
            el('div.weekdays', 'Friday'),
            el('div.weekdays', 'Saturday')
        );
        // this.dates = el('div.dates', this.date);

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