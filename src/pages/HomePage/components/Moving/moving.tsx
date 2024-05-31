import styles from './moving.module.scss';
export default function Moving() {
	return(
			<>
				<div className={`w-screen  p-10 ${styles.movingContainer}`}>
					<h3>Information du déménagement</h3>
				</div>
			</>
	)
}