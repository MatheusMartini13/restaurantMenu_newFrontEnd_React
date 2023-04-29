import classes from './Footer.module.css';

export function Footer() {
	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.deliveryDiv}>
					<span>Delivery  :</span>
					<i>(051) 9 9514-5440</i>
				</div>
				<div className={classes.siteDiv}>menu-matt.onrender.com/</div>
			</div>
		</>
	);
}
