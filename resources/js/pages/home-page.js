import { el, setAttr } from "redom";

export class HomePage {
    constructor() {

        this.addClassButton = el('button.button is-primary', 'Add class');

        this.closeModalButton = el('button.modal-close is-large');

        this.createClassButton = el('div.control',
            el('button.button is-primary', 'Add')
        );

        this.form = el('div',
            el('h1.heading', 'Create Class'),
            el('div.field',
                el('label.label', 'Subject Name'),
                el('div.control',
                    el('input.input', { type: 'text', placeholder: 'subject' })
                )
            ),
            el('div.field',
                el('label.label', 'Set Time'),
                el('div.control',
                    el('input.input', { type: 'text', placeholder: '00:00' })
                )
            ),
            el('div.control',
                el('lable.radio',
                    el('input', { type: 'radio', name: 'answer' }),
                    'AM'
                ),
                el('lable.radio',
                    el('input', { type: 'radio', name: 'answer' }),
                    'PM'
                )
            ),
            this.createClassButton
        );

        this.modal = el('div.modal',
            el('div.modal-background'),
            el('div.modal-content has-background-white py-5 px-5',
                this.form
            ),
            this.closeModalButton
        );

        this.class = el('div.box.class',
            el('h6.day', 'Today'),
            el('h6.time', '10:30 AM'),
            el('h1.class-name', 'English'),
            el('button.button is-primary', 'Join')
        );

        this.classContainer = el('div.box.classes-container',
            el('h1', 'Your Classes'),
            el('input#searchbar', { type: 'text', name: 'search', placeholder: 'Search..' }), this.class, this.addClassButton
        );

        this.el = el('div.columns is-variable is-3',
            el('div.column is-9 is-offset-2-desktop is-8-tablet is-offset-3-tablet is-12-mobile', this.classContainer),
            this.modal
        );
    }

    onmount() {
        this.addClassButton.onclick = evt => {
            setAttr(this.modal, {
                className: 'modal is-active',
            });
        }

        this.closeModalButton.onclick = evt => {
            setAttr(this.modal, {
                className: 'modal'
            });
        }

        // this.createClassButton.onclick = evt => {
            
        // }
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}
