let player = document.getElementById("player");
let computer = document.getElementById("computer");
let gameConcept = ["🫱", "✌️", "✊"];
let result = document.getElementById("result");
function game(symbol) {
    let condition = Math.random() * gameConcept.length;
    let condition2 = Math.floor(condition);
    computer.innerHTML = gameConcept[condition2]
    player.innerHTML = symbol
    if (symbol === gameConcept[condition2]) {
        result.innerHTML = "Draw";
        result.style.backgroundColor = "yellow";
        result.style.color="black";
    }
    else if(symbol=="🫱" && gameConcept[condition2]=="✌️"){
        result.innerHTML = "Lost"
        result.style.backgroundColor = "red";
        result.style.color="white";
    }
    else if(symbol=="✌️" && gameConcept[condition2]=="✊"){
        result.innerHTML = "Lost"
        result.style.backgroundColor = "red";
        result.style.color="white";
    }
     else if(symbol=="✊" && gameConcept[condition2]=="🫱"){
        result.innerHTML = "Lost"
        result.style.backgroundColor = "red";
        result.style.color="white";
    }

    else{
        result.innerHTML = "Won"
        result.style.backgroundColor = "green";
        result.style.color="white";
    }

    
    
}
