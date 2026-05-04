

let button = document.querySelectorAll(".button");
let reset = document.querySelector("#reset");
let newgames = document.querySelector("#newgame");
let container = document.querySelector(".outerhead");
let win = document.querySelector("#End");
let draw = document.querySelector(".Drawout")

const winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turno = true;
let Endgame = false;

button.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("User clicked the box!");
        if(turno) {
            button.innerText = "O";
            turno = false;
        } else {
            button.innerText = "X";
            turno = true;
        }
        button.disabled = true;

        checkWinning(); 
        if(!Endgame) {
    checkdraw();
}
    });
});

const checkWinning = () => {
    for (let pattern of winning) {
        let pos1 =  button[pattern[0]].innerText;
    let pos2 =  button[pattern[1]].innerText;
    let pos3 =  button[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!="") {
        if(pos1===pos2 && pos2===pos3 && pos3===pos1) 
        { console.log("Winner!", pos1);
            showWin(pos1);

        }
    }
    }  
};

const showWin = (winner) => { 
    Endgame = true;
    win.innerText = `Congratulations! The winner is ${winner}`;
    container.classList.add("show");
    button.forEach(btn => btn.disabled = true);
}


reset.addEventListener("click", () => {
    button.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    turno = true;
    container.classList.remove("show");
    draw.classList.remove("ShowDraw");
    Endgame = false;
});

newgames.addEventListener("click", () => {
    button.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });

    turno = true; 

    container.classList.remove("show"); 
    draw.classList.remove("ShowDraw");
    Endgame = false;

});

const checkdraw = () => {
   let isDraw = true;
   
  button.forEach(btn => {
    if(btn.innerText === "") {
        isDraw = false;
    }
  });  

  if(isDraw) {
    showingDraw();
  }
    
};
        

const showingDraw = () => {
   draw.classList.add("ShowDraw");
   button.forEach(btn => btn.disabled = true);
     

}

