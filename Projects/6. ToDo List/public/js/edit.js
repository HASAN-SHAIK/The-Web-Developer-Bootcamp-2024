document.addEventListener('DOMcontentLoaded',async()=>{
    const IdButton = document.querySelector('#idButton');
    const form = document.querySelector('#form');
    var todoId;
    IdButton.addEventListener('click',()=>{
        todoId = IdButton.getAttribute('data-id');
        console.log("sample");
        setTimeout(() => {
            console.log("Waited for 5 seconds");
        }, 5000);
    });
    
});