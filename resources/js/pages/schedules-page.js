import { el } from "redom";

export class SchedulesPage {
    constructor() {
        const weeks = [
            [
                1, 2, 3, 4, 5, 6, 7
            ],
            [
                8, 9, 10, 11, 12, 13, 14
            ],
            [
                15, 16, 17, 18, 19, 20, 21
            ],
            [
                22, 23, 24, 25, 26, 27, 28, 29, 30
            ],
        ];

        const date = new Date();

        const today = date.getDate();

        weeks.forEach(week => {
            week.forEach(day => {
                if (day == today) {
                    this.date = week;
                }
            })
        });

        this.dayNames = el('div.names',
            el('div.weekdays', 'Sunday'),
            el('div.weekdays', 'Monday'),
            el('div.weekdays','Tuesday'),
            el('div.weekdays','Wednesday'),
            el('div.weekdays','Thursday'),
            el('div.weekdays','Friday'),
            el('div.weekdays','Saturday')
        );
        this.dates = el('div.dates', this.date);

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