import TaskTimer from "../components/TaskTimer";
import PlayPauseBtn from "../components/PlayPauseBtn";
import TaskInput from "../components/TaskInput";
import StopBtn from "../components/StopBtn";
import { useState, useEffect } from "react";

const styles = {
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    border: '1px solid black',
  }
}

const IndexPage = () => {
  const [taskText, setTaskText] = useState('Сходить в магазин');
  const [seconds, setSeconds] = useState(0)
  const [playState, setPlayState] = useState(false)
  const [tick, setTick] = useState(0);
  const [tasks, setTasks] = useState([])

  const handlePlayPause = () => {
    setPlayState(!playState);
  }

  const handleStop = () => {
    setSeconds(0);
    setPlayState(false);
    setTasks([
      ...tasks,
      `${taskText} : ${seconds}`
    ]);
  }

  useEffect(() => {
    if(playState) {
      setSeconds(seconds => seconds + 1);
    }
  }, [tick])

  useEffect(() => {
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
      <TaskTimer seconds={seconds} />
    </div>
    {playState ? <p>Запущен</p> : <p>Остановлен</p>}
    {!!tasks.length && (<ul>
      {tasks.map((task, i) => <li key={i}>{task}</li>)}
    </ul>)}
    </>
  )
}

export default IndexPage