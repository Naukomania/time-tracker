import { getLogs } from "../lib/api"
import Menu from "../components/section/Menu";
import DisplayLog from "../components/log/DisplayLog";
import { unionArray } from '../lib/arr'
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

const HistoryPage = () => {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        getLogs().then(logs => setTasks(logs))}, [])
    return( 
    <> 
    <Menu/>
    {!!tasks.length && (<div style = {styles.done_content}>
      {unionArray(tasks).map((task, i) => <DisplayLog log={task} key={i} />)}
    </div>)} 
    </>
    )
}

export default HistoryPage