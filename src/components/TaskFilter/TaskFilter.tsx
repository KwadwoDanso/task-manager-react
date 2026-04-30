// TaskFilter.tsx — two dropdowns to filter tasks by status and priority

import { useState } from "react";
import { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
    // Local state for the two filter dropdowns
    const [status, setStatus] = useState<TaskStatus | "">("");
    const [priority, setPriority] = useState<TaskPriority | "">("");

    // When status dropdown changes, update local state and tell parent
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as TaskStatus | "";
        setStatus(newStatus);
        // console.log("Filter status changed to:", newStatus);
        onFilterChange({
            status: newStatus || undefined,
            priority: priority || undefined,
        });
    };

    // When priority dropdown changes, update local state and tell parent
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = e.target.value as TaskPriority | "";
        setPriority(newPriority);
        // console.log("Filter priority changed to:", newPriority);
        onFilterChange({
            status: status || undefined,
            priority: newPriority || undefined,
        });
    };


    // Reset both dropdowns and tell parent to clear filters
    const handleClear = () => {
        // console.log("Clearing all filters");
        setStatus("");
        setPriority("");
        onFilterChange({});
    };

    // Style for both select boxes
    const selectStyle = {
        padding: "0.5rem 0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "0.9rem",
        backgroundColor: "#ffffff",
        cursor: "pointer",
    };

    return (
        <div style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "1rem",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            marginBottom: "1rem",
        }}>
            <strong style={{ fontSize: "0.9rem" }}>Filter:</strong>

            <select value={status} onChange={handleStatusChange} style={selectStyle}>
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <select value={priority} onChange={handlePriorityChange} style={selectStyle}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button
                onClick={handleClear}
                style={{
                    padding: "0.5rem 0.85rem",
                    backgroundColor: "#6b7280",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                }}
            >
                Clear
            </button>
        </div>
    );
}

export default TaskFilter;
