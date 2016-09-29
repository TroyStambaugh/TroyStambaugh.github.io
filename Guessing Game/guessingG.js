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


function chance1() {
    x = $("#box1").val();
    console.log(x);
    if (x == a) {
        document.getElementById("div1").style.background = "#2eb82e";
    }
    else if (x == b) {
        document.getElementById("div1").style.background = "#f1f907";

    }
    else if (x == c) {
        document.getElementById("div1").style.background = "#f1f907";

    }

    else (
        document.getElementById("div1").style.background = "#ff0000");
}




var y = 1
function chance2() {
    y = $("#box2").val();
    console.log(y);
    if (y == b) {
        document.getElementById("div2").style.background = "#2eb82e";
    }
    else if (y == a) {
        document.getElementById("div2").style.background = "#f1f907";

    }
    else if (y == c) {
        document.getElementById("div2").style.background = "#f1f907";

    }
    else (
        document.getElementById("div2").style.background = "#ff0000"
    );
}

var z = 1
function chance3() {
    z = $("#box3").val();
    console.log(z);
    if (z == c) {
        document.getElementById("div3").style.background = "#2eb82e";
    }
    else if (z == b) {
        document.getElementById("div3").style.background = "#f1f907";

    }
    else if (z == a) {
        document.getElementById("div3").style.background = "#f1f907";

    }
    else (
        document.getElementById("div3").style.background = "#ff0000"
    );
}
var turns = 10;
function countdown() {
    if (turns >= 1) {
        turns--;
    }
}


function tries() {
    $("#choices").empty();
    $("#choices").append(turns);
    if (turns <= 0) {
        alert("Game Over Out of Chances!!");
    }
    if (x == a && y == b && z == c) {
        alert("YOU WIN!!");
        startOver();
    }
};


function chances() {
    chance1();
    chance2();
    chance3();
    countdown();
    tries();
};

function retry() {
    location.reload();
};

function isNumberKey(evt) {
    var Key = (evt.which) ? evt.which : event.keyCode;
    if (Key != 46 && Key > 31 && (Key < 48 || Key > 57)) {
        return false;
    } else {
        return true;
    }
}