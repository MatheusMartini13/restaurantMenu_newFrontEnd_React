import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Routes
import { RootLayout, loader as fetchAllLoader } from './routes/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
    element: <RootLayout />,
    loader: fetchAllLoader,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
