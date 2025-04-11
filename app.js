let GameSeq=[];
let UserSeq=[];
let buttons=["red","yellow","green","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
})

function check(idx){
    if(UserSeq[idx]===GameSeq[idx]){
        if(UserSeq.length==GameSeq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        h2.innerText=`Game Over! Your Score was ${level-1} \n Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },250);
        reset();
    }
}

function reset(){
    started=false;
    level=0;
    UserSeq=[];
    GameSeq=[];
}

function levelup(){
    UserSeq=[];
    level++;
    h2.innerText=`Level ${level}`; 
    let ri=Math.floor(Math.random()*3);
    let rc=buttons[ri];
    let randbtn=document.querySelector(`.${rc}`);
    GameSeq.push(rc);
    btnFlash(randbtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function btnpress(){
    let btn=this;
    btnFlash(btn);
    let usercolor=btn.getAttribute("id");
    UserSeq.push(usercolor);
    check(UserSeq.length-1);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns){
    btn.addEventListener("click",btnpress);
}