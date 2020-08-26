const PIECES = {
    Pawn: {
      type: 'Pawn',
      symbol: '♙',
      
    },
    Bishop: {
      type: 'Bishop',
      symbol: '♗',
      
    },
    Knight: {
      type: 'Knight',
      symbol: '♘',
     
    },
    Rook: {
      type: 'Rook',
      symbol: '♖',
      
    },
    Queen: {
      type: 'Queen',
      symbol: '♕',
      
    },
    King: {
      type: 'King',
      symbol: '♔',
      
    },
  };
  const getModifiedpiece=(piece,color,id)=>({...piece,color,id});
  export const BOX_PIECES=[
    ...Object.keys(PIECES).map((key)=>getModifiedpiece(PIECES[key],'black',`${PIECES[key].type}.black`)),
    ...Object.keys(PIECES).map((key)=>getModifiedpiece(PIECES[key], 'white',`${PIECES[key].type}.white`)),
  ];
  
  export default PIECES;