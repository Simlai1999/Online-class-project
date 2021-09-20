import { el } from "redom";

export class SettingsPage {
    constructor() {
        this.saveBtn = el('button.button is-primary save', 'Save');

        this.uploadPicture = el('div.wrapper',
            el('form', { id: 'uploadPic' },
                el('input.file-input', {
                    type: 'file',
                    name: 'file',
                    hidden: true,
                }),
                el('i.fas fa-cloud-upload-alt'),
                el('p.text', 'Browse file to upload')
            )
        );

        this.form =
            el('form', { id: 'Profile' },
                el('h1.heading', 'Profile Settings', this.saveBtn),
                el('div.container',
                    el('div.field name',
                        el('label.label', 'Name'),
                        el('div.control',
                            el('input.input', {
                                type: 'text',
                                placeholder: 'name',
                                id: 'subname',
                                oninput: (e) => this.Name = e.target.value
                            })
                        )
                    ),
                    el('div.field email',
                        el('label.label', 'Email Adress'),
                        el('div.control',
                            el('input.input email', {
                                type: 'text',
                                placeholder: 'example@email.com',
                                id: 'time',
                                oninput: (e) => this.email = e.target.value
                            })
                        )
                    ),
                    el('div.field teacherId',
                        el('label.label', "Teacher's ID"),
                        el('div.control',
                            el('input.input', {
                                type: 'text',
                                placeholder: '1234',
                                id: 'teacherId',
                                oninput: (e) => this.teacherId = e.target.value
                            })
                        )
                    ),
                    this.uploadPicture
                )
            );

        this.uploadedArea = el('section.uploaded-area')

        this.el = el('div.box.settings-container',
            this.form,
            this.uploadedArea
        );
    }

    update(data) {
        console.log(`Update function from Settings page`);
    }
}