import { el } from "redom";

export class Navbar {
    constructor() {
        this.dropdownList = [
            el("a.navbar-item", { href: "#" }, el("span.fas fa-user"), "Personal Details"),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-trophy"), "Achivements"),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-question-circle"), "Help"),
            el('hr.dropdown-divider'),
            el("a.navbar-item", { href: "#" }, el("span.fas fa-sign-out-alt"), "Logout"),
        ];

        this.navBrand = el("div.navbar-brand",
            el("a.navbar-item", { href: "#" }, "LOGO")
        );

        this.navbarDropdown = el("div.navbar-item has-dropdown", { 'data-toggle': true },
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
            const dropdownToggled = this.navbarDropdown.getAttribute('data-toggle');
            dropdownToggled === 'false' ? this.closeDropdown() : this.openDropdown();
        };
    }

    openDropdown() {
        this.navbarDropdown.className = 'navbar-item has-dropdown is-active';
        this.navbarDropdown.setAttribute('data-toggle', false);
    }

    closeDropdown() {
        this.navbarDropdown.className = 'navbar-item has-dropdown';
        this.navbarDropdown.setAttribute('data-toggle', true);
    }
}
