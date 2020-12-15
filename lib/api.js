const getLogsFromLocalStorage = () => {
  if(!window) {
    return []
  }
  return JSON.parse(localStorage.getItem('logs')) || [] ;
}

const getLogs = async () => {
  return new Promise((resolve, reject) => {
    const logs = getLogsFromLocalStorage();
    resolve(logs);
  })
}

const addLog = async (log) => {
    return new Promise((resolve, reject) => {
      const logs = getLogsFromLocalStorage();
      logs.push(log);
      localStorage.setItem("logs", JSON.stringify(logs));
      resolve(log)
    })
}

export {getLogs, addLog}