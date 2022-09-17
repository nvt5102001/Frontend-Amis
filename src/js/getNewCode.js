import axios from "axios";

export async function getEmployeeMaxCode() {
    let employees;

    await axios
    .get(`http://localhost:4350/api/v1/Employees/new-code`)
    .then(function (response) {
        employees = response.data['data'];
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}