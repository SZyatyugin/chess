const boxEvents=()=>{
document.querySelectorAll(".piece").forEach((elem)=>elem.addEventListener('dragstart',(e)=>
{
    e.dataTransfer.setData('piece_type',e.target.id)}));
}
export default boxEvents;