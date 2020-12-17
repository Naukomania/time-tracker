import DisplayTimer from "../components/log/DisplayTimer";
import DisplayLog from "../components/log/DisplayLog";
import PlayPauseBtn from "../components/timer/PlayPauseBtn";
import TaskInput from "../components/timer/TaskInput";
import StopBtn from "../components/timer/StopBtn";
import Menu from "../components/section/Menu"
import {getLogs, addLog} from "../lib/api"
import { useState, useEffect } from "react";

const styles = {
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    border: '1px solid black',
  },
  done_content: {
    display: 'flex'
  }
}

const IndexPage = () => {
  const [taskText, setTaskText] = useState('Напишите цель');
  const [seconds, setSeconds] = useState(0)
  const [playState, setPlayState] = useState(false)
  const [tick, setTick] = useState(0);
  const [tasks, setTasks] = useState([])

  const handlePlayPause = () => {
    setPlayState(!playState);
  }

  const handleStop = () => {
    const log = {
      text: taskText,
      seconds,
      endTime: Math.floor(Date.now()/1000)
    }
    setSeconds(0);
    setPlayState(false);
    addLog(log);
    setTasks([
      ...tasks,
      log
    ]);
  }

  useEffect(() => {
    if(playState) {
      setSeconds(seconds => seconds + 1);
    }
  }, [tick])

  useEffect(() => {
    getLogs().then(data => {
      const { items } = data;
      setTasks(items);
    }, [])

    const interval = setInterval(() => {
      setTick(tick => tick + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div style={styles.wrapper}>
      <TaskInput taskText={taskText} setTaskText={setTaskText}/>
      <div onClick={handlePlayPause}>
        <PlayPauseBtn playState={playState}/>
      </div>
      <div onClick = {handleStop}>
        <StopBtn />
      </div>
      <DisplayTimer seconds={seconds} />
    </div>
    {playState ? <p>Запущен</p> : <p>Остановлен</p>}
    {(tasks && !!tasks.length) && (<div style = {styles.done_content}>
      {tasks.map((task, i) => <DisplayLog log={task} key={i} />)}
    </div>)}
    <Menu/>
    </>
  )
}

export default IndexPage