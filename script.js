let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        console.log("Box was clicked🌝");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            turn0 = true;
            box.innerText = "X";
        }
        box.disabled = true;

        checkWinner();
    })
});
const disableboxes = function () {
    for (box of boxes) {
        box.disabled = true;

    }
}
const enableboxes = function () {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
}
const showWinner = function (winner) {
    msg.innerText = `🎉Congratulations🎉, Winner is ${winner} player`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}

const checkWinner = function () {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner🎉, pos1val");
                showWinner(pos1val);
                winnerfound = true;
                return;

            }
        }

    }
    let isTie = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            isTie = false;
        }
    });
    if (!winnerfound && isTie) {
        showTie();
    }
    

};

const resetgame = function () {
    turn0 = true;
    enableboxes();

}

newGame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);


let winnerfound = false;

const showTie = function () {
    msg.innerText = `😅 It's a tie!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}