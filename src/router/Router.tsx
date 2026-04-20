import AppLayout from "@/layout/AppLayout";
import Configuration from "@/pages/Configuration";
import Dashboard from "@/pages/Dashboard";
import Items from "@/pages/Items";
import { createHashRouter } from "react-router-dom";

export const AppRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/configurations",
        element: <Configuration />,
      },

      {
        path: "/aricles",
        element: <Items />,
      },
    ],
  },
]);
