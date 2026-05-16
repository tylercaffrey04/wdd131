let menuBtn = document.querySelector(".MenuButton");
console.log(menuBtn);

menuBtn.addEventListener("click", handleOnClick);

function handleOnClick(event){

    let menuItems = document.querySelector("nav");
    menuItems.classList.toggle("hide");
}


const gallery = document.querySelector('#Images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    let img = e.target.src;
    img.replace("sm", "full");
    console.log(img);
    modalImage.src = e.target.src.replace("sm", "full");

    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});