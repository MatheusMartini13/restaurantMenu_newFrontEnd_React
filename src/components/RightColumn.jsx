import classes from './RightColumn.module.css';
import { Item } from './Item';
import { ImageContainer } from './ImageContainer';
import { TitleDiv } from './TitleDiv';
import { PageSelector } from './pageSelector';
import { useEffect, useState } from 'react';

export function RightColumn({
	products,
	mainCat,
	secCat,
	token,
	newGetProducts,
}) {
	// Desserts Variables
	const DESSERT_PAGES = 5;
	const [dessertPage, setDessertPage] = useState(0);
	const [dessertPageSelector, setDessertPageSelector] = useState(false);
	const [dessertItems, setDessertItems] = useState({});

	// Drinks Variables
	const DRINK_PAGES = 5;
	const [drinkPage, setDrinkPage] = useState(0);
	const [drinkPageSelector, setDrinkPageSelector] = useState(false);
	const [drinkItems, setDrinkItems] = useState({});

	// Dessert useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < DESSERT_PAGES; index++) {
			if (products.dessert?.[dessertPage * DESSERT_PAGES + index]?.name) {
				menuItems.push(products.dessert[dessertPage * DESSERT_PAGES + index]);
			} else {
				menuItems.push({});
			}
		}
		setDessertItems(menuItems);
		if (products.dessert?.length > DESSERT_PAGES) {
			setDessertPageSelector(true);
		}
	}, [dessertPage, products]);

	// Drink useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < DRINK_PAGES; index++) {
			if (products.drink?.[drinkPage * DRINK_PAGES + index]?.name) {
				menuItems.push(products.drink[drinkPage * DRINK_PAGES + index]);
			} else {
				menuItems.push({});
			}
		}
		setDrinkItems(menuItems);
		if (products.drink?.length > DRINK_PAGES) {
			setDrinkPageSelector(true);
		}
	}, [drinkPage, products]);

	// reset page after product change (patch, post, delete)
	useEffect(() => {
		setDrinkPage(0);
		setDessertPage(0);
		if (products.dessert?.length > DESSERT_PAGES) {
			setDessertPageSelector(true);
		} else {
			setDessertPageSelector(false);
		}
		if (products.drink?.length > DRINK_PAGES) {
			setDrinkPageSelector(true);
		} else {
			setDrinkPageSelector(false);
		}
	}, [products]);

	// Dessert Page Handling functions

	function nextDessertPage() {
		setDessertPage((a) => a + 1);
	}

	function prevDessertPage() {
		setDessertPage((a) => a - 1);
	}

	// Drink Page Handling functions

	function nextDrinkPage() {
		setDrinkPage((a) => a + 1);
	}

	function prevDrinkPage() {
		setDrinkPage((a) => a - 1);
	}

	return (
		<div className={classes.sideDiv}>
			<ImageContainer image={'drinks'} />
			<TitleDiv title={'drinks'} border={true} />
			<Item
				items={drinkItems}
				orderNumber={0}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={drinkItems}
				orderNumber={1}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={drinkItems}
				orderNumber={2}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={drinkItems}
				orderNumber={3}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={drinkItems}
				orderNumber={4}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<PageSelector
				pageSelectorRef={drinkPageSelector}
				nextPageHandler={nextDrinkPage}
				prevPageHandler={prevDrinkPage}
				page={drinkPage}
				categoryLength={products.drink?.length}
				viewPages={DRINK_PAGES}
			/>
			<ImageContainer image={'dessert'} border={true} />
			<TitleDiv title={'Desserts'} />
			<Item
				items={dessertItems}
				orderNumber={0}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={dessertItems}
				orderNumber={1}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={dessertItems}
				orderNumber={2}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={dessertItems}
				orderNumber={3}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={dessertItems}
				orderNumber={4}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<PageSelector
				pageSelectorRef={dessertPageSelector}
				nextPageHandler={nextDessertPage}
				prevPageHandler={prevDessertPage}
				page={dessertPage}
				categoryLength={products.dessert?.length}
				viewPages={DESSERT_PAGES}
			/>
		</div>
	);
}
