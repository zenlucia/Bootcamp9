// The formula is BMI = kg/m2.

    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    
function calculateBMI() {
    h = height.value; 
    w = weight.value;
    const bmi = (w / (h * h));
    console.log(bmi);
    document.getElementById("result").innerHTML = Math.round(bmi);
    result.innerText = BMI;
    }


console.log("Your BMI is "+"calculateBMI");