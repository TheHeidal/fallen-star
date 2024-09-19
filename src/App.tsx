import "./App.css";
import "react-tabs/style/react-tabs.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import Root from "./components/root";
import Wizard from "./components/Wizard";
import Codex from "./components/Codex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="wizards/warlock" replace />,
      },
      {
        path: "wizards/:pactPosition",
        element: <Wizard />,
        children: [
          {
            index: true,
            element: <Navigate to="summary" replace />,
          },
          { path: "summary", element: <CharacterSheet /> },
          { path: "codex", element: <Codex /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
