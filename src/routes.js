import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePaage from "./pages/User/Home/HomePage";
import App from "./App";
import Login from "./shared/Login/Login";
import Register from "./shared/Register/Register";
import { DepartmentPage } from "./pages/User/Department/DepartimentPage";
import DoctorInfo from "./pages/Doctor/DoctorPage/DoctorInfo";
import { DoctorProfile } from "./pages/User/Doctor/DoctorProfile";
import Manger from "./pages/Manager/Manger";
import { Medicines } from "./pages/User/Home/componants/Medicines";
import { Departmint } from "./pages/User/Home/componants/Departmint";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePaage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/departments",
        element: <DepartmentPage />,
      },
      {
        path: "/medicines",
        element: <Medicines />,
      },
      {
        path: "/departs",
        element: <Departmint />,
      },
      {
        path: "/doctorinfo",
        element: <DoctorInfo />,
      },
      {
        path: "/doctorprofile",
        element: <DoctorProfile />,
      },
      {
        path: "/manager",
        element: <Manger />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
