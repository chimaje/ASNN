import { PRIVATE_PATHS, PUBLIC_PATHS } from "@/constants/routes";
import AuditTrail from "@/pages/AuditTrail";
import AuthLayout from "@/pages/auth/AuthLayout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ResetPassword from "@/pages/auth/ResetPassword";
import Dashboard from "@/pages/Dashboard";
import GeneratePin from "@/pages/GeneratePin";
import Reports from "@/pages/Reports";
import SplashScreen from "@/pages/SplashScreen";
import Users from "@/pages/Users";
import AuthenticatedLayout from "@/shared/layout/AuthenticatedLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    Component: AuthenticatedLayout,
    children: [
      {
        path: PRIVATE_PATHS.DASHBOARD,
        Component: Dashboard,
      },
      {
        path: PRIVATE_PATHS.GENERATE_PIN,
        Component: GeneratePin,
      },
      {
        path: PRIVATE_PATHS.USERS,
        Component: Users,
      },
      {
        path: PRIVATE_PATHS.REPORTS,
        Component: Reports,
      },
      {
        path: PRIVATE_PATHS.AUDIT_TRAIL,
        Component: AuditTrail,
      },
    ],
  },
  {
    path: PUBLIC_PATHS.LOGIN,
    Component: Login,
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: PUBLIC_PATHS.FORGOT_PASSWORD,
        Component: ForgotPassword,
      },
      {
        path: PUBLIC_PATHS.RESET_PASSWORD,
        Component: ResetPassword,
      },
      {
        path: PUBLIC_PATHS.REGISTER,
        Component: Register,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
