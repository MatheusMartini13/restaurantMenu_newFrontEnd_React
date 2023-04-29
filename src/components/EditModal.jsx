import { useState } from 'react';
import classes from './EditModal.module.css';

export function EditModal({
	token,
	item,
	editHandler,
	mainCat,
	secCat,
	newGetProducts,
}) {
	// variables
	const [loading, setLoading] = useState(false)
	const [newMain, setNewMain] = useState(item.categories[0].name);
	const [newSec, setNewSec] = useState(item.categories[1].name);
	const [quantity, setQuantity] = useState(item.qty);
	const [price, setPrice] = useState(item.price);
	const [name, setName] = useState(item.name);

	// function that delete products.
	async function deleteProduct(prodId) {
		setLoading(true);
		const dataFetch = await fetch(
			'https://matt-menu.onrender.com/product' + prodId,
			{
				method: 'DELETE',
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
			},
		);

		const result = await dataFetch.json();
		console.log(result);

		await newGetProducts();
		setLoading(false);
		editHandler();
	}

	// function that patch products
	async function fetchEdit(prodId) {
		setLoading(true);
		console.log(prodId);
		if (newSec === '') return alert('Wrong Category!');

		const dataFetch = await fetch(
			'https://matt-menu.onrender.com/product/' + prodId,
			{
				method: 'PATCH',
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					categories: [newMain, newSec],
					quantity: quantity,
					price: price,
				}),
			},
		);

		const result = await dataFetch.json();

		await newGetProducts();
		setLoading(false);
		editHandler();
	}

	return (
		<>
			<div className={classes.backgroundDiv} onClick={editHandler}></div>
			<div className={classes.modalArea}>
				{/* Modal content if not loading */}
				{!loading && (
					<>
						<h1>{item.name}</h1>
						<div>
							<label htmlFor="name">Name:</label>{' '}
							<input
								defaultValue={name}
								required
								onChange={(ev) => {
									setName(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="name">Price:</label>{' '}
							<input
								defaultValue={price}
								type="number"
								required
								onChange={(ev) => {
									setPrice(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="name">Quantity:</label>{' '}
							<input
								defaultValue={quantity}
								type="number"
								required
								onChange={(ev) => {
									setQuantity(ev.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="name">Main Category:</label>{' '}
							<select
								name="mainCat"
								id="mainCat"
								required
								defaultValue={newMain}
								onChange={(ev) => {
									setNewMain(ev.target.value);
									setNewSec('');
								}}>
								{mainCat.map((cat) => (
									<option value={cat.name} key={cat.name}>
										{cat.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="password">Second Category:</label>{' '}
							<select
								name="secCat"
								id="secCat"
								required
								defaultValue={newSec}
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
							<p
								onClick={() => {
									deleteProduct(item._id);
								}}>
								Delete
							</p>
							<p
								onClick={() => {
									fetchEdit(item._id);
								}}>
								Edit
							</p>
						</div>
					</>
				)}
				{/* Modal content while waiting for the loading */}
				{loading && (
					<>
						<div>Loading...</div>
					</>
				)}
			</div>
		</>
	);
}
