let p1 = "";
let p2= "";
let op = "";

function operation(p1, p2, op) {
    switch (op) {
        case "+": return p1 + p2;
        case "-": return p1 - p2;
        case "*": return p1 * p2;
        case "/": return p1 / p2; 
    }
}

function number(num) {
    if (num === "." && p1.includes(".")) return;
    p1 += num;
}

function operator(op) {
    if (p1 === "" && p2 === "") return;
    if (p2 !== "" && p1 === "") {
        operator = op;
        return;
    }
    if (p1 !== "" && p2 !== "") {
        calculate();
    }
    operator = op;
    p2 = p1;
    p1 = "";
}

function calculate() {
    if (p2 === "" || p1 === "") return;

    let num1 = parseFloat(p2);
    let num2 = parseFloat(p1);
    let result = operation(num1, num2, operator);

   p1 = result.toString();
    p2 = "";
    operator = "";
}

function clear() {
    p1 = "";
    p2 = "";
    operator = "";
}

function maj() {
    display.value = p1 || p2 || "0";
}
function percentage() {
    if (p1 !== "") {
        p1 = (parseFloat(p1) / 100).toString(); 
    }
}

function signemoins() {
    if (p1 !== "") {
        p1 = (parseFloat(p1) * -1).toString(); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (!isNaN(value) || value === ".") {
                number(value);
            } else if (value === "AC") {
                clear();
            } else if (value === "=") {
                calculate();}
            else if (value === "%") {
                    percentage();
                } else if (value === "+/-") {
                    signemoins();
            } else {
                operator(value);
            }

            maj();
        });
    });
});
