function advanced_add() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    document.getElementById("demo").innerHTML = parseInt(x) + parseInt(y);
}

function advanced_subtract() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    document.getElementById("demo").innerHTML = parseInt(x) - parseInt(y);
}

function advanced_division () {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    document.getElementById("demo").innerHTML = parseInt(x) / parseInt(y);
}

function advanced_multiplication () {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    document.getElementById("demo").innerHTML = parseInt(x) * parseInt(y);
}