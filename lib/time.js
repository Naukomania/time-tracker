const getHours = seconds => ('0' + Math.floor(seconds / 3600)).slice(-2);
const getMinutes = seconds => ('0' + Math.floor(seconds / 60) % 60).slice(-2);
const getSeconds = seconds => ('0' + seconds % 60).slice(-2);
const getMonth = date => ("0" + (date.getMonth()+1)).slice(-2)

export {
    getHours,
    getMinutes,
    getSeconds,
    getMonth
}