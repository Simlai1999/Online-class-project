import { mount } from 'redom';
import { Navbar } from './navbar.js';
import { Sidebar } from './sidebar.js';
import { HomePage } from './pages/home-page.js';
import { LecturesPage } from './pages/lectures-page.js';
import { App, goto } from './main';

mount(document.body, new Sidebar());
mount(document.body, new Navbar());

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
}).middlewares([new AuthMiddleware()]).start();
