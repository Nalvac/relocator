import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage/homePage.tsx";
import Documents from "./pages/HomePage/components/Documents/documents.tsx";
import Profile from "./pages/HomePage/components/Profile/profile.tsx";
import Moving from "./pages/HomePage/components/Moving/moving.tsx";
import Furniture from "./pages/HomePage/components/Furniture/furniture.tsx";
import Chat from "./pages/HomePage/components/Chat/chat.tsx";


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
					},
					{
						path: 'furniture',
						element: <Furniture/>
					},
					{
						path: 'chat',
						element: <Chat/>
					}
				]
			}
		]
	}
]);
export default routes;