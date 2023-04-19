let total = parseInt(localStorage.getItem("key"));
if (isNaN(total)) {
    total = 0;
}
document.getElementById("count").innerHTML = total;

function on(){
    let ll = new Audio('wib.mp3');
    ll.play();
    document.getElementById("img1").style.zIndex = "-1";
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
    localStorage.setItem("key",total);
    document.getElementById("count").innerHTML = localStorage.getItem("key");
}