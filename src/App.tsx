// App.tsx — manages the task array, filter state, add-task form, and handlers

import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import { Task, TaskStatus, TaskPriority, TaskFilters } from "./types";

function App() {
  // Starts empty — user creates their own tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({});

  // Controls whether the add-task form is visible
  const [showForm, setShowForm] = useState(false);

  // Form input state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [dueDate, setDueDate] = useState("");

  // Add a new task from the form inputs
  const handleAddTask = () => {
    if (!title.trim() || !dueDate) return;
    // console.log("App: adding task - " + title);
    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status: "pending",
      priority: priority,
      dueDate: dueDate,
    };
    setTasks([...tasks, newTask]);
    // Reset form
    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
    setShowForm(false);
  };

  // Update a task's status by id
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    // console.log("App: changing status for " + taskId + " to " + newStatus);
    setTasks(tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t
    ));
  };

  // Remove a task from the list
  const handleDelete = (taskId: string) => {
    // console.log("App: deleting " + taskId);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  // TaskFilter calls this when its dropdowns change
  const handleFilterChange = (newFilters: TaskFilters) => {
    // console.log("App: filters updated", newFilters);
    setFilters(newFilters);
  };

  // Build the filtered list
  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });
