import styles from "../pages/Dashboard.module.css";

function Sidebar({ logout }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <h2>Taskly</h2>
      </div>

      <nav className={styles.navLinks}>
        <button className={`${styles.navLinkBtn} ${styles.activeLink}`}>
          Dashboard
        </button>
      </nav>

      <button className={styles.logoutBtn} onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
