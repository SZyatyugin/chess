import pieceMove from "../services/piece-move.js"

const cells=(elem,row_index,board,selected)=>
    elem.map(
    (cell,elemIndex)=>{
       let piece=cell.piece;
        let isBlack=elemIndex%2 ^ row_index%2;
        return `<div class="cell ${isBlack?'black':'white'} 
        ${piece?piece.color==="black"?"piece-black":"piece-white":" "} 
        ${pieceMove(row_index,elemIndex,board,selected)?'moveable':""} 
        ${selected.piece&&selected.row===row_index&&selected.col===elemIndex?'selected':" "} "
        data-row=${row_index} data-col=${elemIndex}>${piece?piece.symbol:" "}</div>`}).join(' ');

const renderBoard=(board,selected)=>{
   
    const rows=board.map(
        (elem,row_index)=>{
     return `<div class="row">${cells(elem,row_index,board,selected)}</div>`}).join(' ');

    return `
    <div class="board">
    ${rows}
    </div>
    `  
}
;

export default renderBoard;