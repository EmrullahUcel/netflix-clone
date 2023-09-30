import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/tailwind.css";
import MainLayout from "./layouts/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter >
    <MainLayout />
  </BrowserRouter>
);
