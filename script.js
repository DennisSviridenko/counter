let zahl = 0;

function hoche(){

    zahl += 1;
    document.getElementById("lol").innerHTML = zahl;

}

function reset(){

    zahl = 0;
    document.getElementById("lol").innerHTML = zahl;

}

function runter(){

    zahl -= 1;
    document.getElementById("lol").innerHTML = zahl;

}