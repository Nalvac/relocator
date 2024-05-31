import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage/homePage.tsx";
import Documents from "./pages/HomePage/components/Documents/documents.tsx";
import Profile from "./pages/HomePage/components/Profile/profile.tsx";
import Moving from "./pages/HomePage/components/Moving/moving.tsx";


const routes = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{

				path: '/',
				element: <HomePage/>,
				children: [
					{
						path:'profile',
						element: <Profile/>
					},
					{
						path:'documents',
						element: <Documents/>
					},
					{
						path: 'moving',
						element: <Moving/>
					}
				]
			}
		]
	}
]);
export default routes;