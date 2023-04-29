import classes from './Item.module.css';
import { useState } from 'react';
import { EditModal } from './EditModal';

export function Item({
	items,
	border,
	orderNumber,
	token,
	mainCat,
	secCat,
	newGetProducts,
}) {
	const [editItem, setEditItem] = useState(false);
	const item = items?.[orderNumber];

	// open or closes the edit modal
	const editHandler = async () => {
		setEditItem((eI) => !eI);
	};

	return (
		<>
			<div
				className={
					classes.containerDiv + ' ' + (border ? classes.borderBottom : ' ')
				}>
				{/* Top Item Column */}
				<div className={classes.leftContentDiv}>
					{/* Title */}
					<div className={classes.divOrganizerLeft}>
						<div className={classes.title}>{item?.name || ' '}</div>
					</div>
					{/* Price */}
					<div className={classes.divOrganizerRight}>
						<div>{item?.price ? '$ ' + item?.price : ''}</div>
					</div>
				</div>
				{/* Bottom Item Column */}
				<div className={classes.rightContentDiv}>
					{/* Description (second category) */}
					<div className={classes.divOrganizerLeft}>
						<div className={classes.categories}>
							{item?.categories?.[1]?.name}
						</div>
					</div>
					{/* Quantity */}
					<div className={classes.divOrganizerRight}>
						{token && <div>{item?.qty || ' '}</div>}
					</div>
					{/* Edit */}
					{token && item.name && (
						<div className={classes.editOrganizer} onClick={editHandler}>
							edit
						</div>
					)}
				</div>
				{/* Hidden Id */}
				<input type="hidden" value={item?._id} />
			</div>
			{editItem && (
				<EditModal
					token={token}
					item={item}
					editHandler={editHandler}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
			)}
		</>
	);
}
