let total = 0;

function on(){
    document.getElementById("img1").style.zIndex = "-1";
}

function up(){
    document.getElementById("img1").style.zIndex = "1";
}

function count(x) {
    total += x;
    document.getElementById("count").innerHTML = total;
}