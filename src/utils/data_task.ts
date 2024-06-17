export type Status = 'todo' | 'in-progress' | 'done'
export type Task = {
  title: string,
  desc?: string,
  id: string,
  urgency?: boolean,
  status: Status,
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']

export const tasks: Array<Task> = [
  {
    title: 'Market Research',
    id: 'CP-1',
    urgency: true,
    status: 'todo',
    desc: 'Prepare a Market Research on Advedutech'
  },
  {
    title: 'Kanban Project',
    id: 'CP-2',
    urgency: true,
    status: 'in-progress',
    desc: 'Add a Kanban Board to our virtual office'
  },
  {
    title: 'Project-3 ',
    id: 'CP-3',
    urgency: false,
    status: 'done',
    desc: 'Ware Ware wa kami da'
  },
  {
    title: 'Project-4',
    id: 'CP-4',
    urgency: false,
    status: 'in-progress',
    desc: 'Bankai Katen Kyokotsu ...'
  },
  {
    title: 'Project-5',
    id: 'CP-5',
    urgency: false,
    status: 'done',
    desc: 'Hado no 99'
  },
  {
    title: 'Project-6',
    id: 'CP-6',
    urgency: true,
    status: 'todo',
    desc: 'just Do it!!'
  },
  {
    title: 'Project-7',
    id: 'CP-7',
    urgency: true,
    status: 'in-progress',
    desc: 'Hajime No Ippo'
  },

]