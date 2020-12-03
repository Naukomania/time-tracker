const style = {
    TaskInput: {
        background: 'grey',
        color: 'white'
    }
} 

const TaskInput = ({taskText, setTaskText}) => {
    return (
        <input
            style={ style.TaskInput }
            onChange={e => setTaskText(e.target.value)}
            value={ taskText }
        />
    )
}

export default TaskInput
