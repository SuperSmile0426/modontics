import React from 'react';
import withLayout from './components/layout/Layout';
import { RegisterPage } from './pages';

function App() {
	return <RegisterPage />;
}

export default withLayout(App);
