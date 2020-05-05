import React from 'react';
import Board from './Board';
import Task from './Task';

const ToDo = (props) => {
    const {task, setTask} = props;
    return (
        <Board title="Todo" type="todo" setTask={setTask} task={task}>
            {task.length ? task.filter(item => item.type === 'todo').map(task => <Task draggable={true} key={task.id} task={task} />) : ''}
        </Board>
    )
}

export default ToDo;