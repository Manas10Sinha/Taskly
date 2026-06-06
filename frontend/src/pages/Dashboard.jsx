import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      await API.post("/tasks", taskData);

      toast.success("Task created");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      await API.put(`/tasks/${id}`, taskData);

      toast.success("Task updated");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

      toast.success("Task deleted");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const toggleStatus = async (id) => {
    try {
      await API.patch(`/tasks/${id}/status`);

      fetchTasks();
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const logout = async () => {
    await API.post("/auth/logout");

    navigate("/");
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar logout={logout} />

      <main className={styles.mainContent}>
        <div className={styles.workspaceLayout}>
          <TaskForm createTask={createTask} />

          <TaskList
            tasks={tasks}
            loading={loading}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleStatus={toggleStatus}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
