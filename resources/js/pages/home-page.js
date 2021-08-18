import { el } from "redom";

export class HomePage {
    constructor() {
        this.el = el('div.columns is-variable is-3',
            el('div.column is-7 is-offset-2-desktop',
                el('div.box.classes-container',
                    el('h1', 'Your Classes'),
                    el('input#searchbar', {type: 'text', name: 'search', placeholder: 'Search..'}),
                    el('div.box.class',
                        el('h6.day', 'Today'),
                        el('h6.time', '10:30 AM'),
                        el('h1.class-name', 'English'),
                        el('button.primary', 'Join')
                    )
                )
            ),
            el('div.column is-desktop',
                el('div.box.assignment-container', 
                    el('h1', 'Your Assignments')
                )
            )
        );
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}