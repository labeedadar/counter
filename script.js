const display = document.querySelector('.display');
// display.innerHTML = 'cools';

const plus =document.querySelector('.plus');
const reset =document.querySelector('.reset');
const minus =document.querySelector('.minus');

let counter = 0;

//PLUS LOGIC
plus.addEventListener("click", ()=> {
    counter++;
    display.innerHTML = counter;
})
//MINUS LOGIC
minus.addEventListener("click", ()=> {
    counter === 0 ? alert("Can not perform this action") : counter--;
    display.innerHTML = counter;
})
//RESET LOGIC
reset.addEventListener("click", ()=> {
    counter = 0;
    display.innerHTML = '';
    
})
