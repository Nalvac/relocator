import styles from './profile.module.scss'
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import camions from '../../../../assets/images/Camions.png';
import michelli from '../../../../assets/images/michellli.jpeg'
export default function Profile() {
	return (
			<>
				<div className={'w-screen  p-10'}>
					<div className={`flex ${styles.profileContainer}`}>

						<div className={'flex flex-col'}>
							<h3 >Mon compte</h3>
							<div className={'py-3.5'}>
								<p>Nom</p>
								<p className={`${styles.userInfo}`}>Monier</p>
							</div>

							<div className={'py-3.5'}>
								<p>Prénom</p>
								<p className={`${styles.userInfo}`}>Alexandre</p>
							</div>

							<div className={'py-3.5'}>
								<p >Adresse principale</p>
								<div className={'flex items-center'}>
									<p className={`${styles.userInfo}`}>348 chemin de la tour</p>
									<FontAwesomeIcon icon={faPen} />
								</div>
							</div>

							<div className={'py-3.5'}>
								<p >Email</p>
								<div className={'flex items-center'}>
									<p className={`${styles.userInfo}`}>leDocker@gmail.com</p>
									<FontAwesomeIcon icon={faPen} />
								</div>
							</div>

							<div className={'py-3.5'}>
								<p >Mot de passe</p>
								<div className={'flex items-center'}>
									<p className={`${styles.userInfo}`}>********</p>
									<FontAwesomeIcon icon={faPen} />
								</div>
							</div>


							<div className={'py-3.5'}>
								<p >Numéro de téléphone</p>
								<div className={'flex items-center'}>
									<p className={`${styles.userInfo}`}>+33  6 12 24 24 53</p>
									<FontAwesomeIcon icon={faPen} />
								</div>
							</div>
						</div>

						<hr/>


						<div className={'flex flex-col'}>
							<h3 >Mes avis</h3>
							<div className={`flex ${styles.review}`}>
								<img src={camions}/>
								<div className={'flex flex-col ml-5 mb-5'}>
									<p className={`${styles.carrierName}`}>BP Trans</p>
									<div>
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
									</div>
									<p>Le transporteur <strong>BPTrans</strong> est très pro, je le recommande.</p>
								</div>
							</div>

							<div className={`flex ${styles.review}`}>
								<img src={michelli}/>
								<div className={'flex flex-col ml-5'}>
									<p className={`${styles.carrierName}`}>Michelli</p>
									<div>
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
									</div>
									<p>La société <strong>Michelli</strong> a transporté mes affaires intact.</p>
								</div>
							</div>

						</div>

					</div>
				</div>
			</>
	)
}