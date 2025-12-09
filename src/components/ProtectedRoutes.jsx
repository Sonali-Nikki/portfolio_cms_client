import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();

  // If token exists → allow access
  // If no token → redirect to login
  return token ? children : <Navigate to="/login" />;
}
