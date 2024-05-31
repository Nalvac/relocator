import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faFerry} from "@fortawesome/free-solid-svg-icons";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import styles from './sideMenu.module.scss';

export default function SideMenu() {


	return (

			<>

				<div className={`h-full max-w-96 min-w-96 bg-white ${styles.sideMenuContainer}`}>
					<div className={'flex flex-col h-full justify-between'}>
						<div className={`flex-col  flex-1 p-10 justify-between`}>
							<NavLink
									to={'profile'}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faBarsStaggered}/>
								<p className={'ml-2'}>Mon Compte</p>
							</NavLink>

							<NavLink
									to={'documents'}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faFileArrowDown}/>
								<p className={'ml-2'}>Documents Obligatoires</p>
							</NavLink>


							<NavLink
									to={'moving'}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faFerry}/>
								<p className={'ml-2'}>Mes déménagements</p>
							</NavLink>

							<NavLink
									to={'chat'}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faMessage}/>
								<p className={'ml-2'}>Chats</p>
							</NavLink>
						</div>
						<div className={' flex-col p-10 justify-between'}>

							<NavLink
									to={''}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faRightFromBracket}/>
								<p className={'ml-2'}>Se Déconnecter</p>
							</NavLink>

							<NavLink
									to={''}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faEarthAmericas}/>
								<p className={'ml-2'}>Français</p>
							</NavLink>


							<NavLink
									to={''}
									className={({isActive}) =>
											`flex items-center p-3 mb-4 ${isActive ? `${styles.itemSelected}` : `${styles.itemNoteSelected}`}`}
							>
								<FontAwesomeIcon icon={faEnvelope}/>
								<p className={'ml-2'}>Nous contacter</p>
							</NavLink>

						</div>
					</div>
				</div>

			</>
	)
}