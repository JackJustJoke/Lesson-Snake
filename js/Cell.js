export default class Cell {
    constructor(x,y, size) {
        this.x = x // индекс массива на карте
        this.y = y
        this.size = size
        this.color = '#00c68f'
    }

    draw(ctx){ // Переводим index ячеек в пиксели
        ctx.fillStyle = this.color // зелёный
        let [nx, ny] = [this.x*this.size, this.y*this.size]
        ctx.fillRect(nx+5, ny+5, this.size-10, this.size-10)

        
    }

}