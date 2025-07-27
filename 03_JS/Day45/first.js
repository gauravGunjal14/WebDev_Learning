let turn = "O";

// Patterns
let winner = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
]

const board_value = new Array(9).fill("E");

const board = document.querySelector(".board");

// printing O and X
board.addEventListener("click", (event)=>{
    // console.log(event.target);
    
    const element = event.target;
    if(turn === "O"){
        element.innerHTML = "O";
        board_value[element.id] = "O";
        turn = "X";
    }
    else{
        element.innerHTML = "X";
        board_value[element.id] = "X";
        turn = "O";
    }
});
