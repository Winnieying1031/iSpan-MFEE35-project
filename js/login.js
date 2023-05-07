function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
    document.getElementById("eye").className = "bi bi-eye";
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
    document.getElementById("eye").className = "bi bi-eye-slash";

}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);