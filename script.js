let total = 0;

function on(){
    let ll = new Audio('LL.mp3');
    document.getElementById("img1").style.zIndex = "-1";
    ll.play();
}

function up(){
    document.getElementById("img1").style.zIndex = "1";
}

let touch = document.getElementById("touch");

touch.addEventListener('touchstart',function() {
    img1.style.zIndex = "-1";
});

touch.addEventListener('touchend',function() {
    img1.style.zIndex = "1";
});

function count(x) {
    total += x;
    document.getElementById("count").innerHTML = total;
}