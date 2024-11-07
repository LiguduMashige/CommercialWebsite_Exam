const game_display = document.getElementsByClassName("game-display");

console.log(game_display.length);

function reverse_even(){
    for(let i = 1; i < game_display.length; i+=2){
        game_display[i].setAttribute("id", "reverse");
    }
}

reverse_even();