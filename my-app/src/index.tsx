import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/pages/Error";
import CadastroDespesa from "./components/pages/CadastroDespesas";
import ListarDespesas from "./components/pages/ListarDespesas";
import VisualizarDespesas from "./components/pages/VisualizarDespesas";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroDespesa />,
      },
      {
        path: "/cadastrar",
        element: <CadastroDespesa />,
      },
      {
        path: "/listar",
        element: <ListarDespesas />
      },
      {
        path: "/visualizar",
        element: <VisualizarDespesas />
      }

    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
