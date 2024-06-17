import { Task } from "../utils/data_task";

const LowIcon = <svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
</svg>

const MediumIcon = <svg className="w-6 h-6 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
</svg>

const HighIcon = <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
</svg>



const TaskCard = ({ task }: { task: Task }) => {
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
        <div className="capitalize">
          {task.priority === 'high' && HighIcon}
          {task.priority === 'medium' && MediumIcon}
          {task.priority === 'low' && LowIcon}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
