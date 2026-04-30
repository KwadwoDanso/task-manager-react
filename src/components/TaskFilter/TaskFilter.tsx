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
