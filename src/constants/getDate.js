export function getDate(date) {
    try {
        if (date) {
            date = new Date(date);
            let newDate = ("0" + date.getDate()).slice(-2),
                newMonth = ("0" + (date.getMonth() + 1)).slice(-2),
                newYear = date.getFullYear();
            
            return `${newYear}-${newMonth}-${newDate}`;
        }
    } catch (error) {
        console.log(error);
    }
}