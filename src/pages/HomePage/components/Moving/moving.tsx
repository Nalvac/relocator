import styles from './moving.module.scss';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Moving() {
	return(
			<>
				<div className={`w-screen ${styles.movingContainer} `}>
					<h3>Information du déménagement</h3>

					<div className={'bg-[#F1EFEF] mt-5  rounded-xl h-[40px] max-w-[300px] flex items-center justify-center'}>
						<p>Villa | Du 08/05/2025 au 25/05/2025 </p>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>

					<div className={'flex gap-3 justify-center'}>

						<div className={'flex flex-col gap-20 justify-end mt-16 py-20'}>
							<div>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Le transporteur BPTrans à bien reçus vos affaires </p>
								</div>
							</div>

							<div>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Le transporteur BPTrans a acheminé vos affaires au docker Micelli </p>
								</div>
							</div>

							<div>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Vos affaires sont en cours d’acheminement via voie maritimes</p>
								</div>
							</div>
						</div>

						<div className={'w-5 rounded-xl bg-[#F1EFEF] mt-[150px]'}>

						</div>

						<div className={'flex flex-col gap-20 justify-end py-20'}>
							<div className={'mb-[-1.2rem]'}>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Le Reaper ProReap a chargé le camions</p>
								</div>
							</div>

							<div className={'mb-[-1.2rem]'}>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Le transporteur BPTrans achemine vos affaires </p>
								</div>
							</div>

							<div className={'mb-[-1.2rem]'}>
								<p>12/06/2024</p>
								<div className={'bg-[#F1EFEF] mt-2  rounded-xl h-[40px]  flex items-center justify-center'}>
									<p className={'p-5'}>Le docker Michelli charge vos affaires  </p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</>
	)
}