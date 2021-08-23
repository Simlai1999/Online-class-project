import { el } from "redom";

export class Navbar {
    constructor() {
        this.dropdownList = [
            el("a.navbar-item", { href: "#" }, el("span.fas fa-user"), "Personal Details"),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-trophy"), "Achivements"),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-question-circle"), "Help"),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-sign-out-alt"), "Logout"),
        ];

        this.navBrand = el("div.navbar-brand",
            el("a.navbar-item", { href: "#" }, "LOGO")
        );

        this.el = el("nav.navbar is-fixed-top", this.navBrand, { style: "left: 17rem;" },

            el("div.navbar-menu",
                el("div.navbar-end",
                    el("a.navbar-item", { href: "#" }, el("span.fas fa-bell")),
                    el("div.navbar-item has-dropdown is-hoverable",
                        el("a.navbar-link", { href: "#" }, "Teacher"),
                        el("div.navbar-dropdown is-right", this.dropdownList)
                    )
                )
            )
        );
    }
}
