const styles = {
    time: {
        backgroundColor: 'grey',
        color: 'white'
    }
}
const TaskTimer = ({ seconds = 0 }) => {
    const hours = ('0' + Math.floor(seconds / 3600)).slice(-2);
    const minutes = ('0' + Math.floor(seconds / 60) % 60).slice(-2);
    const resSeconds = ('0' + Math.floor(seconds / 60)).slice(-2);

    return (
      <div style={ styles.time }>
        {`${hours}:${minutes}:${resSeconds}`}
      </div>
    )
}
export default TaskTimer;