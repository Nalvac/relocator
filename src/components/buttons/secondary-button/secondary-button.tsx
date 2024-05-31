import {ButtonModel} from "../button.model.ts";
import React from "react";

export default function SecondaryButton({name, link}: ButtonModel) {
	const styles = {
		button: {
			display: 'inline-block',
			padding: '10px 20px',
			margin: '10px',
			fontSize: '16px',
			color: '#fff',
			backgroundColor: '#1DD3B0',
			border: 'none',
			borderRadius: '4px',
			textDecoration: 'none',
			textAlign: 'center',
			cursor: 'pointer',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
		}as React.CSSProperties,
	};



	return(
			<a href={link} style={styles.button}>
				{name}
			</a>
	)


}