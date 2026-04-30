// types/index.ts — interfaces and types for the task manager

// Status values a task can have
export type TaskStatus = "pending" | "in-progress" | "completed";

// Priority levels for tasks
export type TaskPriority = "low" | "medium" | "high";

// Shape of a single task
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
}

// Props for TaskList — the parent component
export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Props for TaskItem — a single task row
export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Filter object passed to onFilterChange
export interface TaskFilters {
    status?: TaskStatus;
    priority?: TaskPriority;
}

// Props for TaskFilter
export interface TaskFilterProps {
    onFilterChange: (filters: TaskFilters) => void;
}