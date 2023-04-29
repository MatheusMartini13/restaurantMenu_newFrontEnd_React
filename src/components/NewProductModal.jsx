import { useState } from 'react';
import classes from './NewProductModal.module.css';

export function NewProductModal({
	mainCat,
	secCat,
	productModalHandler,
	loading,
	setLoading,
	newGetProducts,
	token,
}) {
	const [newMain, setNewMain] = useState('');
	const [newSec, setNewSec] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState('');
	const [name, setName] = useState('');

	async function createNewProduct() {
		setLoading(true);
		const body = {
			name: name,
			price: price,
			quantity: quantity,
			categories: [newMain, newSec],
		};

		const dataFetch = await fetch('https://matt-menu.onrender.com/product', {
			method: 'POST',
			headers: { Authorization: token, 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		console.log(body);

		const result = await dataFetch.json();

		console.log(result);
		productModalHandler();
		await newGetProducts();
		setLoading(false);
	}

	return (
		<>
			<div
				className={classes.backgroundDiv}
				onClick={productModalHandler}></div>
			<div className={classes.visibleArea}>
				{!loading && (
					<>
						<h1>Crete New Product</h1>
						<div>
							<label htmlFor="name">Name:</label>{' '}
							<input
								required
								onChange={(ev) => {
									setName(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="name">Price:</label>{' '}
							<input
								required
								type="number"
								onChange={(ev) => {
									setPrice(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="name">Quantity:</label>{' '}
							<input
								required
								type="number"
								onChange={(ev) => {
									setQuantity(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="MainCat">Main Category:</label>{' '}
							<select
								name="mainCat"
								id="mainCat"
								required
								onChange={(ev) => {
									setNewMain(ev.target.value);
									setNewSec('');
								}}>
								<option hidden></option>
								{mainCat.map((cat) => (
									<option value={cat.name} key={cat.name}>
										{cat.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="SecCat">Second Category:</label>{' '}
							<select
								name="secCat"
								id="secCat"
								required
								onCompositionUpdate={(ev) => {
									console.log(ev.target.value);
								}}
								onChange={(ev) => {
									setNewSec(ev.target.value);
								}}>
								<option hidden></option>
								{secCat.map((cat) => {
									if (cat.parent.name === newMain) {
										return (
											<option value={cat.name} key={cat.name}>
												{cat.name}
											</option>
										);
									}
									return '';
								})}
							</select>
						</div>
						<div className={classes.gapedDiv}>
							<p onClick={createNewProduct}>Create</p>
						</div>
					</>
				)}
				{loading && (
					<>
						<div>Loading...</div>
					</>
				)}
			</div>
		</>
	);
}
