import { el, mount } from "redom";

export class Navbar {
    constructor() {
        console.log("one");
        this.el = el("nav.navbar is-fixed-top", { style: "left: 15rem;" }, 
            el("div.navbar-brand", 
                el("a.navbar-item", {href: "#"}, "LOGO")
            ),
            el("div.navbar-menu", 
                el("div.navbar-end", 
                    el("a.navbar-item", {href: "#"}, el("span.fas fa-bell")),
                    el("div.navbar-item has-dropdown is-hoverable", 
                        el("a.navbar-link", { href: "#" }, "Student"),
                        el("div.navbar-dropdown is-right", 
                            el("a.navbar-item", { href: "#" }, el("span.fas fa-user"), "Personal Details"),
                            el("a.navbar-item", { href: "#" }, el("span.fas fa-trophy"), "Achivements"),
                            el("a.navbar-item", { href: "#" }, el("span.fas fa-question-circle"), "Help"),
                            el("a.navbar-item", { href: "#" }, el("span.fas fa-sign-out-alt"), "Logout"),
                        )
                    )
                )
            )
        );
    }
    onmount() {
        console.log("Two");
    }
}
mount(document.body, new Navbar());