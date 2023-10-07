import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "/src/components/login";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/main/MainLayout";
import Users from "/src/components/usersdata";
import Home from "../pages/home";
import Movies from "../pages/movies";
import MyList from "../pages/mylist";
import NewAndPopular from "../pages/newAndPopular";
import SearchForLanguage from "../pages/searchForLanguage";
import Series from "../pages/series";
const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/home" element={<PrivateRoute />}>
          <Route
            path="/home"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Route>
        <Route path="/movies" element={<PrivateRoute />}>
          <Route
            path="/movies"
            element={
              <MainLayout>
                <Movies />
              </MainLayout>
            }
          />
        </Route>
        <Route path="/mylist" element={<PrivateRoute />}>
          <Route
            path="/mylist"
            element={
              <MainLayout>
                <MyList />
              </MainLayout>
            }
          />
        </Route>
        <Route path="/newandpopular" element={<PrivateRoute />}>
          <Route
            path="/newandpopular"
            element={
              <MainLayout>
                <NewAndPopular />
              </MainLayout>
            }
          />
        </Route>
        <Route path="/searchForLanguage" element={<PrivateRoute />}>
          <Route
            path="/searchForLanguage"
            element={
              <MainLayout>
                <SearchForLanguage />
              </MainLayout>
            }
          />
        </Route>
        <Route path="/series" element={<PrivateRoute />}>
          <Route
            path="/series"
            element={
              <MainLayout>
                <Series />
              </MainLayout>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComp;
