import Cell from "./Cell.js";

export default class Food extends Cell {
    constructor(x,y,s){
        super(x,y,s)
        this.color = 'red'
    }
}