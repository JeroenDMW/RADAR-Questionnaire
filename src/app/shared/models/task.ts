export interface Task {
  index: number
  completed: boolean
  reportedCompletion: boolean
  timestamp: number
  name: string
  nQuestions: number
  reminderSettings?: any
  estimatedCompletionTime: number
  completionWindow: number
  warning: string
  isClinical: boolean
  timeCompleted?: number
}

export interface TasksProgress {
  numberOfTasks: number
  completedTasks: number
}
