let user1 = prompt("Enter Player-1 name");
let user2 = prompt("Enter Player-2 name");

while ((user1 == null || user2 == null) || (user1 == '' || user2 == '') ) {
    alert("Please enter Valid name");
    user1 = prompt("Enter Player-1 name");
    user2 = prompt("Enter Player-2 name");
}

const x0 = document.getElementById("x1");
const x1 = document.getElementById("x2");
const x2 = document.getElementById("x3");
const x3 = document.getElementById("x4");
const x4 = document.getElementById("x5");
const x5 = document.getElementById("x6");
const x6 = document.getElementById("x7");
const x7 = document.getElementById("x8");
const x8 = document.getElementById("x9");


const player1 = document.getElementById("player1");
player1.innerHTML += " " + user1;
const player2 = document.getElementById("player2");
player2.innerHTML += " " + user2;
const LeftDiognal = document.getElementById("line1");
const rightDiognal = document.getElementById("line2");

const vertical = document.getElementById("line3");
const horizontal = document.getElementById("line4");

let current = 0;

player1.style.borderBottom = "5px double white";

function IsClick(event) {

    if (current == 0) {
        event.value = "X";
        event.style.color = "yellow";
        current = 1;
        console.log(event.id);
        player2.style.borderBottom = "5px double white";
        player1.style.borderBottom = "none";

    }
    else if (current == 1) {
        event.value = "O";
        current = 0;
        event.disable;
        console.log(event.id);
        document.getElementById(event.id).disabled = true;
        player1.style.borderBottom = " 5px double white";
        player2.style.borderBottom = "none";
    }
    IsWinner();
}
const winnerText = document.getElementById('winnerText');
function IsWinner() {
    if (x0.value == "X" && x4.value == "X" && x8.value == "X") {
        console.log("X winner");
        rightDiognal.style.display = 'block';
        Greeting(0);
        disabled();
    }
    else if (x1.value == "X" && x4.value == "X" && x7.value == "X") {
        console.log("X winner");
        vertical.style.display = 'block';
        vertical.style.left = '15%';
        Greeting(0);
        disabled();
    }
    else if (x2.value == "X" && x4.value == "X" && x6.value == "X") {
        console.log("X winner");
        LeftDiognal.style.display = 'block';
        Greeting(0);
        disabled();
    }
    else if (x0.value == "X" && x1.value == "X" && x2.value == "X") {
        console.log("X winner");
        horizontal.style.display = 'block';
        horizontal.style.top = '15%';
        Greeting(0);
        disabled();
    }
    else if (x3.value == "X" && x4.value == "X" && x5.value == "X") {
        console.log("X winner");
        horizontal.style.display = 'block';
        Greeting(0);
        disabled();
    }
    else if (x6.value == "X" && x7.value == "X" && x8.value == "X") {
        console.log("X winner");
        horizontal.style.display = 'block';
        horizontal.style.top = '83%';
        Greeting(0);
        disabled();
    }
    else if (x0.value == "X" && x3.value == "X" && x6.value == "X") {
        console.log("X winner");
        vertical.style.display = 'block';
        Greeting(0);
        disabled();
    }
    else if (x2.value == "X" && x5.value == "X" && x8.value == "X") {
        console.log("X winner");
        vertical.style.display = 'block';
        vertical.style.left = '46%';
        Greeting(0);
        disabled();
    }
    else if (x0.value == "O" && x4.value == "O" && x8.value == "O") {
        console.log("O winner");
        rightDiognal.style.display = 'block';
        Greeting(1);
        disabled();
    }
    else if (x1.value == "O" && x4.value == "O" && x7.value == "O") {
        console.log("O winner");
        vertical.style.display = 'block';
        vertical.style.left = '15%';
        Greeting(1);
        disabled();
    }
    else if (x2.value == "O" && x4.value == "O" && x6.value == "O") {
        console.log("O winner");
        LeftDiognal.style.display = 'block';
        Greeting(1);
        disabled();
    }
    else if (x0.value == "O" && x1.value == "O" && x2.value == "O") {
        console.log("O winner");
        horizontal.style.display = 'block';
        horizontal.style.top = '15%';
        Greeting(1);
        disabled();
    }
    else if (x3.value == "O" && x4.value == "O" && x5.value == "O") {
        console.log("O winner");
        horizontal.style.display = 'block';
        Greeting(1);
        disabled();
    }
    else if (x6.value == "O" && x7.value == "O" && x8.value == "O") {
        console.log("O winner");
        horizontal.style.display = 'block';
        horizontal.style.top = '83%';
        Greeting(1);
        disabled();
    }
    else if (x0.value == "O" && x3.value == "O" && x6.value == "O") {
        console.log("O winner");
        vertical.style.display = 'block';
        Greeting(1);
        disabled();
    }
    else if (x2.value == "O" && x5.value == "O" && x8.value == "O") {
        console.log("O winner");
        vertical.style.display = 'block';
        vertical.style.left = '46%';
        Greeting(1);
        disabled();
    }
    else if (
        (x0.value == "X" || x0.value == "O") &&
        (x1.value == "X" || x1.value == "O") &&
        (x2.value == "X" || x2.value == "O") &&
        (x3.value == "X" || x3.value == "O") &&
        (x4.value == "X" || x4.value == "O") &&
        (x5.value == "X" || x5.value == "O") &&
        (x6.value == "X" || x6.value == "O") &&
        (x7.value == "X" || x7.value == "O") &&
        (x8.value == "X" || x8.value == "O")
    ) {
        rightDiognal.style.display = 'block';
        LeftDiognal.style.display = 'block';
        winnerText.innerHTML = "Match was Draw";
        disabled();
    }
}
function Greeting(num) {
    if (num == 0) {
        document.getElementById("TopImg").style.display = "block";
        document.getElementById("bottom").style.display = "block";
        document.getElementById("conImg").style.display = "block";
        winnerText.innerHTML = user1 +" WAS WINNER";
        player1.style.borderBottom = "0px solid white";
        player2.style.borderBottom = "0px solid white";

    }
    else if (num == 1) {
        document.getElementById("conImg").style.display = "block";
        document.getElementById("TopImg").style.display = "block";
        document.getElementById("bottom").style.display = "block";
        winnerText.innerHTML = user2 +" WAS WINNER";
        player1.style.borderBottom = "0px solid white";
        player2.style.borderBottom = "0px solid white";
    }
}
function disabled() {
    x0.disabled = true;
    x1.disabled = true;
    x2.disabled = true;
    x3.disabled = true;
    x4.disabled = true;
    x5.disabled = true;
    x6.disabled = true;
    x7.disabled = true;
    x8.disabled = true;
}
const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    window.location.reload();
});

