import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BaseLayoutPage } from "@/shared/layouts";
import { HomePage } from "@/pages/home";

export default function RoutesConfig() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<BaseLayoutPage>
					<HomePage />
				</BaseLayoutPage>
			),
			errorElement: <h1>Página de erro</h1>,
		},
	]);

	return <RouterProvider router={router} />;
}
