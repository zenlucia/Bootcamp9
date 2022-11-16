/**declaring result variable */
const result = document.getElementById("result");

/**add */
function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
    let one = parseInt(num1);
    let two = parseInt(num2);
    console.log(one,two);
    let results=one + two;
    document.getElementById("result").innerHTML = results;
};

/**subtract*/
function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
    let one = parseInt(num1);
    let two = parseInt(num2);
    console.log(one,two);
    let results=one - two;
    document.getElementById("result").innerHTML = results;
};

/**multiply*/
function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
    let one = parseInt(num1);
    let two = parseInt(num2);
    console.log(one,two);
    let results=one * two;
    document.getElementById("result").innerHTML = results;
};

/**divide*/
function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
    let one = parseInt(num1);
    let two = parseInt(num2);
    console.log(one, two);
    let results = one / two;
    document.getElementById("result").innerHTML = results;
}
