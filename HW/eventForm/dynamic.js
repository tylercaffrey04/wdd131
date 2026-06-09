const form = document.querySelector("#eventForm");
const options = document.querySelector("#type");
const studentDiv = document.querySelector(".studentField");
const guestDiv = document.querySelector(".guestField");

const studentID = document.querySelector("#studentID");
const guestInput = document.querySelector("#accessCode");
const output = document.querySelector("#output");

let selectedValue = ""; 

options.addEventListener('change', function(){
    selectedValue = this.value; // Update the global variable
    
    // Hide both divs
    studentDiv.style.display = 'none';
    guestDiv.style.display = 'none';
    
    // Disable required validation for hidden fields
    studentID.required = false;
    guestInput.required = false;

    // Show the selected div and make its input required
    if(selectedValue === 'student'){
        studentDiv.style.display = 'block';
        studentID.required = true; 
    }
    if(selectedValue === 'guest'){
        guestDiv.style.display = 'block';
        guestInput.required = true;
    }
});

form.addEventListener("submit", event => {
        event.preventDefault();

    // Clear previous error messages
    output.textContent = ''; 
    let isValid = true;

    if(selectedValue === 'student' && studentID.value.length < 9){ // Fixed .length
        output.textContent = 'Student ID must be 9 digits';
        isValid = false;
    }
    
    if(selectedValue === 'guest' && guestInput.value !== 'EVENT131'){
        output.textContent = 'Incorrect Event Code';
        isValid = false;
    }
    if (isValid && selectedValue !== "") {
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const eventDate = document.querySelector("#eventDate").value;

        const outputContainer = document.querySelector("#successfulOutput");
        const displayName = document.getElementById("displayName");
        const displayType = document.getElementById("displayType");
        const displayDate = document.getElementById("displayDate");

        displayName.textContent = `${firstName} ${lastName}`;
        displayType.textContent = selectedValue;
        displayDate.textContent = eventDate;

        outputContainer.style.display = 'inline';
    }
});