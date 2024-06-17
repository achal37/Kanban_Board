import './App.css'
import TaskCard from "./components/TaskCard"
import { statuses, tasks } from "./utils/data_task"

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })

  return (
    <>
      <div className='flex divide-x'>
        {columns.map((column) => (
          <div className='w-1/3 px-2' key={column.title}>
            <h1 className='text-2xl capitalize p-2 font-bold text-gray-600'>{column.title}</h1>
            {column.tasks.map((task) => <TaskCard task={task} key={task.id} />)}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
