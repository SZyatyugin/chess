import { BOX_PIECES } from "../figures/figures.js";
import pieceMove from "../services/piece-move.js"

const BoardEvents=(store,render)=>{
    

   document.querySelectorAll('.cell').forEach((elem)=>{
const {row,col}=elem.dataset;
       elem.addEventListener('dragover',(event)=>event.preventDefault(),false);

       elem.addEventListener('drop',
       (event)=>{
        event.preventDefault();
    
        let data_elem=event.dataTransfer.getData('piece_type');
        const piece=BOX_PIECES.find((elem)=>elem.id===data_elem);
        console.log(row,col,data_elem,piece);
        debugger;
        let data=store.getStore();
        data.board[+row][+col].piece=piece;
       store.setStore(data);
        render();
    
       }) 
elem.addEventListener('click',()=>{
    let data=store.getStore();
    const piece=data.board[+row][+col].piece;
    
if(!piece){
    if(pieceMove(+row,+col,data.board,data.selected)){
        
        data.board[+row][+col].piece=data.selected.piece;
        data.board[data.selected.row][data.selected.col].piece=null;
        data.selected.row=+row;
        data.selected.col=+col;
       store.setStore(data);
    
}
     
}else{
    data.selected.piece=piece;
    data.selected.row=+row;
    data.selected.col=+col;
    store.setStore(data);
   
}
render();
}
,false)

});

}


export default BoardEvents;