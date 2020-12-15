const unionArray = (tasks) => {
    const titles = {};
    for (let task of tasks) {
        if (!titles[task.text]) {
            titles[task.text] = {
                text: task.text,
                seconds: 0
            }
        }
        titles[task.text].seconds += task.seconds
    }
    return Object.values(titles)
}

module.exports = {
    unionArray
}