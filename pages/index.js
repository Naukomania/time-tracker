const TaskInput = () => <div>TaskInput</div>
const PlayPauseBtn = () => <div>PlayPauseBtn</div>
const StopBtn = () => <div>StopBtn</div>

import TaskTimer from "../components/TaskTimer";
import { useState } from "react";

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    border: '1px solid black',
  }
}

const IndexPage = () => {
  const [seconds, setSeconds] = useState(3659)
  const [playState, setPlayState] = useState(false)
  return (
    <>
    <div style={styles.wrapper}>
      <TaskInput />
      <div
        onClick={() => setSeconds(seconds+100)}>
        <PlayPauseBtn />
      </div>
      <StopBtn />
      <TaskTimer seconds={seconds} />
    </div>
    {playState && <p>Запущен</p>}
    </>
  )
}

export default IndexPage