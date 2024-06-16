import './App.css'
import TaskCard from "./components/TaskCard"
import { Task } from "./utils/data_task"

function App() {
  const task:Task = {
    title : 'Market Research',
    id: 'CP-1',
    urgency: true,
    desc: 'Prepare a Market Research on Advedutech'
  }

  return (
    <>
      <TaskCard task={task}/>
    </>
  )
}

export default App
