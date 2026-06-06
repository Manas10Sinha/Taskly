import styles from "../pages/Dashboard.module.css";

function TaskCard({
  task,
  editingId,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  startEdit,
  cancelEdit,
  updateTask,
  toggleStatus,
  deleteTask,
  getStatusClass,
}) {
  const isEditing = editingId === task._id;

  return (
    <div
      className={`${styles.taskCard} ${isEditing ? styles.cardEditing : ""}`}
    >
      {isEditing ? (
        <div className={styles.taskForm}>
          <div className={styles.inputGroup}>
            <label htmlFor={`editTitle-${task._id}`}>Task Title</label>
            <input
              id={`editTitle-${task._id}`}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Edit title..."
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor={`editDesc-${task._id}`}>Description</label>
            <textarea
              id={`editDesc-${task._id}`}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              rows={3}
              placeholder="Edit description..."
            />
          </div>

          <div className={styles.editActionsRow}>
            <button
              className={styles.submitBtn}
              onClick={() => updateTask(task._id)}
            >
              Save Changes
            </button>
            <button className={styles.cancelBtn} onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Card Upper Content Area */}
          <div className={styles.cardMainBody}>
            <div className={styles.taskCardHeader}>
              <h4>{task.title}</h4>
              <span
                className={`${getStatusClass(task.status)} ${styles.statusBadge}`}
              >
                {task.status}
              </span>
            </div>

            <p className={styles.taskDescription}>
              {task.description || (
                <span className={styles.noDesc}>No description provided.</span>
              )}
            </p>

            <div className={styles.taskMeta}>
              <span className={styles.metaId}>ID: {task._id.slice(-6)}</span>
            </div>
          </div>

          {/* Integrated Clean Action Bar Layer */}
          <div className={styles.iconActionsGroup}>
            <button
              className={styles.iconActionBtn}
              title="Toggle Status"
              onClick={() => toggleStatus(task._id)}
            >
              🔄 <span className={styles.btnLabel}>Toggel Status</span>
            </button>

            <button
              className={styles.iconActionBtn}
              title="Edit Task"
              onClick={() => startEdit(task)}
            >
              ✏️ <span className={styles.btnLabel}>Edit</span>
            </button>

            <button
              className={`${styles.iconActionBtn} ${styles.deleteAction}`}
              title="Delete Task"
              onClick={() => deleteTask(task._id)}
            >
              🗑️ <span className={styles.btnLabel}>Delete</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;
