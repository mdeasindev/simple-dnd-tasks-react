import React, {useState} from 'react';
import ToDo from './ToDo';
import Started from './Started';
import Completed from './Completed';

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Task 1",
      subTitle: 'This is subtitle',
      type: 'todo'
    },
    {
      id: 2,
      title: "Task 2",
      subTitle: 'This is subtitle',
      type: 'todo'
    },
    {
      id: 3,
      title: "Task 3",
      subTitle: 'This is subtitle',
      type: 'todo'
    },
    {
      id: 4,
      title: "Task 4",
      subTitle: 'This is subtitle',
      type: 'todo'
    },
    {
      id: 5,
      title: "Task 5",
      subTitle: 'This is subtitle',
      type: 'todo'
    }
  ]);

  return (
    <div className="App">
      <ToDo task={task} setTask={setTask} />
      <Started task={task} setTask={setTask} />
      <Completed task={task} setTask={setTask} />
    </div>
  );
}

export default App;
