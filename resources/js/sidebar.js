import { el, list, setAttr } from "redom";

class SidebarListItem {
    constructor() {
        this.itemPosition = -1;
        this.icon = el('span');
        this.labelText = el('span');
        this.labelWrapper = el('a', this.icon, this.labelText);

        this.el = el('li', this.labelWrapper);
    }

    onmount() {
        const itemClicked = new CustomEvent('sidebar:itemClicked', {
            bubbles: true,
            detail: {
                itemPosition: this.itemPosition
            },
        });

        this.labelWrapper.onclick = evt => {
            setAttr(this.labelWrapper, {
                className: 'is-active',
            });

            this.labelWrapper.dispatchEvent(itemClicked);
        };
    }

    update(data, index, items, context) {
        this.itemPosition = index;

        setAttr(this.icon, {
            className: data.icon
        });

        setAttr(this.labelText, {
            textContent: data.name
        });

        setAttr(this.labelWrapper, {
            href: data.link,
        });
    }

    clearClasses() {
        setAttr(this.labelWrapper, {
            className: '',
        });
    }
}

export class Sidebar {
    constructor() {
        const sidebarListData = [
            {
                name: 'Home',
                icon: 'fas fa-clipboard-list',
                link: '#home'
            },
            {
                name: 'Lectures',
                icon: 'fas fa-chalkboard-teacher',
                link: '#lectures'
            },
            {
                name: 'Schedules',
                icon: 'fas fa-calendar',
                link: '#home'
            },
            {
                name: 'Notes',
                icon: 'fas fa-pen-square',
                link: '#lectures'
            },
            {
                name: 'Settings',
                icon: 'fas fa-cog',
                link: '#lectures'
            }
        ];

        this.listItems = list('ul.menu-list', SidebarListItem);

        this.listItems.update(sidebarListData);

        this.menuWrapper = el("div.menu-wrapper", el("aside.menu", this.listItems));

        this.sidebarToggleButon = el('span.fas fa-times', { 'data-toggle': false });

        this.el = el("div.menu-container", this.sidebarToggleButon, this.menuWrapper);
    }

    onmount() {
        this.sidebarToggleButon.onclick = evt => {
            const sidebarToggled = this.sidebarToggleButon.getAttribute('data-toggle');

            if (sidebarToggled === 'false') {
                this.closeSidebar();
            } else {
                this.openSidebar();
            }
        };

        this.el.addEventListener('sidebar:itemClicked', event => {
            this.listItems.views
                .filter(view => view.itemPosition != event.detail.itemPosition)
                .forEach(element => element.clearClasses());
        }, false);
    }

    openSidebar() {
        this.sidebarToggleButon.className = 'fas fa-times';
        this.el.style.width = '';
        this.sidebarToggleButon.setAttribute('data-toggle', false);
    }

    closeSidebar() {
        this.sidebarToggleButon.className = 'fas fa-bars';
        this.el.style.width = '5rem';
        this.sidebarToggleButon.setAttribute('data-toggle', true);
    }
}
