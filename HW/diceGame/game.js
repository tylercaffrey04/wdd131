const dieImages = document.querySelectorAll('#gameboard img');


document.getElementById("rollButton").addEventListener("click", (event) => {
    console.log(event);
    dieImages.forEach((image) => {
        if(!isDieLocked(image)){

        image.src = 'assets/die_rolling.gif';
        }
    })
    setTimeout(() => {
        dieImages.forEach((image) => {
            if(!isDieLocked(image)){
            image.src = "assets/white_dice_" + (Math.floor(Math.random() *6) + 1) + ".gif";
            }
    })
    }, 500)


})

function isDieLocked(dieImage){
    const checkboxes = document.querySelectorAll("#gameboard input");
    const checked = Array.from(checkboxes)
                        .filter(checkbox => checkbox.checked);
    return checked.find(checkbox => checkbox.className === dieImage.className);
}