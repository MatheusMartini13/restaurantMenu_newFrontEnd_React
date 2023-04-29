import classes from './LeftColumn.module.css';
import { Item } from './Item';
import { ImageContainer } from './ImageContainer';
import { TitleDiv } from './TitleDiv';
import { PageSelector } from './pageSelector';
import { useEffect, useState } from 'react';

export function LeftColumn({
	products,
	token,
	mainCat,
	secCat,
	newGetProducts,
}) {
	// Hamburguers Variables
	const HAMBURGUER_PAGES = 5;
	const [hamburguerPage, setHamburguerPage] = useState(0);
	const [hamburguerPageSelector, setHamburguerPageSelector] = useState(false);
	const [hamburguerItems, setHamburguerItems] = useState({});

	// Entrances Variables
	const ENTRANCE_PAGES = 5;
	const [entrancePage, setEntrancePage] = useState(0);
	const [entrancePageSelector, setEntrancePageSelector] = useState(false);
	const [entranceItems, setEntranceItems] = useState({});

	// Hamburguer useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < HAMBURGUER_PAGES; index++) {
			if (
				products?.hamburguer?.[hamburguerPage * HAMBURGUER_PAGES + index]?.name
			) {
				menuItems.push(
					products?.hamburguer[hamburguerPage * HAMBURGUER_PAGES + index],
				);
			} else {
				menuItems.push({});
			}
		}
		setHamburguerItems(menuItems);
		if (products?.hamburguer?.length > HAMBURGUER_PAGES) {
			setHamburguerPageSelector(true);
		}
	}, [hamburguerPage, products]);

	// Entrance useEffect
	useEffect(() => {
		const menuItems = [];
		for (let index = 0; index < ENTRANCE_PAGES; index++) {
			if (products?.entrance?.[entrancePage * ENTRANCE_PAGES + index]?.name) {
				menuItems.push(
					products?.entrance[entrancePage * ENTRANCE_PAGES + index],
				);
			} else {
				menuItems.push({});
			}
		}
		setEntranceItems(menuItems);
		if (products?.entrance?.length > ENTRANCE_PAGES) {
			setEntrancePageSelector(true);
		}
	}, [entrancePage, products]);

	// reset page after product change (patch, post, delete)
	useEffect(() => {
		setEntrancePage(0);
		setHamburguerPage(0);
		if (products?.hamburguer?.length > HAMBURGUER_PAGES) {
			setHamburguerPageSelector(true);
		} else {
			setHamburguerPageSelector(false);
		}
		if (products?.entrance?.length > ENTRANCE_PAGES) {
			setEntrancePageSelector(true);
		} else {
			setEntrancePageSelector(false);
		}
	}, [products]);

	// Hamburguer Page Handling functions

	function nextHamburguerPage() {
		setHamburguerPage((a) => a + 1);
	}

	function prevHamburguerPage() {
		setHamburguerPage((a) => a - 1);
	}

	// Entrance Page Handling functions

	function nextEntrancePage() {
		setEntrancePage((a) => a + 1);
	}

	function prevEntrancePage() {
		setEntrancePage((a) => a - 1);
	}

	return (
		<div className={classes.sideDiv}>
			<ImageContainer image={'entrance'} />
			<TitleDiv title={'Entrance'} border={true} />
			<Item
				items={entranceItems}
				orderNumber={0}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={entranceItems}
				orderNumber={1}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={entranceItems}
				orderNumber={2}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={entranceItems}
				orderNumber={3}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={entranceItems}
				orderNumber={4}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<PageSelector
				pageSelectorRef={entrancePageSelector}
				nextPageHandler={nextEntrancePage}
				prevPageHandler={prevEntrancePage}
				page={entrancePage}
				categoryLength={products?.entrance?.length}
				viewPages={ENTRANCE_PAGES}
			/>
			<ImageContainer image={'hamburguer'} border={true} />
			<TitleDiv title={'hamburguer'} />
			<Item
				items={hamburguerItems}
				orderNumber={0}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={hamburguerItems}
				orderNumber={1}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={hamburguerItems}
				orderNumber={2}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={hamburguerItems}
				orderNumber={3}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<Item
				items={hamburguerItems}
				orderNumber={4}
				mainCat={mainCat}
				secCat={secCat}
				token={token}
				newGetProducts={newGetProducts}
			/>
			<PageSelector
				pageSelectorRef={hamburguerPageSelector}
				nextPageHandler={nextHamburguerPage}
				prevPageHandler={prevHamburguerPage}
				page={hamburguerPage}
				categoryLength={products?.hamburguer?.length}
				viewPages={HAMBURGUER_PAGES}
			/>
		</div>
	);
}
