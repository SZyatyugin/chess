const backEvents=(store,render)=>{

    document.querySelector('#back').addEventListener('click',()=>
    {
        const data=store.back();
        render();


    }
    
    )
}




export default backEvents;