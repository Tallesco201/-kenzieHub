import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes/protectedRoutes";
import DashboardPage from "../pages/Dashboard/dashboard";
import Error404Page from "../pages/Error404/error404";
import LoginPage from "../pages/Login/login";
import RegisterLogin from "../pages/Register/register";

export const RoutesMain = () => {
  

  return (
    <Routes>
      <Route path="/" element={<LoginPage  />} />

      <Route path="/register" element={<RegisterLogin />} />

      <Route path="*" element={<Error404Page />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={<DashboardPage 
             />}
        />
      </Route>
    </Routes>
  );
};
