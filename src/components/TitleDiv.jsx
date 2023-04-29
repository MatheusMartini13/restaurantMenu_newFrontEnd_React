import classes from './CenterColumn.module.css';

export function TitleDiv({ title, border }) {
	return (
		<div className={classes.titleDiv + ' ' + (border ? classes.border : ' ')}>
			{title}
		</div>
	);
}
