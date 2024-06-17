import { useEffect, useState } from 'react';
import './App.css';
import TaskCard from "./components/TaskCard";
import { statuses, Task, Status } from "./utils/data_task";

function App() {
  // Initialize the state with the predefined tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  

  const updateTask = (task: Task) => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    setCurrentHover(null)
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if (task) {
      updateTask({ ...task, status })
    }
  }

  const [currentHover, setCurrentHover] = useState<Status | null>(null)
  const handleDragEnter = (status: Status) => {
    setCurrentHover(status)
  }

  return (
    <>
      <div className='flex divide-x'>
        {columns.map((column) => (
          <div
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => handleDragEnter(column.status)}
            className='w-1/3 px-2'
            key={column.status}
          >
            <h1 className='text-2xl capitalize p-2 font-bold text-gray-600'>{column.status}</h1>
            <div className={`h-full ${currentHover === column.status ? 'bg-gray-200' : ''}`}>
              {column.tasks.map((task) => (
                <TaskCard
                  task={task}
                  updateTask={updateTask}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
