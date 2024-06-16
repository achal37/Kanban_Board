import './App.css'
import TaskCard from "./task_card"
import { Task } from "./data_task"

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
