import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import classes from './pageSelector.module.css';

export function PageSelector({
	border,
	pageSelectorRef,
	nextPageHandler,
	page,
	prevPageHandler,
	viewPages,
	categoryLength
}) {
	return (
		<>
			<div
				className={
					classes.selectorDiv + ' ' + (border ? classes.borderBottom : ' ')
				}>
				{pageSelectorRef && (
					<>
						<p className={classes.more}>more:</p>
						{page > 0 && (
							<BsFillArrowRightCircleFill
								className={classes.previous}
								onClick={prevPageHandler}
							/>
						)}
						{viewPages * (page + 1) < categoryLength && (
							<BsFillArrowRightCircleFill
								className={classes.next}
								onClick={nextPageHandler}
							/>
						)}
					</>
				)}
			</div>
		</>
	);
}
