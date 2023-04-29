import classes from './ContentColumns.module.css';
import { LeftColumn } from './LeftColumn';
import { CenterColumn } from './CenterColumn';
import { RightColumn } from './RightColumn';

export function ContentColumns({ products, token, mainCat, secCat, newGetProducts }) {
	return (
		<div className={classes.columnOrganizer}>
			<LeftColumn
				products={products}
				token={token}
				mainCat={mainCat}
				secCat={secCat}
				newGetProducts={newGetProducts}
			/>
			<CenterColumn
				products={products}
				token={token}
				mainCat={mainCat}
				secCat={secCat}
				newGetProducts={newGetProducts}
			/>
			<RightColumn
				products={products}
				token={token}
				mainCat={mainCat}
				secCat={secCat}
				newGetProducts={newGetProducts}
			/>
		</div>
	);
}
