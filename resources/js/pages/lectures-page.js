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

        this.videoContainer4 = el('div.video-container',
            el('span.fas fa-play')
        );
        this.videoContainer5 = el('div.video-container',
            el('span.fas fa-play')
        );
        this.videoContainer6 = el('div.video-container',
            el('span.fas fa-play')
        );

        this.header = el('div.header',
            el('h1', 'Your Recorded Lectures'),
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
            this.videoContainer1, this.videoContainer2, 
            this.videoContainer3, this.videoContainer4,
            this.videoContainer5, this.videoContainer6
        );

        this.el = el('div.box.lectures-container',
            this.header, this.mainContent
        );
    }

    update(data) {
        console.log(`Update function from lectures page`);
    }
}