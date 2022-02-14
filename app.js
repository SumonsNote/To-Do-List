let count = 0;
function add(e) {
    count++;
    control("count");
}
function minus(p) {
    count--;
    control("count")
}

function control(id) {
    document.getElementById(id).innerText = count;
}