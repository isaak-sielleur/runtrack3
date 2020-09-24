document.getElementById("button").onclick = addone();
var click = 0;
document.getElementById("compteur").innerHTML = click;
var bout = document.getElementById("button");
console.log(click);

function addone() {

    click++;
    document.getElementById("compteur").innerHTML = click;
    console.log(click);

}
bout.addEventListener("click", addone);