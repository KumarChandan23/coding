document.addEventListener('DOMContentLoaded', function () {
    var employeeDetails = {
        name: '',
        getData() {
            employeeDetails.name = document.querySelector('#eName').value.trim();
            employeeDetails.displayEmployeeDetails();
        },
        displayEmployeeDetails() {
            document.querySelector("#dName").textContent = employeeDetails.name;
            document.querySelector(".displayEmployeeDetailsBlock").style.display = 'block';
        }
    };

    window.renderEmployeeDetails = function () {
        employeeDetails.getData();
    };
});
