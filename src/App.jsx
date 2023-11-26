import React from 'react';
import withLayout from './components/layout/Layout';
import { Dashboard, RegisterPage } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<RegisterPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<RegisterPage />} />
		</Routes>
	);
}

export default withLayout(App);
