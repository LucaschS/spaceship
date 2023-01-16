import { Spaceship } from './Spaceship.js'

class Game {
    #htmlElements = {
        spaceship: document.querySelector('[data-spaceship]'),
    };
    #ship = new Spaceship(this.#htmlElements.spaceship);
    //metoda uruchomieniowa. 
    init() {
        this.#ship.init();
    }
}


const game = new Game;
game.init();
window.game = game;

