import { useState } from 'react';
import classes from './Login.module.css';
import { NewProductModal } from './NewProductModal';

export function Login({
	token,
	setToken,
	setMainCat,
	setSecCat,
	mainCat,
	secCat,
	newGetProducts,
}) {
	const [newLogin, setNewLogin] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [loginStatus, setLoginStatus] = useState(false);
	const [createNewProduct, setCreateNewProduct] = useState(false);

	function loginHandler() {
		setNewLogin(!newLogin);
	}

	function productModalHandler() {
		setCreateNewProduct(!createNewProduct);
	}

	async function fetchLogin() {
		setLoading(true);
		const fetchData = await fetch('https://matt-menu.onrender.com/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: username, password: password }),
		});

		const result = await fetchData.json();
		console.log(result);
		if (result?.token) {
			setToken('Bearer ' + result.token);
			loginHandler();
			setLoginStatus(true);

			// fetch categories
			const dataFetch = await fetch('https://matt-menu.onrender.com/category', {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + result.token,
					'Content-Type': 'application/json',
				},
			});

			const resultCat = await dataFetch.json();
			console.log(resultCat);
			resultCat.categories.forEach((cat) =>
				cat?.parent
					? setSecCat((a) => [...a, cat])
					: setMainCat((a) => [...a, cat]),
			);
		} else {
			alert('Error');
		}
		setLoading(false);
	}

	return (
		<>
			{!loginStatus && (
				<div className={classes.loginText}>
					<p onClick={loginHandler}>login</p>
				</div>
			)}

			{loginStatus && (
				<>
					<div className={classes.loginText}>
						<p
							onClick={() => {
								setToken(false);
								setLoginStatus(false);
							}}>
							logout
						</p>
					</div>
				</>
			)}

			{loginStatus && (
				<>
					<div className={classes.newText}>
						<p onClick={productModalHandler}>new product</p>
					</div>
				</>
			)}

			{newLogin && (
				<>
					<div className={classes.backgroundDiv} onClick={loginHandler}></div>
					<div className={classes.visibleArea}>
						{!loading && (
							<>
								<h1>Administration Área</h1>
								<div>
									<label htmlFor="user">Username:</label>{' '}
									<input
										id={'user'}
										onChange={(ev) => {
											setUsername(ev.target.value);
										}}
									/>
								</div>
								<div>
									<label htmlFor="password">Password:</label>{' '}
									<input
										type="password"
										id={'password'}
										onChange={(ev) => {
											setPassword(ev.target.value);
										}}
										onKeyDown={(ev) => (ev.key === 'Enter' ? fetchLogin() : '')}
									/>
								</div>
								<p onClick={fetchLogin}>Send</p>
							</>
						)}
						{loading && (
							<>
								<div>Loading...</div>
							</>
						)}
					</div>
				</>
			)}

			{createNewProduct && (
				<NewProductModal
				loading={loading}
					mainCat={mainCat}
					secCat={secCat}
					newGetProducts={newGetProducts}
					productModalHandler={productModalHandler}
					token={token}
					setLoading={setLoading}
				/>
			)}
		</>
	);
}
