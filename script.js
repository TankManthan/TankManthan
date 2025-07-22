let boxes = document.querySelectorAll(".box"); // access of boxes
let resetBtn = document.querySelector("#resetBtn"); // reset button access
let newBtn = document.querySelector("#newBtn"); // new game button access
let msgContainer = document.querySelector(".msg-container"); // msg-container access for hide msg
let msg = document.querySelector("#msg"); // p tag access of msg-container

let turnO = true;

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

const resetGame = () => {
    turnO = true;
    boxesEnabled();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");

}
count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        count++;
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = "O";
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
    })
})

const boxesEnabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        count = 0;
    }
}

const boxesDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    count = 0;
    boxesDisabled();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (count === 9) {
            count = 0;
            msg.innerText = `Try agian ! It's DRAW...`;
            msgContainer.classList.remove("hide");
            resetBtn.classList.add("hide");
            boxesDisabled();
        }
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }

        }
    }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
