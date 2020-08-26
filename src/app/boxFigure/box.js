import { BOX_PIECES } from "../figures/figures.js";

const renderFigures=(elems)=>elems.map((elem)=>{return `<div class='piece' draggable='true' id=${elem.id}>${elem.symbol}</div>`}).join('');

const renderBox=(figure)=>
`
<div class="box">
<div class='box-pieces box-white'>${renderFigures(figure.white)}</div>
<div class='box-pieces box-black'>${renderFigures(figure.black)}</div>
</div>
`;


export default renderBox;