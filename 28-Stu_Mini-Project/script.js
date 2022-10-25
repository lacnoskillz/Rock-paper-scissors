var wins =0;
var ties= 0;
var losses =0;

var options = ["R", "P", "S"];





var playgame = function(){

playerchoice= prompt("lets play Rock paper scissors");
playerchoice= (playerchoice.toUpperCase());


var computerchoice = Math.floor(Math.random()*3);
computerchoice = options[computerchoice];


console.log("computer choice", computerchoice);
console.log("your choice",playerchoice);




if ((playerchoice != "R") && (playerchoice != "S") && (playerchoice != "P")) {
    console.log("enter R for rock P for paper or S for scissors");
playgame();
}
 else if((playerchoice = "R") && (computerchoice = "R" )) {
    console.log("its a tie!");
    ties++;
    console.log("score");
    console.log("wins",wins);
    console.log("losses",losses);
    console.log("ties",ties);
    playerchoice= confirm("wana play again?");
    if (playerchoice == false){
        console.log("gg");
        return;
    } else {
        playgame();
    }
} 
else if ((playerchoice ="R") && (computerchoice ="S") ){
    console.log("you won!");
    wins++;
    console.log("score");
    console.log("wins",wins);
    console.log("losses",losses);
    console.log("ties",ties);
    playerchoice= confirm("wana play again?");
    if (playerchoice == false){
        console.log("gg");
        return;
    } else {
        playgame();
    }

}

}

playgame()