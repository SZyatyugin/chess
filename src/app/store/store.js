import PIECES, { BOX_PIECES } from "../figures/figures.js";
const CELL_COUNT=8;

const DEFAULT_CELL={
    piece:null,
    move:false
}

const DEFAULT_STORE={
    board: new Array(CELL_COUNT).fill(null).map(()=>new Array(CELL_COUNT).fill(null).map(()=>({...DEFAULT_CELL}))),
    selected:{
        piece:null,
        row:0,
        col:0
    },
    figure:{
        white:BOX_PIECES.filter((piece)=>piece.color==='white'),
        black:BOX_PIECES.filter((piece)=>piece.color==='black'),
   
    },
};
console.log(DEFAULT_STORE.figure.white)

export default class Store{
    constructor(){
        this.history=[];
        this.store=JSON.parse(JSON.stringify( DEFAULT_STORE));
    }
    
    getStore(){
return JSON.parse(JSON.stringify(this.store));
    }
    setStore(store){
this.store={...this.store,...store};
this.history.push(JSON.stringify(this.store));
    }
    back(){
        const version=this.history.pop();
        this.store=version ? JSON.parse(version):DEFAULT_STORE;

    }
}
