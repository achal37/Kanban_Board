import { Task } from "../utils/data_task"

const TaskCard = ({ task }: {
  task: Task
}) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">
      <div className='text-base font-base py-2'>
        {task.title}
      </div>
      <div className="text-xs">
        {task.desc}
      </div>
      <div className='text-xs flex justify-between py-2 text-gray-600'>
        <div>{task.id}</div>
        <div className="text-red-600">{task.urgency ? 'Urgent' : null}</div>
      </div>
    </div>)
}

export default TaskCard