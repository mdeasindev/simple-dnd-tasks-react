import React from 'react';

const Task = ({task, draggable}) => {

    const dragStart = (e, taskId) => {
        const target = e.target;
        const id = e.dataTransfer.setData('id', taskId);

        target.style.opacity = '.5'
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    return (
        <div 
            className="task" 
            onDragStart={(e) => dragStart(e, task.id)}
            draggable={draggable}
            onDragOver={dragOver}
        >
            <h4>{task.title}</h4>
            <span>{task.subTitle}</span>
        </div>
    )
}

export default Task;