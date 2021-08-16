import { el } from "redom";

export class HomePage {
    constructor() {
        this.el = el('div', [
            el('h1', 'Home Page'),
        ]);
    }

    update(data) {
        console.log(`Update function from home page`);
    }
}

{/* <div class="columns">
    <div class="column">
        <div class="box">
            <h1>Your Classes</h1>
        </div>
    </div>
    <div class="column">
        <div class="box">
            <h1>Your Assignments</h1>
        </div>
    </div>
</div> */}