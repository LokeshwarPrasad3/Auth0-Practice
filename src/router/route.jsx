import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import AuthPage from "../pages/auth/AuthPage";
import LogoutSuccess from "../components/Layout/LogoutSuccess";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/thankyou" element={<LogoutSuccess />} />
    </>
  )
);

export default routes;
