

const pieceMove=(row,col,board,selected)=>{

if(!selected.piece||board[row][col].piece){
    return false
}
switch(selected.piece.type){
    case 'Rook':{
        return (row===selected.row || col===selected.col)
    }
    case 'Pawn':    
    case 'Bishop':
    case 'King':    
    return false
}
    return board;
}

export default pieceMove;