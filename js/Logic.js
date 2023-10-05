export default class Logic {
    constructor(cnv) {
        this.data = []
        this.cnv = cnv
        this.w = cnv.w/cnv.cellSize
        this.h = cnv.h/cnv.cellSize
        this.cellSize = cnv.cellSize
        this.createData()
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
}