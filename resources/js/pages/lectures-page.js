import { el } from "redom";

export class LecturesPage {
    constructor() {
        this.videoContainer1 = el('div.video-container',
            el('span.fas fa-play')
        );
        this.videoContainer2 = el('div.video-container',
            el('span.fas fa-play')
        );
        this.videoContainer3 = el('div.video-container',
            el('span.fas fa-play')
        );

        this.el = el('div.box.lectures-container',
            el('h1', 'Your Recorded Lectures'),
            el('input#searchbar', {
                type: 'text',
                name: 'search',
                placeholder: 'Search..'
            }),
            this.videoContainer1, this.videoContainer2, this.videoContainer3
        );
    }

    update(data) {
        console.log(`Update function from lectures page`);
    }
}