
var cssh3 = document.querySelector("h3");
var body = document.querySelector("body");
var rcolor = document.querySelector("#rcolor");
var lcolor = document.querySelector("#lcolor");

function changeColor() {
    body.style.background = "linear-gradient(to right, "+rcolor.value+", "+lcolor.value+")";

    cssh3.textContent = body.style.background;
}

rcolor.addEventListener("input", changeColor)

lcolor.addEventListener("input", changeColor)
