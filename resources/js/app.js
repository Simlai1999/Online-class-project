// import redom from "https://redom.js.org/redom.es.min.js";
import * as redom from "../../node_modules/redom/dist/redom.min.js";
console.log(redom);
const {el, mount} = redom;
console.log(mount);
    class Hello {
      constructor() {
        this.el = el("h1");
      }
      update(data) {
        this.el.textContent = "Hello " + data + "!";
      }
    }

    const hello = new Hello();

    hello.update("RE:DOM!");

    mount(document.body, hello);