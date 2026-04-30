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
