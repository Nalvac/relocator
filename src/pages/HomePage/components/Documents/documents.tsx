import styles from "./documents.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function () {
	return(
			<>
				<div className={'w-screen  p-10'}>

					<div className={`flex flex-col mb-8 ${styles.documentContainer}`}>
						<h3>Documents Obligatoire</h3>

						<div className={'mt-5'} >
							<p >Adresse principale</p>
							<div className={'flex items-center'}>
								<p className={`${styles.userInfo}`}>348 chemin de la tour</p>
								<div className={`${styles.iconContainer}`}>
									<FontAwesomeIcon icon={faPen} />
									<hr/>
									<FontAwesomeIcon icon={faTrashCan} className={`${styles.redSvg}`}/>
								</div>
							</div>
						</div>
					</div>

					<hr/>

					<div className={`flex flex-col mt-8  ${styles.documentContainer}`}>
						<h3>Moyen de payement</h3>

						<div className={'mt-5'} >
							<p >Carte</p>
							<div className={'flex items-center'}>
								<p className={`${styles.userInfo}`}>*****************59412</p>
								<div className={`${styles.iconContainer}`}>
									<FontAwesomeIcon icon={faPen} />
									<hr/>
									<FontAwesomeIcon icon={faTrashCan} className={`${styles.redSvg}`}/>
								</div>
							</div>
							<div  className={`${styles.plusIcon}`} >
								<FontAwesomeIcon icon={faPlus}/>
							</div>
						</div>
					</div>
				</div>
			</>
	)
}