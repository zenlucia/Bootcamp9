const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementsByClassName("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


rates.forEach((e) => {
    e.addEventListener("click", () => {
        rating.innerHTML = rates.innerHTML;
    })
})

document.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submitted");
    thanksContainer.classList.remove("hidden");
    container.getElementsByClassName.display = "none";
})
