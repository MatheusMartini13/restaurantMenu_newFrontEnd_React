import classes from './Header.module.css';

export function Header() {
	return (
		<>
			<div className={classes.centerDiv}>
				<div className={classes.leftDiv}>
					<h1 className={classes.underline}>location</h1>
					<p>Oscar Horn</p>
					<p>Novo Hamburgo,</p>
					<p>Number 71</p>
				</div>
				<div className={classes.middleDiv}>
					<p>10AM - 11PM</p>
				</div>
				<div className={classes.rightDiv}>
					<h1>The Restaurant</h1>
				</div>
			</div>
			<div className={classes.textDiv}><p>FOOD <i>and</i> BEVERAGE MENU LIST</p></div>
		</>
	);
}
