const getDate = () => {
    const date = new Date();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return {
        current: `${year}-${month}-${day}`,
        last: `${year - 1}-${month}-${day}`,
        next: `${year + 1}-${month}-${day}`
    }
}


export default getDate