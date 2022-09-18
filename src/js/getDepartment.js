import axios from "axios";

export async function getDepartment(id) {
    let department;

    await axios.get(`http://localhost:4350/api/v1/Departments/${id}`)
    .then(function (response) {
        department = response.data;
    })
    .catch(function (error) {
        department = error.response.status;
    })

    return department;
}

export async function getDepartmentID(name) {
    let departmentId;

    await axios.get(`http://localhost:4350/api/v1/Departments`)
    .then(function (response) {
        // department = response.data;
        response.data.forEach(data => {
            if(name == data.DepartmentName)
            {
                departmentId = data.DepartmentID;
            }  
        }); 
    })
    .catch(function (error) {
        console.log(error);
    })

    return departmentId;
}