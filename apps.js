

window.onload = function(){
    var btn = document.getElementById("increment");
    var clear = document.getElementById("clear");
    var result = document.getElementById("result");
    var counter = localStorage.getItem("score");

    btn.addEventListener("click", function(){
        counter++;
        localStorage.setItem("score", counter);
        var score = localStorage.getItem("score");
        result.innerHTML = score;

    });
    clear.addEventListener("click", function(){
        counter = 0;
        localStorage.clear();
    });
}