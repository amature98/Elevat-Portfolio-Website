import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/index.jsx";
import BlogsPage from "./Pages/BlogsPage/index";
import ErrorPage from "./Pages/ErrorPage/index";

//  function to define the routes in the application
export default function Router() {
	return useRoutes([
		{ path: "/", element: <LandingPage /> },
		{ path: "/blogs", element: <BlogsPage /> },
		{ path: "/404", element: <ErrorPage /> },
		// A wildcard route that redirects to the error page
		{ path: "*", element: <Navigate to='/404' /> },
	]);
}
