import axios from "axios";

export async function getEmployeeMaxCode() {
    let employees;

    await axios
    .get(`http://localhost:58643/api/v1/Employees/new-code`)
    .then(function (response) {
        employees = response.data['data'];
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}