import { Header } from '../components/Header';
import { Login } from '../components/Login';
import { ContentColumns } from '../components/ContentColumns';
import { Footer } from '../components/Footer';
import classes from './RootLayout.module.css';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export function RootLayout() {
	// variables
	const [token, setToken] = useState(false);
	const [mainCat, setMainCat] = useState([]);
	const [secCat, setSecCat] = useState([]);
	const [originalProducts, setOriginalProducts] = useState(
		useLoaderData().products,
	);
	const [sortProds, setSortProds] = useState({});
	let newProdsArray = { active: false };

	// function that get products, similar to the loader.
	async function newGetProducts() {
		const dataFetch = await fetch('https://matt-menu.onrender.com/product', {
			method: 'GET',
			headers: {
				Authentication: 'Bearer ',
				'Content-Type': 'application/json',
			},
		});

		const result = await dataFetch.json();
		newProdsArray = {};
		console.log(result.products);
		setOriginalProducts(result.products);
	}

	// effect that triggers each time the products change, it classifies the categories.
	useEffect(() => {
		let ignore = false;

		// category sort for each product in original products
		originalProducts.forEach((product) => {
			// get the product main category
			const cat = product.categories[0].name;

			// checks if the category exists and add product, if not creates new. Also cleanup if
			if (!ignore) {
				if (newProdsArray?.[cat.toString()]) {
					newProdsArray[cat.toString()] = [
						...newProdsArray?.[cat.toString()],
						product,
					];
				} else {
					newProdsArray[cat.toString()] = [product];
				}
			}
		});
		setSortProds(newProdsArray);

		return () => {
			ignore = true;
			newProdsArray = {};
		};
	}, [originalProducts]);

	return (
		<>
			<div className={classes.mainDiv}>
				<Header />
				<Login
					setToken={setToken}
					setMainCat={setMainCat}
					setSecCat={setSecCat}
					mainCat={mainCat}
					secCat={secCat}
					token={token}
					newGetProducts={newGetProducts}
				/>
				<ContentColumns
					products={sortProds}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Footer />
			</div>
		</>
	);
}

export async function loader() {
	// fetch products
	const dataFetch1 = await fetch('https://matt-menu.onrender.com/product', {
		method: 'GET',
		headers: {
			Authentication: 'Bearer ',
			'Content-Type': 'application/json',
		},
	});

	const result1 = await dataFetch1.json();

	return result1;
}
