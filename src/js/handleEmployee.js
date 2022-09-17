/**
 * Call api xóa nhiều bản ghi cùng lúc
 * @param {Mảng id của nhân viên cần xóa} dataId 
 * @returns Status code
 * CreatedBy NVTHUY 09/09/2022
 */
 export async function deleteMultiple(dataId) {
    let status;

    if(dataId){
        await axios.delete(`http://localhost:4350/api/v1/Employees/deleteMultiple?ids=${dataId}`)
        .then(function (response) {
            status = response.status;
        })
        .catch(function (error) {
            status = error.response.status;
        })
    }

    return status;
}