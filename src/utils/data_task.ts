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
