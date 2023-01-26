
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {

  return localStorage.getItem("@TOKEN") ? <Outlet /> : <Navigate to="/" />;
}
