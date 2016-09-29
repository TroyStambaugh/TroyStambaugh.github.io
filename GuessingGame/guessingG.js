var a;
var b;
var c;

var x = 1;
function num2() {
    a = Math.floor((Math.random() * 9) + 0);
    b = Math.floor((Math.random() * 9) + 0);
    c = Math.floor((Math.random() * 9) + 0);

    console.log(a);
    console.log(b);
    console.log(c);
}

// card 1 choices
function chance1() {
    x = $("#box1").val();
    console.log(x);
    if (x == a) {
        document.getElementById("div1").style.background = "#008000";
    }
    else if (x == b) {
        document.getElementById("div1").style.background = "#FFD700";

    }
    else if (x == c) {
        document.getElementById("div1").style.background = "#FFD700";

    }

    else (
        document.getElementById("div1").style.background = "#FF0000");
}


//card 2 choices

var y = 1
function chance2() {
    y = $("#box2").val();
    console.log(y);
    if (y == b) {
        document.getElementById("div2").style.background = "#008000";
    }
    else if (y == a) {
        document.getElementById("div2").style.background = "#FFD700";

    }
    else if (y == c) {
        document.getElementById("div2").style.background = "#FFD700";

    }
    else (
        document.getElementById("div2").style.background = "#FF0000"
    );
}

// card 3 chances
var z = 1
function chance3() {
    z = $("#box3").val();
    console.log(z);
    if (z == c) {
        document.getElementById("div3").style.background = "#008000";
    }
    else if (z == b) {
        document.getElementById("div3").style.background = "#FFD700";

    }
    else if (z == a) {
        document.getElementById("div3").style.background = "#FFD700";

    }
    else (
        document.getElementById("div3").style.background = "#FF0000"
    );
}
var turns = 10;
function countdown() {
    if (turns >= 1) {
        turns--;
    }
}

// checks to see if out of turns or if cards 1,2, or 3 match the randomly produced number
function tries() {
    $("#choices").empty();
    $("#choices").append(turns);
    if (turns <= 0) {
        alert("Game Over Out of Chances!!...."+ "Correct Numbers..."+a+b+c);
    }
    if (x == a && y == b && z == c) {
        alert("YOU WIN!!");
        startOver();
    }
};

// function checks chances countdown and tries to see what requirements are met.
function chances() {
    chance1();
    chance2();
    chance3();
    countdown();
    setTimeout(tries,200);
    
};

function retry() {
    location.reload();
};
// onclick runs function
function isNumberKey(evt) {
    var Key = (evt.which) ? evt.which : event.keyCode;
    if (Key != 46 && Key > 31 && (Key < 48 || Key > 57)) {
        return false;
    } else {
        return true;
    }
}