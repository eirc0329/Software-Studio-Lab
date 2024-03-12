import Component from  './component.js';
import Navbar from  './navbar.js';
import Board from  './board.js';
import Deck from  './deck.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);
        
        this.mode = 0;
        this.varid ;
        this.time = 6 ;

    
        this.navbar = new Navbar(root.querySelector('.navbar'));
        this.navbar.on('easy', this.handleEasy.bind(this));
        this.navbar.on('hard', this.handleHard.bind(this));
        this.navbar.on('nightmare', this.handleNight.bind(this));


        this.deck = new Deck(root.querySelector('.deck'));
        this.deck.changeNumCards(3);
        this.deck.on('wrongClick', this.handleDeckWrongClick.bind(this));
        this.deck.on('rightClick', this.handleDeckRightClick.bind(this));

        this.board = new Board(root.querySelector('.board'), this.deck.getPickedColor());

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleResetClick.bind(this));
    }

    handleEasy(firer) {

        this.root.style.backgroundColor = "#232323";

        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        firer.reset();

        
        this.deck.changeNumCards(3);

        this.mode = 0;
        this.navbar.easy.style.backgroundColor='steelblue';
        this.navbar.hard.style.backgroundColor='white';
        this.navbar.nightmare.style.backgroundColor='white';
        this.board.count.style.opacity = 0;
    }
    handleHard(firer) {
        this.root.style.backgroundColor = "#232323";

        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        firer.reset();
        
        this.deck.changeNumCards(6);

        this.mode = 1;
        this.navbar.easy.style.backgroundColor='white';
        this.navbar.hard.style.backgroundColor='steelblue';
        this.navbar.nightmare.style.backgroundColor='white';
        this.board.count.style.opacity = 0;

    }
    handleNight(firer) {
        this.root.style.backgroundColor = "#232323";

        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        firer.reset();

        
        this.deck.changeNumCards(6);

        this.mode = 2;
        this.navbar.easy.style.backgroundColor='white';
        this.navbar.hard.style.backgroundColor='white';
        this.navbar.nightmare.style.backgroundColor='steelblue';
        this.board.count.style.opacity = 1;
        this.count_down();
    }

    handleDeckWrongClick(firer) {
        this.board.showWrongMessage();
    }

    handleDeckRightClick(firer, pickedColor) {
        this.root.style.backgroundColor = pickedColor;
        this.board.showCorrectMessage();
        this.reset.showPlayAgain();
    }

    handleResetClick(firer) {
        this.root.style.backgroundColor = "#232323";

        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        firer.reset();
        if(this.mode == 0){
            this.deck.changeNumCards(3);
        }
    }
    count_down(){
        this.board.count.style.opacity = 1;
        clearInterval(this.varid);
        this.time = 6;
        this.varid = setInterval(this.tick, 1000);
    }
    tick() {
        // if(this.time == 0 ){
        //     if(this.board.messageDisplay.textContent !="Correct!")
        //         this.board.showTimeOut();
        //     this.board.count.style.opacity = 0;
        //     this.reset.resetDisplay.textContent = "Play Again";
        //     changeColors("#FFF");
        //     body.style.backgroundColor = this.deck.pickedColor;
        //     return;
        // }
        // this.time = this.time - 1;
        // this.board.count.textContent = this.time;
        // console.log(this.time);
    }

}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
