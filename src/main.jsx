import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/tailwind.css";
import MainLayout from "./layouts/main/MainLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes/RoutesComp";
// import Routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
