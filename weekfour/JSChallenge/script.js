function changeColor() {
    let newColor = document.getElementById("input").value;
    let left = document.getElementById("left");
    left.style.backgroundColor = newColor;
}
function changePic() {
let currentlySelected;
    const preBtn = document.getElementById('arrow');
    const nextBtn = document.getElementById('nextArrow');
    const galleryImgs = document.querySelectorAll('.img-gallery > img');
    
    for (let i = 0; i < galleryImgs.length; i++){ console.log(galleryImgs[i].classList[0]);
        if (galleryImgs[i].classList[0] === "active") {
            currentlySelected = galleryImgs[i].id
            console.log(currentlySelected, galleryImgs.length);
        }
    }
    //let currentlySelected=
    nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
        preBtn.style.visibility = "visible";   
    galleryImgs[currentlySelected].classList.add('active');
        //preBtn.disabled = true;
        
    if (galleryImgs.length-1 === currentlySelected) {
        nextBtn.style.visibility="hidden";
        console.log(nextBtn.disabled);
    }
    })

    preBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.toggle('active');
    currentlySelected--;
        nextBtn.style.visibility = "visible";
    galleryImgs[currentlySelected].classList.add('active');
    preBtn.disabled = false;
        
    if (currentlySelected===0) {
        preBtn.style.visibility = "hidden";
    }
})
}

