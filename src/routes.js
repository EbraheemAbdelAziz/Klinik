import { Navigate, createBrowserRouter  } from "react-router-dom";
import HomePaage from "./pages/Home/HomePage";
import App from "./App";
import Login from "./pages/Home/componants/Login/Login";
import Register from "./pages/Home/componants/Register/Register";
import { DepartmentPage } from "./pages/Department/DepartimentPage";
import DoctorInfo from "./pages/Home/componants/DoctorPage/DoctorInfo";

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
        path: "/doctorinfo",
        element: <DoctorInfo />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
