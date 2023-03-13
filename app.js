function advanced_add() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;
    console.log(typeof x, "hello");
    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${parseInt(x) + parseInt(y)}`;
        // console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}

function advanced_subtract() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${parseInt(x) - parseInt(y)}`;
        // console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}

function advanced_division() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${parseInt(x) / parseInt(y)}`;
        // console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}

function advanced_multiplication() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${parseInt(x) * parseInt(y)}`;
        // console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}

function advanced_power() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${Math.pow(parseInt(x), parseInt(y))}`;
        console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}

function advanced_root() {
    let x = document.getElementById("fnum").value;
    let y = document.getElementById("snum").value;

    if (x === "" || y === "") {
        document.getElementById("Result").innerHTML = "You need to enter something!";
        // console.log(x);
    }
    else if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y))) {
        document.getElementById("Result").innerHTML = `the result is ${Math.pow(parseInt(x), 1 / parseInt(y))}`;
        console.log(x, typeof parseInt(x));
    }
    else {
        document.getElementById("Result").innerHTML = "Wrong Input! you can only enter number please!";
        // console.log(parseInt(x, typeof x));
    }
}