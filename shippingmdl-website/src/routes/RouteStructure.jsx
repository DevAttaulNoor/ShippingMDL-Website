import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { ErrorRoute } from "./ErrorRoute";
import { Routes } from "@constants/Routes";
import { OuterContainer } from "@layouts/OuterContainer";

const Home = lazy(() => import("@pages/public/Home"));
const About = lazy(() => import("@pages/public/About"));
const Contact = lazy(() => import("@pages/public/Contact"));
const Blogs = lazy(() => import("@pages/public/Blogs/Blogs"));
const Blog = lazy(() => import("@pages/public/Blogs/Blog"));
const Services = lazy(() => import("@pages/public/Services/Services"));
const Service = lazy(() => import("@pages/public/Services/Service"));
const Faqs = lazy(() => import("@pages/public/Faqs"));
const PrivacyPolicy = lazy(() => import("@pages/public/PrivacyPolicy"));
const TermsCondition = lazy(() => import("@pages/public/TermsCondition"));

export const RouteStructure = createBrowserRouter([{
    errorElement: <ErrorRoute />,
    element: <OuterContainer />,
    children: [
        { path: Routes.HOME.path, element: <Home /> },
        { path: Routes.ABOUT.path, element: <About /> },
        { path: Routes.CONTACT.path, element: <Contact /> },
        { path: Routes.BLOGS.path, element: <Blogs /> },
        { path: Routes.BLOG.path, element: <Blog /> },
        { path: Routes.SERVICES.path, element: <Services /> },
        { path: Routes.SERVICE.path, element: <Service /> },
        { path: Routes.FAQ.path, element: <Faqs /> },
        { path: Routes.PRIVACY_POLICY.path, element: <PrivacyPolicy /> },
        { path: Routes.TERMS_CONDITION.path, element: <TermsCondition /> },
    ]
}]);