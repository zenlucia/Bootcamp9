let thankyouCard = document.getElementById("thankyouCard");

let submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.path)
    let name = e.path[1][0].value
    let cardNumber = e.path[1][1].value
    let expiryM = e.path[1][2].value
    let expiryY = e.path[1][3].value
    let cvc = e.path[1][4].value
    console.log(name, cardNumber, expiryM, expiryY, cvc);
    if (name === ''
        || cardNumber === ''
        || expiryM === ''
        || expiryY === ''
        || cvc === ''
  
    ) {
        alert('please fill in all sections')
    } else {
        let outputCardNumber = document.getElementById("cardNumber")
        let outputName = document.getElementById("outputName")
        let fullExpiry = document.getElementById("expiryDate")
        let cvcOutput = document.getElementById("cvcNumber")

        outputCardNumber.innerHTML = cardNumber
        outputName.innerHTML = name
        cvcOutput.innerHTML = cvc
        console.log(typeof (expiryM), typeof (expiryY));
    
        fullExpiry.innerHTML = expiryM + " / " + expiryY

        console.log(cardNumber);
        let form = document.getElementById("form");
        let complete = document.createElement("div");
        let completeIcon = document.createElement("img");
        let completeButton = document.createElement("button");
        let completeText = document.createElement("p");
        let completeSmall = document.createElement("small");
        completeIcon.src = "./images/icon-complete.svg"
        completeButton.innerText = "Continue"
        completeButton.className="completeButton"
        completeText.innerHTML = "THANK YOU!"
        completeSmall.innerHTML = "We've added your card details"
        form.style.display = "none"
        let right=document.getElementById("right")
        complete.append(completeIcon)
        complete.append(completeText)
        complete.append(completeSmall)
        complete.append(completeButton)
        right.append(complete)
        right.style.gridArea = ("2/7/5/9")
        
    
    }    
})
    

