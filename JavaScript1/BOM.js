let up = document.getElementById("up");

onscroll= function (){
    if ( scrollY > 400){
        up.style.display = "block";
    }
    else {
        up.style.display = "none";
    }
}
up.onclick = function () {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
