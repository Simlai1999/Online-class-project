import { el, mount } from "redom";

export class Sidebar {
    constructor() {
        this.listItems = [
            el("a", el("span.fas fa-clipboard-list"), "Home"),
            el("a", el("span.fas fa-chalkboard-teacher"), "Lectures"),
            el("a", el("span.fas fa-calendar"), "Schedules"),
            el("a", el("span.fas fa-pen-square"), "Notes"),
            el("a", el("span.fas fa-cog"), "Settings"),
        ];

        this.menuWrapper = el("div.menu-wrapper",
            el("aside.menu",
                el("ul.menu-list",
                    el("li", this.listItems)
                )
            )
        );

        this.closeButton = el("span.fas fa-times");

        this.el = el("div.menu-container", this.closeButton, this.menuWrapper);
    }

    onmount() {

        this.closeButton.onclick = evt => {
            this.closeButton.className = 'fas fa-bars';
            this.el.style.width = '5rem';
        };

        let self = this;

        this.listItems.forEach(function (element) {
            element.onclick = evt => {

                self.listItems.forEach(function (ele) {
                    ele.className = '';
                })

                element.className = 'is-active';
            }
        });
    }
}

mount(document.body, new Sidebar());