import classes from './CenterColumn.module.css';
import { Item } from './Item';
import { ImageContainer } from './ImageContainer';
import { TitleDiv } from './TitleDiv';
import { PageSelector } from './pageSelector';
import { useEffect, useState } from 'react';

export function CenterColumn({
	products,
	token,
	mainCat,
	secCat,
	newGetProducts,
}) {
	// Pasta Variables
	const PASTA_PAGES = 4;
	const [pastaPage, setPastaPage] = useState(0);
	const [pastaPageSelector, setPastaPageSelector] = useState(false);
	const [pastaItems, setPastaItems] = useState({});

	// Meat Variables
	const MEAT_PAGES = 6;
	const [meatPage, setMeatPage] = useState(0);
	const [meatPageSelector, setMeatPageSelector] = useState(false);
	const [meatItems, setMeatItems] = useState({});

	// Pasta useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < PASTA_PAGES; index++) {
			if (products.pasta?.[pastaPage * PASTA_PAGES + index]?.name) {
				menuItems.push(products.pasta[pastaPage * PASTA_PAGES + index]);
			} else {
				menuItems.push({});
			}
		}
		setPastaItems(menuItems);
		if (products.pasta?.length > PASTA_PAGES) {
			setPastaPageSelector(true);
		}
	}, [pastaPage, products]);

	// Meat useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < MEAT_PAGES; index++) {
			if (products.meat?.[meatPage * MEAT_PAGES + index]?.name) {
				menuItems.push(products.meat[meatPage * MEAT_PAGES + index]);
			} else {
				menuItems.push({});
			}
		}
		setMeatItems(menuItems);
		if (products.meat?.length > MEAT_PAGES) {
			setMeatPageSelector(true);
		}
	}, [meatPage, products]);

	// reset page after product change (patch, post, delete)
	useEffect(() => {
		setPastaPage(0);
		setMeatPage(0);
		if (products.meat?.length > MEAT_PAGES) {
			setMeatPageSelector(true);
		} else {
			setMeatPageSelector(false);
		}
		if (products.pasta?.length > PASTA_PAGES) {
			setPastaPageSelector(true);
		} else {
			setPastaPageSelector(false);
		}
	}, [products]);

	// Pasta Page Handling functions

	function nextPastaPage() {
		setPastaPage((a) => a + 1);
	}

	function prevPastaPage() {
		setPastaPage((a) => a - 1);
	}

	// Meat Page Handling functions

	function nextMeatPage() {
		setMeatPage((a) => a + 1);
	}

	function prevMeatPage() {
		setMeatPage((a) => a - 1);
	}

	return (
		<>
			<div className={classes.centerDiv}>
				<TitleDiv title={'Meat'} />
				<Item
					items={meatItems}
					orderNumber={0}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={meatItems}
					orderNumber={1}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={meatItems}
					orderNumber={2}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={meatItems}
					orderNumber={3}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={meatItems}
					orderNumber={4}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={meatItems}
					orderNumber={5}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<PageSelector
					pageSelectorRef={meatPageSelector}
					nextPageHandler={nextMeatPage}
					prevPageHandler={prevMeatPage}
					page={meatPage}
					categoryLength={products.meat?.length}
					viewPages={MEAT_PAGES}
				/>
				<ImageContainer border={true} image={'meat'} />
				<TitleDiv title={'Pasta'} />
				<Item
					items={pastaItems}
					orderNumber={0}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={pastaItems}
					orderNumber={1}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={pastaItems}
					orderNumber={2}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<Item
					items={pastaItems}
					orderNumber={3}
					token={token}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
				/>
				<PageSelector
					border={true}
					pageSelectorRef={pastaPageSelector}
					nextPageHandler={nextPastaPage}
					prevPageHandler={prevPastaPage}
					page={pastaPage}
					categoryLength={products.pasta?.length}
					viewPages={PASTA_PAGES}
				/>
				<ImageContainer image={'pasta'} />
			</div>
		</>
	);
}
