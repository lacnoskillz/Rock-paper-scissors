var wins = 0;
var ties = 0;
var losses = 0;
var round = 0;
var options = ["R", "P", "S"];


//else if (playerchoice == computerchoice)?
var gamescore = function(){
    console.log("score:");
    console.log("wins:", wins);
    console.log("losses:", losses);
    console.log("ties:", ties);
    console.log("--------------");
}

var playgame = function () {

    playerchoice = prompt("lets play Rock paper scissors");
    if (playerchoice == null) {
        console.log("refresh page to play")
        return;
    }
    playerchoice = (playerchoice.toUpperCase());


    var computerchoice = Math.floor(Math.random() * 3);
    computerchoice = options[computerchoice];


    console.log("computer choice", computerchoice);
    console.log("your choice", playerchoice);




    if ((playerchoice != "R") && (playerchoice != "S") && (playerchoice != "P")) {
        console.log("enter R for rock P for paper or S for scissors");
        playgame();

    }
    else if (playerchoice == computerchoice) {
        console.log("its a tie!");
        ties++;
        gamescore();
        playerchoice = confirm("wanna play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }
    else if ((playerchoice == "R") && (computerchoice == "S")) {
        console.log("you won!");
        wins++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }

    }
    else if ((playerchoice == "R") && (computerchoice == "P")) {
        console.log("you lost!");
        losses++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }
    else if ((playerchoice == "P") && (computerchoice == "S")) {
        console.log("you lost!");
        losses++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }
    else if ((playerchoice == "P") && (computerchoice == "R")) {
        console.log("you won!");
        wins++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }
    else if ((playerchoice == "S") && (computerchoice == "R")) {
        console.log("you lost!");
        losses++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }
    else if ((playerchoice == "S") && (computerchoice == "P")) {
        console.log("you won!");
        wins++;
        gamescore();
        playerchoice = confirm("wana play again?");
        if (playerchoice == false) {
            alert("gg");
            return;
        } else {
            playgame();
        }
    }







}

playgame()