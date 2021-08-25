import { el, setAttr, list } from "redom";
// import * as Lockr from 'Lockr';

class listClass {
    constructor() {
        this.day = el('h6');
        this.time = el('h6');
        this.subject = el('h1');
        this.container = el('div', this.day, this.time, this.subject);
    }

    update(data) {
        setAttr(this.day, {
            className: data.day
        });

        setAttr(this.time, {
            textContent: data.time
        });

        setAttr(this.subject, {
            textContent: data.subject
        });

        setAttr(this.container, {
            className: data.container
        });
    }
}

export class HomePage {
    constructor() {

        const listData = JSON.parse(localStorage.getItem('ADDED_CLASS'));
        
        this.classItems = list('ul.menu-list', listClass);
        this.classItems.update(listData);

        this.addClassButton = el('button.button is-primary', 'Add class');

        this.closeModalButton = el('button.modal-close is-large');

        this.createClassButton = el('div.control',
            el('button.button is-primary', 'Add', { type: 'submit' })
        );

        this.subjectName = '';
        this.setTime = '';
        this.timeData = function () {
            var am = document.getElementById('am');
            var pm = document.getElementById('pm');
            if (am.checked == true) {
                localStorage.setItem('TIME_DATA', am);
            }
            if (pm.checked == true) {
                localStorage.setItem('TIME_DATA', pm);
            }
        };

        this.form = el('form', { id: 'addClass' },
            el('h1.heading', 'Create Class'),
            el('div.field',
                el('label.label', 'Subject Name'),
                el('div.control',
                    el('input.input', { type: 'text', placeholder: 'subject', id: 'subname', oninput: (e) => this.subjectName = e.target.value })
                )
            ),
            el('div.field',
                el('label.label', 'Set Time'),
                el('div.control',
                    el('input.input', { type: 'text', placeholder: '00:00', id: 'time', oninput: (e) => this.setTime = e.target.value })
                )
            ),
            el('div.control',
                el('lable.radio',
                    el('input', { type: 'radio', name: 'answer', id: 'am', value: 'AM', oninput: (e) => this.timeData = e.target.value }),
                    'AM'
                ),
                el('lable.radio',
                    el('input', { type: 'radio', name: 'answer', id: 'pm', value: 'PM', oninput: (e) => this.timeData = e.target.value }),
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



        this.renderClasses();

        this.classesContainer = el('div.box.classes-container',
            el('h1', 'Your Classes'),
            el('input#searchbar', { type: 'text', name: 'search', placeholder: 'Search..' }), this.class, this.addClassButton
        );

        this.el = el('div.columns',
            el('div.column is-9-desktop is-offset-2-desktop is-8-tablet is-offset-3-tablet is-12-mobile', this.classesContainer),
            this.modal
        );
    }

    renderClasses() {
        const allClassData = JSON.parse(localStorage.getItem('ADDED_CLASS'));
        if (allClassData == null) {
            this.class = el('h1', 'No Classes!');
        } else {
            for (const singleClassData of allClassData) {
                this.class = el('div.box.class',
                    el('h6.day', 'Today'),
                    el('h6.time', singleClassData.setTime, singleClassData.timeData),
                    el('h1.class-name', singleClassData.subjectName),
                    el('button.button is-primary', 'Join')
                );
            }
        }
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

        this.createClassButton.onclick = evt => {
            evt.preventDefault();

            const newClassData = {
                subjectName: this.subjectName,
                setTime: this.setTime,
                timeData: this.timeData,
            };

            let existingClasses = JSON.parse(localStorage.getItem('ADDED_CLASS'));

            if (!existingClasses) {
                existingClasses = [];
            }

            existingClasses.push(newClassData);
            localStorage.setItem('ADDED_CLASS', JSON.stringify(existingClasses));

            const classAdded = new CustomEvent('classCreated', {
                bubbles: true,
            });

            this.el.dispatchEvent(classAdded);

            setAttr(this.modal, {
                className: 'modal',
            });
        }

        this.el.addEventListener('classCreated', event => {
            this.renderClasses();
        });

    }

    update(data) {
        console.log(`Update function from home page`);
    }
}