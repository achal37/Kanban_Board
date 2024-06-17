// App.tsx

import { useEffect, useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import AddTask from './components/AddTask';
import { statuses, Task, Status, Priority } from './utils/data_task';

const AddTaskIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

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
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const updateTask = (task: Task) => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then(() => {
        const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
        setTasks(updatedTasks);
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  const addTask = (status: Status, title: string, desc: string, priority: Priority) => {
    const newTask: Task = {
      title,
      id: `CP-${Math.random().toString(36).substr(2, 9)}`,
      priority,
      status,
      desc,
    };

    // Update state with the new task added to the appropriate column
    setTasks([...tasks, newTask]);

    // POST request to add task to db.json
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(() => {
        console.log('Task added successfully to db.json');
      })
      .catch((error) => {
        console.error('Error adding task to db.json:', error);
      });
  };

  const deleteTask = (taskId: string) => {
    // DELETE request to remove task from db.json (handled in TaskCard component)
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Task ${taskId} deleted successfully from db.json`);
        // Filter out the deleted task from state
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error('Error deleting task from db.json:', error);
      });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    setCurrentHover(null);
    const id = e.dataTransfer.getData('id');
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  const [currentHover, setCurrentHover] = useState<Status | null>(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState<Status | null>(null);

  const handleDragEnter = (status: Status) => {
    setCurrentHover(status);
  };

  return (
    <div className='my-4 mx-2'>
      <h1 className='text-4xl m-2 px-1 font-bold'>Kanban Board</h1>
      <div className="grid grid-cols-3 gap-4">
        {columns.map((column) => (
          <div
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => handleDragEnter(column.status)}
            key={column.status}
            className="relative" // Added relative positioning to the column container
          >
            <div className="border rounded-lg">
              <div className="flex items-center justify-between p-2">
                <h1 className="text-xl capitalize font-bold text-gray-800">{column.status}</h1>
                <button
                  className="text-green-500 p-2 flex gap-2"
                  onClick={() => {
                    setShowAddTask(true);
                    setDefaultStatus(column.status);
                  }}
                >
                  {AddTaskIcon} Add Task
                </button>
              </div>
              <div className={`h-full ${currentHover === column.status ? 'bg-gray-200' : ''}`}>
                {column.tasks.map((task) => (
                  <TaskCard key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAddTask && (
        <AddTask
          addTask={addTask}
          status={defaultStatus || statuses[0]} // Set default status based on column clicked
          onClose={() => {
            setShowAddTask(false);
            setDefaultStatus(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
