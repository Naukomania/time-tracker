import { getMonth } from "../../lib/time"

const DisplayDate = ({seconds}) => {
    const date = new Date(seconds * 1000)
    return (
      <div>
      {date.getFullYear()}-
      {getMonth(date)}-
      {("0" + (date.getDate())).slice(-2)}<br/>
      {date.getHours()}:
      {date.getMinutes()}:
      {date.getSeconds()}
      </div>
    )
}

export default DisplayDate