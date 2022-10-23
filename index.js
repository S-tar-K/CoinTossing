function coin_tossing() {
    var n = Math.floor((Math.random() * (2)));

    pic = ["head.jpeg", "tail.jpeg"];
    side = ["HEAD","TAIL"];
    cnt = [0, 0]; // tailcnt, headcnt

    document.getElementById("heading").innerHTML = side[n];
    document.getElementById("image").src = pic[n];
    cnt[n] = parseInt(document.getElementById(side[n]).innerHTML);
    cnt[n] += 1;
    document.getElementById(side[n]).innerHTML = cnt[n];
}
