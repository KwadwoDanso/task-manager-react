// TaskList.tsx — renders the list of tasks using .map with unique keys
// Shows an empty state when there are no tasks to display

import TaskItem from "../TaskItem/TaskItem";
import { TaskListProps } from "../../types";

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    // console.log("Rendering TaskList with " + tasks.length + " tasks");

    // Conditional render: if no tasks, show a friendly empty message
    if (tasks.length === 0) {
        return (
            <div style={{
                padding: "2rem",
                textAlign: "center",
                color: "#6b7280",
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
            }}>
                <p style={{ fontSize: "1rem", margin: 0 }}>No tasks to show.</p>
                <p style={{ fontSize: "0.85rem", margin: "0.25rem 0 0" }}>
                    Try adjusting your filters or add a new task.
                </p>
            </div>
        );
    }

    return (
        <div>
            {/* Map through tasks — each TaskItem gets task.id as the unique key */}
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
