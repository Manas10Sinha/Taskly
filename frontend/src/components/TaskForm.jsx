import { useState } from "react";
import styles from "../pages/Dashboard.module.css";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <section className={styles.formPanel}>
      <div className={styles.stickyFormWrapper}>
        <h3>Create New Task</h3>
        <form onSubmit={submitHandler} className={styles.taskForm}>
          {/* Title Field Container */}
          <div className={styles.inputGroup}>
            <label htmlFor="formTaskTitle">Task Title</label>
            <input
              id="formTaskTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              required
            />
          </div>

          {/* Description Field Container */}
          <div className={styles.inputGroup}>
            <label htmlFor="formTaskDesc">Detailed Description</label>
            <textarea
              id="formTaskDesc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide additional details..."
              rows={4}
            />
          </div>

          {/* Action Trigger Button */}
          <button type="submit" className={styles.submitBtn}>
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default TaskForm;
