let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleOnClick);

function handleOnClick(event){
    let menuItems = document.querySelector("nav");
    menuItems.classList.toggle("hide");
    menuBtn.classList.toggle("change");
}