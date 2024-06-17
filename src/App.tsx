import { useState } from 'react';
import './App.css';
import TaskCard from "./components/TaskCard";
import { statuses, tasks as initialTasks, Task, Status } from "./utils/data_task";

function App() {
  // Initialize the state with the predefined tasks
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id ===id)
    if(task){
      updateTask({...task, status})
    }
  }

  return (
    <>
      <div className='flex divide-x'>
        {columns.map((column) => (
          <div 
          onDrop = {(e) => handleDrop(e, column.title)}
          onDragOver={(e) => e.preventDefault()} 
          className='w-1/3 px-2' 
          key={column.title}
          >
            <h1 className='text-2xl capitalize p-2 font-bold text-gray-600'>{column.title}</h1>
            {column.tasks.map((task) => (
              <TaskCard
                task={task}
                updateTask={updateTask}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
