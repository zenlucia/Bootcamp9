let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let selectedRadioButton = document.querySelector("input[name='btn']:checked").value;
    console.log(selectedRadioButton);

    let outerTwo = document.createElement("div");

    /**This is creating a div to hold my image with a classname of midImage */
    let newImage = document.createElement('img');
    newImage.src = "./images/illustration-thank-you.svg";
    newImage.className = "midImage";
    
    let ratingText = document.createElement("div");
    ratingText.innerHTML = `You selected ` + selectedRadioButton + ` out of 5 \n`;
    ratingText.className = "ratingText"

    let thankText = document.createElement("div");
    thankText.innerHTML = "Thank you! \n";
    thankText.className = "thankText";

    let paraText = document.createElement("div");
    paraText.className="paraText"
    paraText.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;

    outerTwo.className = "outerCard";
    outerTwo.append(newImage);
    outerTwo.append(ratingText);
    outerTwo.append(thankText);
    outerTwo.append(paraText);
    let outerCard = document.getElementById("outerCard");
    outerCard.style.display = "none";
    let result = document.getElementById("result");
    result.append(outerTwo);
});




