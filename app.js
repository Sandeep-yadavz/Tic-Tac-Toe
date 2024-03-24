let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".win-msg");
let msg=document.querySelector("#msg");

let turn_O=true; //playerX, playerY
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset_game=()=>{
    turn_O=true;
    enable_boxes();
    msgcontainer.classList.add("hide")

}

boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turn_O){
            box.innerText="O";
            turn_O=false;
        }else{
            box.innerText="X";
            turn_O=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

const disable=()=>{
    for (box of boxes){
        box.disabled=true;
    }
}

const enable_boxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const show_winner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disable();

}

const checkwinner=()=>{
    for (let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos1===pos3){
                console.log("winner",pos1)
                show_winner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",reset_game);
resetbtn.addEventListener("click",reset_game);