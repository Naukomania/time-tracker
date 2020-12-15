import css from "./DistplayTimer.module.css"
import {getHours, getMinutes, getSeconds} from "../../lib/time"

const DisplayTimer = ({ seconds, sprite = "gray" }) =>(
  <div className={
    sprite === "gray" ? css.gray : `${css.lightGray}`
  }>
    {getHours(seconds)}:
    {getMinutes(seconds)}:
    {getSeconds(seconds)}
  </div>
)
export default DisplayTimer;