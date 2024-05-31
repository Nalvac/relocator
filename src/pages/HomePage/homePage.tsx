import Header from "../../components/Header/header.tsx";
import SideMenu from "./components/sideMenu/sideMenu.tsx";
import {Outlet} from "react-router-dom";

export default function HomePage() {
	return (
			<>
				<Header></Header>
				<div className={`h-screen`}>
					<div className={`flex pt-20 h-screen`}>
						<SideMenu></SideMenu>
						<Outlet></Outlet>
					</div>
				</div>
			</>
	)
}