import { el, setAttr } from "redom";

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

        this.navbarDropdown = el("div.navbar-item has-dropdown",
            el('div.dropdown-trigger',
                el("a.navbar-link", { href: "#" }, "Teacher"),
                el("div.navbar-dropdown is-right", this.dropdownList)
            )
        );

        this.el = el("nav.navbar is-fixed-top", this.navBrand,
            el("div.navbar-menu",
                el("div.navbar-end",
                    el("a.navbar-item", { href: "#" }, el("span.fas fa-bell")),
                    this.navbarDropdown
                )
            )
        );
    }

    onmount() {
        this.navbarDropdown.onclick = evt => {
            evt.preventDefault();

            setAttr(this.navbarDropdown, {
                className: 'navbar-item has-dropdown is-active'
            });
        }
    }
}
