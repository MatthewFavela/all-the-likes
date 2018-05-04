window.onload = function(){
    var likeCount = localStorage.getItem("like");
    var loveCount = localStorage.getItem("love");
    var laughCount = localStorage.getItem("laugh");

    var likeImg = document.getElementById("like-image");
    var loveImg = document.getElementById("love-image");
    var laughImg = document.getElementById("laugh-image");

    var likeText = document.getElementById("like-count");
    var loveText = document.getElementById("love-count");
    var laughText = document.getElementById("laugh-count");

    var counter1 = localStorage.getItem("score1");
    var counter2 = localStorage.getItem("score2");
    var counter3 = localStorage.getItem("score3");

    likeText.innerHTML = likeCount;
    loveText.innerHTML = loveCount;
    laughText.innerHTML = laughCount;

    likeImg.addEventListener("click", function(){
        counter1++;
        localStorage.setItem("score1", counter1);
        var rslt = localStorage.getItem("score1");
        likeText.innerHTML = rslt;
    });

    loveImg.addEventListener("click", function(){
        counter2++;
        localStorage.setItem("score2", counter2);
        var rslt = localStorage.getItem("score2");
        loveText.innerHTML = rslt
    });

    laughImg.addEventListener("click", function(){
        counter3++;
        localStorage.setItem("score3", counter3);
        var rslt = localStorage.getItem("score3");
        laughText.innerHTML = rslt;
    });
}