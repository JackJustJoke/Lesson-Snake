export default class Canvas {
    constructor(){
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')
        this.w = 700
        this.h = 400
        this.cellSize = 25
    }

    resize() {
        this.canvas.width  = this.w
        this.canvas.height = this.h
    }

    lines() {
        this.ctx.fillStyle = 'rgba(200,200,200, .2)'
        for (let y = 0; y < this.h; y += this.cellSize) {
            this.ctx.fillRect(0, y,  this.w, 1)
        }
        for (let x = 0; x < this.w; x += this.cellSize) {
            this.ctx.fillRect(x, 0, 1, this.h)
        }
    }

    update() {
        this.resize()
        this.lines()
    }
}

