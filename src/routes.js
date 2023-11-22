import { createBrowserRouter  } from "react-router-dom";
import HomePaage from "./pages/Home/HomePage";
import App from "./App";
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
        element: <HomePaage />,
      },
      {
        path: "/register",
        element: <HomePaage />,
      },
    ],
  },
]);
