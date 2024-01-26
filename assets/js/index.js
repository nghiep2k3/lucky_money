const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift_box');
const giftContainer = document.querySelector('.gift_container');

click.addEventListener('click', ()=>{
    if(click.className === "click"){
        click.classList.add('active');
        giftBox.classList.add('active');
        giftContainer.classList.add('active');
        

    }
    else{
        giftBox.classList.remove('active');
        click.classList.remove('active');
        giftContainer.classList.remove('active');
        
    }
    
})