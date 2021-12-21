let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let operator = document.getElementById("operator")
let result = document.getElementById("result")

function operation() {
    // console.log(num1.value);
    // console.log(num2.value);
    // console.log(operator.value);

    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    let op = operator.value;
    console.log(a);
    console.log(b);
    console.log(op);
    if(num1.value == "" || num2.value == ""){            
        alert('Please input number');
    }
    else{
        if (op === "+") {
            result.value = a + b;
        }
        else if(op === "-"){
            result.value = a - b;
        } else if(op === "*")
        {
            result.value = a * b;
        }
    else
        {
            result.value = a / b;
        }
    }

}
function reset(){
    num1.value ="";
    num2.value="";
    result.value="";
}