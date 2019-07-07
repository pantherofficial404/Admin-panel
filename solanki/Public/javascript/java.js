let isOPen = true;

function openslidemenu() {
    isOPen = !isOPen;
    if (isOPen === true) {
        document.getElementById('side-menu').style.width = "120px";
        document.getElementById("cancel").innerHTML = "arrow_back";

    } else {
        document.getElementById('side-menu').style.width = "0px";
        document.getElementById("cancel").innerHTML = "menu";
    }
}

//first Dropdown Menu

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.drop-down');
    var instances = M.Dropdown.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.drop-menu');
    var instances = M.Dropdown.init(elems, {});
});