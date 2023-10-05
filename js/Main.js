import Canvas from "./Canvas.js";
import Logic from "./Logic.js";

class Main {

    static start(){
        this.canvas = new Canvas() // вызов экземпляра
        this.speed = 500

        this.logic = new Logic(this.canvas)


        this.#gameLoop()
    }

    static #gameLoop() {
        this.canvas.update()
        setTimeout(this.#gameLoop.bind(this), this.speed)
    }
}

Main.start()