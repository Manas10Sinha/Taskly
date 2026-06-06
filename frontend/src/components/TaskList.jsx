import { useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import TaskFilters from "./TaskFilters";
import Pagination from "./Pagination";

import styles from "../pages/Dashboard.module.css";

function TaskList({ tasks, loading, updateTask, deleteTask, toggleStatus }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const handleUpdateTask = (id) => {
    updateTask(id, {
      title: editTitle,
      description: editDescription,
    });

    setEditingId(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (task.description || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : task.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;

  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return styles.statusCompleted;

      case "in progress":
        return styles.statusProgress;

      default:
        return styles.statusPending;
    }
  };

  if (loading) {
    return (
      <section className={styles.tasksPanel}>
        <div className={styles.loaderContainer}>
          <div className={styles.spinner}></div>
          <p>Loading Tasks...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.tasksPanel}>
      <TaskFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {filteredTasks.length === 0 ? (
        <div className={styles.emptyState}>
          <h3>No tasks found</h3>
        </div>
      ) : (
        <>
          <div className={styles.tasksGrid}>
            {currentTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                editingId={editingId}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editDescription={editDescription}
                setEditDescription={setEditDescription}
                startEdit={startEdit}
                cancelEdit={cancelEdit}
                updateTask={handleUpdateTask}
                toggleStatus={toggleStatus}
                deleteTask={deleteTask}
                getStatusClass={getStatusClass}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}

export default TaskList;
