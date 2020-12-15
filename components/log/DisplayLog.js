import DisplayTimer from "./DisplayTimer";
import DisplayDate from "./DisplayDate";
import css from "./DisplayLog.module.css"

const DisplayLog = ({log}) => (
  <div className= {css.done}>
    <span>{log.text}</span>
    <DisplayTimer
      sprite="lightGray"
      seconds={log.seconds}
    />
    {!!log.endTime && <DisplayDate seconds = {log.endTime} />}
  </div>
)

export default DisplayLog