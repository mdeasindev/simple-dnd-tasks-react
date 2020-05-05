import React from 'react';
import Board from './Board';
import Task from './Task';

const Started = (props) => {
    const {task, setTask} = props;
    return (
        <Board title="Started" type="started" setTask={setTask} task={task}>
            {task.length ? task.filter(item => item.type === 'started').map(task => <Task draggable={true} key={task.id} task={task} />) : ''}
        </Board>
    )
}

export default Started;