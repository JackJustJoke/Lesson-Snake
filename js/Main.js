// Created DTHWalker School && JackJustJoke

import Canvas from "./Canvas.js";
import Logic from "./Logic.js";

class Main {

    static start(){
        this.canvas = new Canvas() // вызов экземпляра
        this.speed = 100

        this.logic = new Logic(this.canvas)


        this.#gameLoop()

    }

    static #end() {
        let block = document.createElement('div')
        block.className = 'end'
        block.innerHTML = `
            Счёт ${this.logic.score} <br>
            <button>RESTART</button>
        `
        block.querySelector('button').onclick = () => {
            block.remove()
            this.start()
        }
        document.body.append(block)

    }

    static #gameLoop() {
        this.canvas.update()
        this.logic.update()
        if (this.logic.end) {
            this.#end()
        } else {
            this.logic.keyDown = false
            setTimeout(this.#gameLoop.bind(this), this.speed)
        }
        
    }
}

Main.start()