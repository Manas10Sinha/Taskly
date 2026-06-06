import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await API.get("/auth/me");

        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return authenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
