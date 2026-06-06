
function getCheckedCampuses(campuses){
    return Array.from(campuses)
                .filter(campus => campus.checked)
                .map(campus => campus.value);
}

function checkDateValidity(){
    const date = document.getElementById("availableDate").value;
    const todaysDate = new Date();
    return date > todaysDate;
}

const form = document.querySelector("#fsyForm");

console.log(form)

form.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(form.firstName.value);

    const numCampus = form.travelRange.value;
    const campusSelected = form.campus;
    
    if(numCampus === "one" && getCheckedCampuses(campusSelected).length == 0){
        document.getElementById("output").textContent = "Please select a campus";
    }
    if(!checkDateValidity()){
        document.getElementById("output").textContent = "Choose a future date";
    }

})
