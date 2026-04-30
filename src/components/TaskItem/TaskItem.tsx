// TaskItem.tsx — displays one task with status dropdown and delete button

import { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    // Pick a left border color based on priority (visual indicator)
    const priorityColors = {
        low: "#10b981",
        medium: "#f59e0b",
        high: "#dc2626",
    };

    // Pick a background tint based on status
    const statusColors = {
        "pending": "#fef3c7",
        "in-progress": "#dbeafe",
        "completed": "#d1fae5",
    };

    // Style for the card — border color comes from priority
    const cardStyle = {
        backgroundColor: statusColors[task.status],
        borderLeft: "4px solid " + priorityColors[task.priority],
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "0.75rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        flexWrap: "wrap" as const,
        // Strikethrough completed tasks
        textDecoration: task.status === "completed" ? "line-through" : "none",
        opacity: task.status === "completed" ? 0.7 : 1,
    };
    // When the user changes the dropdown, fire the parent's callback
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log("Status changed for task " + task.id + " to " + e.target.value);
        onStatusChange(task.id, e.target.value as TaskStatus);
    };

    // When the user clicks delete, confirm then fire parent's callback
    const handleDelete = () => {
        // console.log("Delete clicked for task " + task.id);
        if (confirm("Delete this task?")) {
            onDelete(task.id);
        }
    };

    return (
        <div style={cardStyle}>
            <div style={{ flex: 1, minWidth: "200px" }}>
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.05rem" }}>{task.title}</h3>
                <p style={{ margin: "0 0 0.5rem", fontSize: "0.9rem", color: "#4b5563" }}>
                    {task.description}
                </p>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <span>Priority: <strong>{task.priority}</strong></span>
                    <span>Due: <strong>{task.dueDate}</strong></span>
                </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                {/* Dropdown to change task status */}
                <select
                    value={task.status}
                    onChange={handleStatusChange}
                    style={{
                        padding: "0.4rem 0.6rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        cursor: "pointer",
                    }}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                {/* Delete button */}
                <button
                    onClick={handleDelete}
                    style={{
                        padding: "0.4rem 0.8rem",
                        backgroundColor: "#dc2626",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;