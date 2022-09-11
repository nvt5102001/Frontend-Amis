import axios from "axios";

export async function getDepartment(id) {
    let department;

    await axios.get(`http://localhost:58643/api/v1/Departments/${id}`)
    .then(function (response) {
        department = response.data;
    })
    .catch(function (error) {
        department = error.response.status;
    })

    return department;
}