import { el,mount } from 'redom';
import { Navbar } from './navbar.js';
import { Sidebar } from './sidebar.js';
import { HomePage } from './pages/home-page.js';
import { LecturesPage } from './pages/lectures-page.js';
import { SchedulesPage } from './pages/schedules-page';
import { ClassesPage } from './pages/classes-page';
import { App, goto } from './main';

class Root {
    constructor() {
        this.el = el('div#root');
    }
}
mount(document.body, new Root());

class NavContainer {
    constructor() {
        this.el = el('div.is-flex', { id: 'nav-container' });
    }
}
mount(document.getElementById('root'), new NavContainer());
mount(document.getElementById('nav-container'), new Navbar());
mount(document.getElementById('nav-container'), new Sidebar());

class AuthMiddleware {
        constructor() { }
    
    exec(currentView, nextView, params) {
        console.log(`From custom Middleware`);
    }
}

const app = new App().routes({
    home: HomePage,
    default: HomePage,
    lectures: LecturesPage,
    schedules: SchedulesPage,
    classes: ClassesPage,
}).middlewares([new AuthMiddleware()]).start(document.getElementById('nav-container'));