import { el, setAttr, list } from "redom";

import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css';
import 'color-calendar/dist/css/theme-glass.css';

class ClassListItem {
    constructor() {
        console.log(`Class Item`);
        this.timeData = el('h6.timeData');
        this.time = el('h6.time');
        this.subject = el('h1.subject');
        this.classDescription = el('h1.classDescription');
        this.joinBtn = el('button.button is-primary',
            el('span.fas fa-sign-in-alt')
        );
        this.editClassBtn = el('button.button is-primary edit', 
            el('span.fas fa-edit')
        );
        this.el = el('div.box.class', 
            this.time, 
            this.timeData, 
            this.subject, 
            this.joinBtn,
            this.editClassBtn,
            el('hr.divider'),
            this.classDescription,
        );
    }

    update(data) {
        console.log(`Data: `, data);

        setAttr(this.timeData, {
            textContent: data.timeData
        });

        setAttr(this.time, {
            textContent: data.setTime
        });

        setAttr(this.subject, {
            textContent: data.subjectName
        });

        setAttr(this.joinBtn, {
            href: data.link,
        });

        setAttr(this.classDescription, {
            textContent: data.classDescription
        });
    }

    onmount() {
        this.joinBtn.onclick = evt => {
            console.log("joined");
        };

        this.editClassBtn.onclick = evt => {
            console.log('edited');
        }
    }
}

export class HomePage {
    constructor() {
        this.addClassButton = el('button.button is-primary add', 'Add class');
        this.closeModalButton = el('button.modal-close is-large');
        this.createClassButton = el('div.control',
            el('button.button is-primary', 'Add', { type: 'submit' })
        );

        this.subjectName = '';
        this.setTime = '';
        this.timeData = () => {
            const am = document.getElementById('am');
            const pm = document.getElementById('pm');

            if (am.checked) {
                localStorage.setItem('TIME_DATA', am);
            }

            if (pm.checked) {
                localStorage.setItem('TIME_DATA', pm);
            }
        };
        this.classDescription = '';

        this.form = el('form', { id: 'addClass' },
            el('h1.heading', 'Create Class'),
            el('div.field',
                el('label.label', 'Subject Name'),
                el('div.control',
                    el('input.input', {
                        type: 'text',
                        placeholder: 'subject',
                        id: 'subname',
                        oninput: (e) => this.subjectName = e.target.value
                    })
                )
            ),
            el('div.field',
                el('label.label', 'Set Time'),
                el('div.control',
                    el('input.input time', {
                        type: 'text',
                        placeholder: '00:00',
                        id: 'time',
                        oninput: (e) => this.setTime = e.target.value
                    })
                )
            ),
            el('div.control',
                el('lable.radio',
                    el('input', {
                        type: 'radio',
                        name: 'answer',
                        id: 'am',
                        value: 'AM',
                        oninput: (e) => this.timeData = e.target.value
                    }),
                    'AM'
                ),
                el('lable.radio',
                    el('input', {
                        type: 'radio',
                        name: 'answer',
                        id: 'pm',
                        value: 'PM',
                        oninput: (e) => this.timeData = e.target.value
                    }),
                    'PM'
                )
            ),
            el('div.field',
                el('label.label', 'Class Description'),
                el('div.control',
                    el('input.input', {
                        type: 'text',
                        placeholder: 'Description',
                        id: 'classDescription',
                        oninput: (e) => this.classDescription = e.target.value
                    })
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

        this.calendar = el('div#color-calendar');
        this.classItems = list('ul.menu-list classItems', ClassListItem);
        this.noClasses = el('h1', 'No Classes');
        this.header = el('div.header',
            el('h1', 'Your Classes'),
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

        this.mainContent = el('div.mainContent',
            this.calendar,
            this.classItems,
            this.noClasses,
        );

        this.renderClasses();

        this.classesContainer = el('div.box.classes-container',
            this.header,
            this.addClassButton,
            this.mainContent,
        );

        this.el = el('div.columns',
            el('div.column',
                this.classesContainer
            ),
            this.modal
        );
    }

    renderClasses() {
        const allClassData = JSON.parse(localStorage.getItem('ADDED_CLASS')) || [];

        if (allClassData && allClassData.length) {
            setAttr(this.noClasses, {
                className: 'is-hidden',
            });
        }

        this.classItems.update(allClassData);
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
                classDescription: this.classDescription,
            };

            let existingClasses = JSON.parse(localStorage.getItem('ADDED_CLASS'));

            if (!existingClasses) {
                existingClasses = [];
            }

            existingClasses.push(newClassData);
            localStorage.setItem('ADDED_CLASS', JSON.stringify(existingClasses));

            setAttr(this.modal, {
                className: 'modal',
            });

            this.renderClasses();
        }

        this.el.addEventListener('classCreated', event => {
            this.renderClasses();
        });

        this.calendar = new Calendar({
            id: '#color-calendar',
            primaryColor: 'var(--is-color-primary-high)',
            borderRadius: '5%',
        });
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}