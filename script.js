let turn = "x";
let isGameOver = "false"

const changeturn = (turn) => {
    return turn === "x" ? "O" : "x";
};



const checkwin = () => {
      let bxxs = Array.from(document.getElementsByClassName("boxtext"));
      winconditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,4,8],
        [0,4,8],
        [2,4,6]
      ]

let someonewon = false ;
      winconditions.forEach(e=>{
        if(bxxs[e[0]] &&
            bxxs[e[1]] &&
            bxxs[e[2]] &&
            bxxs[e[0]].innerHTML !=='' &&
            bxxs[e[0]].innerHTML === bxxs[e[1]].innerHTML &&
            bxxs[e[1]].innerHTML === bxxs[e[2]].innerHTML 
         ) {
            document.querySelector(".winmessage").innerHTML = bxxs[e[0]].innerHTML + " - won !";
              isGameOver = true ;
              someonewon = true ;
         }
      })

      if (!someonewon) {
        let filledBoxes = bxxs.filter(bxxs => bxxs.innerHTML !== "").length;
        if (filledBoxes === 9) {
            document.querySelector('.winmessage').innerText = "It's a Draw!";
            isGameOver = true;
        }
    }

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxcontent = element.querySelector(".boxtext"); // FIXED here

    element.addEventListener('click', () => {
        if (boxcontent.innerHTML ==='') {
            boxcontent.innerHTML = turn;
            checkwin();
            turn = changeturn(turn);
            document.body.style.transition = " 1s ease-in-out 10ms";
            if(turn === "x"){
                document.querySelector(".turnbox1").style.backgroundColor="red"
                document.querySelector(".turnbox1").style.color="white";
                document.querySelector(".turnbox2").style.backgroundColor="white"
                document.querySelector(".turnbox2").style.color="black";
                
            }
            else{
                document.querySelector(".turnbox2").style.backgroundColor="red"
                document.querySelector(".turnbox2").style.color="white";
                document.querySelector(".turnbox1").style.backgroundColor="white"
                document.querySelector(".turnbox1").style.color="black";
                
            }
        }
    });
});



// Game start and box connected button specially made by pardhu 
let infocontainer = document.querySelector(".info");
infocontainer.style.filter = "opacity(0)";
let container = document.querySelector(".container");
container.style.filter= "opacity(0)"

let stbtn = document.querySelector(".startgame");
stbtn.addEventListener("click" , ()=>{
    if(stbtn.innerHTML === "Start Game"){
        container.style. transition= "1s ease-in 0.41ms";
        container.style.filter= "opacity(1)";
        infocontainer.style.transition="1s ease-in 0.41ms"
        infocontainer.style.filter = "opacity(1)";
        stbtn.innerHTML = "End Game";

    }
    else{
        container.style. transition= "1s ease-in 0.41ms";
        container.style.filter= "opacity(0)"
        infocontainer.style.transition="1s ease-in 0.41ms"
        infocontainer.style.filter = "opacity(0)";
        stbtn.innerHTML = "Start Game";

      // this will clears the data of each box in tictactoe     
    let bxs = document.getElementsByClassName("box");
    Array.from(bxs).forEach(element => {
    let boxcontent = element.querySelector(".boxtext"); // FIXED here
    boxcontent.innerHTML = "";
    })
}   
})



document.getElementById("playagainbutton").addEventListener("click" ,()=>{
    let bxes = document.getElementsByClassName("box");
    Array.from(bxes).forEach(e=>{
        e.querySelector(".boxtext").innerHTML = '';
        document.querySelector(".winmessage").innerHTML = "";
    })

    document.querySelector(".turnbox1").style.backgroundColor="red"
    document.querySelector(".turnbox1").style.color="white";
    document.querySelector(".turnbox2").style.backgroundColor="white"
    document.querySelector(".turnbox2").style.color="black";
})