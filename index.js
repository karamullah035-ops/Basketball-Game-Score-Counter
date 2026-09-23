let homeScore=0
let guestScore=0



function addOne(){
homeScore+=1;
document.getElementById("home-score").textContent=homeScore

}
function addTwo(){
    homeScore+=2;
    document.getElementById("home-score").textContent=homeScore
}
function addThree(){
    homeScore+=3;
    document.getElementById("home-score").textContent=homeScore
}

function addOneG(){
guestScore+=1;
document.getElementById("guest-score").textContent=guestScore

}
function addTwoG(){
    guestScore+=2;
    document.getElementById("guest-score").textContent=guestScore
}
function addThreeG(){
    guestScore+=3;
    document.getElementById("guest-score").textContent=guestScore
}
