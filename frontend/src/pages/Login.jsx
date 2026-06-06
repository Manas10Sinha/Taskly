import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // We'll create this next

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      //localStorage.setItem("token", res.data.token);// we don't need to store the token in localStorage because we are using cookie based authentication , the cookie will be automatically sent with every request
      navigate("/dashboard");
    } catch {
      toast.error("Login Failed");
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        {/* Left Side: Branding/Productivity Hook */}
        <div className={styles.authSidebar}>
          <div className={styles.sidebarContent}>
            <h1>Taskly</h1>
            <p>Welcome back! Sign in to pick up right where you left off.</p>
          </div>
          <div className={styles.sidebarFooter}>
            <span>© 2026 Taskly Inc.</span>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className={styles.authFormSection}>
          <h2>Welcome Back</h2>
          <p className={styles.authSubtitle}>
            Please enter your details to sign in.
          </p>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Sign In
            </button>
          </form>

          <p className={styles.redirectText}>
            Don't have an account yet?{" "}
            <span onClick={() => navigate("/register")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
