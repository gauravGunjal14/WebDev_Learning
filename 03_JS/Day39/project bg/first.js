// const bg = document.querySelector('body');

// const red = document.querySelector('#red');
// const blue = document.querySelector('#blue');
// const green = document.querySelector('#green');
// const orange = document.querySelector('#orange');
// const purple = document.querySelector('#purple');

// red.addEventListener('click', () => {
//     bg.style.backgroundColor = 'red';
// });

// blue.addEventListener('click', () => {
//     bg.style.backgroundColor = 'blue';
// });

// green.addEventListener('click', () => {
//     bg.style.backgroundColor = 'green';
// });

// orange.addEventListener('click', () => {
//     bg.style.backgroundColor = 'orange';
// });

// purple.addEventListener('click', () => {
//     bg.style.backgroundColor = 'purple';
// });



// ********************************************************

const buttons = document.querySelectorAll('button');
const bg = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        bg.style.backgroundColor = button.id;
    })
});