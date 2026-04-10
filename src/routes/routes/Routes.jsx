import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/blog/Blog";
import BlogDetail from "../../components/blog/BlogDetail";
import PropertyForm from "../../components/dashboard/propertyForm/PropertyForm";
import Faq from "../../components/faq/Faqf";
import PrivacyPolicyPage from "../../components/privacyPolicyPage/PrivacyPolicyPage";
import TermsOfService from "../../components/terms-of-service/TermsOfService";
import DashboardLayout from "../../layout/dasboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/notFound/NotFound";
import Properties from "../../pages/properties/Properties";
import Login from "../../pages/signup/Login";
import Register from "../../pages/signup/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:_id",
        element: <BlogDetail />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <PropertyForm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
