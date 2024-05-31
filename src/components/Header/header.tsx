import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";
export default function Header() {
	return (
			<>
				<div className={'w-full bg-white shadow-2xl absolute z-10'}>
					<div className={'flex  justify-between max-h-20 items-center'}>
						<div className={'ml-8 mr-8 w-28'}>
							<img  src={logo}/>
						</div>
						<div className={'flex justify-center items-center'}>
							<NavLink to={'profile'} className={`mr-5 header-link`} >
								<h4 className={"font-bold"}>Accueil</h4>
							</NavLink>
							<NavLink to={'profile'} className={`mr-5 header-link`} >
								<h4 className={"font-bold"}>Formulaire</h4>
							</NavLink>
							<NavLink to={'profile'} className={`mr-5 header-link`} >
								<h4 className={"font-bold"}>Scanner</h4>
							</NavLink>
						</div>
					</div>
				</div>
			</>
	)
}