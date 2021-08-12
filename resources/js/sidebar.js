import { el, mount } from "redom";

export class Sidebar {
    constructor() {
        this.el = el("div.menu-container",
            el("span.fas fa-times"),
            el("div.menu-wrapper",
                el("aside.menu",
                    el("ul.menu-list",
                        el("li",
                            el("a.is-active", el("span.fas fa-clipboard-list"), "Home"),
                            el("a", el("span.fas fa-chalkboard-teacher"), "Lectures"),
                            el("a", el("span.fas fa-calendar"), "Schedules"),
                            el("a", el("span.fas fa-pen-square"), "Notes"),
                            el("a", el("span.fas fa-cog"), "Settings"),

                        )
                    )
                )
            )
        );
    }
}

const sidebar = new Sidebar();

mount(document.body, sidebar);

// el("li",
//     this.onClickActive = el("a", {
//         href: "#"
//     }, "Active")
// ),