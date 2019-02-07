window.onload = function() {
    var box = document.getElementsByClassName("box")[0];
    var small = document.getElementsByClassName("small")[0];
    var big = document.getElementsByClassName("big")[0];
    var mask = document.getElementsByClassName("mask")[0];
    var bigImg = big.children[0];
    var bigWidth = 400;
    var smallWidth = 400;
    var maskWidth = 150;
    // magnify degree
    deg = smallWidth/maskWidth;
    bigImg.style.width = bigWidth*deg+'px';

    // small.onmouseenter = function () {
    //     show(mask);
    //     show(big);
    // }

    small.addEventListener("mouseenter", function () {
        show(mask);
        show(big);
    },false);

    // small.onmouseleave = function (){
    //     hide(mask);
    //     hide(big);
    // }

    small.addEventListener("mouseleave", function () {
        hide(mask);
        hide(big);
    },false);

    small.addEventListener("mousemove", function(ev){

        var pagex = ev.pageX;
        var pagey = ev.pageY;
        var x = pagex - box.offsetLeft - mask.offsetWidth/2;
        var y = pagey - box.offsetTop - mask.offsetHeight/2;
        // console.log(pagex,pagey);
        if (x < 0) {
            x = 0;
        }
        if (x > small.offsetWidth - mask.offsetWidth) {
            x = small.offsetWidth - mask.offsetWidth;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > small.offsetHeight - mask.offsetHeight) {
            y = small.offsetHeight - mask.offsetHeight;
        }
        
        mask.style.left = x + 'px';
        mask.style.top = y + 'px';
        // marginTop, marginLeft ?
        bigImg.style.marginLeft = -x*deg+'px';
        bigImg.style.marginTop = -y*deg+'px';
    }, false)
}

function show(ele) {
    ele.style.display = "block";
    // ele.style.visibility = "visible";
}

function hide(ele) {
    ele.style.display = "none";
    // ele.style.visibility = "hidden";
}