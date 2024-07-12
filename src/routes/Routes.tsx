import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home";

export default function RoutesConfig() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: <h1>Página de erro</h1>,
		},
	]);

	return <RouterProvider router={router} />;
}
