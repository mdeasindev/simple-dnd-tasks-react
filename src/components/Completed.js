import React from 'react';
import Board from './Board';
import Task from './Task';

const Completed = (props) => {
    const {task, setTask} = props;
    return (
        <Board title="Completed" type="completed" setTask={setTask} task={task}>
            {task.length ? task.filter(item => item.type === 'completed').map(task => <Task draggable={true} key={task.id} task={task} />) : ''}
        </Board>
    )
}

export default Completed;