const form = document.querySelector("#eventForm");

const options = document.querySelector("#type");
const student = document.querySelector(".studentField");
const guest = document.querySelector(".guestField");

options.addEventListener('change', function(){
    const selectedValue = this.value;
    student.style.display= 'none';
    guest.style.display= 'none';

    if(selectedValue === 'student'){
        student.style.display= 'block';
    }
    if(selectedValue === 'guest'){
        guest.style.display= 'block';
    }

})

form.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(form.firstName.value);


})