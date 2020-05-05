import React from 'react';

const Board = ({title, className, children, type, task, setTask}) => {
    const drop = (e) => {
        const mapTask = task.map(item => {
            if(item.id == e.dataTransfer.getData('id')){
                item['type'] = type;
            }
            return item;
        });
        setTask([...mapTask]);
    }

    const dragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <div 
            className="board"
            onDrop={drop}
            onDragOver={dragOver}
            type={type}
        >
            <h2>{title}</h2>
            <div className="board-children">
                {children}
            </div>
        </div>
    )
}

export default Board;