import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assats/styles/tailwind.css';

import reportWebVitals from './reportWebVitals';
import { Navbar } from './Navbar';
import Routes from './Routes/router.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes />
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
