import styles from "../pages/Dashboard.module.css";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Previous
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
