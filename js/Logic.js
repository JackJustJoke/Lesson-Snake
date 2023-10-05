import Cell from "./Cell.js";
import Food from "./Food.js";

export default class Logic {
    constructor(cnv) {
        this.data = []
        this.cnv = cnv
        this.w = cnv.w/cnv.cellSize
        this.h = cnv.h/cnv.cellSize
        this.cellSize = cnv.cellSize

        this.snake = []
        this.snakeSize = 3

        this.dx = 0
        this.dy = -1

        this.food = null
        this.score = 0

        this.end = false

        this.keyDown = false

        this.createData()
        this.createSnake()
        this.createFood()
        this.control()
    }

    createData() {
        this.data = [];
        for(let y = 0; y < this.h; y++){
            this.data.push([])
            for (let x = 0; x < this.w; x++) {
                this.data[y].push(0)
            }
        }
        console.log(this.data)
    }

    createSnake() {
        this.snake.push(new Cell(Math.round(this.w/2), Math.round(this.h/2), this.cellSize))
        this.snake.push(new Cell(Math.round(this.w/2), Math.round(this.h/2+1), this.cellSize))
        this.snake.push(new Cell(Math.round(this.w/2), Math.round(this.h/2+2), this.cellSize))
    }

    draw(){
        this.snake.forEach(el => {
            el.draw(this.cnv.ctx)
        });
        this.food.draw(this.cnv.ctx)
    }

    control(){
        addEventListener('keydown', ({code})=> {
            console.log(code)
            if (this.keyDown) return
            switch (code) {
                case 'ArrowLeft':
                    this.dy = 0
                    this.dx = this.dx != 1 ? -1 : 1
                    break;
                case 'ArrowUp':
                    this.dx = 0
                    this.dy = this.dy != 1 ? -1 : 1
                    break;
                case 'ArrowRight':
                    this.dy = 0
                    this.dx = this.dx != -1 ? 1 : -1
                    break;
                case 'ArrowDown':
                    this.dx = 0
                    this.dy = this.dy != -1 ? 1 : -1
                    break;
                default:
                    break;
            }
            this.keyDown = true
        })
    }

    snakeMove() {
        let head = this.snake[0]
        let [x, y] = [head.x+this.dx, head.y+this.dy]
        x = x < 0 ? this.w - 1 : x > this.w - 1 ? 0 : x
        y = y < 0 ? this.h - 1 : y > this.h - 1 ? 0 : y
        this.snake.unshift(new Cell(x, y, this.cellSize))
        if (this.snake.length > this.snakeSize) {
            this.snake.pop()
        }

        
        this.snake.forEach((el, i) => {
            if ( i > 0 && el.x == x && el.y == y) {
                this.end = true
            }
        })


        head = this.snake[0]
        if (head.x == this.food.x && head.y == this.food.y) {
            this.snakeSize++
            this.score++
            this.createFood()
        }

        this.draw()
    }

    createFood() {
        let random =(min, max)=> Math.round(Math.random()*(max-min)+min)
        this.createData()
        let snakePosition = this.snake.map((el)=>{ // отлов позиции змейки
            return {x: el.x,y: el.y}
        })
        snakePosition.forEach(el => this.data[el.y][el.x] = 1)
        let openCell = this.data.slice() //скопировали массив
        openCell = openCell.map((arr, y) => arr.map((el, x) => {
            return el != 1 ? {x:x, y:y} : false
        }).filter(el => el)).flat() // 
        console.log(openCell)
        let positionFood = openCell[random(0, openCell.length-1)]
        this.food = new Food(positionFood.x, positionFood.y, this.cellSize)
    }

    update() {
        this.snakeMove()
    }
}