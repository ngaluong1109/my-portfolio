function navigateToHorror() {
    window.location.href = 'horror.html';
}
function navigateToShopping() {
    window.location.href = 'shopping.html';
}
function navigateToPot() {
    window.location.href = 'pot.html';
}
function navigateToMidautumn() {
    window.location.href = 'midautumn.html';
}
function navigateToTea() {
    window.location.href = 'tea.html';
}
function navigateToXmas() {
    window.location.href = 'xmas.html';
}

function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    if (fname === "" || lname === "" || email === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
