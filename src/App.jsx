import React from 'react';
import withLayout from './components/layout/Layout';
import { Dashboard, RegisterPage, Notfound } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<RegisterPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default withLayout(App);
