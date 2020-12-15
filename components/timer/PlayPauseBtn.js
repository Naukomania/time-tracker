const style = {
    playBtn: {
        background: "green",
        color: "white"
    }
}

const PlayPauseBtn = ({ playState }) => {
    return (
        <button style = { style.playBtn }>
            {playState ? 'Pause': 'Play'}
        </button>
    )
}

export default PlayPauseBtn