import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css"; // Imported as an object

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      toast.success("Registration Successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        {/* Left Side: Branding/Productivity Hook */}
        <div className={styles.authSidebar}>
          <div className={styles.sidebarContent}>
            <h1>Taskly</h1>
            <p>Plan, track, and master your daily productivity effortlessly.</p>
          </div>
          <div className={styles.sidebarFooter}>
            <span>© 2026 Taskly Inc.</span>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className={styles.authFormSection}>
          <h2>Create Account</h2>
          <p className={styles.authSubtitle}>
            Get started with your free account today.
          </p>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Register
            </button>
          </form>

          <p className={styles.redirectText}>
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
