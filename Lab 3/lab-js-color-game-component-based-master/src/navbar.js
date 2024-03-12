import Component from './component.js';

import './navbar.css';

/*
 * [Event name: params]
 * none
 */
export default class Navbar extends Component {
    static getRootClass() {
        return '.navbar';
    }

    constructor(root) {
        super(root);
        

        this.brand = root.querySelector('.brand');

        this.easy  = root.querySelector('#easy');
        this.easy.addEventListener("click", this.handleEasy.bind(this));
        this.hard  = root.querySelector('#hard');
        this.hard.addEventListener("click", this.handleHard.bind(this));
        this.nightmare  = root.querySelector('#nightmare');
        this.nightmare.addEventListener("click", this.handleNight.bind(this));

        this.reset();
    }

    reset() {
        // do nothing
    }
    handleEasy(e) {
        this.fire('easy');
    }
    handleHard(e) {
        this.fire('hard');
    }
    handleNight(e) {
        this.fire('nightmare');
    }
}
