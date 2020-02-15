var h1 = document.querySelector("h1");
h1.style.color = "yellow";
h1.style.border = " 5px solid pink";

var p = document.querySelector("p");

p.innerHTML = "New Content <strong>yay!</strong>";

var img1 = document.getElementsByTagName("img")[0];
img1.getAttribute("src");
img1.setAttribute("src","test2.jpg");

var butt = document.getElementById("butt");
var isClick = false;

butt.addEventListener("click",function(){
    if (!isClick){
        img1.setAttribute("src","test1.jpg");
        isClick = true;
    }
    else {
        img1.setAttribute("src","test2.jpg");
        isClick = false;
    }
})  

var butt2 = document.getElementById("butt2");
var isClick2 = false;

butt2.addEventListener("click",function(){
    if (!isClick2){
        document.querySelector("body").style.backgroundColor = "purple";
        isClick2 = true;
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        isClick2 = false;
    }
})  