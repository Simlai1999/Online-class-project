import { el } from "redom";

export class SchedulesPage {
    constructor() {
        this.timeData = el('h6.timeData', 'AM');
        this.time = el('h6.time', '10:30');
        this.subject = el('h1.subject', 'English');
        this.classDescription = el('h1.classDescription', 'Class taken by teacher A');
        this.joinBtn = el('button.button is-primary join',
            el('span.fas fa-sign-in-alt')
        );

        this.header = el('div.header',
            el('h1', 'Classes'),
            el('div.field',
                el('p.control has-icons-left',
                    el('i.fas fa-search'),
                    el('input#searchbar', {
                        type: 'text',
                        name: 'search',
                        placeholder: 'Search..'
                    }),

                )
            )
        );

        this.mainContent = el('div.box.mainContent.class',
            this.timeData,
            this.time,
            this.subject,
            this.joinBtn,
            el('hr.divider'),
            this.classDescription,
        );

        this.classesContainer = el('div.box.classes-container',
            this.header,
            this.mainContent,
        );

        this.el = el('div.columns',
            el('div.column',
                this.classesContainer
            )
        );
    }

    update(data) {
        console.log(`Update function from Schedules Page`);
    }
}