var name, number;

function studentDetails() {
    name = document.querySelector("#sName").value;
    number = document.querySelector("#Mnumber").value;
    displayStudentDetails();
}

function displayStudentDetails() {
    document.querySelector("#dName").innerText = name;
    document.querySelector("#dMnumber").innerText = number;
}

function generateStudentReport() {
    studentDetails();
}
