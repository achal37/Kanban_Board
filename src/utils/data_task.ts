export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'

export type Task = {
  title: string,
  desc?: string,
  id: string,
  priority: Priority,
  status: Status,
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export const tasks: Array<Task> = [
  {
    title: 'Market Research',
    id: 'CP-1',
    priority: 'low',
    status: 'todo',
    desc: 'Prepare a Market Research on Advedutech'
  },
  {
    title: 'Kanban Project',
    id: 'CP-2',
    priority: 'medium',
    status: 'in-progress',
    desc: 'Add a Kanban Board to our virtual office'
  },
  {
    title: 'Project-3 ',
    id: 'CP-3',
    priority: 'high',
    status: 'done',
    desc: 'Ware Ware wa kami da'
  },
  {
    title: 'Project-4',
    id: 'CP-4',
    priority: 'low',
    status: 'in-progress',
    desc: 'Bankai Katen Kyokotsu ...'
  },
  {
    title: 'Project-5',
    id: 'CP-5',
    priority: 'medium',
    status: 'done',
    desc: 'Hado no 99'
  },
  {
    title: 'Project-6',
    id: 'CP-6',
    priority: 'high',
    status: 'todo',
    desc: 'just Do it!!'
  },
  {
    title: 'Project-7',
    id: 'CP-7',
    priority: 'low',
    status: 'in-progress',
    desc: 'Hajime No Ippo'
  },

]